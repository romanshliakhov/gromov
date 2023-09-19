const searchForm = document.querySelector('.search');
const iconSearch = document.querySelector('.header__search-icon');


function toggleActiveClass(targetElement, toggleElement, activeClass = 'active') {
  document.addEventListener("click", function (event) {
    if (!targetElement.contains(event.target) && event.target !== toggleElement) {
      targetElement.classList.remove(activeClass);
    } else if (event.target === toggleElement) {
      targetElement.classList.toggle(activeClass);
    }
  });
}

toggleActiveClass(searchForm, iconSearch);


