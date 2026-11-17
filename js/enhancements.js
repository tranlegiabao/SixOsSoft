/* MINDLAB BẾN TRE - Dynamic Active Navigation & UX Enhancements */
document.addEventListener('DOMContentLoaded', function () {
    // 1. Dynamic Active Nav Highlighting
    var path = window.location.pathname.toLowerCase();
    var navLinks = document.querySelectorAll('.styles_navbar__Oape1 a, .mobile--nav a.nav-link');

    // Clean active classes initially
    navLinks.forEach(function (link) {
        link.classList.remove('active');
        var parentLi = link.closest('li');
        if (parentLi) parentLi.classList.remove('active');
    });

    var matched = false;
    navLinks.forEach(function (link) {
        var href = link.getAttribute('href');
        if (!href) return;
        href = href.toLowerCase();

        // Exact match or partial match for subpages
        var isHomePage = (path === '/' || path === '' || path.indexOf('index') !== -1);
        var isLinkHome = (href === '/' || href === 'index.html' || href === '/index.html');

        if (isHomePage && isLinkHome) {
            link.classList.add('active');
            var parentLi = link.closest('li');
            if (parentLi) parentLi.classList.add('active');
            matched = true;
        } else if (!isHomePage && !isLinkHome) {
            var cleanHref = href.replace('.html', '').replace('/', '');
            if (cleanHref && path.indexOf(cleanHref) !== -1) {
                link.classList.add('active');
                var parentLi = link.closest('li');
                if (parentLi) parentLi.classList.add('active');
                matched = true;
            }
        }
    });

    // Default to Home if root path
    if (!matched && (path === '/' || path === '')) {
        var homeLink = document.querySelector('.styles_navbar__Oape1 a[href="/"], .styles_navbar__Oape1 a[href="index.html"]');
        if (homeLink) {
            homeLink.classList.add('active');
            var parentLi = homeLink.closest('li');
            if (parentLi) parentLi.classList.add('active');
        }
    }

    // 2. Back to Top Button
    var topBtn = document.querySelector('.float-btn-top');
    if (topBtn) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                topBtn.classList.add('show');
            } else {
                topBtn.classList.remove('show');
            }
        });
        topBtn.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
