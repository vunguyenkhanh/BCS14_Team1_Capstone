// Scroll Navbar
(function() {
    const scrollY = 50;
    const defaultClass = 'py-5 border-transparent';
    const scrollClass = 'py-2 bg-white/80 border-gray-200 backdrop-blur-lg';

    let scrollPos = 0;
    let ticking = false;

    function OnScroll(scrollPos) {
        const headers = document.querySelectorAll('header');
        const classArray = scrollClass.split(' ');
        const replaceArray = defaultClass.split(' ');

        headers.forEach((header) => {
            if (scrollPos > scrollY) {
                header.classList.remove(...replaceArray);
                header.classList.add('is-scroll', ...classArray);
                header.setAttribute('scroll', '');
            }
            //reduce the scrollY to avoid flickering when scrolling up
            if (scrollPos < Math.max(scrollY - 40, 10)) {
                header.classList.remove('is-scroll', ...classArray);
                header.classList.add(...replaceArray);
                header.removeAttribute('scroll');
            }
        });
    }

    document.addEventListener('scroll', (event) => {
        scrollPos = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(() => {
                OnScroll(scrollPos);
                ticking = false;
            });

            ticking = true;
        }
    });
})();

// dropdownArrow
document
    .getElementById('dropdownNavbarLink')
    .addEventListener('click', function() {
        var dropdownMenu = document.getElementById('dropdownNavbar');
        var dropdownArrow = document.getElementById('dropdownArrow');
        dropdownArrow.classList.toggle('rotate-180');
    });

// navBarDropDown
document
    .getElementById('navBarDropDown')
    .addEventListener('click', function() {
        const navBarPath = document.getElementById('navBarPath');
        const originalPath = 'M1 1h15M1 7h15M1 13h15';
        const newPath = 'M6 18 17.94 6M18 18 6.06 6';

        if (navBarPath.getAttribute('d') === originalPath) {
            navBarPath.setAttribute('d', newPath);
        } else {
            navBarPath.setAttribute('d', originalPath);
        }
    });

// next-pre button clicks
document.getElementById('preButton').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'blog1.html';
});

document.getElementById('nextButton').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'blog2.html';
});