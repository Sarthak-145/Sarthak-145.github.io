(function() {
  const toggle = document.getElementById("theme-toggle");
  const root = document.documentElement;

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }

  toggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    setTheme(next);
  });

  // Init: load from localStorage
  const stored = localStorage.getItem("theme");
  if (stored) {
    setTheme(stored);
  } else {
    // Default to dark
    setTheme("dark");
  }
})();
