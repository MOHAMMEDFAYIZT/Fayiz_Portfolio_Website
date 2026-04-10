const Footer = () => (
  <footer className="py-8 border-t border-border/50">
    <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Mohammed Fayiz T
      </p>
      <p className="text-xs text-muted-foreground">
        Built with React & Tailwind CSS
      </p>
    </div>
  </footer>
);

export default Footer;
