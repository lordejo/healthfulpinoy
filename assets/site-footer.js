/* =====================================================================
   HEALTHFUL PINOY  —  SITE FOOTER  (single source of truth)
   This is the ONLY place the footer is defined. Edit the HTML between the
   backticks below, save, then refresh any page: the footer updates across
   the WHOLE site. No build step or special software needed.
   ===================================================================== */
(function () {
  var HTML = `
  <div class="wrap foot-grid">
    <div class="foot-brand">
      <a class="brand" href="index.html"><svg class="logo-mark" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="18" fill="var(--brand)"/><path d="M20 9c.7 5.3 3.5 8.2 8.8 8.8C23.5 18.4 20.7 21.3 20 26.6c-.7-5.3-3.5-8.2-8.8-8.8C16.5 17.2 19.3 14.3 20 9Z" fill="var(--accent)"/><path d="M11 30c3-1.6 6-2.4 9-2.4s6 .8 9 2.4" stroke="var(--accent-soft)" stroke-width="2" fill="none" stroke-linecap="round"/></svg><span class="brand-text">Healthful<em>Pinoy</em></span></a>
      <p>Mga gabay sa kalusugan para sa bawat pamilyang Pilipino.</p>
    </div>
    <nav class="foot-col">
      <h4>Mga Kategorya</h4>
      <a href="gamot.html">Gamot</a>
      <a href="natural-na-remedyo.html">Natural na Remedyo</a>
      <a href="bawal.html">Bawal</a>
    </nav>
    <nav class="foot-col">
      <h4>Site</h4>
      <a href="index.html">Home</a>
      <a href="disclaimer.html">Disclaimer</a>
    </nav>
    <div class="foot-col foot-note">
      <h4>Paalala</h4>
      <p>Ang nilalaman ng site na ito ay para sa pangkalahatang impormasyon lamang at hindi kapalit ng payo ng doktor. <a href="disclaimer.html">Basahin ang buong disclaimer &rarr;</a></p>
    </div>
  </div>
  <div class="wrap foot-base">
    <p>&copy; 2026 Healthful Pinoy. Lahat ng karapatan ay nakalaan.</p>
    <p class="aff">Disclosure: maaaring kumita ang Healthful Pinoy ng komisyon mula sa ilang link sa site na ito, nang walang dagdag-gastos sa iyo.</p>
  </div>`;
  class SiteFooter extends HTMLElement {
    connectedCallback() {
      this.classList.add('site-foot');
      this.innerHTML = HTML;
    }
  }
  if (!customElements.get('site-footer')) { customElements.define('site-footer', SiteFooter); }
})();
