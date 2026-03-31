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
  padding: 60px 24px;
  text-align: center;
}

.home-title {
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  font-size: clamp(2.5rem, 7vw, 4.5rem);
  color: #ffffff;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
  line-height: 1.2;
}

.home-subtitle {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 400;
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  color: rgba(255, 255, 255, 0.45);
  letter-spacing: 0.03em;
  line-height: 1.6;
  max-width: 500px;
}

.home-nav {
  margin-top: 64px;
  display: flex;
  gap: 40px;
}

.home-nav a {
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.35);
  text-decoration: none;
  transition: all 0.3s ease;
  letter-spacing: 0.08em;
  text-transform: lowercase;
  padding: 8px 0;
  position: relative;
}

.home-nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: #a78bfa;
  transition: width 0.3s ease;
}

.home-nav a:hover {
  color: #a78bfa;
}

.home-nav a:hover::after {
  width: 100%;
}
</style>

<div class="home-container">
  <h1 class="home-title">Mingshou's Blog</h1>
  <p class="home-subtitle">Research, thoughts<br>and daily records.</p>
  <nav class="home-nav">
    <a href="/my-blog/articles/">Articles</a>
    <a href="/my-blog/about">About</a>
  </nav>
</div>
