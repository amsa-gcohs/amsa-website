// Smooth scrolling for internal links (if not supported natively)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function trackJoinForm() {
    if (typeof gtag === "function") {
        gtag('event', 'join_form_submit', {
            event_category: 'Forms',
            event_label: 'AMSA Membership Form'
        });
    }
}

// Mobile nav toggle (hamburger)
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navWrapper = document.querySelector('.nav-wrapper');
    if (!navToggle || !navWrapper) return;

    navToggle.addEventListener('click', () => {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!expanded));
        navWrapper.classList.toggle('open');
    });

    // Close mobile menu when a link is clicked
    navWrapper.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.setAttribute('aria-expanded', 'false');
            navWrapper.classList.remove('open');
        });
    });
});
