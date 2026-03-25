import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: 'Agent Development Blog',
  description: 'Exploring AI Agent Architecture, Patterns, and Best Practices',
  
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
            { text: 'Building AI Agents: A Comprehensive Guide', link: '/articles/agent-development-guide' },
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/caimingshuo' }
    ],
    
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present'
    },
    
    search: {
      provider: 'local'
    }
  },
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }]
  ],
  
  // GitHub Pages 部署配置
  base: '/my-blog/',
  
  // 美化配置
  appearance: 'dark',
  
  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  }
})
