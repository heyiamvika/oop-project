import {
    Meal
} from './Meal';

import deleteIcon from '../images/close.svg';

// приватні поля
const _description = new WeakMap();
const _options = new WeakMap();
const _chosenOption = new WeakMap();

export class Lunch extends Meal {
    constructor(title, image, price, rate, description, options) {
        super(title, image, price, rate);

        _description.set(this, description);
        _options.set(this, options);
        _chosenOption.set(this, options[0]);
    }

    get description() {
        return _description.get(this);
    }

    get options() {
        return _options.get(this);
    }

    get chosenOption() {
        return _chosenOption.get(this);
    }


    getPreviewHTML() {
        super.getPreviewHTML();
        super.getPreviewHTML();

        return `
            <div class="dish-preview lunch-preview">
                <img src=${this.image} />
                <div class="dish-preview-content">   
                    <div class="dish-preview-content-title">
                        <h3>${this.title} +Options!</h3>
                        <p class="dish-preview-price">$${this.price}</p>
                    </div>
                    <p class="dish-preview-description">${this.description}</p>
                </div>
            </div>
        `;
    }

    getLayoutHTML() {
        super.getLayoutHTML();
        const lunchTypes = this.options.map(option => {
            return `<input type="radio" id=${option} name="lunch-option" value=${option}>
            <label for=${option}>${option}</label><br>`;
        }).join("");

        return `
            <div class="dish-layout">
                <h3 class="title">${this.title}</h3>
                <p class="rate">Rate: ${this.rate}</p>
                <div class="option-radio-section">
                    <span class="title">Choose lunch type: </span>
                    <div class="lunch-types">
                        ${lunchTypes}
                    </div>
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
                <img src=${this.image} />
                <div class="content">
                        <h3>${this.title}</h3>
                        <p class="description">${this.description}</p>
                        <p class="options">
                            Your chosen lunch-type is: 
                        </p>
                        <p class="price">$${this.price}</p>
                </div>
                <div class="delete-from-cart-btn"><img src=${deleteIcon} /></div>
            </div>
        `;
    }
}