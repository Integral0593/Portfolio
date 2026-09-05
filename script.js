/*
  AI USAGE NOTE:
  Drafted with help from Claude (Anthropic). The theme-toggle logic (reading/
  writing localStorage, toggling a class on <html>, updating the button label)
  was AI-suggested based on a request for a dark/light mode toggle satisfying
  the project's "interactive feature" requirement. Reviewed and adapted by hand.
  See /prompt-log.md for the actual prompts used.

  This file is shared across all pages via <script src="/js/script.js">.
*/

(function () {
  const STORAGE_KEY = "portfolio-theme";
  const root = document.documentElement;
  const toggleButton = document.querySelector(".theme-toggle");

  // Default to dark (matches the site's primary design), but respect a
  // previously saved choice if the visitor made one.
  function getSavedTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (err) {
      // localStorage can throw in some privacy modes -- fail quietly to dark.
      return null;
    }
  }

  function applyTheme(theme) {
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
    if (toggleButton) {
      toggleButton.textContent = theme === "light" ? "Dark mode" : "Light mode";
      toggleButton.setAttribute(
        "aria-label",
        theme === "light" ? "Switch to dark mode" : "Switch to light mode"
      );
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (err) {
      /* ignore storage errors */
    }
  }

  const saved = getSavedTheme();
  applyTheme(saved === "light" ? "light" : "dark");

  if (toggleButton) {
    toggleButton.addEventListener("click", function () {
      const isLight = root.classList.contains("light");
      const next = isLight ? "dark" : "light";
      applyTheme(next);
      saveTheme(next);
    });
  }

  // Mark the current page's nav link as active for a clearer sense of place.
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (link) {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
})();
