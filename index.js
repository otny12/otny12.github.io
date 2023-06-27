const slideContainer = document.getElementById("slide-container");
const slide = document.querySelector(".slide");
const leftButton = document.getElementById("slide-arrow-left");
const rightButton = document.getElementById("slide-arrow-right");

rightButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slideContainer.scrollLeft += slideWidth;
});

leftButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slideContainer.scrollLeft -= slideWidth;
});
