import {
    user
} from '../classes/User';
import {
    MenuPage
} from './MenuPage';
import {
    CartPage
} from './CartPage';
import {
    FavoritesPage
} from './FavoritesPage';

import homeIcon from '../images/home.svg';
import favoriteIcon from '../images/heart.svg';
import cartIcon from '../images/cart.svg';
import userIconActive from '../images/user-active.svg';

export class UserPage {
    static render() {
        const pageHTML = `
            <div class="user-page-wrapper">
                <header>
                    <h2 class="page-title">User</h2>
                </header>
                <main>
                    <div class="user-page-image" style="background-image: url(${user.photo})">
                        <div class="user-info">
                            <h3>${user.userName}</h3>
                            <span>${user.title}</span>
                        </div>
                    </div>  
                    <div class="user-page-layout">
                        <p>${user.info}</p>
                        <button class="green-btn" id="to-favorites-btn">To favorites</button>
                    </div>
                </main>
                <footer>
                    <button id="home-btn"><img src=${homeIcon} /></button>
                    <button id="favorite-btn"><img src=${favoriteIcon} /></button>
                    <button id="cart-btn"><img src=${cartIcon} /></button>
                    <button id="user-btn"><img src=${userIconActive} /></button>
                </footer>
            </h3>
        `;

        document.querySelector('body').innerHTML = pageHTML;

        this.addEventListeners();
    }

    static addEventListeners() {
        const toFavoritesBtn = document.querySelector("#to-favorites-btn");
        toFavoritesBtn.addEventListener('click', () => FavoritesPage.render());

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