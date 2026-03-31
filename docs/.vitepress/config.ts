import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Mingshou's Blog",
  description: '技术、思考与生活记录',
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Articles', link: '/articles/' },
      { text: 'About', link: '/about' }
    ],
    
    sidebar: false,
    

    
    footer: {
      message: 'Built with VitePress',
      copyright: 'Copyright © 2025 Mingshou'
    },
    
    search: {
      provider: 'local'
    }
  },
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#0a0a0a' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }]
  ],
  
  base: '/my-blog/',
  
  appearance: false,
  
  markdown: {
    lineNumbers: true
  },
  
  lastUpdated: true,
  
  cleanUrls: true
})
