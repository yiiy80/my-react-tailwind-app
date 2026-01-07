# My React Tailwind App

一个基于 React、TypeScript 和 Tailwind CSS 构建的现代化前端项目。

## 项目特点

- **React 18** - 使用最新的 React 功能
- **TypeScript** - 类型安全的代码开发
- **Tailwind CSS 3.4** - 原子化 CSS 框架
- **Vite 5** - 极速构建工具
- **React Query** - 数据获取和状态管理

## 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| React | ^18.2.0 | UI 库 |
| TypeScript | ^5.3.3 | 类型系统 |
| Vite | ^5.0.8 | 构建工具 |
| Tailwind CSS | ^3.4.0 | CSS 框架 |
| PostCSS | ^8.4.32 | CSS 处理器 |
| Autoprefixer | ^10.4.16 | CSS 前缀处理 |
| @tanstack/react-query | ^5.17.0 | 数据管理 |

## 项目结构

```
my-react-tailwind-app/
├── src/
│   ├── assets/          # 静态资源
│   ├── components/      # React 组件
│   │   └── LoginForm.tsx
│   ├── App.tsx          # 应用入口组件
│   ├── main.tsx         # 应用入口文件
│   └── index.css        # 全局样式
├── frontend-dev-guidelines/  # 前端开发规范
├── prototype/           # 设计原型
├── index.html           # HTML 入口
├── package.json         # 项目配置
├── tailwind.config.js   # Tailwind 配置
├── tsconfig.json        # TypeScript 配置
└── vite.config.ts       # Vite 配置
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

启动开发服务器：

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 设计规范

### 颜色方案

| 名称 | 颜色值 | 用途 |
|------|--------|------|
| 主要强调色 | `#00BFA5` | 按钮、链接、复选框选中状态 |
| 悬停状态 | `#00A896` | 按钮悬停颜色 |
| 禁用状态 | `rgba(189, 189, 189, 0.5)` | 按钮禁用颜色 |
| 页面背景 | `#000000` | 页面背景色 |
| 输入框背景 | `#FFFFFF` | 输入框背景 |
| 输入框边框 | `#E0E0E0` | 输入框边框 |
| 输入文字 | `#212121` | 输入文字颜色 |
| 占位符 | `#9E9E9E` | 输入框占位符 |
| 复选框边框 | `#BDBDBD` | 复选框边框 |

### 组件规范

- **圆角**: 输入框 4px，按钮 4px
- **字体大小**: 输入框 16px，按钮 16px，链接 14px
- **按钮高度**: 40px
- **间距**: 输入框间距 8px，选项与按钮间距 24px

## 代码规范

### TypeScript 配置

- 严格模式开启
- 未使用的局部变量和参数会报错
- 路径别名配置：
  - `@` -> `src/`
  - `~types` -> `src/types/`
  - `~components` -> `src/components/`
  - `~features` -> `src/features/`

### React 最佳实践

- 使用 `useCallback` 优化回调函数
- 使用 TypeScript 接口定义组件 Props
- 遵循单一职责原则

## 开发规范

项目包含 `frontend-dev-guidelines/` 目录，提供以下开发指南：

- **SKILL.md** - 技能要求
- **component-patterns.md** - 组件模式
- **common-patterns.md** - 通用模式
- **complete-examples.md** - 完整示例
- **data-fetching.md** - 数据获取
- **file-organization.md** - 文件组织
- **loading-and-error-states.md** - 加载和错误状态
- **performance.md** - 性能优化
- **routing-guide.md** - 路由指南
- **styling-guide.md** - 样式指南
- **typescript-standards.md** - TypeScript 标准

## 当前功能

### 登录表单 (LoginForm)

- 邮箱/用户名输入框（带图标）
- 密码输入框（带图标）
- 记住我复选框
- 忘记密码链接
- 登录按钮
- 注册链接

## 许可证

本项目仅供学习使用。
