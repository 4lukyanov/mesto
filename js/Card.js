class Card {
    constructor(object) {
        this.object = object;
    };

    like(event) {
        event.target.classList.toggle('place-card__like-icon_liked');
    };

    remove(event) {
        document.querySelector('.places-list').removeChild(event.target.parentNode.parentNode);
    };

    create(object) {
        const cardContainer = document.createElement('div');
        const imageContainer = document.createElement('div');
        const deleteButton = document.createElement('button');
        const descriptionContainer = document.createElement('div');
        const cardName = document.createElement('h3');
        const likeButton = document.createElement('button');
        cardContainer.classList.add('place-card');
        imageContainer.classList.add('place-card__image');
        deleteButton.classList.add('place-card__delete-icon');
        descriptionContainer.classList.add('place-card__description');
        cardName.classList.add('place-card__name');
        likeButton.classList.add('place-card__like-icon');
        cardContainer.appendChild(imageContainer);
        cardContainer.appendChild(descriptionContainer);
        imageContainer.appendChild(deleteButton);
        descriptionContainer.appendChild(cardName);
        descriptionContainer.appendChild(likeButton);
        if (this.object === undefined || this.object.length > 1 ) {
            cardName.textContent = object.name;
            imageContainer.setAttribute('style', `background: url(${object.link})`);
        } else {
            cardName.textContent = this.object.name;
            imageContainer.setAttribute('style', `background: url(${this.object.link})`);
        };
        cardContainer
            .querySelector('.place-card__like-icon')
            .addEventListener('click', this.like);
        cardContainer
            .querySelector('.place-card__delete-icon')
            .addEventListener('click', this.remove);
        return cardContainer;
    };

    createArrayCard(object) {
        let cardArray = [];
        object.forEach(element => {   
            const card = this.create(element);
            cardArray.push(card);
        });
        return cardArray;
    };
};
