/* Site-wide Google Analytics (GA4) — loads on every page that includes this file. */
(function () {
  var GA_ID = 'G-ETJ8ET24LW';
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', GA_ID);
})();

/* Site-wide behaviour: live search/filter on listing pages (home + categories). */
document.addEventListener('DOMContentLoaded', function () {
  var f = document.querySelector('[data-filter]');
  if (!f) return;
  f.addEventListener('input', function () {
    var q = f.value.trim().toLowerCase();
    document.querySelectorAll('[data-card]').forEach(function (c) {
      c.style.display = c.getAttribute('data-card').indexOf(q) > -1 ? '' : 'none';
    });
    var none = document.querySelector('[data-empty]');
    if (none) {
      var any = [].some.call(document.querySelectorAll('[data-card]'), function (c) {
        return c.style.display !== 'none';
      });
      none.style.display = any ? 'none' : '';
    }
  });
});
