document.addEventListener('DOMContentLoaded', function () {
  const langToggle = document.getElementById('langMenuOpen');
  const langDropmenu = document.getElementById('langDropmenu');
  const langItems = document.querySelectorAll('.lang-dropmenu__item');

  // Otwieranie / Zamykanie dropdownu kliknięciem w przycisk główny (np. "En")
  if (langToggle && langDropmenu) {
    langToggle.addEventListener('click', function (e) {
      e.stopPropagation(); // Zapobiega natychmiastowemu zamknięciu przez document click
      langDropmenu.classList.toggle('active');

      const isOpen = langDropmenu.classList.contains('active');
      langToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // Wybór języka z listy
  langItems.forEach((item) => {
    item.addEventListener('click', function () {
      // 1. Usuń klasę aktywną ze wszystkich elementów
      langItems.forEach((el) =>
        el.classList.remove('lang-dropmenu__item--active'),
      );

      // 2. Dodaj klasę aktywną do klikniętego elementu
      this.classList.add('lang-dropmenu__item--active');

      // 3. Zmień tekst na głównym przycisku
      if (langToggle) {
        langToggle.textContent = this.textContent;
        langToggle.setAttribute('aria-expanded', 'false');
      }

      // 4. Zamknij menu
      langDropmenu.classList.remove('active');
    });
  });

  // Zamknij menu, jeśli użytkownik kliknie gdziekolwiek poza obszarem menu językowego
  document.addEventListener('click', function (e) {
    if (
      langDropmenu &&
      !langDropmenu.contains(e.target) &&
      e.target !== langToggle
    ) {
      langDropmenu.classList.remove('active');
      if (langToggle) langToggle.setAttribute('aria-expanded', 'false');
    }
  });
});
