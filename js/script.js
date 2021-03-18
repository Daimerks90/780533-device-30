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
const writeForm = document.querySelector('.write');
const inputModalName = document.querySelector('.write__input--name');
const inputModalEmail = document.querySelector('.write__input--email')
const inputModalMessage = document.querySelector('.write__text');

let storageName;
let storageEmail;
let storageMassage;
let isStorageSupport = true;

try {
  storageName = localStorage.getItem('name');
  storageEmail = localStorage.getItem('email');
  storageMassage = localStorage.getItem('message');
} catch(err) {
  isStorageSupport = false;
}

writeForm.addEventListener('submit', (evt) => {
  writeForm.classList.remove('modal__write--error');
  const validName = inputModalName.value.length;
  const validEmail = inputModalEmail.value.length;
  const validMessage = inputModalMessage.value.length;
  if ((validName < 3 || validEmail < 3 || validMessage < 3)) {
    evt.preventDefault();
    if (validName < 3) {
      inputModalName.classList.add('write__input--invalid');
    }
    if (validEmail < 3) {
      inputModalEmail.classList.add('write__input--invalid');
    }
    if (validMessage < 3) {
      inputModalMessage.classList.add('write__text--invalid');
    }
    writeForm.classList.remove('modal__write--error');
    writeForm.offsetWidth = writeForm.offsetWidth;
    writeForm.classList.add('modal__write--error');
  } else {
    if (isStorageSupport) {
      storageName = localStorage.setItem('name', inputModalName.value);
      storageEmail = localStorage.setItem('email', inputModalEmail.value);
      storageMassage = localStorage.setItem('message', inputModalMessage.value);
    }
  }
});

inputModalName.addEventListener('input', () => {
  if (inputModalName.value.length > 3) {
    inputModalName.classList.remove('write__input--invalid');
  }
});

inputModalMessage.addEventListener('input', () => {
  if (inputModalMessage.value.length > 3) {
    inputModalMessage.classList.remove('write__input--invalid');
  }
});

inputModalEmail.addEventListener('input', () => {
  if (inputModalEmail.value.length > 3) {
    inputModalEmail.classList.remove('write__text--invalid');
  }
});


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
  inputModalName.value = storageName;
  inputModalEmail.value = storageEmail;
  inputModalMessage.value = storageMassage;
});

modalWriteClose.addEventListener('click', () => {
  modalWrite.classList.remove('modal__write--open');
  writeForm.classList.remove('modal__write--error');
});

modalMapLink.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalMap.classList.add('modal__map--open');
});

modalMapClose.addEventListener('click', () => {
  modalMap.classList.remove('modal__map--open');
});
