---
layout: false
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');

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
  font-family: 'Great Vibes', cursive;
  font-weight: 400;
  font-size: clamp(3.5rem, 10vw, 6rem);
  color: #ffffff;
  letter-spacing: 0.02em;
  margin-bottom: 20px;
  line-height: 1.1;
  text-shadow: 
    0 0 20px rgba(167, 139, 250, 0.3),
    0 0 40px rgba(167, 139, 250, 0.2),
    0 0 60px rgba(167, 139, 250, 0.1);
  animation: float 4s ease-in-out infinite, glow 3s ease-in-out infinite alternate;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes glow {
  0% {
    text-shadow: 
      0 0 20px rgba(167, 139, 250, 0.3),
      0 0 40px rgba(167, 139, 250, 0.2),
      0 0 60px rgba(167, 139, 250, 0.1);
  }
  100% {
    text-shadow: 
      0 0 30px rgba(167, 139, 250, 0.5),
      0 0 60px rgba(167, 139, 250, 0.3),
      0 0 90px rgba(167, 139, 250, 0.2);
  }
}

.home-subtitle {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 400;
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: rgba(255, 255, 255, 0.45);
  letter-spacing: 0.04em;
  white-space: nowrap;
}

.home-nav {
  margin-top: 56px;
  display: flex;
  gap: 40px;
}

.home-nav a {
  font-family: 'Playfair Display', serif;
  font-size: 0.95rem;
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
  <p class="home-subtitle">Research, thoughts and daily records.</p>
  <nav class="home-nav">
    <a href="/my-blog/articles/">Articles</a>
    <a href="/my-blog/about">About</a>
  </nav>
</div>
