import { useEffect, useState } from "react";

type ThemeMode = "dark" | "light";

const STORAGE_KEY = "theme-mode";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<ThemeMode>("dark");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const initialTheme: ThemeMode = stored === "light" ? "light" : "dark";
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(initialTheme);
    setTheme(initialTheme);
  }, []);

  const setMode = (mode: ThemeMode) => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(mode);
    localStorage.setItem(STORAGE_KEY, mode);
    setTheme(mode);
  };

  return (
    <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 p-1">
      <button
        type="button"
        onClick={() => setMode("dark")}
        className={`rounded-full px-2.5 py-1 text-xs transition-colors ${
          theme === "dark"
            ? "bg-white text-[#070B68]"
            : "text-white/90 hover:text-white"
        }`}
        aria-pressed={theme === "dark"}
      >
        🌙 Dark
      </button>
      <button
        type="button"
        onClick={() => setMode("light")}
        className={`rounded-full px-2.5 py-1 text-xs transition-colors ${
          theme === "light"
            ? "bg-white text-[#070B68]"
            : "text-white/90 hover:text-white"
        }`}
        aria-pressed={theme === "light"}
      >
        ☀️ Light
      </button>
    </div>
  );
};

export default ThemeToggle;
