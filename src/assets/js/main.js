window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 10) {
    header.classList.add(
      'bg-white/80',
      'border-gray-200',
      'backdrop-blur-lg',
      'py-2',
    );
    header.classList.remove('border-transparent', 'py-5');
  } else {
    header.classList.remove(
      'bg-white/80',
      'border-gray-200',
      'backdrop-blur-lg',
      'py-2',
    );
    header.classList.add('border-transparent', 'py-5');
  }
});

// dropdownArrow
document
  .getElementById('dropdownNavbarLink')
  .addEventListener('click', function () {
    var dropdownMenu = document.getElementById('dropdownNavbar');
    var dropdownArrow = document.getElementById('dropdownArrow');
    dropdownArrow.classList.toggle('rotate-180');
  });

// navBarDropDown
document
  .getElementById('navBarDropDown')
  .addEventListener('click', function () {
    const navBarPath = document.getElementById('navBarPath');
    const originalPath = 'M1 1h15M1 7h15M1 13h15';
    const newPath = 'M6 18 17.94 6M18 18 6.06 6';

    if (navBarPath.getAttribute('d') === originalPath) {
      navBarPath.setAttribute('d', newPath);
    } else {
      navBarPath.setAttribute('d', originalPath);
    }
  });
