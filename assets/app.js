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
