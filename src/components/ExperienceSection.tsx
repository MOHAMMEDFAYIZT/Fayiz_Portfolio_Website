import { useInView } from "@/hooks/useInView";
import { Briefcase, GraduationCap, ChevronRight } from "lucide-react";

const ExperienceSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-28">
      <div className="section-container" ref={ref}>
        <div
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-sm font-mono text-primary tracking-wider uppercase mb-2">
            Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Experience & Education<span className="text-primary">.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience */}
          <div
            className={`glass-card p-7 transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Briefcase size={18} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Experience
              </h3>
            </div>

            <div className="relative pl-6 border-l-2 border-primary/20">
              <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 bg-primary rounded-full" />

              <div className="bg-secondary/30 dark:bg-secondary/30 light:bg-slate-100 border border-border/50 dark:border-border/50 light:border-slate-300 p-5 rounded-xl">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-md">
                    Completed
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Jan – Feb 2024
                  </span>
                </div>
                <h4 className="font-semibold text-foreground mb-1">
                  Intern – Young Innovators Programme (YIP)
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Kerala Govt. Initiative (K-DISC)
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ChevronRight
                      size={14}
                      className="text-primary mt-0.5 shrink-0"
                    />
                    Conducted innovation outreach programs engaging students on
                    entrepreneurship and ideation
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight
                      size={14}
                      className="text-primary mt-0.5 shrink-0"
                    />
                    Led awareness sessions on government support, funding
                    pathways, and project development
                  </li>
                </ul>
              </div>

              <div className="absolute left-0 top-[220px] -translate-x-1/2 w-3 h-3 bg-primary rounded-full" />
              <div className="bg-secondary/30 dark:bg-secondary/30 light:bg-slate-100 border border-border/50 dark:border-border/50 light:border-slate-300 p-5 rounded-xl mt-6">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-0.5 bg-accent/10 text-accent rounded-md">
                    Ongoing
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Freelance
                  </span>
                </div>
                <h4 className="font-semibold text-foreground mb-1">
                  Freelance Web Developer (Self)
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Client websites and product-focused landing pages
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ChevronRight
                      size={14}
                      className="text-primary mt-0.5 shrink-0"
                    />
                    Built responsive business websites with modern UI and strong
                    mobile performance
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight
                      size={14}
                      className="text-primary mt-0.5 shrink-0"
                    />
                    Delivered end-to-end from design implementation to
                    deployment and maintenance
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div
            className={`glass-card p-7 transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap size={18} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Education
              </h3>
            </div>

            <div className="relative pl-6 border-l-2 border-primary/20 space-y-6">
              <div className="relative">
                <div className="absolute left-0 top-0 -translate-x-[calc(50%+24px)] w-3 h-3 bg-primary rounded-full" />
                <div className="bg-secondary/30 dark:bg-secondary/30 light:bg-slate-100 border border-border/50 dark:border-border/50 light:border-slate-300 p-5 rounded-xl">
                  <span className="text-xs px-2 py-0.5 bg-accent/10 text-accent rounded-md">
                    In Progress
                  </span>
                  <h4 className="font-semibold text-foreground mt-2">
                    B.Tech in Computer Science & Engineering
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Government Engineering College, Thrissur
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-0 top-0 -translate-x-[calc(50%+24px)] w-3 h-3 bg-muted-foreground/40 rounded-full" />
                <div className="bg-secondary/30 dark:bg-secondary/30 light:bg-slate-100 border border-border/50 dark:border-border/50 light:border-slate-300 p-5 rounded-xl">
                  <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-md">
                    Completed
                  </span>
                  <h4 className="font-semibold text-foreground mt-2">
                    Higher Secondary Education
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Computer Science – GHSS Karuvarakundu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
