document.addEventListener('DOMContentLoaded', () => {

    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800, // Animation duration
        easing: 'ease-in-out', // Animation easing
        once: true, // Whether animation should happen only once - while scrolling down
        offset: 100 // Offset (in px) from the original trigger point
    });

    // Initialize tsParticles
    tsParticles.load('tsparticles', { // id of the container element
        // --- Paste a config here ---
        // Example Config (Subtle & Dark):
        // You can generate many cool configs here: https://particles.js.org/samples.html#nasa
        // or customize this one extensively
         particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" }, // Particle color
            shape: { type: "circle" }, // Shape type
            opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
            size: { value: 3, random: true, anim: { enable: false } },
            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 }, // Lines connecting particles
            move: {
                enable: true,
                speed: 2, // Particle speed
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out", // How particles behave when hitting the edge
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
        },
        interactivity: {
            detect_on: "canvas", // Detect interactions on canvas
            events: {
                onhover: { enable: true, mode: "repulse" }, // 'grab', 'bubble', 'repulse'
                onclick: { enable: true, mode: "push" },    // 'push', 'remove', 'bubble'
                resize: true
            },
            modes: {
                grab: { distance: 400, line_opacity: 1 },
                bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                repulse: { distance: 100, duration: 0.4 }, // Make particles move away from cursor
                push: { particles_nb: 4 }, // Number of particles added on click
                remove: { particles_nb: 2 }
            }
        },
        retina_detect: true // Adjusts for high-density displays
    })
    .then(container => {
        console.log('tsParticles initialized');
        // You can keep the container reference if you need to control particles later
    })
    .catch(error => {
        console.error('Error initializing tsParticles:', error);
    });


     // Dynamic Year in Footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

     // Navbar Scroll Behavior (Optional: slight background change on scroll)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.95)'; // Make slightly more opaque
        } else {
             navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.85)'; // Back to initial
        }
    });

    // Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    if(hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Optional: change hamburger icon
             const icon = hamburger.querySelector('i');
             if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
             } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
             }
        });

        // Close menu when a link is clicked (for single-page apps)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                 if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.querySelector('i').classList.remove('fa-times');
                    hamburger.querySelector('i').classList.add('fa-bars');
                 }
            });
        });
    }


    // Smooth Scroll for internal links (handled by CSS 'scroll-behavior: smooth;')
    // If more complex scroll logic is needed (e.g., calculating offsets), implement here.

}); // End DOMContentLoaded