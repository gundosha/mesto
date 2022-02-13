import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector, selectorImage, selectorTitle) {
        super(popupSelector);
        this._selectorImage = this._popupSelector.querySelector(selectorImage);
        this._selectorTitle = this._popupSelector.querySelector(selectorTitle);
    }

    open(title, link) {
        this._selectorImage.src = link;
        this._selectorImage.alt = title;
        this._selectorTitle.textContent = title
        super.open()
    }
}