// Dark mode toggle
// This file loads in <head>, so part 1 runs before the page is drawn:
// a returning visitor who chose dark never sees a white flash.
(function () {
  var root = document.documentElement;
  var STORAGE_KEY = "theme";

  // 1. Apply the visitor's saved choice, if any.
  //    localStorage can throw (private windows, blocked storage), so it's wrapped in try/catch.
  try {
    if (localStorage.getItem(STORAGE_KEY) === "dark") {
      root.dataset.theme = "dark";
    }
  } catch (error) {}

  // 2. Once the HTML exists, wire up the button.
  document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector(".theme-toggle");
    if (!button) return;

    // The button ships with the `hidden` attribute, so visitors without
    // JavaScript never see a button that does nothing. Reveal it here.
    button.hidden = false;
    button.setAttribute("aria-pressed", String(root.dataset.theme === "dark"));

    button.addEventListener("click", function () {
      var isDark = root.dataset.theme !== "dark";

      if (isDark) {
        root.dataset.theme = "dark";
      } else {
        delete root.dataset.theme;
      }

      // aria-pressed tells screen readers whether dark mode is on.
      button.setAttribute("aria-pressed", String(isDark));

      try {
        localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
      } catch (error) {}
    });
  });
})();
