import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  title: 'Agent Development',
  description: 'Exploring AI Agent Architecture, Patterns, and Best Practices',
  
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../', import.meta.url))
      }
    },
    optimizeDeps: {
      include: ['motion', 'lucide-react']
    }
  },
  
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
      message: 'Built with VitePress',
      copyright: 'Copyright © 2025'
    },
    
    search: {
      provider: 'local'
    },
    
    logo: {
      src: '/logo.svg',
      alt: 'Agent Blog'
    }
  },
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#000000' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['link', { 
      rel: 'preconnect', 
      href: 'https://fonts.googleapis.com' 
    }],
    ['link', { 
      rel: 'preconnect', 
      href: 'https://fonts.gstatic.com',
      crossorigin: ''
    }]
  ],
  
  base: '/my-blog/',
  
  appearance: 'dark',
  
  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },
  
  lastUpdated: true,
  
  cleanUrls: true
})
