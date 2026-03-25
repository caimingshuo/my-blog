<template>
  <div class="landing-page bg-black min-h-screen overflow-x-hidden">
    <!-- Navigation -->
    <nav class="fixed top-4 left-0 right-0 z-50 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="liquid-glass rounded-full px-2 py-2 flex items-center justify-between">
          <div class="flex items-center gap-2 pl-2">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span class="text-white font-heading italic text-lg">A</span>
            </div>
            <span class="text-white font-heading italic text-xl hidden sm:block">Agent Blog</span>
          </div>
          
          <div class="hidden md:flex items-center gap-6 px-6">
            <a href="#hero" class="text-white/80 hover:text-white text-sm font-body font-medium transition-colors">Home</a>
            <a href="#articles" class="text-white/80 hover:text-white text-sm font-body font-medium transition-colors">Articles</a>
            <a href="#topics" class="text-white/80 hover:text-white text-sm font-body font-medium transition-colors">Topics</a>
            <a href="#about" class="text-white/80 hover:text-white text-sm font-body font-medium transition-colors">About</a>
          </div>

          <a 
            href="/my-blog/articles/agent-development-guide" 
            class="btn-solid text-sm"
          >
            Start Reading
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4">
      <!-- Background Effects -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[150px] animate-pulse-glow"></div>
        <div class="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent z-10"></div>
      </div>

      <div class="relative z-20 max-w-5xl mx-auto text-center">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 liquid-glass rounded-full px-4 py-2 mb-8 animate-float">
          <span class="bg-white text-black text-xs font-body font-semibold rounded-full px-2 py-0.5">New</span>
          <span class="text-white/90 text-sm font-body">AI-Powered Development Blog</span>
        </div>

        <!-- Heading -->
        <BlurText
          text="The Future of Intelligent Systems"
          tag="h1"
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading italic text-white tracking-tight leading-[0.9] mb-6"
          :delay="80"
        />

        <!-- Subtext -->
        <p class="text-lg md:text-xl text-white/60 font-body font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Deep dives into AI agent architecture, from theory to production. 
          Built for engineers who want to master the next generation of software.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="/my-blog/articles/agent-development-guide"
            class="liquid-glass-strong btn-liquid group"
          >
            Read the Guide
            <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a 
            href="#articles"
            class="text-white/70 hover:text-white text-sm font-body font-medium flex items-center gap-2 transition-colors"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <polygon points="10 8 16 12 10 16 10 8" fill="currentColor"/>
            </svg>
            Browse Articles
          </a>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span class="text-xs font-body">Scroll to explore</span>
        <div class="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div class="w-1 h-2 bg-white/60 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>

    <!-- Partners/Topics Bar -->
    <section class="py-16 px-4 border-y border-white/5">
      <div class="max-w-6xl mx-auto text-center">
        <div class="inline-flex items-center gap-2 liquid-glass rounded-full px-4 py-2 mb-8">
          <span class="text-white/80 text-sm font-body">Explore Topics</span>
        </div>
        
        <div class="flex flex-wrap justify-center gap-8 md:gap-12">
          <a href="#" class="text-2xl md:text-3xl font-heading italic text-white/40 hover:text-white transition-colors duration-300">Architecture</a>
          <a href="#" class="text-2xl md:text-3xl font-heading italic text-white/40 hover:text-white transition-colors duration-300">Tools</a>
          <a href="#" class="text-2xl md:text-3xl font-heading italic text-white/40 hover:text-white transition-colors duration-300">Memory</a>
          <a href="#" class="text-2xl md:text-3xl font-heading italic text-white/40 hover:text-white transition-colors duration-300">Production</a>
        </div>
      </div>
    </section>

    <!-- Featured Article Section -->
    <section id="articles" class="py-24 md:py-32 px-4 relative">
      <div class="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/10 to-black pointer-events-none"></div>
      
      <div class="max-w-6xl mx-auto relative z-10">
        <div class="text-center mb-16">
          <span class="inline-block liquid-glass rounded-full px-4 py-1.5 text-xs font-body font-medium text-white mb-4">
            Featured Article
          </span>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight">
            Latest Insights
          </h2>
        </div>

        <!-- Featured Card -->
        <a 
          href="/my-blog/articles/agent-development-guide"
          class="block glass-card liquid-glass-strong rounded-3xl overflow-hidden group"
        >
          <div class="grid md:grid-cols-2 gap-0">
            <div class="aspect-video md:aspect-auto bg-gradient-to-br from-indigo-900/50 via-purple-900/30 to-black relative overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-8xl animate-float">🤖</span>
              </div>
              <div class="absolute inset-0 bg-gradient-to-r from-transparent to-black/50 md:to-transparent"></div>
            </div>
            
            <div class="p-8 md:p-12 flex flex-col justify-center">
              <div class="flex items-center gap-3 mb-4">
                <span class="text-white/40 text-sm font-body">March 25, 2025</span>
                <span class="w-1 h-1 rounded-full bg-white/40"></span>
                <span class="text-white/40 text-sm font-body">20 min read</span>
              </div>
              
              <h3 class="text-2xl md:text-3xl lg:text-4xl font-heading italic text-white mb-4 group-hover:text-indigo-300 transition-colors leading-tight">
                Building AI Agents: A Comprehensive Guide
              </h3>
              
              <p class="text-white/60 font-body font-light text-sm md:text-base mb-6 leading-relaxed">
                From ReAct to Multi-Agent systems. A complete technical deep-dive into modern AI agent architecture 
                with production-ready code examples.
              </p>
              
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="liquid-glass rounded-full px-3 py-1 text-xs text-white/80 font-body">ReAct</span>
                <span class="liquid-glass rounded-full px-3 py-1 text-xs text-white/80 font-body">Architecture</span>
                <span class="liquid-glass rounded-full px-3 py-1 text-xs text-white/80 font-body">Python</span>
                <span class="liquid-glass rounded-full px-3 py-1 text-xs text-white/80 font-body">Production</span>
              </div>
              
              <div class="flex items-center text-white font-body font-medium text-sm group-hover:gap-3 transition-all">
                Read Article
                <svg class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>

    <!-- Topics Grid -->
    <section id="topics" class="py-24 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <span class="inline-block liquid-glass rounded-full px-4 py-1.5 text-xs font-body font-medium text-white mb-4">
            Browse by Topic
          </span>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight">
            Explore the Stack
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(topic, index) in topics" :key="index" class="glass-card liquid-glass rounded-2xl p-6 group cursor-pointer">
            <div class="w-12 h-12 liquid-glass-strong rounded-full flex items-center justify-center mb-4 text-2xl">
              {{ topic.icon }}
            </div>
            <h3 class="text-xl font-heading italic text-white mb-2">{{ topic.title }}</h3>
            <p class="text-white/60 font-body font-light text-sm leading-relaxed">{{ topic.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-24 px-4 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-indigo-900/10 via-purple-900/10 to-indigo-900/10"></div>
      
      <div class="max-w-5xl mx-auto relative z-10">
        <div class="liquid-glass-strong rounded-3xl p-8 md:p-12 lg:p-16">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div v-for="(stat, index) in stats" :key="index" class="group">
              <div class="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white mb-2 group-hover:scale-110 transition-transform">
                {{ stat.value }}
              </div>
              <div class="text-white/60 font-body font-light text-sm">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About / CTA Section -->
    <section id="about" class="py-24 md:py-32 px-4 relative">
      <div class="max-w-4xl mx-auto text-center">
        <span class="inline-block liquid-glass rounded-full px-4 py-1.5 text-xs font-body font-medium text-white mb-6">
          About This Blog
        </span>
        
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight mb-6">
          Built for Engineers
        </h2>
        
        <p class="text-lg md:text-xl text-white/60 font-body font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          This blog documents my journey into AI agent development. Here you'll find practical guides, 
          architectural deep-dives, and production lessons learned.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="/my-blog/articles/agent-development-guide"
            class="liquid-glass-strong btn-liquid"
          >
            Start Reading
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a 
            href="https://github.com/caimingshuo"
            target="_blank"
            class="text-white/70 hover:text-white text-sm font-body font-medium flex items-center gap-2 transition-colors"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Follow on GitHub
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 px-4 border-t border-white/10">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span class="text-white font-heading italic text-sm">A</span>
            </div>
            <span class="text-white font-heading italic text-lg">Agent Blog</span>
          </div>
          
          <div class="text-white/40 font-body text-sm">
            © 2025 Agent Development Blog
          </div>
          
          <div class="flex items-center gap-6">
            <a href="#" class="text-white/40 hover:text-white text-xs font-body transition-colors">Privacy</a>
            <a href="#" class="text-white/40 hover:text-white text-xs font-body transition-colors">Terms</a>
            <a href="https://github.com/caimingshuo/my-blog" class="text-white/40 hover:text-white text-xs font-body transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BlurText from './BlurText.vue'

const topics = ref([
  {
    icon: '⚡',
    title: 'Architecture',
    description: 'ReAct, Plan-and-Execute, and Multi-Agent system patterns'
  },
  {
    icon: '🛠️',
    title: 'Tools',
    description: 'Design and integration of effective agent capabilities'
  },
  {
    icon: '🧠',
    title: 'Memory',
    description: 'Short-term and long-term context management systems'
  },
  {
    icon: '🚀',
    title: 'Production',
    description: 'Deployment, monitoring, and scaling best practices'
  }
])

const stats = ref([
  { value: '17K+', label: 'Words Written' },
  { value: '5+', label: 'Code Examples' },
  { value: '4', label: 'Architecture Patterns' },
  { value: '∞', label: 'Possibilities' }
])
</script>
