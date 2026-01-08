import React, { useState, useCallback } from "react";

interface LoginFormProps {
  onLogin?: (email: string, password: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validate = useCallback(() => {
    const next: { email?: string; password?: string } = {};
    // simple email regex
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "请输入有效的邮箱地址";
    }
    if (password.length < 8) {
      next.password = "密码长度至少 8 位";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }, [email, password]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!validate()) return;
      try {
        setIsSubmitting(true);
        // delegate actual login to caller
        await Promise.resolve(onLogin?.(email, password));
      } finally {
        setIsSubmitting(false);
      }
    },
    [email, password, onLogin, validate]
  );

  return (
    <div className="min-h-screen bg-page-bg flex items-center justify-center">
      {/* 表单容器 - 280px 宽度，水平居中 */}
      <div className="w-[250px]">
        {/* Logo/标题区域 */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-medium text-on-page mb-2">欢迎回来</h1>
          <p className="text-sm text-gray-400">请登录您的账号继续使用</p>
        </div>

        {/* 登录表单 */}
        <form noValidate onSubmit={handleSubmit} className="space-y-input-gap">
          {/* 邮箱输入框 */}
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                const v = e.target.value;
                setEmail(v);
                // Clear email error as soon as user modifies the field
                if (errors.email)
                  setErrors((s) => ({ ...s, email: undefined }));
              }}
              onBlur={() => {
                // validate email on blur
                if (errors.email) {
                  // re-validate
                  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
                    setErrors((s) => ({ ...s, email: undefined }));
                }
              }}
              placeholder="邮箱输入框"
              className="w-full px-10 py-3 bg-input-bg border border-input-border rounded-input 
                                       text-input-text text-input placeholder-placeholder
                                       focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                                       transition-colors duration-200"
              required
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p
                id="email-error"
                role="alert"
                className="text-sm text-red-400 mt-1"
              >
                {errors.email}
              </p>
            )}
            {/* 用户名图标 */}
            <svg
              className="absolute left-3 top-1/3 -translate-y-1/2 w-5 h-5 text-placeholder"
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
              onChange={(e) => {
                const v = e.target.value;
                setPassword(v);
                // Clear password error as soon as user types
                if (errors.password)
                  setErrors((s) => ({ ...s, password: undefined }));
              }}
              onBlur={() => {
                if (errors.password && password.length >= 8)
                  setErrors((s) => ({ ...s, password: undefined }));
              }}
              placeholder="密码输入框"
              className="w-full px-10 py-3 bg-input-bg border border-input-border rounded-input 
                                       text-input-text text-input placeholder-placeholder
                                       focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                                       transition-colors duration-200"
              required
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? "password-error" : undefined}
            />
            {errors.password && (
              <p
                id="password-error"
                role="alert"
                className="text-sm text-red-400 mt-1"
              >
                {errors.password}
              </p>
            )}
            {/* 密码图标 */}
            <svg
              className="absolute left-3 top-1/3 -translate-y-1/2 w-5 h-5 text-placeholder"
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
                                           cursor-pointer transition-colors duration-200"
              />
              <label
                htmlFor="remember"
                className="text-sm text-gray-500 cursor-pointer select-none  inline-block transform hover:scale-105 hover:opacity-80 transition duration-200 motion-reduce:transition-none"
              >
                记住我
              </label>
            </div>
            <a
              href="#"
              className="text-primary text-link no-underline
                                        inline-block transform hover:scale-105 hover:opacity-80 transition duration-200 motion-reduce:transition-none"
            >
              忘记密码?
            </a>
          </div>

          {/* 登录按钮 - 与复选框行间距 24px */}
          <button
            type="submit"
            className="w-full h-button bg-primary text-white text-button font-medium
                                   rounded-button py-2 px-4
                                   hover:bg-primary-hover
                                   focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-page-bg
                                   disabled:bg-primary-disabled disabled:cursor-not-allowed
                                   transition duration-200"
            disabled={isSubmitting}
          >
            Log in
          </button>

          {/* 注册链接 - 与按钮间距 8px */}
          <div className="text-left mt-button-link-gap">
            <a
              href="#"
              className="text-primary text-link no-underline inline-block transform hover:scale-105 hover:opacity-80 transition duration-200 motion-reduce:transition-none"
            >
              注册新账号
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
