import React from "react";
import { LoginForm } from "./components/LoginForm";

/**
 * App Component
 *
 * 主应用组件
 */
const App: React.FC = () => {
  const handleLogin = (email: string, password: string): void => {
    console.log("Login attempt:", { email, password });
  };

  return <LoginForm onLogin={handleLogin} />;
};

export default App;
