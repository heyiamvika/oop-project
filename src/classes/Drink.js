import {
    Dish
} from './Dish';
import deleteIcon from '../images/close.svg';

export class Drink extends Dish {
    constructor(title, image, price, rate) {
        super(title, image, price, rate);
    }

    getPreviewHTML() {
        super.getPreviewHTML();
        return `
            <div class="dish-preview drink-preview">
                <img src=${this.image}/>
                <div class="dish-preview-content">
                    <div class="dish-preview-content-title">
                        <h3>${this.title}</h3>
                        <p class="dish-preview-price">$${this.price}</p>
                    </div>
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
                        <p class="price">$${this.price}</p>
                </div>
                <div class="delete-from-cart-btn"><img src=${deleteIcon} /></div>
            </div>
        `;
    }
}