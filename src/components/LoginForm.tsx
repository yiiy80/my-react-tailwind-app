import React, { useState, useCallback } from "react";

/**
 * LoginForm Component
 *
 * 登录页面组件 - 符合设计规范
 *
 * 设计规范：
 * - 页面背景：纯黑色 #000000
 * - 主要强调色：Teal 400 #00BFA5
 * - 输入框：白色背景 #FFFFFF，边框 #E0E0E0
 * - 输入文字：深灰色 #212121
 * - 占位符：浅灰色 #9E9E9E
 * - 复选框边框：浅灰色 #BDBDBD
 */
interface LoginFormProps {
  onLogin?: (email: string, password: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      onLogin?.(email, password);
    },
    [email, password, onLogin]
  );

  return (
    <div className="min-h-screen bg-page-bg flex items-center justify-center">
      {/* 表单容器 - 320px 宽度，水平居中 */}
      <div className="w-form">
        {/* Logo/标题区域 */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-medium text-white mb-2">Welcome Back</h1>
          <p className="text-sm text-gray-400">
            Please sign in to your account
          </p>
        </div>

        {/* 登录表单 */}
        <form onSubmit={handleSubmit} className="space-y-input-gap">
          {/* 邮箱输入框 */}
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Username"
              className="w-full px-10 py-3 bg-input-bg border border-input-border rounded-input 
                                       text-input-text text-input placeholder-placeholder
                                       focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                                       transition-colors duration-200"
              required
            />
            {/* 用户名图标 */}
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-placeholder"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>

          {/* 密码输入框 */}
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-10 py-3 bg-input-bg border border-input-border rounded-input 
                                       text-input-text text-input placeholder-placeholder
                                       focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                                       transition-colors duration-200"
              required
            />
            {/* 密码图标 */}
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-placeholder"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>

          {/* 复选框和Forgot Password行 - 与输入框间距 16px */}
          <div className="flex items-center justify-between mt-input-checkbox-gap mb-0">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-[15px] h-[15px] appearance-none 
                                           border-2 border-checkbox-border rounded-checkbox
                                           checked:bg-primary checked:border-primary
                                           focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-page-bg
                                           cursor-pointer transition-colors duration-200"
              />
              <label
                htmlFor="remember"
                className="text-sm text-gray-300 cursor-pointer select-none"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="text-primary text-link no-underline
                                       hover:opacity-80 transition-opacity duration-200"
            >
              Forgot password
            </a>
          </div>

          {/* 登录按钮 - 与复选框行间距 24px */}
          <button
            type="submit"
            className="w-full h-button bg-primary text-white text-button font-medium
                                   rounded-button py-3 px-4
                                   hover:bg-primary-hover
                                   focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-page-bg
                                   disabled:bg-primary-disabled disabled:cursor-not-allowed
                                   transition-colors duration-200"
          >
            Log in
          </button>

          {/* 注册链接 - 与按钮间距 8px */}
          <div className="text-left mt-button-link-gap">
            <a
              href="#"
              className="text-primary text-link no-underline
                                       hover:opacity-80 transition-opacity duration-200"
            >
              register now!
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
