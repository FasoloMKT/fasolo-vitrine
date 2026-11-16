(function () {
  function mover() {
    if (!document.documentElement.classList.contains("page-home")) return;
    var banner = document.querySelector(".container-flex-banner-3");
    var abas = document.querySelector(".container-flex-button-filter-extra-home");
    if (!banner || !abas || !abas.parentNode) return;
    var bloco = banner.parentElement || banner;
    if (bloco === abas || bloco.contains(abas)) return;
    abas.parentNode.insertBefore(bloco, abas);
    bloco.style.margin = "28px auto 8px";
    bloco.style.maxWidth = "1280px";
    bloco.style.padding = "0 16px";
    bloco.style.boxSizing = "border-box";
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mover);
  else mover();
})();
