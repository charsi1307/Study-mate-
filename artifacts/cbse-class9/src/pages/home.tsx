import { useListSubjects, getListSubjectsQueryKey } from "@workspace/api-client-react";
import { Layout } from "@/components/layout";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { BookA, Atom, Globe, Calculator, ArrowRight, Scroll } from "lucide-react";
import type { Subject } from "@workspace/api-client-react";

// Icon mapping helper
const SubjectIcon = ({ name, className }: { name: string; className?: string }) => {
  const lowerName = name.toLowerCase();
  if (lowerName.includes("math")) return <Calculator className={className} />;
  if (lowerName.includes("science") && !lowerName.includes("social")) return <Atom className={className} />;
  if (lowerName.includes("social")) return <Globe className={className} />;
  if (lowerName.includes("english")) return <BookA className={className} />;
  if (lowerName.includes("hindi")) return <Scroll className={className} />;
  return <BookA className={className} />;
};

export default function Home() {
  const { data: subjects, isLoading, error } = useListSubjects({
    query: {
      queryKey: getListSubjectsQueryKey(),
    }
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="flex flex-col gap-2 mb-10 text-center sm:text-left mt-8">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
            Class 9 Dashboard
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Select a subject to begin your study session. All materials are aligned with the latest CBSE curriculum.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="border-white/5 bg-card/50">
                <CardContent className="p-6 flex flex-col gap-4">
                  <Skeleton className="h-12 w-12 rounded-xl" />
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-1/2" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-4/5" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : error ? (
          <div className="p-8 text-center bg-destructive/10 text-destructive rounded-xl border border-destructive/20">
            Failed to load subjects. Please try again later.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {subjects?.map((subject: Subject) => (
              <Link key={subject.id} href={`/subjects/${subject.id}`}>
                <Card className="group relative overflow-hidden border-white/5 bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-300 cursor-pointer hover-elevate">
                  {/* Subject specific subtle glow */}
                  <div 
                    className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity"
                    style={{ backgroundColor: subject.color }}
                  />
                  
                  <CardContent className="p-6 flex flex-col h-full z-10 relative">
                    <div className="mb-4 flex items-center justify-between">
                      <div 
                        className="p-3 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${subject.color}20`, color: subject.color }}
                      >
                        <SubjectIcon name={subject.name} className="w-6 h-6" />
                      </div>
                      <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-muted-foreground flex items-center gap-1">
                        <BookA className="w-3 h-3" />
                        {subject.chapterCount} Chapters
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {subject.name}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-6 flex-grow">
                      {subject.description}
                    </p>

                    <div className="flex items-center text-sm font-medium text-primary mt-auto">
                      View Syllabus
                      <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
