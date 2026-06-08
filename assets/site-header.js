/* =====================================================================
   HEALTHFUL PINOY  —  SITE HEADER  (single source of truth)
   This is the ONLY place the header is defined. Edit the HTML between the
   backticks below, save, then refresh any page: the header updates across
   the WHOLE site. No build step or special software needed.
   To add a menu link, copy a line inside <nav class="nav"> and change the
   href + text (set data-nav to the same filename so it highlights).
   ===================================================================== */
(function () {
  var HTML = `
  <div class="wrap head-inner">
    <a class="brand" href="index.html"><svg class="logo-mark" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="18" fill="var(--brand)"/><path d="M20 9c.7 5.3 3.5 8.2 8.8 8.8C23.5 18.4 20.7 21.3 20 26.6c-.7-5.3-3.5-8.2-8.8-8.8C16.5 17.2 19.3 14.3 20 9Z" fill="var(--accent)"/><path d="M11 30c3-1.6 6-2.4 9-2.4s6 .8 9 2.4" stroke="var(--accent-soft)" stroke-width="2" fill="none" stroke-linecap="round"/></svg><span class="brand-text">Healthful<em>Pinoy</em></span></a>
    <button class="nav-toggle" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
    <nav class="nav">
      <a href="index.html" data-nav="index.html">Home</a>
      <a href="gamot.html" data-nav="gamot.html">Gamot</a>
      <a href="natural-na-remedyo.html" data-nav="natural-na-remedyo.html">Natural na Remedyo</a>
      <a href="bawal.html" data-nav="bawal.html">Bawal</a>
      <a href="disclaimer.html" data-nav="disclaimer.html">Disclaimer</a>
    </nav>
  </div>`;
  class SiteHeader extends HTMLElement {
    connectedCallback() {
      this.classList.add('site-head');
      this.innerHTML = HTML;
      var here = this.getAttribute('data-active') || (location.pathname.split('/').pop() || 'index.html');
      this.querySelectorAll('.nav a').forEach(function (a) {
        if (a.getAttribute('data-nav') === here) { a.classList.add('active'); }
      });
      var self = this, btn = this.querySelector('.nav-toggle');
      if (btn) {
        btn.addEventListener('click', function () {
          var open = self.classList.toggle('open');
          btn.setAttribute('aria-expanded', open);
        });
      }
    }
  }
  if (!customElements.get('site-header')) { customElements.define('site-header', SiteHeader); }
})();
