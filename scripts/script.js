const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup__edit')
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
const cardselements = eltemplate.cloneNode(true);

const popimage = document.querySelector('.popup-bg');
const popuptxt = document.querySelector('.popup__text');
const bgimage = document.querySelector('.popup-bg__image'); {
    initialCards.forEach(function(element) {

        const cardselements = eltemplate.cloneNode(true);
        let name = element.name
        let link = element.link

        function createcard(a, b) {
            cardselements.querySelector('.element__title').textContent = a
            cardselements.querySelector('.element__image').src = b
        }
        createcard(name, link)

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


const btnclose = document.querySelector('.popup-bg__close')

btnclose.addEventListener('click', function() {
    popimage.classList.remove('popup__bg-image_active')
})

function openPopup() {
    popupEdit.classList.add('popup_active');
    nameinput.value = nameAddinput;
    jobinput.value = jobAddinput;


}

function closePopup() {
    popup.classList.remove('popup_active')
}

popupopen.addEventListener('click', openPopup);
popupclose.addEventListener('click', closePopup);




const profilename = document.querySelector('.profile__title');
const profilejob = document.querySelector('.profile__subtitle');
const jobinput = document.querySelector('.popup__input_type_subtitle');
const nameinput = document.querySelector('.popup__input_type_title');
const forminput = document.querySelector('.popup__form-input')
const nameAddinput = profilename.textContent;
const jobAddinput = profilejob.textContent;



function addSubmitHandler(evt) {
    evt.preventDefault();
    profilename.textContent = nameinput.value
    profilejob.textContent = jobinput.value

    closePopup()



};

forminput.addEventListener('submit', addSubmitHandler);
const popupadd = document.querySelector('.profile__add-button')
const popupcard = document.querySelector('.popup-card');
const popupcardclose = document.querySelector('.popup__close-card');

function openCard() {
    popupcard.classList.toggle('popup__card_active')
    popupCardName.value = '';
    popupCardLink.value = '';
}



function closeCard() {
    popupcard.classList.remove('popup__card_active')
}

popupcardclose.addEventListener('click', closeCard)

popupadd.addEventListener('click', openCard);

const popupCardName = document.querySelector('.popup__input_type_name');
const popupCardLink = document.querySelector('.popup__input_type_link');
const formInputCard = document.querySelector('.popup__form-card')


function addSubmitCard(evt) {
    evt.preventDefault();

    const cardselements = eltemplate.cloneNode(true);

    function createcard(a, b) {
        cardselements.querySelector('.element__title').textContent = a
        cardselements.querySelector('.element__image').src = b
    }
    createcard(popupCardName.value, popupCardLink.value);

    cardselements.querySelector('.element__container-like').addEventListener('click', function(evt) {
        evt.target.classList.toggle('element__container-like_black')

    });

    cardselements.querySelector('.element__delete-image').addEventListener('click', function(evt) {
        evt.target.closest('.element').remove();
    })

    cardselements.querySelector('.element__image').addEventListener('click', function(evt) {
        popimage.classList.toggle('popup__bg-image_active');
        popuptxt.textContent = popupCardName.value;
        bgimage.src = popupCardLink.value;


    })

    elements.prepend(cardselements);


    closeCard()

}

formInputCard.addEventListener('submit', addSubmitCard);