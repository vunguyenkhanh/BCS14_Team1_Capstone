// dropdownArrow
document
  .getElementById('dropdownNavbarLink')
  .addEventListener('click', function () {
    var dropdownMenu = document.getElementById('dropdownNavbar');
    var dropdownArrow = document.getElementById('dropdownArrow');
    dropdownArrow.classList.toggle('rotate-180');
  });
