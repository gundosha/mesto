let popup = document.querySelector('.popup');
let popupcont = document.querySelector('.popup__container');
let popupclose = document.querySelector('.popup__close');
let popupsave = document.querySelector('.popup__button');
let popupopen = document.querySelector('.profile__edit-button');

function openpop() {
    /*popup.classList.toggle('popup'); */
    popup.classList.toggle('popup_active');


}

popupopen.addEventListener('click', openpop);
popupclose.addEventListener('click', openpop);

// const text = $elem.textContent;

let profilename = document.querySelector('.profile__title');
let profilejob = document.querySelector('.profile__subtitle');
let jobinput = document.querySelector('.popup__input_type_subtitle');
let nameinput = document.querySelector('.popup__input_type_title');
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