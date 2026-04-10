import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";

import imgEcommerce from "@/assets/project-ecommerce.jpg";
import imgOzone from "@/assets/project-ozone.jpg";
import imgChaikadai from "@/assets/project-chaikadai.jpg";
import imgFlames from "@/assets/project-flames.jpg";

interface Project {
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  image_url: string;
  tech_stack: string[];
  live_url: string;
  github_url?: string;
}

const fallbackProjects: Project[] = [
  {
    title: "Full-Stack E-commerce Platform",
    description:
      "Built a full e-commerce platform with secure payments and admin dashboard for seamless online sales.",
    problem:
      "Small businesses lacked a simple way to launch secure online stores.",
    solution:
      "Built a full-stack store with auth, product management, checkout, and Razorpay integration.",
    impact:
      "Enabled faster online launch and smoother purchase flow for customers.",
    image_url: imgEcommerce,
    tech_stack: ["React", "Supabase", "Razorpay", "Vercel"],
    live_url: "https://belle-mirage-store.vercel.app/",
    github_url: "https://github.com/mohammedfayiztfreelance/belle-mirage-store",
  },
  {
    title: "Ozone Build World",
    description:
      "Designed a high-performance corporate site to improve trust and lead generation.",
    problem:
      "The client needed a professional web presence to showcase services clearly.",
    solution:
      "Built a responsive, SEO-optimized site with clear service architecture and strong UX.",
    impact:
      "Improved discoverability and strengthened brand credibility for new visitors.",
    image_url: imgOzone,
    tech_stack: ["HTML", "CSS", "JavaScript", "SEO"],
    live_url: "http://ozonebuildworld.com",
    github_url: "https://github.com/MOHAMMEDFAYIZT/ozonebuildworld.ltd",
  },
  {
    title: "Chaikadai Croydon",
    description:
      "Created a conversion-focused restaurant website with warm branding and mobile-first UX.",
    problem:
      "The restaurant needed a modern website that communicates menu and brand quickly.",
    solution:
      "Built a responsive React website with clear content hierarchy and localized branding.",
    impact:
      "Made customer discovery and decision-making faster across desktop and mobile.",
    image_url: imgChaikadai,
    tech_stack: ["React", "CSS", "Responsive Design"],
    live_url: "http://chaikadaicroydon.uk",
    github_url: "https://github.com/MOHAMMEDFAYIZT/chaikadai-croydon",
  },
  {
    title: "FLAMES Web App",
    description:
      "Built an interactive FLAMES app with delightful UX and quick user feedback loops.",
    problem:
      "Users wanted a playful, shareable experience instead of static relationship calculators.",
    solution:
      "Developed an animated React web app with smooth flow, dark-theme UI, and custom deployment.",
    impact:
      "Increased engagement through shareable and mobile-friendly interactions.",
    image_url: imgFlames,
    tech_stack: ["React", "CSS", "Animations"],
    live_url: "https://www.flamesfinder.site/",
    github_url: "https://github.com/mohammedfayiztfreelance/flamesfinder",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`group transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="glass-card overflow-hidden hover-lift">
        <div className="relative overflow-hidden aspect-video">
          <img
            src={project.image_url}
            alt={project.title}
            loading="lazy"
            width={800}
            height={512}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        </div>

        <div className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-2">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          <div className="space-y-2 mb-5 text-sm">
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">Problem:</span>{" "}
              {project.problem}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">Solution:</span>{" "}
              {project.solution}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">Impact:</span>{" "}
              {project.impact}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech_stack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <Button variant="hero" size="sm" asChild>
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            </Button>
            {project.github_url && (
              <Button variant="hero-outline" size="sm" asChild>
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={14} /> Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = ({ projects }: { projects?: Project[] }) => {
  const displayProjects =
    projects && projects.length > 0 ? projects : fallbackProjects;
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="py-28 relative">
      <div className="section-container">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-sm font-mono text-primary tracking-wider uppercase mb-2">
            Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Featured Projects<span className="text-primary">.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {displayProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
