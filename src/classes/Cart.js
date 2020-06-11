import {
    CartPage
} from "../pages/CartPage";

// приватні поля
const _items = new WeakMap();
const _subtotal = new WeakMap();

class Cart {
    constructor() {
        _items.set(this, []);
        _subtotal.set(this, 0);
    }

    get items() {
        return _items.get(this);
    }

    get deliveryCharges() {
        // ціна доставки за замовчуванням
        let deliveryCharges = 5;

        if (this.subtotal < 20) {
            deliveryCharges = 10;
        }

        if (this.subtotal > 50) {
            deliveryCharges = 0;
        }

        return deliveryCharges;
    }

    get subtotal() {
        return _subtotal.get(this);
    }

    get total() {
        return parseFloat(this.deliveryCharges + this.subtotal).toFixed(2);
    }

    addItem(item) {
        this.items.push(item);
        _subtotal.set(this, this.subtotal + item.price);
    }

    deleteItem(itemTitle) {
        const itemToDelete = this.items.find(item => item.title === itemTitle);

        _subtotal.set(this, this.subtotal - itemToDelete.price);
        _items.set(this, this.items.filter(item => item.title !== itemTitle));
        CartPage.render();
    }
}

export const cart = new Cart();