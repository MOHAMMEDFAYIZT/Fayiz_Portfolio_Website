import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      alert("Email service is not configured yet.");
      return;
    }

    try {
      setIsSending(true);

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        { publicKey },
      );

      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-28">
      <div className="section-container" ref={ref}>
        <div
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-sm font-mono text-primary tracking-wider uppercase mb-2">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Get In Touch<span className="text-primary">.</span>
          </h2>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Info */}
          <div className="glass-card p-8">
            <p className="text-foreground font-medium mb-3">
              Got an idea? Let's build something powerful together.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Have a project idea or want to collaborate? I'd love to hear from
              you. Drop a message and I'll get back to you as soon as possible.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: "mohammedfayiz321@gmail.com",
                  href: "mailto:mohammedfayiz321@gmail.com",
                },
                {
                  icon: Phone,
                  label: "+91 8590783956",
                  href: "tel:+918590783956",
                },
                {
                  icon: Github,
                  label: "github.com/MOHAMMEDFAYIZT",
                  href: "https://github.com/MOHAMMEDFAYIZT",
                },
                {
                  icon: Linkedin,
                  label: "linkedin.com/in/mohammedfayizt",
                  href: "https://linkedin.com/in/mohammedfayizt",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <item.icon size={16} className="text-primary" />
                  </div>
                  <span className="text-sm">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-4">
            {["name", "email"].map((field) => (
              <input
                key={field}
                name={field}
                type={field === "email" ? "email" : "text"}
                placeholder={`Your ${field}`}
                required
                value={form[field as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                className="w-full bg-secondary/40 dark:bg-secondary/40 light:bg-slate-100 border border-border/50 dark:border-border/50 light:border-slate-300 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
              />
            ))}
            <textarea
              name="message"
              placeholder="Your message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-secondary/40 dark:bg-secondary/40 light:bg-slate-100 border border-border/50 dark:border-border/50 light:border-slate-300 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
            />
            <Button variant="hero" className="w-full" disabled={isSending}>
              <Send size={16} /> {isSending ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
