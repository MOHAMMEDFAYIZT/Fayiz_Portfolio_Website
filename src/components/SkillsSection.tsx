import { useInView } from "@/hooks/useInView";
import { Code2, Server, Swords, Wrench, Globe } from "lucide-react";
import type { ComponentType } from "react";

type SkillGroup = {
  label: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    label: "Core",
    icon: Globe,
    skills: ["Data Structures & Algorithms", "Problem Solving", "OOP"],
  },
  {
    label: "Frontend",
    icon: Code2,
    skills: ["React", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    label: "Backend",
    icon: Server,
    skills: ["Supabase", "Firebase", "MySQL", "PHP"],
  },
  {
    label: "Languages",
    icon: Swords,
    skills: ["JavaScript", "Python", "C++", "Java"],
  },
  {
    label: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Vercel"],
  },
  {
    label: "Concepts",
    icon: Globe,
    skills: ["REST APIs", "Authentication", "Database Design"],
  },
];

const SkillsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-28">
      <div className="section-container" ref={ref}>
        <div
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-sm font-mono text-primary tracking-wider uppercase mb-2">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Tech Stack<span className="text-primary">.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <div
              key={group.label}
              className={`glass-card p-6 hover-lift transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${100 + i * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-primary/10">
                  <group.icon size={16} className="text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground tracking-wide uppercase">
                  {group.label}
                </h3>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {group.skills.join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
