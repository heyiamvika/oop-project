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
    UserPage
} from './UserPage';
import {
    DishPage
} from './DishPage';

import homeIcon from '../images/home.svg';
import favoriteIconActive from '../images/heart-active.svg';
import cartIcon from '../images/cart.svg';
import userIcon from '../images/user.svg';

export class FavoritesPage {
    static render() {
        const favoritesHTML = user.favorites.map(favItem => {
            return `
                <div class="small-card menu-section">
                    <img src=${favItem.image}/>
                    <h3>${favItem.title}</h3>
                    <p>${favItem.description}</p>
                </div>  
            `;
        }).join("");

        const pageHTML = `
            <div class="page-wrapper">
                <header>
                    <h2 class="page-title">Favorites</h2>
                </header>
                <main>
                ${favoritesHTML}
                </main>
                <footer>
                    <button id="home-btn"><img src=${homeIcon} /></button>
                    <button id="favorite-btn"><img src=${favoriteIconActive} /></button>
                    <button id="cart-btn"><img src=${cartIcon} /></button>
                    <button id="user-btn"><img src=${userIcon} /></button>
                </footer>
            </h3>
        `;

        document.querySelector('body').innerHTML = pageHTML;

        this.addEventListeners();
    }

    static addEventListeners() {
        const favorites = document.querySelectorAll('.menu-section');

        favorites.forEach((card) => {
            const title = card.querySelector("h3").textContent;

            card.addEventListener('click', () => {
                const item = user.favorites.find(fav => fav.title === title);
                DishPage.render(item);
            })
        });

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