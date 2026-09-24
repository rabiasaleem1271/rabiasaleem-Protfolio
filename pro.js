// Initialize Typed.js Dynamic Text Effect
document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector(".text")) {
        new Typed(".text", {
            strings: [
                "Full Stack Developer",
                "UI/UX Designer",
                "Fronted Developer",
                "Problem Solver"
            ],
            typeSpeed: 100,
            backSpeed: 60,
            backDelay: 1000,
            loop: true
        });
    }
});
// Soft Skill Node Click Pulse Effect
document.querySelectorAll('.soft-node').forEach(node => {
    node.addEventListener('click', function(e) {
        this.style.boxShadow = '0 0 40px #0cef';
        setTimeout(() => {
            this.style.boxShadow = '';
        }, 600);
    });
});

// Skills: looping tag sliders (duplicate the chips so the loop is seamless)
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".loop-slider .inner").forEach(function (inner) {
        const chips = Array.from(inner.children);
        for (let i = 0; i < 3; i++) {
            chips.forEach(function (chip) { inner.appendChild(chip.cloneNode(true)); });
        }
    });
});


// About section: soft fade-in while scrolling
document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".ab-section");
    if (!section) return;
    section.classList.add("ab-js");

    const io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            if (e.isIntersecting) {
                e.target.classList.add("in");
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.15 });

    section.querySelectorAll(".ab-reveal").forEach(function (el) { io.observe(el); });
});


// Mobile menu (hamburger)
document.addEventListener("DOMContentLoaded", function () {
    const icon = document.getElementById("menu-icon");
    const nav = document.querySelector(".navbar");
    if (!icon || !nav) return;

    function closeMenu() {
        nav.classList.remove("active");
        icon.classList.remove("bx-x");
    }

    icon.addEventListener("click", function () {
        nav.classList.toggle("active");
        icon.classList.toggle("bx-x");
    });
    nav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeMenu); });
    window.addEventListener("scroll", closeMenu);
    window.addEventListener("resize", function () { if (window.innerWidth > 900) closeMenu(); });
});
