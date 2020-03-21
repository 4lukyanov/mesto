class PopupInfo extends Popup {
    constructor(button, popup, form) {
        super(button, popup, form);
    };

    open() {
        this.popup.querySelector('.popup__button').classList.remove('popup__button-is-active');
        this.popup.querySelector('.popup__button').setAttribute('disabled', true);
        this.popup.classList.add('popup_is-opened');
    };

    close() {
        this.popup.querySelector('.popup__button').setAttribute('disabled', true);
        this.popup.querySelector('.popup__button').classList.remove('popup__button-is-active');
        this.popup.classList.remove('popup_is-opened');
        this.form.reset();
    };

    postData(containerCard, card) {
        event.preventDefault(); 
        containerCard.addCard(card);
        this.form.reset();
        this.popup.classList.remove('popup_is-opened');
    };
};