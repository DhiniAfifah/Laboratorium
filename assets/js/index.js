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
