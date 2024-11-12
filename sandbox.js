/* ranking count*/
document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.counter');
    let animationStarted = false;
    
    function startCountAnimation() {
    if (animationStarted) return;
    animationStarted = true;
    
    counters.forEach(function(counter) {
        const target = parseInt(counter.textContent.replace(/,/g, ''));
        const startValue = 0;
        const duration = 2000; // 2 seconds
        let startTime = null;
    
        const step = function(currentTime) {
        if (!startTime) {
            startTime = currentTime;
        }
    
        const progress = Math.min((currentTime - startTime) / duration, 1);
          const value = Math.floor(progress * (target - startValue) + startValue);
        counter.textContent = value.toLocaleString();
    
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
        };
    
        window.requestAnimationFrame(step);
    });
    }
    
    function checkScroll() {
    const section = document.querySelector('.university-at-a-glance');
    const rect = section.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.8;
    
    if (rect.top <= triggerPoint) {
        startCountAnimation();
        window.removeEventListener('scroll', checkScroll);
}
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check initial position
});


/* back to top button*/
const backToTopContainer = document.getElementById("back-to-top-container");
const backToTopButton = document.getElementById("back-to-top");
const marquee = document.getElementById("marquee");

window.addEventListener("scroll", () => {
    const marqueeBottom = marquee.offsetTop + marquee.offsetHeight;
    if (window.pageYOffset > marqueeBottom) {
        backToTopContainer.classList.add("show");
    } else {
        backToTopContainer.classList.remove("show");
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


    /* video section*/
    const videoThumbnail = document.querySelector('.video-thumbnail');
    const videoPlayer = document.querySelector('.video-player');
    const playButton = document.querySelector('.play-button');
    
    videoThumbnail.addEventListener('mouseover', function() {
    videoPlayer.style.display = 'block';
    videoThumbnail.style.display = 'none';
    });
    
    playButton.addEventListener('click', function() {
    videoPlayer.style.display = 'block';
    videoThumbnail.style.display = 'none';
    });
    
    
    /* map section*/
    function toggleMapInfo() {
    const mapContainer = document.querySelector('.du-map-container');
    mapContainer.classList.toggle('expand');
    }
    
    function openMapsLink() {
    const northCampusLocation = "https://www.google.com/maps/place/University+of+Delhi,+North+Campus/@28.6722623,77.1899831,17z/data=!3m1!4b1!4m6!3m5!1s0x390cfd5b347eb62d:0x37205b715389640!8m2!3d28.6722576!4d77.1921718!16s%2Fg%2F11c21r1ys9";
    const southCampusLocation = "https://www.google.com/maps/place/University+of+Delhi,+South+Campus/@28.5518877,77.1969211,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce3a07be5a4fb:0x8fdcf2fdb2e1a7fc!8m2!3d28.551883!4d77.1991098!16s%2Fg%2F11c1tqh3j8";
    
    window.open(northCampusLocation, "_blank");
    window.open(southCampusLocation, "_blank");
    }
    
    /*-----events-----*/
// Tab functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
    // Remove active class from all tab buttons and panels
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabPanels.forEach(panel => panel.classList.remove('active'));

    // Add active class to the clicked button and corresponding panel
    button.classList.add('active');
    tabPanels[index].classList.add('active');
    });
});

// Get the "Ongoing" button element
const ongoingBtn = document.getElementById('ongoing-btn');

// Add a click event listener to the "Ongoing" button
ongoingBtn.addEventListener('click', () => {
    // Redirect to the "See all events" page
    window.open('https://events.columbia.edu/cal/main/showEventList.rdo', '_blank');
});



    // teaching method //
    // Get all section headings
const sectionHeadings = document.querySelectorAll('.section-heading');

// Create a new Intersection Observer instance
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add the animation class when the section heading is visible
    entry.target.classList.add('animate-slide-in');
    }
    });
});

// Observe each section heading
sectionHeadings.forEach((heading) => {
    observer.observe(heading);
});


    /* panel/ emma watson section*/
    window.addEventListener('load', function() {
    var panels = document.querySelectorAll('.panel');
    
    panels.forEach(function(panel) {
    var content = panel.querySelector('.content');
    var bgImg = panel.querySelector('.bg-img');
    
    panel.addEventListener('mouseenter', function() {
    bgImg.style.filter = 'blur(5px)';
    content.style.opacity = '1';
    });
    
    panel.addEventListener('mouseleave', function() {
    bgImg.style.filter = 'none';
    content.style.opacity = '0';
    });
    });
    });
    

    
    function adjustLogoSize(size) {
        document.getElementById('top-left-logo').style.width = size + 'px';
    }
    // Example usage: adjustLogoSize(150); // This will set the logo width to 150px
