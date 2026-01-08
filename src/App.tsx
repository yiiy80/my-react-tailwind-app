import React, { useEffect } from "react";
import { LoginForm } from "./components/LoginForm";
import ThemeToggle from "./components/ThemeToggle";
import { initTheme } from "./utils/theme";

/**
 * App Component
 *
 * 主应用组件
 */
const App: React.FC = () => {
  const handleLogin = (email: string, password: string): void => {
    console.log("Login attempt:", { email, password });
  };

  useEffect(() => {
    // Ensure theme is initialized when app mounts
    initTheme();
  }, []);

  return (
    <>
      <ThemeToggle />
      <LoginForm onLogin={handleLogin} />
    </>
  );
};

export default App;
