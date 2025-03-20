document.addEventListener("DOMContentLoaded", function() {
    const steps = document.querySelectorAll(".step");

    steps.forEach((step, index) => {
        setTimeout(() => {
            step.style.opacity = "1";
            step.style.transform = "translateY(0)";
        }, index * 300);
    });
});
