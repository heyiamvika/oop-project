import {
    cart
} from '../classes/Cart';
import {
    MenuPage
} from './MenuPage';
import {
    UserPage
} from './UserPage';
import {
    FavoritesPage
} from './FavoritesPage';

import homeIcon from '../images/home.svg';
import favoriteIcon from '../images/heart.svg';
import cartIconActive from '../images/cart-active.svg';
import userIcon from '../images/user.svg';

export class CartPage {
    static render() {
        let mainPageContent = "";

        if (cart.items.length === 0) {
            // корзина пуста
            mainPageContent = `
                <main>
                    <div class="no-items-view">
                        <div>
                            <p>You don't have items in your cart yet...</p>
                        </div>
                        <button class="go-to-menu-btn green-btn">Go to Menu</button>
                    </div>
                </main>
            `
        } else {
            const addedItemsHTML = cart.items
                .map(item => item.getCartHTML())
                .join("");

            mainPageContent = `
            <main>
                ${addedItemsHTML}
                <div class="total-wrapper">
                    <div class="titles column">
                        <span class="row-title">Delivery charges</span>
                        <span class="row-title">Subtotal</span>
                        <span class="row-title sum">Total</span>
                    </div>
                    <div class="prices column">
                        <span class="row-price">$${cart.deliveryCharges}</span>
                        <span class="row-price">$${cart.subtotal}</span>
                        <span class="row-price sum">$${cart.total}</span>
                    </div>
                </div>
                <button class="checkout-btn green-btn">Secure Checkout</button>
            </main>
        `
        }

        const pageHTML = `
            <div class="page-wrapper" id="cart-page-wrapper">
                <header>
                    <h2 class="page-title">Cart</h2>
                </header>
                ${mainPageContent}
                <footer>
                    <button id="home-btn"><img src=${homeIcon} /></button>
                    <button id="favorite-btn"><img src=${favoriteIcon} /></button>
                    <button id="cart-btn"><img src=${cartIconActive} /></button>
                    <button id="user-btn"><img src=${userIcon} /></button>
                </footer>
            </div>
        `;

        document.querySelector('body').innerHTML = pageHTML;
        this.addEventListeners();
    }

    static addEventListeners() {
        const deleteButtons = document.querySelectorAll(".delete-from-cart-btn");
        deleteButtons.forEach((button, index) => {
            const itemToDeleteTitle = cart.items[index].title;
            button.addEventListener('click', () => cart.deleteItem(itemToDeleteTitle));
        });

        if (cart.items.length === 0) {
            const toMenuBtn = document.querySelector(".go-to-menu-btn");
            toMenuBtn.addEventListener('click', () => MenuPage.render());
        } else {
            const checkoutBtn = document.querySelector(".checkout-btn");
            checkoutBtn.addEventListener('click', () => console.log('Thanks for the order!'));
        }

        // footer buttons
        const homeBtn = document.querySelector("#home-btn");
        homeBtn.addEventListener('click', () => MenuPage.render());

        const favoriteBtn = document.querySelector("#favorite-btn");
        favoriteBtn.addEventListener('click', () => FavoritesPage.render());

        const cartBtn = document.querySelector("#cart-btn");
        cartBtn.addEventListener('click', () => CartPage.render());

        const userBtn = document.querySelector("#user-btn");
        userBtn.addEventListener('click', () => UserPage.render());
    }

}