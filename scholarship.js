document.addEventListener('DOMContentLoaded', function() {
    // Particle.js
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6, random: false, straight: false, out_mode: 'out' }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
            modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });

    // Seats Histogram
    const seatsCtx = document.getElementById('seatsChart').getContext('2d');
    new Chart(seatsCtx, {
        type: 'bar',
        data: {
            labels: ['Engineering', 'Medicine', 'Business', 'Arts', 'Sciences'],
            datasets: [{
                label: 'Available Seats',
                data: [100, 50, 75, 60, 80],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                ],
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Seats'
                    }
                }
            }
        }
    });

    // Quota Pie Chart
    const quotaCtx = document.getElementById('quotaChart').getContext('2d');
    new Chart(quotaCtx, {
        type: 'pie',
        data: {
            labels: ['General', 'OBC', 'SC', 'ST', 'EWS'],
            datasets: [{
                data: [40, 27, 15, 7.5, 10],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                ],
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                },
                title: {
                    display: true,
                    text: 'Quota Distribution (%)'
                }
            }
        }
    });
});