import { useState } from "react";
import { useParams } from "wouter";
import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Sparkles, CheckCircle2, XCircle, BrainCircuit } from "lucide-react";
import { 
  useGetChapter, 
  getGetChapterQueryKey,
  useGetChapterSummary,
  getGetChapterSummaryQueryKey,
  useGetChapterMcqs,
  getGetChapterMcqsQueryKey
} from "@workspace/api-client-react";

function VideoSection({ videoId }: { videoId: string }) {
  return (
    <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black border border-white/10 shadow-xl">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
        title="Chapter Video"
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

function SummarySection({ chapterId }: { chapterId: string }) {
  const { data: summary, isLoading, error } = useGetChapterSummary(chapterId, {
    query: {
      enabled: !!chapterId,
      queryKey: getGetChapterSummaryQueryKey(chapterId),
    }
  });

  if (isLoading) {
    return (
      <Card className="border-white/5 bg-card/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <Sparkles className="w-5 h-5" /> AI Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/5" />
          <div className="pt-4 space-y-3">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error || !summary) return null;

  return (
    <Card className="border-white/5 bg-primary/5 border-primary/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <Sparkles className="w-5 h-5" /> AI Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 relative z-10">
        <p className="text-foreground/90 leading-relaxed">
          {summary.summary}
        </p>
        <div>
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <BrainCircuit className="w-4 h-4 text-primary" /> Key Takeaways
          </h4>
          <ul className="space-y-3">
            {summary.keyPoints.map((point, i) => (
              <li key={i} className="flex gap-3 text-muted-foreground items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 shadow-[0_0_8px_var(--primary)]" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

function McqSection({ chapterId }: { chapterId: string }) {
  const { data: mcqs, isLoading } = useGetChapterMcqs(chapterId, {
    query: {
      enabled: !!chapterId,
      queryKey: getGetChapterMcqsQueryKey(chapterId),
    }
  });

  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const handleSelect = (questionId: string, optionIndex: number) => {
    if (revealed[questionId]) return;
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleCheck = (questionId: string) => {
    if (selectedAnswers[questionId] !== undefined) {
      setRevealed(prev => ({ ...prev, [questionId]: true }));
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold">Practice Questions</h3>
        {[1, 2].map(i => (
          <Card key={i} className="border-white/5 bg-card/50">
            <CardContent className="p-6 space-y-4">
              <Skeleton className="h-6 w-3/4" />
              <div className="grid gap-3">
                {[1, 2, 3, 4].map(j => <Skeleton key={j} className="h-12 w-full" />)}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (!mcqs || mcqs.length === 0) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-xl font-bold">Practice Questions</h3>
        <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
          {mcqs.length} MCQs
        </span>
      </div>
      
      {mcqs.map((mcq, index) => {
        const isRevealed = revealed[mcq.id];
        const selectedIndex = selectedAnswers[mcq.id];
        
        return (
          <Card key={mcq.id} className="border-white/5 bg-card overflow-hidden">
            <div className="h-1 w-full bg-muted">
              <div className="h-full bg-primary/50" style={{ width: `${((index + 1) / mcqs.length) * 100}%` }} />
            </div>
            <CardContent className="p-6">
              <p className="text-lg font-medium mb-6">
                <span className="text-muted-foreground mr-2">{index + 1}.</span>
                {mcq.question}
              </p>

              <div className="grid gap-3 mb-6">
                {mcq.options.map((option, optIdx) => {
                  const isSelected = selectedIndex === optIdx;
                  const isCorrect = mcq.correctIndex === optIdx;
                  
                  let optionClass = "border-white/10 hover:border-primary/50 hover:bg-primary/5 cursor-pointer";
                  let icon = null;

                  if (isRevealed) {
                    optionClass = "cursor-default border-white/5 opacity-50";
                    if (isCorrect) {
                      optionClass = "border-green-500 bg-green-500/10 opacity-100 text-green-500 font-medium";
                      icon = <CheckCircle2 className="w-5 h-5 text-green-500" />;
                    } else if (isSelected && !isCorrect) {
                      optionClass = "border-destructive bg-destructive/10 opacity-100 text-destructive font-medium";
                      icon = <XCircle className="w-5 h-5 text-destructive" />;
                    }
                  } else if (isSelected) {
                    optionClass = "border-primary bg-primary/10 text-primary font-medium shadow-[0_0_15px_var(--primary)_inset] opacity-100";
                  }

                  return (
                    <div 
                      key={optIdx}
                      onClick={() => handleSelect(mcq.id, optIdx)}
                      className={`p-4 rounded-xl border transition-all flex items-center justify-between ${optionClass}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-md flex items-center justify-center text-sm font-semibold border ${isRevealed && isCorrect ? 'border-green-500 text-green-500 bg-green-500/10' : isRevealed && isSelected ? 'border-destructive text-destructive bg-destructive/10' : isSelected ? 'border-primary text-primary bg-primary/20' : 'border-white/20 text-muted-foreground'}`}>
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span>{option}</span>
                      </div>
                      {icon}
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                {!isRevealed ? (
                  <Button 
                    onClick={() => handleCheck(mcq.id)}
                    disabled={selectedIndex === undefined}
                    className="w-full sm:w-auto font-semibold"
                  >
                    Check Answer
                  </Button>
                ) : (
                  <div className={`p-4 rounded-xl flex-1 text-sm ${selectedIndex === mcq.correctIndex ? 'bg-green-500/10 text-green-200 border border-green-500/20' : 'bg-destructive/10 text-red-200 border border-destructive/20'}`}>
                    <span className="font-bold block mb-1">Explanation:</span>
                    {mcq.explanation}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default function ChapterDetail() {
  const { chapterId } = useParams();

  const { data: chapter, isLoading, error } = useGetChapter(chapterId || "", {
    query: {
      enabled: !!chapterId,
      queryKey: getGetChapterQueryKey(chapterId || ""),
    }
  });

  return (
    <Layout 
      breadcrumbs={[
        ...(chapter ? [{ label: chapter.subjectName, href: `/subjects/${chapter.subjectId}` }] : []),
        { label: chapter ? `Chapter ${chapter.number}` : "Chapter" }
      ]}
    >
      <div className="container mx-auto px-4 py-8 max-w-4xl space-y-10">
        
        {/* Header */}
        <div>
          {isLoading ? (
            <div className="space-y-3">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-5 w-1/2" />
            </div>
          ) : chapter ? (
            <div>
              <div className="text-primary font-semibold tracking-wide text-sm uppercase mb-2">
                Chapter {chapter.number}
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
                {chapter.title}
              </h1>
              <p className="text-muted-foreground text-lg">
                {chapter.description}
              </p>
            </div>
          ) : null}
        </div>

        {/* Content */}
        {isLoading ? (
          <Skeleton className="aspect-video w-full rounded-2xl" />
        ) : error ? (
           <div className="p-8 text-center bg-destructive/10 text-destructive rounded-xl border border-destructive/20">
            Failed to load chapter content. Please try again later.
          </div>
        ) : chapter ? (
          <>
            <VideoSection videoId={chapter.youtubeVideoId} />
            <SummarySection chapterId={chapter.id} />
            <div className="h-px bg-border/50 w-full" />
            <McqSection chapterId={chapter.id} />
          </>
        ) : null}
      </div>
    </Layout>
  );
}
