import React, { useState } from 'react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
<header className="site-header">
    <a className="brand" href="#home" aria-label="Alex Morgan home"><span className="brand-mark">A</span><span>alexmorgan<span className="accent">.</span></span></a>
    <button className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}><span></span><span></span></button>
    <nav className={
av${menuOpen ? " open" : ""}`} aria-label="Main navigation" onClick={closeMenu}>
      <a href="#about">About</a><a href="#work">Work</a><a href="#skills">Skills</a>
      <a className="nav-contact" href="#contact">Let’s talk <span>↗</span></a>
    </nav>
  </header>

  <main>
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot"></span> AVAILABLE FOR SELECT PROJECTS</p>
        <h1>Designing and building<br>for the <span className="serif">human</span> side<br>of the internet<span className="accent">.</span></h1>
        <p className="hero-description">Hey, I’m Alex — a digital designer and front-end developer who turns thoughtful ideas into clear, useful experiences.</p>
        <div className="hero-actions"><a className="button button-dark" href="#work">Explore my work <span>↓</span></a><a className="text-link" href="#contact">Get in touch <span>↗</span></a></div>
      </div>
      <div className="hero-art" aria-label="Abstract colorful shapes illustration" role="img">
        <div className="art-grid"></div><div className="sun"></div><div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
        <div className="art-card"><span>CREATIVE<br>BY NATURE</span><span className="card-star">✳</span></div>
        <span className="art-caption">INDEPENDENT CREATIVE<br>BASED IN BROOKLYN, NY</span>
        <span className="art-index">01 — 04</span>
      </div>
      <a className="scroll-note" href="#about"><span className="scroll-line"></span> SCROLL TO EXPLORE</a>
    </section>

    <section className="about section-wrap" id="about">
      <div className="section-label"><span>01 / ABOUT</span><span className="label-line"></span></div>
      <div className="about-content"><h2>Good work starts<br>with <span className="serif">curiosity.</span></h2><div className="about-text"><p>I’m a multidisciplinary designer and developer with a soft spot for the details that make digital products feel effortless. I like asking good questions, working with kind people, and making the complex feel simple.</p><p>Over the last 5 years, I’ve partnered with early-stage teams and established brands to create websites, products, and identities that make a lasting impression.</p><a href="#contact" className="underlined-link">A little more about me <span>↗</span></a></div></div>
      <div className="stats"><div><strong>05<span>+</span></strong><small>YEARS CREATING</small></div><div><strong>24</strong><small>PROJECTS SHIPPED</small></div><div><strong>12</strong><small>HAPPY COLLABORATORS</small></div></div>
    </section>

    <section className="work section-wrap" id="work">
      <div className="section-label"><span>02 / SELECTED WORK</span><span className="label-line"></span><span>2022 — 2025</span></div>
      <div className="work-heading"><h2>A few things<br>made with <span className="serif">care.</span></h2><p>A selection of projects where strategy, design, and technology came together.</p></div>
      <div className="project-grid">
        <article className="project project-wide"><a href="#contact" className="project-image image-sage" aria-label="Discuss the Kinfolk project"><div className="mock-browser"><div className="browser-top"><i></i><i></i><i></i><span>kinfolk.studio</span></div><div className="kinfolk-layout"><span className="mock-logo">kinfolk</span><span className="mock-tag">A slower kind<br>of living.</span><div className="mock-flower">✿</div><span className="mock-bottom">OBJECTS FOR EVERYDAY RITUALS</span></div></div><span className="project-open">↗</span></a><div className="project-meta"><div><h3>Kinfolk Studio</h3><p>Brand identity · E-commerce · Development</p></div><span>2025</span></div></article>
        <article className="project"><a href="#contact" className="project-image image-peach" aria-label="Discuss the Goodwell project"><div className="phone"><div className="phone-notch"></div><span className="goodwell-logo">goodwell<span>®</span></span><span className="goodwell-title">Feel good<br>about your<br><i>money.</i></span><span className="phone-button">Let’s get started&nbsp; ↗</span><div className="phone-sun">✳</div></div><span className="project-open">↗</span></a><div className="project-meta"><div><h3>Goodwell Finance</h3><p>Product design · Mobile app</p></div><span>2024</span></div></article>
        <article className="project"><a href="#contact" className="project-image image-blue" aria-label="Discuss the Common Ground project"><div className="ground-card"><span className="ground-small">A COMMUNITY FOR GROWING</span><span className="ground-title">common<br><i>ground</i></span><span className="ground-plant">✳</span><span className="ground-small">GROW SOMETHING GOOD.</span></div><span className="project-open">↗</span></a><div className="project-meta"><div><h3>Common Ground</h3><p>Art direction · Web design</p></div><span>2023</span></div></article>
      </div>
    </section>

    <section className="skills section-wrap" id="skills">
      <div className="section-label"><span>03 / WHAT I DO</span><span className="label-line"></span></div>
      <div className="skills-layout"><h2>Small team<br>energy. <span className="serif">Big picture</span><br>thinking.</h2><div className="skill-list"><div><span>01</span><h3>Digital design</h3><p>Websites · Product UI · Prototyping · Design systems</p><b>↗</b></div><div><span>02</span><h3>Creative development</h3><p>Front-end · Interaction · Responsive builds</p><b>↗</b></div><div><span>03</span><h3>Brand &amp; direction</h3><p>Visual identity · Art direction · Creative strategy</p><b>↗</b></div></div></div>
    </section>

    <section className="contact section-wrap" id="contact">
      <div className="contact-top"><span>04 / YOUR TURN</span><span>HAVE A GOOD ONE IN MIND?</span></div>
      <h2>Let’s make<br>something <span className="serif">matter.</span></h2>
      <a className="contact-email" href="mailto:hello@example.com">hello@example.com <span>↗</span></a>
      <div className="contact-bottom"><span>Usually replies within 2 business days.</span><div><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">INSTAGRAM ↗</a><a href="https://github.com/" target="_blank" rel="noreferrer">GITHUB ↗</a></div></div>
    </section>
  </main>
  <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">A</span><span>alexmorgan<span className="accent">.</span></span></a><span>DESIGNED &amp; BUILT WITH CARE · {new Date().getFullYear()}</span><a href="#home">BACK TO TOP ↑</a></footer>

    </>
  );
}




