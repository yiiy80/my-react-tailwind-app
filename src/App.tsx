import Login from "./features/auth/components/Login";

function App() {
  const handleLogin = (username: string, password: string) => {
    console.log("Login attempt:", { username, password });
    // 这里可以添加实际的登录逻辑
  };

  return <Login onLogin={handleLogin} />;
}

export default App;
