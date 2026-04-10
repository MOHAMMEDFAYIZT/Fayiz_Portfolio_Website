import { useInView } from "@/hooks/useInView";
import { Code2, Zap, Rocket, Shield } from "lucide-react";

const stats = [
  { icon: Code2, label: "Specialization", value: "Full-Stack Dev" },
  { icon: Zap, label: "Preferred Stack", value: "React + Supabase" },
  { icon: Shield, label: "Focus", value: "Ship Fast" },
  { icon: Rocket, label: "Status", value: "Open to Work" },
];

const AboutSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-28 relative">
      <div className="section-container" ref={ref}>
        <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-sm font-mono text-primary tracking-wider uppercase mb-2">About</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Who I Am<span className="text-primary">.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className={`lg:col-span-3 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="glass-card p-8 space-y-5">
              <p className="text-muted-foreground leading-relaxed">
                I'm a software developer who loves turning ideas into real, working products. My journey started with curiosity about how the web works — and quickly turned into a passion for building things that people actually use.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From crafting a full-stack e-commerce platform with payments and admin dashboards, to delivering polished business websites for clients across the UK, I've learned that the best code is the code that ships and solves real problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm most at home working across the stack — React on the front, Supabase or Firebase on the back, deployed fast on Vercel. I care about clean UI, solid architecture, and building with speed without cutting corners.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-3">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`glass-card p-5 flex flex-col items-center justify-center text-center hover-lift transition-all duration-700 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${200 + i * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <stat.icon size={18} className="text-primary" />
                </div>
                <p className="text-[11px] text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-sm font-semibold text-foreground">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
