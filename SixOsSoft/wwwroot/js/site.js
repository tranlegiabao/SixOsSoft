//========== MENU ==========

const header = document.querySelector('.menudestop-box--top');
const logo = document.querySelector('#logo');

let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (header && logo) {
        if (currentScroll > lastScroll && currentScroll > 60) {
            // Khi cuộn xuống
            header.style.opacity = '0';
            header.style.transform = 'translateY(-25px) translateZ(0px)';
            header.style.height = '0px';
            header.style.padding = '0px';

            // Thu nhỏ logo
            logo.style.width = '145px'; // Kích thước nhỏ hơn
        } else {
            // Khi cuộn lên
            header.style.opacity = '1';
            header.style.transform = 'translateY(0px) translateZ(0px)';
            header.style.height = '60px';
            header.style.padding = '12px 0px 12px 20px';

            // Trả logo về kích thước ban đầu
            logo.style.width = '220px';
        }
    }

    lastScroll = currentScroll;
});

function initCarouselDesktop() {
    const carousel = document.getElementById('banner');
    if (!carousel) return;
    carousel.style.marginTop = '0px';
}

function initCarouselMobile() {
    const carousel = document.getElementById('banner');
    if (!carousel) return;
    carousel.style.marginTop = '0px';
}

function updateCarouselLayout() {
    const carousel = document.getElementById('banner');
    if (carousel) {
        carousel.style.marginTop = '0px';
    }
}

window.addEventListener('load', updateCarouselLayout);
window.addEventListener('resize', updateCarouselLayout);

//========== breadcrumb VOI MENU DESTOP ==========

function initDesktopOffset() {
    document.querySelectorAll('.breadcrumb-nav')
        .forEach(el => el.style.marginTop = '0px');
}

function initMobileOffset() {
    document.querySelectorAll('.breadcrumb-nav')
        .forEach(el => el.style.marginTop = '0px');
}

function updateOffset() {
    document.querySelectorAll('.breadcrumb-nav')
        .forEach(el => el.style.marginTop = '0px');
}

window.addEventListener('load', updateOffset);
window.addEventListener('resize', updateOffset);
