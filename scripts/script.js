let opup = document.querySelector('.popup');
let popupclose = document.querySelector('.popup__close');
let popupopen = document.querySelector('.profile__edit-button');
const elements = document.querySelector('.elements');
const eltemplate = document.querySelector('.element__template').content;



const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

/*el.querySelector('.element__container-like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__container-like_black');
}); */

const popimage = document.querySelector('.popup-bg_image');
const popuptxt = document.querySelector('.popup__text');
const bgimage = document.querySelector('.popup__bg_image');

function da() {
    initialCards.forEach(function(element) {

        const cardselements = eltemplate.cloneNode(true);
        cardselements.querySelector('.element__title').textContent = element.name;
        cardselements.querySelector('.element__image').src = element.link

        cardselements.querySelector('.element__container-like').addEventListener('click', function(evt) {
            evt.target.classList.toggle('element__container-like_black')

        });
        cardselements.querySelector('.element__delete-image').addEventListener('click', function(evt) {
            evt.target.closest('.element').remove();
        })

        cardselements.querySelector('.element__image').addEventListener('click', function(evt) {
            popimage.classList.toggle('popup__bg-image_active');
            popuptxt.textContent = element.name;
            bgimage.src = element.link;


        })


        elements.append(cardselements)
    });
}
da()

const btnclose = document.querySelector('.popup__image_close')

btnclose.addEventListener('click', function() {
    popimage.classList.remove('popup__bg-image_active')
})

function openpop() {
    popup.classList.add('popup_active');
    nameinput.value = nameinp;
    jobinput.value = jobinp;


}

function closepop() {
    popup.classList.remove('popup_active')
}

popupopen.addEventListener('click', openpop);
popupclose.addEventListener('click', closepop);




let profilename = document.querySelector('.profile__title');
let profilejob = document.querySelector('.profile__subtitle');
let jobinput = document.querySelector('.popup__input_type_subtitle');
let nameinput = document.querySelector('.popup__input_type_title');
let forminput = document.querySelector('.popup__form-input')
let nameinp = profilename.textContent;
let jobinp = profilejob.textContent;



function formSubmitHandler(evt) {
    evt.preventDefault();
    profilename.textContent = nameinput.value
    profilejob.textContent = jobinput.value

    closepop()



};

forminput.addEventListener('submit', formSubmitHandler);
let popupadd = document.querySelector('.profile__add-button')
const popupcard = document.querySelector('.popup-card');
const popupcardclose = document.querySelector('.popup__close-card');

function popcardopen() {
    popupcard.classList.toggle('popup__card_active')
}



function popcardpclose() {
    popupcard.classList.remove('popup__card_active')
}

popupcardclose.addEventListener('click', popcardpclose)

popupadd.addEventListener('click', popcardopen);

const popcardname = document.querySelector('.popup__input_type_name');
const popcardlink = document.querySelector('.popup__input_type_link');
const forminputcard = document.querySelector('.popup__form-card')

function formsubmitcard(evt) {
    evt.preventDefault();
    initialCards.unshift({ 'name': popcardname.value, 'link': popcardlink.value }, );
    const cardselements = eltemplate.cloneNode(true);
    console.log(initialCards)
    initialCards.slice(0, 1).forEach(function(element) {

        const cardselements = eltemplate.cloneNode(true);

        cardselements.querySelector('.element__title').textContent = element.name;
        cardselements.querySelector('.element__image').src = element.link
        cardselements.querySelector('.element__container-like').addEventListener('click', function(evt) {
            evt.target.classList.toggle('element__container-like_black')

        });
        cardselements.querySelector('.element__delete-image').addEventListener('click', function(evt) {
            evt.target.closest('.element').remove();
        })

        cardselements.querySelector('.element__image').addEventListener('click', function(evt) {
            popimage.classList.toggle('popup__bg-image_active');
            popuptxt.textContent = element.name;
            bgimage.src = element.link;


        })



        elements.prepend(cardselements)
    });

    popcardpclose()

}

forminputcard.addEventListener('submit', formsubmitcard);