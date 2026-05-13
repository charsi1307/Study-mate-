import { useListChapters, getListChaptersQueryKey, useListSubjects, getListSubjectsQueryKey } from "@workspace/api-client-react";
import { Layout } from "@/components/layout";
import { Link, useParams } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Clock, PlayCircle } from "lucide-react";
import type { Chapter } from "@workspace/api-client-react/src/generated/api.schemas";

export default function SubjectDetail() {
  const { subjectId } = useParams();

  const { data: subjects } = useListSubjects({
    query: {
      queryKey: getListSubjectsQueryKey(),
    }
  });

  const subject = subjects?.find(s => s.id === subjectId);

  const { data: chapters, isLoading, error } = useListChapters(subjectId || "", {
    query: {
      enabled: !!subjectId,
      queryKey: getListChaptersQueryKey(subjectId || ""),
    }
  });

  return (
    <Layout breadcrumbs={[{ label: subject?.name || "Subject" }]}>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
            {subject ? subject.name : <Skeleton className="h-10 w-48" />}
          </h1>
          {subject ? (
            <p className="text-muted-foreground text-lg max-w-2xl">
              {subject.description}
            </p>
          ) : (
            <Skeleton className="h-6 w-96" />
          )}
        </div>

        {isLoading ? (
          <div className="grid gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Card key={i} className="border-white/5 bg-card/50">
                <CardContent className="p-4 sm:p-6 flex items-center gap-4 sm:gap-6">
                  <Skeleton className="h-12 w-12 rounded-xl flex-shrink-0" />
                  <div className="flex-grow space-y-2">
                    <Skeleton className="h-6 w-1/3" />
                    <Skeleton className="h-4 w-2/3 hidden sm:block" />
                  </div>
                  <Skeleton className="h-10 w-24 flex-shrink-0" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : error ? (
          <div className="p-8 text-center bg-destructive/10 text-destructive rounded-xl border border-destructive/20">
            Failed to load chapters. Please try again later.
          </div>
        ) : chapters?.length === 0 ? (
          <div className="p-12 text-center bg-card/50 border border-white/5 rounded-xl">
            <h3 className="text-lg font-medium text-foreground mb-2">No chapters available yet</h3>
            <p className="text-muted-foreground">Check back later for new content.</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {chapters?.map((chapter: Chapter) => (
              <Link key={chapter.id} href={`/chapters/${chapter.id}`}>
                <Card className="group border-white/5 bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-300 cursor-pointer">
                  <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                      {chapter.number}
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                        {chapter.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 sm:line-clamp-1 mb-3 sm:mb-0">
                        {chapter.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0 mt-2 sm:mt-0 pt-4 sm:pt-0 border-t sm:border-t-0 border-white/5">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1.5 opacity-70" />
                        {chapter.duration}
                      </div>
                      <div className="flex items-center text-sm font-medium text-primary">
                        <PlayCircle className="w-5 h-5 mr-1.5" />
                        Start
                      </div>
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
