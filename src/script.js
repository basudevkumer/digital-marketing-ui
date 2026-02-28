// for accordion

document.querySelectorAll("[data-accordion-icon]").forEach((icon) => {
  const button = icon.closest("button");
  const targetId = button.getAttribute("data-accordion-target");
  const target = document.querySelector(targetId);

  button.addEventListener("click", () => {
    const isOpen = !target.classList.contains("hidden");
    icon.textContent = isOpen ? "+" : "-";
  });
});

// for carosel

const track = document.querySelector(".track");
const nextBtn = document.querySelector(".rightBtn");
const previousBtn = document.querySelector(".leftBtn");
const items = document.querySelectorAll(".item");

let currentIndex = 0;
const gap = 20; 

function updateCarousel() {
  const containerWidth =
    document.querySelector(".slider-container").offsetWidth;
  let visibleItems = 1;


  if (window.innerWidth >= 1024)
    visibleItems = 3; 
  else if (window.innerWidth >= 768)
    visibleItems = 2; 
  else visibleItems = 1; 

 
  const itemWidth = (containerWidth - gap * (visibleItems - 1)) / visibleItems;

  items.forEach((item) => {
    item.style.width = `${itemWidth}px`;
  });

  const moveDistance = itemWidth + gap;
  track.style.transform = `translateX(-${currentIndex * moveDistance}px)`;


  previousBtn.style.opacity = currentIndex === 0 ? "0.3" : "1";
  nextBtn.style.opacity =
    currentIndex >= items.length - visibleItems ? "0.3" : "1";

  return { visibleItems, moveDistance };
}

nextBtn.addEventListener("click", () => {
  const { visibleItems } = updateCarousel();
  if (currentIndex < items.length - visibleItems) {
    currentIndex++;
    updateCarousel();
  }
});

previousBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});


window.addEventListener("resize", updateCarousel);
updateCarousel(); 
