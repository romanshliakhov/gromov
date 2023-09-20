let replaceSettings = {
  beforebegin: 'beforebegin', // перед самим элементом targetElement
  afterbegin: 'afterbegin', // внутри элемента targetElement, перед его первым потомком
  beforeend: 'beforeend', //  внутри элемента targetElement, после его последнего потомка
  afterend: 'afterend', // после самого элемента targetElement
  mobile: 576,
  smallTablet: 768,
  tablet: 1024,
}

let elementName = {
  headerNav: '.header__nav',
  headerNavDesktop: '.header__logo',
  headerNavMobile: '.mobile__menu',

  headerBtn: '.header__btn',
  headerBtnDesktop: '.burger',
  headerBtnMobile: '.mobile__menu',
}

let items = [...document.querySelectorAll('.container')];

const replaceElements = (elements, elementClass, desktopClass, mobileClass, mobileSetting, desktopSetting, breakpointSetting) => {
  let containerWidth = document.documentElement.clientWidth;

  elements.map(function (item) {
    const myElement = item.querySelector(elementClass);
    const myDesktop = item.querySelector(desktopClass);
    const myMobile = item.querySelector(mobileClass);

    (function() {
      if (myDesktop && myElement && myMobile) {
        containerWidth <= breakpointSetting ?
        myMobile.insertAdjacentElement(mobileSetting, myElement) :
        myDesktop.insertAdjacentElement(desktopSetting, myElement);
      }
    }());
  });
}

window.addEventListener('resize', () => {
  replaceElements(items, elementName.headerNav, elementName.headerNavDesktop, elementName.headerNavMobile, replaceSettings.beforeend, replaceSettings.afterend, replaceSettings.tablet);

  replaceElements(items, elementName.headerBtn, elementName.headerBtnDesktop, elementName.headerBtnMobile, replaceSettings.beforeend, replaceSettings.beforebegin, replaceSettings.mobile);
});

window.addEventListener('DOMContentLoaded', () => {
  replaceElements(items, elementName.headerNav, elementName.headerNavDesktop, elementName.headerNavMobile, replaceSettings.beforeend, replaceSettings.afterend, replaceSettings.tablet);

  replaceElements(items, elementName.headerBtn, elementName.headerBtnDesktop, elementName.headerBtnMobile, replaceSettings.beforeend, replaceSettings.beforebegin, replaceSettings.mobile);

});
