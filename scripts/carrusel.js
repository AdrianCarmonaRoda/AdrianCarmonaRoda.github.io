document.querySelectorAll("[data-carousel]").forEach(carousel => {

    const track = carousel.querySelector("[data-carousel-track]");
    const images = Array.from(track.children);
    const nextButton = carousel.querySelector('[data-carousel-button="next"]');
    const prevButton = carousel.querySelector('[data-carousel-button="prev"]');
    let currentIndex = 0;
  
    const updateCarousel = () => {
      const width = images[0].clientWidth;
      track.style.transform = `translateX(-${currentIndex * width}px)`;
    };
  
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
    });
  
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateCarousel();
    });
  
    // Update on resize
    window.addEventListener("resize", updateCarousel);

});