let slideIndex = 0;
const slides = document.querySelectorAll(".slides");

function showSlides() {
    slides.forEach(slide => slide.classList.remove("active"));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}
setTimeout(showSlides, 3000);
