import {
    Dish
} from './Dish';
import deleteIcon from '../images/close.svg';

// приватні поля
const _description = new WeakMap();

export class Snack extends Dish {
    constructor(title, image, price, rate, description) {
        super(title, image, price, rate);
        _description.set(this, description);
    }

    get description() {
        return _description.get(this);
    }

    getPreviewHTML() {
        super.getPreviewHTML();

        return `
            <div class="dish-preview snack-preview">
                <img src=${this.image}/>
                <div class="dish-preview-content">
                    <div class="dish-preview-content-title">
                        <h3>${this.title}</h3>
                        <p class="dish-preview-price">Price: ${this.price}</p>
                    </div>
                    <p class="dish-preview-description">${this.description}</p>
                </div>
            </div>
        `;
    }

    getLayoutHTML() {
        super.getLayoutHTML();
        return `
            <div class="dish-layout">
                <h3 class="title">${this.title}</h3>
                <p class="rate">Rate: ${this.rate}</p>
                <div class="description-section">
                    <span class="title">Description</span>
                    <p class="description">${this.description}</p>
                </div>
                <div class="buy-section">
                    <div class="buy-price">
                        <span class="price-title">Price</span>
                        <span class="price">$${this.price}</span>
                    </div>
                    <button class="add-to-cart-btn green-btn">Add to Cart</button>
                </div>
            </div>
        `;
    }

    getCartHTML() {
        super.getCartHTML();
        return `
            <div class="dish-cart-view snack-cart-view">
                <img src=${this.image}/>
                <div class="content">
                        <h3>${this.title}</h3>
                        <p class="description">${this.description}</p>
                        <p class="price">$${this.price}</p>
                </div>
                <div class="delete-from-cart-btn"><img src=${deleteIcon} /></div>
            </div>
        `;
    }
}