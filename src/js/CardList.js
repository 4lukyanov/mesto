export class CardList {
    constructor(container) {
        this.container = container;
    };

    addCard(cardElement) {
        this.container.appendChild(cardElement);
    };

    render(container, arrayCard) {
        for (const element of arrayCard) {
            container.addCard(element);
        };
    };

    modalRouter(imageElementDOM, imageContainer) {
        this.container
            .addEventListener('click', function () {
                if (event.target.classList.contains('place-card__image')) {
                    let URL = event.target.getAttribute('style').slice(16, -1);
                    imageContainer.setAttribute('src', `${URL}`);
                    imageElementDOM.classList.add('popup_is-opened');
                };
                if (event.target.classList.contains('popup__close-img')) {
                    imageElementDOM.classList.remove('popup_is-opened');
                };
            });
    };
};
