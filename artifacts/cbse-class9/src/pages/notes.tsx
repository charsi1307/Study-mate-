import { useState, useMemo } from "react";
import { useListSubjects, getListSubjectsQueryKey, useListNotes, getListNotesQueryKey } from "@workspace/api-client-react";
import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BookOpen, Search, X, Calculator, Atom, Globe, BookA, Scroll, FileText, Lightbulb, Sigma, ChevronDown, ChevronUp } from "lucide-react";
import type { Subject, ListNotesParams } from "@workspace/api-client-react";

function getSubjectIcon(name: string, className?: string) {
  const lower = name.toLowerCase();
  if (lower.includes("math")) return <Calculator className={className} />;
  if (lower.includes("science") && !lower.includes("social")) return <Atom className={className} />;
  if (lower.includes("social")) return <Globe className={className} />;
  if (lower.includes("english")) return <BookA className={className} />;
  if (lower.includes("hindi")) return <Scroll className={className} />;
  return <BookOpen className={className} />;
}

function NotesCard({ note, subjectColor }: { note: { chapterId: string; subjectId: string; chapterNumber: number; chapterTitle: string; definitions: string[]; formulas: string[]; keyPoints: string[]; summary: string }; subjectColor: string }) {
  const [expanded, setExpanded] = useState(false);

  const hasDefinitions = note.definitions.length > 0;
  const hasFormulas = note.formulas.length > 0;

  return (
    <Card className="border-white/5 bg-card/50 hover:border-white/10 transition-all overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span
                className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold text-white shrink-0"
                style={{ backgroundColor: subjectColor }}
              >
                {note.chapterNumber}
              </span>
              <h3 className="text-lg font-semibold leading-tight">{note.chapterTitle}</h3>
            </div>
            {!expanded && (
              <p className="text-sm text-muted-foreground line-clamp-2">{note.summary}</p>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="shrink-0"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </Button>
        </div>
      </CardHeader>

      {expanded && (
        <CardContent className="pt-0 space-y-6">
          {hasDefinitions && (
            <div>
              <h4 className="text-sm font-semibold mb-3 flex items-center gap-2 text-foreground/90">
                <BookOpen className="w-4 h-4" style={{ color: subjectColor }} />
                Important Definitions
              </h4>
              <ul className="space-y-2.5">
                {note.definitions.map((def, i) => (
                  <li key={i} className="flex gap-3 items-start text-sm text-muted-foreground">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: subjectColor }}
                    />
                    <span className="leading-relaxed">{def}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {hasFormulas && (
            <div>
              <h4 className="text-sm font-semibold mb-3 flex items-center gap-2 text-foreground/90">
                <Sigma className="w-4 h-4" style={{ color: subjectColor }} />
                Formulas
              </h4>
              <div className="space-y-2">
                {note.formulas.map((formula, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg border border-white/5 bg-white/[0.02] text-sm font-mono text-foreground/80"
                  >
                    {formula}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h4 className="text-sm font-semibold mb-3 flex items-center gap-2 text-foreground/90">
              <Lightbulb className="w-4 h-4" style={{ color: subjectColor }} />
              Key Points
            </h4>
            <ul className="space-y-2.5">
              {note.keyPoints.map((point, i) => (
                <li key={i} className="flex gap-3 items-start text-sm text-muted-foreground">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                    style={{ backgroundColor: subjectColor }}
                  />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2 flex items-center gap-2 text-foreground/90">
              <FileText className="w-4 h-4" style={{ color: subjectColor }} />
              Summary
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{note.summary}</p>
          </div>
        </CardContent>
      )}
    </Card>
  );
}

export default function NotesPage() {
  const [activeSubject, setActiveSubject] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const { data: subjects, isLoading: subjectsLoading } = useListSubjects({
    query: { queryKey: getListSubjectsQueryKey() },
  });

  const notesParams: ListNotesParams | undefined = activeSubject === "all" ? undefined : { subjectId: activeSubject };

  const { data: notes, isLoading: notesLoading } = useListNotes(
    notesParams,
    {
      query: {
        queryKey: getListNotesQueryKey(notesParams),
      },
    }
  );

  const filteredNotes = useMemo(() => {
    if (!notes) return [];
    if (!searchQuery.trim()) return notes;
    const q = searchQuery.toLowerCase();
    return notes.filter((note) => {
      const titleMatch = note.chapterTitle.toLowerCase().includes(q);
      const summaryMatch = note.summary.toLowerCase().includes(q);
      const keyPointMatch = note.keyPoints.some((p) => p.toLowerCase().includes(q));
      const defMatch = note.definitions.some((d) => d.toLowerCase().includes(q));
      return titleMatch || summaryMatch || keyPointMatch || defMatch;
    });
  }, [notes, searchQuery]);

  const subjectColorMap = useMemo(() => {
    const map: Record<string, string> = {};
    subjects?.forEach((s: Subject) => { map[s.id] = s.color; });
    return map;
  }, [subjects]);

  const isLoading = subjectsLoading || notesLoading;

  return (
    <Layout
      breadcrumbs={[
        { label: "Notes" },
      ]}
    >
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header */}
        <div className="flex flex-col gap-2 mb-8 mt-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Chapter Notes
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Browse definitions, formulas, key points, and summaries for every CBSE Class 9 chapter.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search chapters, definitions, key points..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-10 bg-card/50 border-white/10"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
              onClick={() => setSearchQuery("")}
            >
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>

        {/* Subject Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
          <Button
            variant={activeSubject === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveSubject("all")}
            className={activeSubject === "all" ? "bg-primary text-primary-foreground" : "border-white/10"}
          >
            All Subjects
          </Button>
          {subjects?.map((subject: Subject) => (
            <Button
              key={subject.id}
              variant={activeSubject === subject.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveSubject(subject.id)}
              className={activeSubject === subject.id ? "text-primary-foreground" : "border-white/10"}
              style={activeSubject === subject.id ? { backgroundColor: subject.color, borderColor: subject.color } : {}}
            >
              {getSubjectIcon(subject.name, "w-4 h-4 mr-1.5")}
              {subject.name}
            </Button>
          ))}
        </div>

        {/* Results count */}
        {!isLoading && (
          <p className="text-sm text-muted-foreground mb-4">
            Showing {filteredNotes.length} chapter{filteredNotes.length !== 1 ? "s" : ""}
            {searchQuery ? ` for "${searchQuery}"` : ""}
          </p>
        )}

        {/* Notes Grid */}
        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="border-white/5 bg-card/50">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-7 w-7 rounded-md" />
                    <Skeleton className="h-6 w-1/2" />
                  </div>
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : filteredNotes.length === 0 ? (
          <div className="text-center py-16">
            <Search className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No chapters found</h3>
            <p className="text-muted-foreground">
              {searchQuery
                ? `No results for "${searchQuery}". Try a different search term.`
                : "No notes available for this subject yet."}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredNotes.map((note) => (
              <NotesCard
                key={note.chapterId}
                note={note}
                subjectColor={subjectColorMap[note.subjectId] || "#6366f1"}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
