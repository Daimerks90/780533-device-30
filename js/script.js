const slidesItems = document.querySelectorAll('.slides__item');
const slidesButtons = document.querySelectorAll('.slides__switcher-button');
const featuresTriggers = document.querySelectorAll('.features__trigger-link');
const featuresItems = document.querySelectorAll('.features__item');
const modalWriteLink = document.querySelector('.contacts__link');
const modalWriteClose = document.querySelector('.modal__close--write');
const modalWrite = document.querySelector('.modal__write');
const modalMapLink = document.querySelector('.contacts__img-link');
const modalMapClose = document.querySelector('.modal__map--close');
const modalMap = document.querySelector('.modal__map');


for (let i = 0; i < slidesButtons.length; i += 1) {
  slidesButtons[i].addEventListener('click', () => {
    const clickedIndex = i;
    for (const switcherButton of slidesButtons) {
      switcherButton.classList.remove('slides__switcher-button--current');
    }
    for (const slidesItem of slidesItems) {
      slidesItem.classList.remove('slides__item--active');
    }
    slidesButtons[clickedIndex].classList.add('slides__switcher-button--current');
    slidesItems[clickedIndex].classList.add('slides__item--active');;
  });
}

for (let i = 0; i < featuresTriggers.length; i += 1) {
  featuresTriggers[i].addEventListener('click', (evt) => {
    evt.preventDefault();
    const clickedIndex = i;
    for (const featuresTrigger of featuresTriggers) {
      featuresTrigger.classList.remove('features__trigger-link--current');
    }
    for (const featuresItem of featuresItems) {
      featuresItem.classList.remove('features__item--current');
    }
    featuresTriggers[clickedIndex].classList.add('features__trigger-link--current');
    featuresItems[clickedIndex].classList.add('features__item--current');
  });
}


modalWriteLink.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalWrite.classList.add('modal__write--open');
});

modalWriteClose.addEventListener('click', () => {
  modalWrite.classList.remove('modal__write--open');
});

modalMapLink.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalMap.classList.add('modal__map--open');
});

modalMapClose.addEventListener('click', () => {
  modalMap.classList.remove('modal__map--open');
});

