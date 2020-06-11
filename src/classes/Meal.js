// клас Meal є абстрактним
import {
    Dish
} from './Dish';

export class Meal extends Dish {
    constructor(title, image, price, rate) {
        super(title, image, price, rate);

        if (this.constructor === Meal) {
            throw new TypeError('Abstract class "Meal" cannot be instantiated directly.');
        }
    }

    getPreviewHTML() {
        super.getPreviewHTML();
    }

    getLayoutHTML() {
        super.getLayoutHTML();
    }

    getCartHTML() {
        super.getCartHTML();
    }
}