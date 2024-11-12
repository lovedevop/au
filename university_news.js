window.addEventListener('load', function() {
    const newsCards = document.querySelectorAll('.news-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    });

    newsCards.forEach((card) => {
        observer.observe(card);
    });
});