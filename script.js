document.addEventListener('DOMContentLoaded', function () {
  var reveals = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('in-view'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(function (el) { observer.observe(el); });
});

document.addEventListener('DOMContentLoaded', function () {
  var tabs = document.querySelectorAll('.artifact-tab');
  var panels = document.querySelectorAll('[data-panel]');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var target = tab.getAttribute('data-tab');

      tabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');

      panels.forEach(function (panel) {
        panel.hidden = panel.getAttribute('data-panel') !== target;
      });
    });
  });
});
