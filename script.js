document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".hnti-btn");
  buttons.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
      console.log(`Button ${index + 1} clicked!`);
      // You can add extra functionality here
    });
  });
});
