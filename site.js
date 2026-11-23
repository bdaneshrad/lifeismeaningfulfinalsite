document.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('.site-nav');
  var btn = document.querySelector('.menu-btn');
  if (nav && btn) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.textContent = open ? 'Close' : 'Menu';
    });
  }
  var soon = document.getElementById('soon');
  if (soon && soon.showModal) {
    document.querySelectorAll('[data-soon]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        var form = el.closest('form');
        var typed = form && form.querySelector('input[type=email]');
        if (typed && typed.value) { soon.querySelector('input[type=email]').value = typed.value; }
        soon.showModal();
      });
    });
    soon.querySelector('.soon-close').addEventListener('click', function () { soon.close(); });
    soon.addEventListener('click', function (e) { if (e.target === soon) { soon.close(); } });
  }
});
