# 如何使用 VitePress 搭建个人博客

*Published: March 24, 2025*

VitePress 是一个基于 Vite 的静态网站生成器，非常适合用来搭建文档和个人博客。本文将介绍如何从零开始搭建一个简洁高效的博客。

## 为什么选择 VitePress？

- **快速**：基于 Vite，开发服务器启动和热更新都非常快
- **简洁**：默认主题简洁美观，专注于内容
- **Markdown**：使用 Markdown 写作，支持 Vue 组件
- **SEO 友好**：生成静态 HTML，对搜索引擎友好

## 快速开始

### 1. 安装

```bash
npm create vitepress@latest my-blog
```

### 2. 配置

编辑 `docs/.vitepress/config.ts`：

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Blog',
  description: 'A personal blog powered by VitePress',
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Articles', link: '/articles/' },
      { text: 'About', link: '/about' }
    ],
    
    sidebar: {
      '/articles/': [
        {
          text: 'Articles',
          items: [
            { text: 'Building AI Agents', link: '/articles/agent-development-guide' },
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/username' }
    ]
  }
})
```

### 3. 部署到 GitHub Pages

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy
on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/deploy-pages@v4
```

## 自定义主题

VitePress 允许通过 CSS 变量自定义主题：

```css
:root {
  --vp-c-brand: #667eea;
  --vp-c-brand-light: #7c8ef0;
}
```

## 结语

VitePress 是一个功能强大但简洁的工具，非常适合搭建个人博客。希望这篇教程对你有帮助！

---

[← Back to Articles](./index.html)
