class formValidator {
  constructor(popup) {
    this.popup = popup;
  };

  setValidatity() {
    this.setEventListeners(this.popup, this.checkValueRange,this.checkLinkRegular, this.checkValueEmpty, this.setSubmitButtons);  
  };

  setEventListeners(form, checkValueRange, checkLinkRegular, checkValueEmpty, setSubmitButtons) {  
    const formInputs = form.querySelectorAll('input');
    for (let element of formInputs) {
      element.addEventListener('input', function (event) {
        const inputURL = (event.target.name === 'link');
        if (inputURL) {
          checkLinkRegular();
          checkValueEmpty();
        } else {
          checkValueRange();
          checkValueEmpty();
        };
        setSubmitButtons(event)
      });
    };
  };

  checkValueRange() {
    let validity = event.target.validity;
    const rangeError = event.target.parentNode.querySelector(`.popup__error-lh-${event.target.name}`);
    if((validity.tooShort || validity.tooLong) && (!rangeError)) {
      event.target.insertAdjacentHTML('afterend', `<span class="popup__error popup__error-lh-${event.target.name}"></span>`);
      document.querySelector(`.popup__error-lh-${event.target.name}`).textContent = 'Должно быть от 2 до 30 символов';
    };
    if(((!validity.tooShort) && (!validity.tooLong)) && (rangeError)){
      event.target.parentNode.removeChild(rangeError);
    };
  };

  checkValueEmpty() {
    const checkEmptyInput = (event.target.value.length === 0);
    const emptyError = event.target.parentNode.querySelector(`.popup__error-mh-${event.target.name}`);
    const urlError = event.target.parentNode.querySelector(`.popup__error-uh-${event.target.name}`);
    if (checkEmptyInput) {
      event.target.insertAdjacentHTML('afterend', `<span class="popup__error popup__error-mh-${event.target.name}"></span>`);
      document.querySelector(`.popup__error-mh-${event.target.name}`).textContent = 'Это обязательное поле'; 
    };
    if((checkEmptyInput) && (urlError)) {
      event.target.parentNode.removeChild(urlError);
    };
    if((!checkEmptyInput) && (emptyError)) {
      event.target.parentNode.removeChild(emptyError);
    };
  };

  checkLinkRegular() {
    const checkRegExp = event.target.value.match(new RegExp('^http.', 'gi'));
    const urlError = event.target.parentNode.querySelector(`.popup__error-uh-${event.target.name}`);
    if ((!checkRegExp) && (!urlError)) {
         event.target.insertAdjacentHTML('afterend', `<span class="popup__error popup__error-uh-${event.target.name}"></span>`);
         document.querySelector(`.popup__error-uh-${event.target.name}`).textContent = 'Здесь должна быть ссылка'; 
    };
    if ((checkRegExp) && (urlError)) {
         event.target.parentNode.removeChild(urlError);
    };
  };

  setSubmitButtons(event) {
    const errorContainerLength = event.target.parentNode.querySelectorAll('.popup__error').length;
    let hasErrors = false;
    const btn = event.target.parentNode.querySelector('.popup__button');
    let arrayInputsData = Array.from(event.target.parentNode.getElementsByTagName(`input`), e => e.value);
    let arrayTrueData = arrayInputsData.filter((index) => index !== '')

    if (errorContainerLength) {
      hasErrors = true
    };

    if (!(hasErrors) && (arrayTrueData.length > 1)) {
      btn.removeAttribute('disabled', true);
      btn.classList.add('popup__button-is-active');
    } else {
      btn.setAttribute('disabled', true);
      btn.classList.remove('popup__button-is-active');
    };
  };
};
