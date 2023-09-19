// multiplays
let cards = document.querySelectorAll('.access__variant');

cards.forEach(item => {
  let cardSelect = item.querySelector('.access__variant-select');
  let cardDiscount = item.querySelector('.access__discount span');
  let cardMonthPrice = item.querySelector('.access__monthprice span');
  let cardPriceTotal = item.querySelector('.access__price-total');
  let cardBtn = item.querySelector('.access__payments');

  if(cardSelect){
    let options = cardSelect.querySelectorAll('li');

    options.forEach(li => {
      let link = li.getAttribute('data-link');
      let monthPrice = li.getAttribute('data-month');
      let discount = li.getAttribute('data-discount');
      let totalPrice = li.getAttribute('data-price');

      li.addEventListener('click', () => {
        cardDiscount.textContent = discount;
        cardMonthPrice.textContent = monthPrice;
        cardPriceTotal.textContent = totalPrice;
        cardBtn.setAttribute('href', link);
      })

    });
  }
});





