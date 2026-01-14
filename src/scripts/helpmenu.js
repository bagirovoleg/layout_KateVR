document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('helpmenu_open');
  const menuClose = document.getElementById('menuclose_3');
  const dropmenu = document.getElementById('helpmenu');

  // Otwieranie menu
  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      dropmenu.classList.add('active');
      document.body.style.overflow = 'hidden'; // Zablokuj przewijanie strony
    });
  }

  // Zamykanie menu
  if (menuClose) {
    menuClose.addEventListener('click', function () {
      dropmenu.classList.remove('active');
      document.body.style.overflow = ''; // Odblokuj przewijanie strony
    });
  }

  // Zamykanie menu po kliknięciu na link
  const menuLinks = dropmenu.querySelectorAll('a');
  menuLinks.forEach((link) => {
    link.addEventListener('click', function () {
      dropmenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Zamykanie menu po kliknięciu poza nim
  dropmenu.addEventListener('click', function (e) {
    if (e.target === dropmenu) {
      dropmenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});
