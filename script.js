let contlikeal = document.querySelectorAll('.element__container-like');

function blacklike() {
    contlikeal[0].classList.toggle('element__container-like_black');
    contlikeal[0].classList.toggle('element__container-like');
}

function blacklike1() {
    contlikeal[1].classList.toggle('element__container-like_black');
    contlikeal[1].classList.toggle('element__container-like');
}

function blacklike2() {
    contlikeal[2].classList.toggle('element__container-like_black');
    contlikeal[2].classList.toggle('element__container-like');
}

function blacklike3() {
    contlikeal[3].classList.toggle('element__container-like_black');
    contlikeal[3].classList.toggle('element__container-like');
}

function blacklike4() {
    contlikeal[4].classList.toggle('element__container-like_black');
    contlikeal[4].classList.toggle('element__container-like');
}

function blacklike5() {
    contlikeal[5].classList.toggle('element__container-like_black');
    contlikeal[5].classList.toggle('element__container-like');
}

contlikeal[0].addEventListener('click', blacklike);
contlikeal[1].addEventListener('click', blacklike1);
contlikeal[2].addEventListener('click', blacklike2);
contlikeal[3].addEventListener('click', blacklike3);
contlikeal[4].addEventListener('click', blacklike4);
contlikeal[5].addEventListener('click', blacklike5);


let popup = document.querySelector('.popup');
let popupcont = document.querySelector('.popup__container');
let popupclose = document.querySelector('.popup__close');
let popupsave = document.querySelector('.popup__button');
let popupopen = document.querySelector('.profile__edit-button');

function openpop() {
    popup.classList.toggle('popup');
    popup.classList.toggle('popup_active');
}

popupopen.addEventListener('click', openpop);
popupclose.addEventListener('click', openpop);

// const text = $elem.textContent;

let profilename = document.querySelector('.profile__title');
let profilejob = document.querySelector('.profile__subtitle');
let jobinput = document.querySelector('.popup__input_subtitle');
let nameinput = document.querySelector('.popup__input_title');
let forminput = document.querySelector('.popup__form-input')
let nameinp = profilename.textContent;
let jobinp = profilejob.textContent;

nameinput.value = nameinp;
jobinput.value = jobinp;

function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    profilename.textContent = nameinput.value
    profilejob.textContent = jobinput.value
    openpop()
        // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
};

forminput.addEventListener('submit', formSubmitHandler);