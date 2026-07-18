import { ReactNode } from "react";
import { Link } from "wouter";
import { ChevronRight, Home, BookOpen, GraduationCap, FileText } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
  breadcrumbs?: {
    label: string;
    href?: string;
  }[];
}

export function Layout({ children, breadcrumbs = [] }: LayoutProps) {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl hover:opacity-80 transition-opacity">
            <GraduationCap className="h-6 w-6" />
            <span>Charsi</span>
          </Link>

          <div className="hidden sm:flex items-center gap-1 ml-auto">
            <Link href="/notes" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5">
              <FileText className="h-4 w-4" />
              Notes
            </Link>
          </div>

          {breadcrumbs.length > 0 && (
            <>
              <div className="h-4 w-px bg-border mx-2" />
              <nav className="flex items-center space-x-1 text-sm text-muted-foreground overflow-x-auto whitespace-nowrap scrollbar-hide">
                <Link href="/" className="hover:text-foreground transition-colors flex items-center">
                  <Home className="h-3.5 w-3.5" />
                </Link>
                {breadcrumbs.map((crumb, i) => (
                  <div key={i} className="flex items-center space-x-1">
                    <ChevronRight className="h-3.5 w-3.5" />
                    {crumb.href ? (
                      <Link href={crumb.href} className="hover:text-foreground transition-colors max-w-[120px] sm:max-w-none truncate">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-foreground font-medium max-w-[150px] sm:max-w-none truncate">
                        {crumb.label}
                      </span>
                    )}
                  </div>
                ))}
              </nav>
            </>
          )}
        </div>
      </header>

      <main className="flex-1 flex flex-col relative">
        {/* Glow effect */}
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[120px] opacity-50"></div>
          <div className="absolute top-1/3 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-[120px] opacity-30"></div>
        </div>

        {children}
      </main>
    </div>
  );
}
