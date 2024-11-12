window.addEventListener('load', function() {
    const collegeCards = document.querySelectorAll('.college-card');

    collegeCards.forEach(function(card) {
        const image = card.querySelector('.college-image img');
        image.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });

        image.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});