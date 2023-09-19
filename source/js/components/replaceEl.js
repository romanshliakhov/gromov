let replaceSettings = {
  beforebegin: 'beforebegin', // перед самим элементом targetElement
  afterbegin: 'afterbegin', // внутри элемента targetElement, перед его первым потомком
  beforeend: 'beforeend', //  внутри элемента targetElement, после его последнего потомка
  afterend: 'afterend', // после самого элемента targetElement
  mobile: 576,
  smallTablet: 768,
  tablet: 992,
}

let elementName = {
  headerNav: '.header__nav',
  headerNavDesktop: '.header__inner',
  headerNavMobile: '.mobile__menu',

  heroContacts: '.header__contacts',
  heroContactsDesktop: '.header__panel',
  heroContactsMobile: '.mobile__menu',

  heroBtn: '.hero__btn',
  heroBtnDesktop: '.hero__descr',
  heroBtnMobile: '.hero__wrapp',

  resultsBtn: '.results__more',
  resultsBtnDesktop: '.results__details',
  resultsBtnMobile: '.results__inner',
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
  replaceElements(items, elementName.headerNav, elementName.headerNavDesktop, elementName.headerNavMobile, replaceSettings.beforeend, replaceSettings.afterbegin, replaceSettings.tablet);

  replaceElements(items, elementName.heroContacts, elementName.heroContactsDesktop, elementName.heroContactsMobile, replaceSettings.beforeend, replaceSettings.afterend, replaceSettings.tablet);

  replaceElements(items, elementName.heroBtn, elementName.heroBtnDesktop, elementName.heroBtnMobile, replaceSettings.beforeend, replaceSettings.afterend, replaceSettings.mobile);

  replaceElements(items, elementName.resultsBtn, elementName.resultsBtnDesktop, elementName.resultsBtnMobile, replaceSettings.afterend, replaceSettings.afterend, replaceSettings.tablet);
});

window.addEventListener('DOMContentLoaded', () => {
  replaceElements(items, elementName.headerNav, elementName.headerNavDesktop, elementName.headerNavMobile, replaceSettings.beforeend, replaceSettings.afterbegin, replaceSettings.tablet);

  replaceElements(items, elementName.heroContacts, elementName.heroContactsDesktop, elementName.heroContactsMobile, replaceSettings.beforeend, replaceSettings.afterend, replaceSettings.tablet);

  replaceElements(items, elementName.heroBtn, elementName.heroBtnDesktop, elementName.heroBtnMobile, replaceSettings.beforeend, replaceSettings.afterend, replaceSettings.mobile);


  replaceElements(items, elementName.resultsBtn, elementName.resultsBtnDesktop, elementName.resultsBtnMobile, replaceSettings.afterend, replaceSettings.afterend, replaceSettings.tablet);
});
