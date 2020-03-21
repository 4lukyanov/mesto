// const editContainer = document.querySelector('.popup__edit');
// const infoContainer = document.querySelector('.popup__new');
// const editButton = document.querySelector('.user-info__edit');
// const addButton = document.querySelector('.user-info__button');
// const imagePopup = document.querySelector('.popup__image-container');
// const imageContainer = document.querySelector('.popup__img');
// const userName = document.querySelector('.user-info__name');
// const userJob = document.querySelector('.user-info__job');
// const editForm = document.forms.edit;
// const firstEditInput = document.forms.edit.yourName;
// const secondEditInput = document.forms.edit.about;
// const newForm = document.forms.new;

// const newPopup = new formValidator(document.querySelector('.popup__new'));
// const editPopup = new formValidator(document.querySelector('.popup__edit'));
// const popupEdit = new Popup(editButton, editContainer, editForm, firstEditInput, secondEditInput);
// const popupInfo = new PopupInfo(addButton, infoContainer, newForm);
// const cardContainer = new CardList(document.querySelector('.places-list'));
// const api = new Api('https://praktikum.tk', '78f25dcc-8a8e-4d21-807c-aa673711161a');

// editButton.addEventListener('click', function () {
//     popupEdit.open();
// });
// editContainer.querySelector('.popup__close').addEventListener('click', function () {
//     popupEdit.close();
// });
// addButton.addEventListener('click', function () {
//     popupInfo.open();
// });
// infoContainer.querySelector('.popup__close').addEventListener('click', function () {
//     popupInfo.close();
// });
// infoContainer.querySelector('.popup__button').addEventListener('click', function () {
//     const inputValue = {
//         name: document.forms.new.name.value,
//         link: document.forms.new.link.value,
//     };
//     popupInfo.postData(cardContainer, new Card(inputValue).create());
// });

// cardContainer.modalRouter(imagePopup, imageContainer);
// popupEdit.setRemoveErrors();
// popupInfo.setRemoveErrors();
// newPopup.setValidatity();
// editPopup.setValidatity();


// //1. Загрузка информации о пользователе с сервера
// const setUserInfo = new UserInfo(userName, userJob);
// api.getUserInfo('/cohort8/users/me').then(res => setUserInfo.updateUserInfo(res));

// //2. Загрузка первоначальных карточек с сервера
// const createCards = new Card();
// api.getInitialCards('/cohort8/cards').then(res => cardContainer.render(cardContainer, createCards.createArrayCard(res)));

// //3. Редактирование профиля
// editContainer.querySelector('.popup__button').addEventListener('click', function () {
//     api.patchUserInfo('/cohort8/users/me', firstEditInput.value, secondEditInput.value);
//     popupEdit.postData(new UserInfo(userName, userJob, firstEditInput.value, secondEditInput.value).setData(), userName, userJob);
// });

// //если нет замечаний, верните на доработку, пожалуйста.
// //хотел бы дополнительные задания попробовать сделать, но перед этим необходимо понять:
// //--сделал/не сделал
// //--какие есть ошибки

// /**
//  * Здравствуйте, замечаний нет но вернуть не могу по правилам.
//  * "/cohort8" я бы вынес в отдельную константу
//  * Работа реально очень хорошая.
//  *
//  */