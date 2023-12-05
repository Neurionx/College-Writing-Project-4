document.addEventListener("DOMContentLoaded", function () {
    const readMoreButton = document.querySelector(".read-more-button");
    const readMoreContent = document.querySelector(".read-more-content");

    readMoreButton.addEventListener("click", function () {
        readMoreContent.classList.toggle('expanded');
        readMoreButton.textContent = readMoreContent.classList.contains('expanded') ? "Read Less" : "Read More";
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        rootMargin: "0px",
        threshold: 0.1
    });

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => {
        observer.observe(section);
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    window.addEventListener('scroll', () => {
        hiddenElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                el.classList.add('revealed');
            }
        });
    });
});

window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    var bgParallax = document.querySelector('.parallax');
    var parallaxSpeed = 0.5;
    var limit = bgParallax.offsetTop + bgParallax.offsetHeight;
    if (scrollPosition <= limit) {
        bgParallax.style.backgroundPositionY = (scrollPosition * parallaxSpeed) + 'px';
    }
});

document.querySelector('.read-more-button').addEventListener('click', function() {
    const parallax = document.querySelector('.parallax');
    // Check if the content is expanded and adjust background size accordingly
    if (readMoreContent.classList.contains('expanded')) {
        parallax.style.backgroundSize = 'contain'; // or specific pixel values
    } else {
        parallax.style.backgroundSize = 'cover';
    }
});

