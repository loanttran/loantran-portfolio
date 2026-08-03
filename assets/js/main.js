/* Portfolio — theme toggle + header state. No dependencies. */
(function () {
  "use strict";

  var root = document.documentElement;
  var STORE_KEY = "portfolio-theme";

  /* ---- Theme ----
     Three states: "light", "dark", or unset (= follow the OS).
     The inline script in <head> applies the stored value before first paint
     so there is no flash; this only wires up the toggle. */

  function stored() {
    try { return localStorage.getItem(STORE_KEY); } catch (e) { return null; }
  }

  function persist(value) {
    try {
      if (value) localStorage.setItem(STORE_KEY, value);
      else localStorage.removeItem(STORE_KEY);
    } catch (e) { /* private mode — the toggle still works for this page view */ }
  }

  function systemPrefersDark() {
    return window.matchMedia &&
           window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function currentlyDark() {
    var attr = root.getAttribute("data-theme");
    if (attr === "dark") return true;
    if (attr === "light") return false;
    return systemPrefersDark();
  }

  function apply(theme) {
    if (theme) root.setAttribute("data-theme", theme);
    else root.removeAttribute("data-theme");
    var btn = document.querySelector(".theme-toggle");
    if (btn) {
      btn.setAttribute("aria-label",
        currentlyDark() ? "Switch to light theme" : "Switch to dark theme");
    }
  }

  var toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    apply(stored());
    toggle.addEventListener("click", function () {
      // If the new choice matches the OS setting, clear the override
      // so the page keeps following the system from here on.
      var next = currentlyDark() ? "light" : "dark";
      if ((next === "dark") === systemPrefersDark()) {
        persist(null);
        apply(null);
      } else {
        persist(next);
        apply(next);
      }
    });
  }

  if (window.matchMedia) {
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    var onChange = function () { if (!stored()) apply(null); };
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else if (mq.addListener) mq.addListener(onChange);
  }

  /* ---- Header hairline on scroll ---- */

  var header = document.querySelector(".site-header");
  if (header) {
    var ticking = false;
    var update = function () {
      header.setAttribute("data-scrolled", window.scrollY > 8 ? "true" : "false");
      ticking = false;
    };
    update();
    window.addEventListener("scroll", function () {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
  }
})();
