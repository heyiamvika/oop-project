// приватні поля
const _title = new WeakMap();
const _description = new WeakMap();
const _image = new WeakMap();
const _dishes = new WeakMap();

export class MenuSection {
    constructor(title, description, image, dishes) {
        _title.set(this, title);
        _description.set(this, description);
        _image.set(this, image);
        _dishes.set(this, dishes);
    }

    get title() {
        return _title.get(this);
    }

    get description() {
        return _description.get(this);
    }

    get image() {
        return _image.get(this);
    }

    get dishes() {
        return _dishes.get(this);
    }
}