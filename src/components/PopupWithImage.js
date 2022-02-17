import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector, selectorImage, selectorTitle) {
        super(popupSelector);
        this._image = this._popup.querySelector(selectorImage);
        this._title = this._popup.querySelector(selectorTitle);
    }

    open(title, link) {
        this._image.src = link;
        this._image.alt = title;
        this._title.textContent = title
        super.open()
    }
}