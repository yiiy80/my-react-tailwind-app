import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
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
      className="fixed top-4 right-4 z-50 inline-flex items-center justify-center rounded text-sm/0.8 transform hover:scale-110 transition duration-200 motion-reduce:transition-none"
    >
      {theme === "light" ? (
        <Sun size={18} className="text-on-page" />
      ) : (
        <Moon size={18} className="text-on-page" />
      )}
    </button>
  );
};

export default ThemeToggle;
