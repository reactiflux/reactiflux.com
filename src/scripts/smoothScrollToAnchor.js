(function () {
  document.addEventListener("click", function (e) {
    if (e.target.matches('a[href^="#"]')) {
      e.preventDefault();

      const target = e.target.getAttribute("href").replace("#", "");

      const element =
        document.getElementById(target) ||
        document.querySelector(`[name="${target}"]`);

      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
})();
