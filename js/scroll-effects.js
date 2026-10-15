// Scroll effects: active menu highlighting and section fade-in.
// Loaded with `defer`, so the HTML exists by the time this runs.
// Both features are enhancements: without JavaScript the page still
// works and every section is fully visible.
(function () {
  // ---------- 1. Active menu highlighting ----------
  // Marks the nav link for the section you're reading with
  // aria-current="true". The CSS styles that attribute, and screen
  // readers announce it as "current".
  var links = Array.prototype.slice.call(document.querySelectorAll(".nav-list a[href^='#']"));
  var targets = links
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  function updateActiveLink() {
    // A section becomes "current" once its top passes 30% down the screen.
    var line = window.innerHeight * 0.3;
    var current = null;

    targets.forEach(function (section) {
      if (section.getBoundingClientRect().top <= line) {
        current = section;
      }
    });

    // At the very bottom, the last section (Contact) may be too short to
    // reach that line, so highlight it whenever we can't scroll further.
    var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (atBottom && targets.length) {
      current = targets[targets.length - 1];
    }

    links.forEach(function (link) {
      if (current && link.getAttribute("href") === "#" + current.id) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  // Scroll events fire many times per frame. requestAnimationFrame
  // limits the work to once per screen repaint.
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      updateActiveLink();
      ticking = false;
    });
  }

  if (targets.length) {
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    updateActiveLink();
  }

  // ---------- 2. Section fade-in ----------
  // Skipped entirely for visitors who ask their system for less motion,
  // and for old browsers without IntersectionObserver.
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) return;

  var sections = document.querySelectorAll(".section");

  // This class switches on the "hidden until visible" styles in the CSS.
  // It's added by JavaScript so the content can never stay invisible
  // if this script fails to load.
  document.documentElement.classList.add("reveal-ready");

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // fade in once, then stop watching
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px" } // start just before the section is fully in view
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });
})();
