---
layout: home

hero:
  name: "Agent Development"
  text: "Building Intelligent AI Systems"
  tagline: Exploring architecture patterns, implementation strategies, and best practices for modern AI agents
  image:
    src: /logo.svg
    alt: Agent Development
  actions:
    - theme: brand
      text: Read the Guide
      link: /articles/agent-development-guide
    - theme: alt
      text: View on GitHub
      link: https://github.com/caimingshuo/my-blog

features:
  - icon: 🤖
    title: Agent Architecture
    details: Deep dive into ReAct, Plan-and-Execute, and Multi-Agent patterns with practical examples
  - icon: 🛠️
    title: Tool Integration
    details: Learn how to design and implement effective tool use capabilities for your agents
  - icon: 🧠
    title: Memory & Context
    details: Understanding short-term and long-term memory systems for stateful agent interactions
  - icon: 🔄
    title: Human-in-the-Loop
    details: Best practices for designing agents that collaborate effectively with humans
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 添加动画效果
  const cards = document.querySelectorAll('.article-card')
  cards.forEach((card, index) => {
    card.style.opacity = '0'
    card.style.transform = 'translateY(20px)'
    setTimeout(() => {
      card.style.transition = 'all 0.5s ease'
      card.style.opacity = '1'
      card.style.transform = 'translateY(0)'
    }, index * 100)
  })
})
</script>

<div class="articles-section">
  <div class="section-header">
    <span class="section-badge">📝 Latest Articles</span>
    <h2 class="section-title">Explore Agent Development</h2>
    <p class="section-desc">In-depth guides and tutorials on building production-ready AI agents</p>
  </div>

  <div class="articles-grid">
    <a href="/my-blog/articles/agent-development-guide" class="article-card featured">
      <div class="card-image">
        <div class="image-placeholder agent-pattern">
          <span class="image-icon">🤖</span>
        </div>
        <div class="card-badge">Featured</div>
      </div>
      <div class="card-content">
        <div class="card-meta">
          <span class="meta-item">
            <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            Mar 25, 2025
          </span>
          <span class="meta-item">
            <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            20 min read
          </span>
        </div>
        <h3 class="card-title">Building AI Agents: A Comprehensive Guide</h3>
        <p class="card-description">
          A deep dive into modern AI agent development. Learn ReAct, Plan-and-Execute, and Multi-Agent patterns 
          with production-ready code examples.
        </p>
        <div class="card-tags">
          <span class="tag">ReAct</span>
          <span class="tag">Architecture</span>
          <span class="tag">Python</span>
        </div>
        <div class="card-footer">
          <span class="read-more">
            Read Article
            <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </div>
      </div>
    </a>
  </div>

  <div class="topics-section">
    <h3 class="topics-title">Browse by Topic</h3>
    <div class="topics-grid">
      <a href="/my-blog/articles/agent-development-guide#core-architectural-patterns" class="topic-card">
        <div class="topic-icon">🏗️</div>
        <span class="topic-name">Architecture</span>
      </a>
      <a href="/my-blog/articles/agent-development-guide#tool-design-and-integration" class="topic-card">
        <div class="topic-icon">🔧</div>
        <span class="topic-name">Tools</span>
      </a>
      <a href="/my-blog/articles/agent-development-guide#memory-systems" class="topic-card">
        <div class="topic-icon">💾</div>
        <span class="topic-name">Memory</span>
      </a>
      <a href="/my-blog/articles/agent-development-guide#production-considerations" class="topic-card">
        <div class="topic-icon">🚀</div>
        <span class="topic-name">Production</span>
      </a>
    </div>
  </div>
</div>

<style scoped>
.articles-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 0.75rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-desc {
  font-size: 1.125rem;
  color: var(--vp-c-text-2);
  max-width: 600px;
  margin: 0 auto;
}

.articles-grid {
  display: grid;
  gap: 2rem;
  margin-bottom: 4rem;
}

.article-card {
  display: flex;
  flex-direction: column;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  transition: all 0.3s ease;
}

.article-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border-color: var(--vp-c-brand);
}

.article-card.featured {
  flex-direction: row;
}

@media (max-width: 768px) {
  .article-card.featured {
    flex-direction: column;
  }
}

.card-image {
  position: relative;
  flex: 0 0 320px;
  overflow: hidden;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.image-placeholder.agent-pattern {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  position: relative;
}

.image-placeholder.agent-pattern::before {
  content: '';
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.3) 0%, transparent 50%);
}

.image-icon {
  font-size: 4rem;
  position: relative;
  z-index: 1;
}

.card-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.375rem 0.875rem;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 20px;
}

.card-content {
  flex: 1;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
}

.card-meta {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.meta-icon {
  width: 16px;
  height: 16px;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 0.75rem;
  line-height: 1.3;
  transition: color 0.3s ease;
}

.article-card:hover .card-title {
  color: var(--vp-c-brand);
}

.card-description {
  font-size: 1rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0 0 1.5rem;
  flex: 1;
}

.card-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.tag {
  padding: 0.375rem 0.75rem;
  background: var(--vp-c-bg-mute);
  color: var(--vp-c-text-2);
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.read-more {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--vp-c-brand);
  font-weight: 600;
  font-size: 0.875rem;
  transition: gap 0.3s ease;
}

.article-card:hover .read-more {
  gap: 0.75rem;
}

.arrow-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

.article-card:hover .arrow-icon {
  transform: translateX(4px);
}

/* Topics Section */
.topics-section {
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 1px solid var(--vp-c-divider);
}

.topics-title {
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 1.5rem;
}

.topics-grid {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.topic-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.topic-card:hover {
  background: var(--vp-c-bg-mute);
  border-color: var(--vp-c-brand);
  transform: translateY(-2px);
}

.topic-icon {
  font-size: 1.25rem;
}

.topic-name {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
}
</style>
