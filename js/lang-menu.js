// Language menu enhancements
// The menu is a native <details> element, so it already opens and closes
// without JavaScript. This file only adds two conveniences:
//   1. Clicking anywhere outside the open menu closes it.
//   2. Pressing Escape closes it and returns keyboard focus to the globe button.
// Loaded with `defer`, so the HTML exists by the time this runs.
(function () {
  var menu = document.querySelector(".lang-menu");
  if (!menu) return;

  document.addEventListener("click", function (event) {
    if (menu.open && !menu.contains(event.target)) {
      menu.open = false;
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menu.open) {
      menu.open = false;
      menu.querySelector("summary").focus();
    }
  });
})();
