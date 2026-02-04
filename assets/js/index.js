window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.height = '70px';
        nav.style.background = 'rgba(26, 58, 95, 0.95)';
        nav.style.backdropFilter = 'blur(10px)';
        nav.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
    } else {
        nav.style.height = '80px';
        nav.style.background = '#1a3a5f';
        nav.style.backdropFilter = 'none';
        nav.style.borderBottom = 'none';
    }
});

// Mobile Menu Toggle
document.addEventListener('click', function(e) {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.getElementById('nav-overlay');
    
    if (menuToggle && (menuToggle.contains(e.target) || e.target === menuToggle)) {
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    } else if (navLinks && navLinks.classList.contains('active') && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        const icon = document.querySelector('#mobile-menu i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    }
});

// Mobile Accordion Toggle for Dropdowns
document.addEventListener('click', function(e) {
    if (window.innerWidth <= 1024) {
        const link = e.target.closest('.nav-links > li > a');
        if (link) {
            const parent = link.parentElement;
            const dropdown = parent.querySelector('.dropdown');
            
            if (dropdown) {
                e.preventDefault();
                parent.classList.toggle('open');
                
                // Rotate icon if exists
                const icon = link.querySelector('.dropdown-icon');
                if (icon) {
                    icon.style.transition = '0.3s';
                    icon.style.transform = parent.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0)';
                }
            }
        }
    }
});

// Reusable Gallery Slider Function
function initSlider(sliderId, prevBtnId, nextBtnId, dotsId) {
    const slider = document.getElementById(sliderId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
    const dotsContainer = document.getElementById(dotsId);

    if (slider && prevBtn && nextBtn && dotsContainer) {
        const items = slider.querySelectorAll('.gallery-item');
        const numDots = Math.max(2, Math.ceil(items.length / 1.5)); // Dynamic dots based on items

        // Create dots
        for (let i = 0; i < numDots; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                const scrollPos = (slider.scrollWidth - slider.clientWidth) * (i / (numDots - 1));
                slider.scrollTo({ left: scrollPos, behavior: 'smooth' });
            });
            dotsContainer.appendChild(dot);
        }

        const updateDots = () => {
            const scrollPercentage = slider.scrollLeft / (slider.scrollWidth - slider.clientWidth);
            const activeIndex = Math.round(scrollPercentage * (numDots - 1));
            const dots = dotsContainer.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === activeIndex);
            });
        };

        slider.addEventListener('scroll', updateDots);

        nextBtn.addEventListener('click', () => {
            const itemWidth = items[0].offsetWidth + 30;
            slider.scrollBy({ left: itemWidth, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            const itemWidth = items[0].offsetWidth + 30;
            slider.scrollBy({ left: -itemWidth, behavior: 'smooth' });
        });
    }
}

// Initialize all sliders on the page
document.addEventListener('DOMContentLoaded', () => {
    initSlider('mainSlider', 'mainPrevBtn', 'mainNextBtn', 'mainDots');
    initSlider('farmSlider', 'farmPrevBtn', 'farmNextBtn', 'farmDots');
    initSlider('tekfarSlider', 'tekfarPrevBtn', 'tekfarNextBtn', 'tekfarDots');
});

