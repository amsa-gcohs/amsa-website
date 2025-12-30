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
