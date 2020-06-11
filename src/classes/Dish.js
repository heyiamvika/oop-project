// клас Dish є абстрактним

// приватні поля
const _title = new WeakMap();
const _image = new WeakMap();
const _price = new WeakMap();
const _rate = new WeakMap();

export class Dish {
    constructor(title, image, price, rate) {
        if (this.constructor === Dish) {
            throw new TypeError('Abstract class "Dish" cannot be instantiated directly.');
        }

        _title.set(this, title);
        _image.set(this, image);
        _price.set(this, price);
        _rate.set(this, rate);
    }

    get title() {
        return _title.get(this);
    }

    get image() {
        return _image.get(this);
    }

    get price() {
        return _price.get(this);
    }

    get rate() {
        return _rate.get(this);
    }

    getPreviewHTML() {}
    getLayoutHTML() {}
    getCartHTML() {}
}