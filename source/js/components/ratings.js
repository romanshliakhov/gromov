const ratings = document.querySelectorAll('.rating');
if(ratings.length > 0) {
  initRatings();
}

// Main function
function initRatings() {
  let ratingActive, ratingValue;

  // Initilization All ratings
  for ( let index = 0; index < ratings.length; index++ ) {
    const rating = ratings[index];
    initRating(rating);
  }

  // Initilization current rating
  function initRating(rating) {
    initRatingVars(rating);

    setRatingActiveWidth();

    if (rating.classList.contains('rating_set')) {
      setRating(rating);
    }
  }

  // Initilization vars
  function initRatingVars(rating) {
    ratingActive = rating.querySelector('.rating__active');
    ratingValue = rating.querySelector('.rating__value');
  }

  // Change background color width
  function setRatingActiveWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = index / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }

  // Option to rate
  function setRating(rating) {
    const ratingItems = rating.querySelectorAll('.rating__item');

    for ( let index = 0; index < ratingItems.length; index++ ) {
      const ratingItem = ratingItems[index];

      ratingItem.addEventListener('mouseenter', function(e) {
        initRatingVars(rating);
        setRatingActiveWidth(ratingItem.value);
      });

      ratingItem.addEventListener('mouseleave', function(e) {
        setRatingActiveWidth();
      });

      ratingItem.addEventListener('click', function(e) {
        initRatingVars(rating);

        if (rating.dataset.ajax) {
          setRatingValue(ratingItem.value, rating);
        } else {
          ratingValue.innerHTML  = index + 1;
          setRatingActiveWidth();
        }
      });
    }
  }

  async function setRatingValue(value, rating) {
    if (!rating.classList.contains("rating_sending")) {
      rating.classList.add("rating_sending");
    }

    // Отправка данных (value) на сервер
    let response = await fetch('rating.json', {
      method: 'GET',

      // body: JSON.stringify({
      //   userRating: value
      // }),
      // headers: {
      //   'content-type': 'application/json'
      // }
    });

    if(response.ok) {
      const result = await response.json();

      // Получаем новый рейтинг
      const newRating = result.newRating;

      // Вывод нового среднего результата
      ratingValue.innerHTML = newRating;

      // Обновление активных звёзд
      setRatingActiveWidth();

      rating.classList.remove('rating_sending');
    } else {
      alert('Ошибка');

      rating.classList.remove('rating_sending');
    }
  }
}
