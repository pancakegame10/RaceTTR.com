document.addEventListener("DOMContentLoaded", function () {
  // Build the overlay once
  var overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  overlay.innerHTML = '<button class="lightbox-close" aria-label="Close">&times;</button><img class="lightbox-img-large" alt="">';
  document.body.appendChild(overlay);

  var overlayImg = overlay.querySelector(".lightbox-img-large");
  var closeBtn = overlay.querySelector(".lightbox-close");

  function openLightbox(src, alt) {
    overlayImg.src = src;
    overlayImg.alt = alt || "";
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  // Attach to every zoomable image that actually loaded successfully
  document.querySelectorAll("img.zoomable").forEach(function (img) {
    img.addEventListener("click", function () {
      if (img.style.display === "none") return; // broken/missing image, nothing to enlarge
      openLightbox(img.currentSrc || img.src, img.alt);
    });
  });

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay || e.target === closeBtn) closeLightbox();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });
});
