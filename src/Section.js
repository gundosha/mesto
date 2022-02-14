export default class Section {
    constructor({ items, renderer }, container) {
        this._items = items
        this._renderer = renderer
        this._container = document.querySelector(container)
    }


    render() {
        this._items.forEach(card => {
            this._renderer(card);
        })
    }

    prependItem(element) {
        this._container.prepend(element);
    }
}