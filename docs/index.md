---
layout: false
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');

.home-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #0a0a0a;
  padding: 40px 24px;
  text-align: center;
}

.home-title {
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: #ffffff;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}

.home-subtitle {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 400;
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.02em;
}

.home-nav {
  margin-top: 48px;
  display: flex;
  gap: 32px;
}

.home-nav a {
  font-family: 'Playfair Display', serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.4);
  text-decoration: none;
  transition: color 0.3s;
  letter-spacing: 0.05em;
  text-transform: lowercase;
}

.home-nav a:hover {
  color: #a78bfa;
}
</style>

<div class="home-container">
  <h1 class="home-title">Mingshou's Blog</h1>
  <p class="home-subtitle">Research, thoughts and daily records.</p>
  <nav class="home-nav">
    <a href="/my-blog/articles/">Articles</a>
    <a href="/my-blog/about">About</a>
  </nav>
</div>
