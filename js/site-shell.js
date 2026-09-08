(function () {
  "use strict";

  const ROOT = "/";
  const ASSETS = `${ROOT}assets/logos/`;
  const currentPage = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
  const active = (...pages) => pages.includes(currentPage) ? " is-active" : "";

  const header = `
    <header class="rn-shell-header" id="rnShellHeader">
      <nav class="rn-shell-nav" aria-label="Primary navigation">
        <a class="rn-shell-brand" href="/index.html" aria-label="Renfaut home">
          <img class="rn-shell-icon" src="${ASSETS}renfaut-icon.png" alt="">
          <img class="rn-shell-wordmark" src="${ASSETS}renfaut-wordmark.png" alt="Renfaut™">
        </a>
        <button class="rn-shell-toggle" type="button" aria-expanded="false" aria-controls="rnShellLinks">Menu</button>
        <div class="rn-shell-links" id="rnShellLinks">
          <a class="${active("index.html")}" href="/index.html">Home</a>
          <div class="rn-shell-dropdown">
            <button class="rn-shell-dropbtn${active("about.html", "principles.html", "research.html")}" type="button" aria-expanded="false">Renfaut™</button>
            <div class="rn-shell-menu">
              <a href="/about.html">About Renfaut™</a>
              <a href="/principles.html">Five Principles</a>
              <a href="/research.html">Research &amp; Theory</a>
            </div>
          </div>
          <div class="rn-shell-dropdown">
            <button class="rn-shell-dropbtn${active("rise-index.html", "rise-inventory.html")}" type="button" aria-expanded="false">R.I.S.E. Index™</button>
            <div class="rn-shell-menu">
              <a href="/rise-index.html">About the R.I.S.E. Index™</a>
              <a href="/rise-inventory.html">Complete the R.I.S.E. Index™</a>
            </div>
          </div>
          <a class="${active("leadership-lab.html")}" href="/leadership-lab.html">Leadership Lab™</a>
          <a class="${active("contact.html")}" href="/contact.html">Contact</a>
        </div>
        <a class="rn-shell-cta" href="/rise-inventory.html">Complete the R.I.S.E. Index™</a>
      </nav>
    </header>`;

  const footer = `
    <footer class="rn-shell-footer">
      <div class="rn-shell-footer-inner">
        <div class="rn-shell-footer-grid">
          <div>
            <div class="rn-shell-footer-brand">
              <img src="${ASSETS}renfaut-icon.png" alt="">
              <img src="${ASSETS}renfaut-wordmark.png" alt="Renfaut™">
            </div>
            <p>A praxis paradigm for equity-centered leadership, transformative learning, and systemic change.</p>
          </div>
          <div><h4>Explore</h4><a href="/index.html">Home</a><a href="/about.html">About Renfaut™</a><a href="/principles.html">Five Principles</a><a href="/research.html">Research &amp; Theory</a></div>
          <div><h4>R.I.S.E. Index™</h4><a href="/rise-index.html">About the R.I.S.E. Index™</a><a href="/rise-inventory.html">Complete the R.I.S.E. Index™</a><a href="/leadership-lab.html">Leadership Lab™</a></div>
          <div><h4>Connect</h4><a href="/contact.html">Contact</a><a href="/privacy.html">Privacy</a><a href="mailto:leemorganphd@gmail.com">leemorganphd@gmail.com</a></div>
        </div>
        <div class="rn-shell-footer-bottom"><span>© 2026 Renfaut™. All rights reserved.</span><span>Renfaut™, R.I.S.E. Index™, and Leadership Lab™ are trademarks of T. Lee Morgan, Ph.D.</span></div>
      </div>
    </footer>`;

  function closeDropdowns(shell) {
    shell.querySelectorAll(".rn-shell-dropdown").forEach((drop) => {
      drop.classList.remove("open");
      drop.querySelector(".rn-shell-dropbtn")?.setAttribute("aria-expanded", "false");
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.body.insertAdjacentHTML("afterbegin", header);
    document.body.insertAdjacentHTML("beforeend", footer);
    const shell = document.getElementById("rnShellHeader");
    if (!shell) return;

    const toggle = shell.querySelector(".rn-shell-toggle");
    toggle?.addEventListener("click", () => {
      const open = shell.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    shell.querySelectorAll(".rn-shell-dropdown").forEach((drop) => {
      const button = drop.querySelector(".rn-shell-dropbtn");
      button?.addEventListener("click", (event) => {
        event.preventDefault();
        const opening = !drop.classList.contains("open");
        closeDropdowns(shell);
        if (opening) {
          drop.classList.add("open");
          button.setAttribute("aria-expanded", "true");
        }
      });
    });

    document.addEventListener("click", (event) => {
      if (!event.target.closest(".rn-shell-dropdown")) closeDropdowns(shell);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeDropdowns(shell);
    });
  });
})();
