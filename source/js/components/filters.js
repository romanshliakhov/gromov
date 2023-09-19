document.addEventListener('DOMContentLoaded', function () {
  const categories = document.querySelector('.categories');
  const categoriesTrigger = categories.querySelector('.categories__head');
  const categoriesList = categories.querySelector('.categories__body');
  const tagsParrent = document.querySelector('.categories__choosed');
  const tagsHead = document.querySelector('.categories__head-current');
  const allTagsReset = document.querySelector('.categories__btn-reset');

  function renderPlaceholder() {
    if (tagsHead) {
      tagsHead.innerText = tagsHead.getAttribute('data-placeholder');
    }
  }

  renderPlaceholder();

  function categoriesActiveClass(toggleElement, targetElement, activeClass = 'active') {
    document.addEventListener("click", function (event) {
      if (!targetElement.contains(event.target) && event.target !== toggleElement) {
        targetElement.classList.remove(activeClass);
      } else if (event.target === toggleElement) {
        targetElement.classList.toggle(activeClass);
      }
    });
  }

  categoriesActiveClass(categoriesTrigger, categoriesList);

  const categoryCheckbox = categories.querySelectorAll('.categories__checkbox');
  const inputData = [];

  categoryCheckbox.forEach(function (item) {
    item.addEventListener('click', function (e) {
      checkedHandler(this);
    })
  });

  function checkedHandler(input) {
    const inputValue = input.value;
    const inputName = input.getAttribute('data-name');
    const inputIndex = inputData.findIndex(obj => obj.value === inputValue);

    if (inputIndex !== -1) {
      inputData.splice(inputIndex, 1);
    } else {
      inputData.push({
        value: inputValue,
        name: inputName
      });
    }

    if (inputData.length === 0) {
      allTagsReset.parentNode.style.display = 'none';
    } else {
      allTagsReset.parentNode.style.display = 'flex';
    }

    createTagList(tagsParrent, inputData);
    removeAllTags(allTagsReset, inputData);
    selectPlaceholder(inputData, tagsHead);
  }

  function createTagList(parent, data) {
    parent.innerHTML = '';

    data.forEach(obj => {
      const markup = `
        <li class="categories__choose" data-value="${obj.value}">
          <span class="categories__choose-name">${obj.name}</span>
          <span class="categories__choose-delete" data-id="${obj.value}">
            <svg width='24' height='24'>
              <use href='img/sprite/sprite.svg#close'></use>
            </svg>
          </span>
        </li>
      `;

      parent.insertAdjacentHTML('afterbegin', markup);
    });

    removeTag(parent);
  }

  function removeTag(parent) {
    const removeTagBtns = parent.querySelectorAll('.categories__choose-delete');

    removeTagBtns.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const currentBtnId = this.getAttribute('data-id');
        const inputIndex = inputData.findIndex(obj => obj.value === currentBtnId);

        if (inputIndex !== -1) {
          inputData.splice(inputIndex, 1);
          document.querySelector(`.categories__checkbox[value='${currentBtnId}']`).checked = false;
        }

        if (inputData.length === 0) {
          allTagsReset.style.display = 'none';
          allTagsReset.parentNode.style.display = 'none';
        }

        createTagList(tagsParrent, inputData);
        selectPlaceholder(inputData, tagsHead);
      })
    })
  }

  function removeAllTags(btn, arr) {
    if (arr.length > 0) {
      btn.style.display = 'flex';
      btn.parentNode.style.display = 'flex';
    } else {
      btn.style.display = 'none';
      btn.parentNode.style.display = 'none';
    }

    btn.addEventListener('click', function (e) {
      e.preventDefault();
      arr = [];
      createTagList(tagsParrent, arr);
      renderPlaceholder();

      categoryCheckbox.forEach(function (item) {
        item.checked = false;
      });

      btn.style.display = 'none';
      btn.parentNode.style.display = 'none';
    })
  }

  function selectPlaceholder(arr, currentBox) {
    const dataContent = currentBox.getAttribute('data-content');
    const tagCounter = arr.length;
    const currentBoxText = currentBox.getAttribute('data-placeholder');

    tagCounter > 0 ?
      currentBox.innerText = `${tagCounter} ${dataContent}` :
      currentBox.innerHTML = currentBoxText;
  }
});
