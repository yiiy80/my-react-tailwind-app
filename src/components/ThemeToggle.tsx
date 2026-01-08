import React, { useEffect, useState } from "react";
import { initTheme, toggleTheme, Theme } from "../utils/theme";

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    // initial value will be set on mount
    return "dark";
  });

  useEffect(() => {
    const t = initTheme();
    setTheme(t);
  }, []);

  const handleToggle = () => {
    const next = toggleTheme(theme);
    setTheme(next);
  };

  return (
    <button
      aria-label="Toggle theme"
      title="Toggle theme"
      onClick={handleToggle}
      className="fixed top-4 right-4 z-50 inline-flex items-center justify-center p-2 rounded bg-input-bg border border-input-border text-sm shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
