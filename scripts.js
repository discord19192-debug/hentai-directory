document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".page-content img");
  images.forEach(img => {
    img.addEventListener("click", () => {
      const src = img.src;
      const popup = document.createElement("div");
      popup.style.position = "fixed";
      popup.style.top = "0";
      popup.style.left = "0";
      popup.style.width = "100%";
      popup.style.height = "100%";
      popup.style.background = "rgba(0,0,0,0.8)";
      popup.style.display = "flex";
      popup.style.alignItems = "center";
      popup.style.justifyContent = "center";
      popup.style.cursor = "pointer";
      popup.innerHTML = `<img src="${src}" style="max-width:90%; max-height:90%; border-radius:10px;">`;
      document.body.appendChild(popup);

      popup.addEventListener("click", () => {
        document.body.removeChild(popup);
      });
    });
  });
});
