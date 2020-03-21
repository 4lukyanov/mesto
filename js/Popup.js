class Popup {
    constructor(button, popup, form, firstInput, secondInput) {
        this.popup = popup;
        this.button = button;
        this.form = form;
        this.firstInput = firstInput;
        this.secondInput = secondInput;
    };

    setRemoveErrors() {
        this.popup
            .querySelector('.popup__close')
            .addEventListener('click', this.removeErrors);
    };

    defaultValue() {
        this.firstInput.value = document.querySelector('.user-info__name').textContent;
        this.secondInput.value = document.querySelector('.user-info__job').textContent;
    };

    open() {
        this.form.reset();
        this.defaultValue();
        this.popup.querySelector('.popup__button').classList.remove('popup__button-is-active');
        this.popup.querySelector('.popup__edit-button').setAttribute('disabled', true);
        this.popup.classList.add('popup_is-opened');
    };

    close() {
        this.popup.querySelector('.popup__button').setAttribute('disabled', true);
        this.popup.classList.remove('popup_is-opened');
    };

    postData(setData) { 
        event.preventDefault();
        setData;
        this.popup.classList.remove('popup_is-opened');
        event.target.parentNode.querySelector('.popup__button').setAttribute('disabled', true);
        event.target.parentNode.querySelector('.popup__button').classList.remove('popup__button-is-active');
    };

    removeErrors() {
        const errorElem = document.querySelectorAll('.popup__error');
        if (errorElem) {
            for (let element of errorElem) {
                element.remove();
            };
        };
    };

};


