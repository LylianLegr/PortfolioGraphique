document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".animate_number");
    const duration = 1500; // durée animation en ms

    const animateCounter = (el) => {
        const target = +el.dataset.value;
        let start = 0;
        const startTime = performance.now();

        const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // easing smooth
            const eased = 1 - Math.pow(1 - progress, 3);

            const suffix = el.dataset.suffix || "";
            el.textContent = Math.floor(eased * target) + suffix;
            el.style.color = "var(--color-purple)";
            el.style.fontWeight = "var(--font-weight_semibold)";
            el.style.fontSize = "40pt";
            el.style.textAlign = "center";
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                el.textContent = target + suffix;
            }
        };

        requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.6 }
    );

    counters.forEach(counter => observer.observe(counter));
    
});