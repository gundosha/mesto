export default class Section {
    constructor({ items, renderer }, elementSelector) {
        this._items = items
        this._renderer = renderer
        this._elementSelector = document.querySelector(elementSelector)
    }


    render(_items) {
        this._items.forEach(card => {
            this._renderer(card);
        })
    }

    addItem(element) {
        this._elementSelector.append(element);
    }
}