import { ArrowDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import profileImg from "@/assets/profile-avatar.jpg";

const titles = ["Software Developer", "Full-Stack Builder", "Problem Solver"];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    if (isTyping) {
      if (displayText.length < currentTitle.length) {
        const timer = setTimeout(
          () => setDisplayText(currentTitle.slice(0, displayText.length + 1)),
          80,
        );
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timer);
      }
    } else {
      if (displayText.length > 0) {
        const timer = setTimeout(
          () => setDisplayText(displayText.slice(0, -1)),
          40,
        );
        return () => clearTimeout(timer);
      } else {
        setTitleIndex((prev) => (prev + 1) % titles.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, titleIndex]);

  return (
    <section className="min-h-screen pt-24 sm:pt-28 flex items-center justify-center relative overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Avatar */}
          <div className="animate-slide-up relative">
            <div className="relative w-44 h-44 sm:w-52 sm:h-52">
              <div
                className="absolute -inset-[3px] rounded-full z-0 opacity-60"
                style={{
                  background:
                    "conic-gradient(from 0deg, hsl(217 91% 60%), hsl(250 80% 65%), hsl(185 80% 55%), hsl(217 91% 60%))",
                  animation: "rotate-border 4s linear infinite",
                }}
              />
              <div className="absolute inset-0 rounded-full bg-background dark:bg-background light:bg-slate-200 z-[1]" />
              <img
                src={profileImg}
                alt="Mohammed Fayiz T – Software Developer"
                className="relative z-[2] w-full h-full rounded-full object-cover border-2 dark:border-background light:border-slate-400"
              />
              <div className="absolute bottom-2 right-2 z-[3] flex items-center gap-1.5 bg-background/90 dark:bg-background/90 light:bg-slate-200 backdrop-blur-sm border border-border dark:border-border light:border-slate-300 px-2 py-1 rounded-full">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-mono text-muted-foreground">
                  Available
                </span>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="text-center lg:text-left flex-1">
            {/* Typing title */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/50 dark:bg-secondary/50 light:bg-slate-200 border border-border/50 dark:border-border/50 light:border-slate-300 mb-6 animate-slide-up">
              <span className="text-sm font-mono text-primary tracking-wide">
                {displayText}
                <span className="animate-pulse text-primary">|</span>
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-foreground animate-slide-up animate-slide-up-delay-1 leading-[0.95]">
              Mohammed
              <br />
              <span className="gradient-text">Fayiz T</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-slide-up animate-slide-up-delay-2 leading-relaxed">
              I build production-ready full-stack web applications that solve
              real-world problems — fast and scalable.
            </p>

            <p className="mt-3 text-sm font-mono text-primary/90 animate-slide-up animate-slide-up-delay-2">
              Open to freelance projects and full-time opportunities
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-8 animate-slide-up animate-slide-up-delay-3">
              {[
                { label: "Projects", value: "4+" },
                { label: "Tech Stack", value: "15+" },
                { label: "Clients", value: "3+" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-slide-up animate-slide-up-delay-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">
                  <ChevronRight size={16} /> View Projects
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  View Resume ↗
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="block text-center mt-20 text-muted-foreground hover:text-primary transition-colors animate-slide-up animate-slide-up-delay-5"
        ></a>
      </div>
    </section>
  );
};

export default HeroSection;
