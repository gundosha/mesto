import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector, selectorImage, selectorTitle) {
        super(popupSelector);
        this._Image = this._popup.querySelector(selectorImage);
        this._Title = this._popup.querySelector(selectorTitle);
    }

    open(title, link) {
        this._Image.src = link;
        this._Image.alt = title;
        this._Title.textContent = title
        super.open()
    }
}