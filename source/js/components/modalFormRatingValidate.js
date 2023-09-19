const starsRadio = document.querySelectorAll('.rating__item');
const modalTextAlert = document.querySelector('.rating__form-alert');
const starsConfirmBtn = document.querySelector('.rating__form');


starsRadio.forEach(star => {
  star.addEventListener('change', function(){
    if (star.checked) {
      modalTextAlert.style.display = 'none';
      starsConfirmBtn.removeAttribute('disabled', false);
    }
  })
});


