/* =========================================================
   MOVARA — Shared Navigation Component
   ========================================================= */

function buildNav(activePage) {
  const pages = [
    { href: 'index.html',        label: 'Innovation' },
    { href: 'introduction.html', label: 'Introduction' },
    { href: 'process.html',      label: 'Design Process' },
    { href: 'testing.html',      label: 'Testing' },
    { href: 'reflection.html',   label: 'Reflection' },
  ];

  const nav = document.getElementById('nav');
  if (!nav) return;

  nav.innerHTML = `
    <div class="container">
      <a href="index.html" class="nav-brand">Movara <span>/ Portfolio</span></a>
      <ul class="nav-links" id="nav-links">
        ${pages.map(p => `
          <li>
            <a href="${p.href}" class="${p.href === activePage ? 'active' : ''}">
              ${p.label}
            </a>
          </li>
        `).join('')}
      </ul>
      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;

  // Mobile toggle
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }

  // Scroll shadow
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      nav.style.boxShadow = '0 2px 20px rgba(25,25,112,0.08)';
    } else {
      nav.style.boxShadow = 'none';
    }
  });
}

function buildFooter() {
  const footer = document.getElementById('footer');
  if (!footer) return;
  footer.innerHTML = `
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          Movara
          <p>A Senior Mobility Engineering Project</p>
        </div>
        <nav class="footer-nav" aria-label="Footer navigation">
          <a href="index.html">Innovation</a>
          <a href="introduction.html">Introduction</a>
          <a href="process.html">Design Process</a>
          <a href="testing.html">Testing</a>
          <a href="reflection.html">Reflection</a>
        </nav>
      </div>
      <div class="footer-bottom">
        <span>Developed as an engineering portfolio for university admissions.</span>
        <span>Movara &copy; 2024</span>
      </div>
    </div>
  `;
}
