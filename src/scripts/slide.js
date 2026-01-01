// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName('mySlides');
//   let dots = document.getElementsByClassName('dot');

//   // Ukryj wszystkie slajdy
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none';
//   }

//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }

//   // Usuń klasę 'active' ze wszystkich kropek
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(' active', '');
//   }

//   // Pokaż aktualny slajd i aktywuj kropkę
//   if (slides[slideIndex - 1]) {
//     slides[slideIndex - 1].style.display = 'block';
//   }
//   if (dots[slideIndex - 1]) {
//     dots[slideIndex - 1].className += ' active';
//   }

//   // Uruchom funkcję ponownie za 2 sekundy (2000 ms)
//   setTimeout(showSlides, 2000);
// }

// // Funkcja obsługująca kliknięcia w kropki (zdefiniowana w HTML jako onclick="currentSlide(n)")
// // W tym prostym trybie automatycznym służy głównie do uniknięcia błędów w konsoli po kliknięciu.
// function currentSlide(n) {
//   slideIndex = n - 1;
//   // Uwaga: Aby w pełni obsłużyć ręczne kliknięcia wraz z automatem, należałoby resetować timer (clearTimeout).
// }
let slideIndex = 1;
showSlides(slideIndex);

// Funkcja dla przycisków next/prev
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Funkcja dla kropek (jeśli używasz)
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mySlides'); // Upewnij się, że slajdy mają tę klasę
  let dots = document.getElementsByClassName('dot');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  if (slides.length > 0) {
    slides[slideIndex - 1].style.display = 'block';
  }
  if (dots.length > 0) {
    dots[slideIndex - 1].className += ' active';
  }
}
