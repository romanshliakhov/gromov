const parrent = [...document.querySelectorAll('.code')];
const infoLabel = document.querySelector('.copied');

const infoShow = function(el){
  el.classList.add('show');

  setTimeout(function(){
    el.classList.remove('show')
  }, 1500)
}

function copyFunction(textInput) {
  textInput.select();
  document.execCommand("copy");
  infoShow(infoLabel);
  window.getSelection().removeAllRanges();
}

parrent.map(function(item){
  const currentInput =  item.querySelector('.code__content');
  const currentButton =  item.querySelector('.code__btn');

  currentButton && currentButton.addEventListener('click', (e) => {
    e.preventDefault();

    copyFunction(currentInput)
  });
});




