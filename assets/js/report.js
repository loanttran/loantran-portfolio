// Year in the footer, and the theme switch. Same storage key as the live site.
document.getElementById("year").textContent = new Date().getFullYear();
(function () {
  var root = document.documentElement, btn = document.querySelector(".theme");
  if (!btn) return;
  function isDark() {
    var t = root.getAttribute("data-theme");
    return t ? t === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  }
  function label() { btn.textContent = isDark() ? "Light" : "Dark"; }
  btn.addEventListener("click", function () {
    var next = isDark() ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("portfolio-theme", next); } catch (e) {}
    label();
  });
  label();
})();
