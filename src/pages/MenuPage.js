import {
    Menu
} from '../classes/Menu';
import {
    MenuSectionPage
} from './MenuSectionPage';
import {
    CartPage
} from './CartPage';
import {
    UserPage
} from './UserPage';
import {
    FavoritesPage
} from './FavoritesPage';

import homeIconActive from '../images/home-active.svg';
import favoriteIcon from '../images/heart.svg';
import cartIcon from '../images/cart.svg';
import userIcon from '../images/user.svg';

// приватні поля 
const _menu = new WeakMap();
const _sections = new WeakMap();

export class MenuPage {
    static render() {
        _menu.set(this, new Menu());
        _sections.set(this, _menu.get(this).sections);

        const sectionsHTML = _sections.get(this).map(section => {
            return `
                <div class="small-card menu-section">
                    <img src=${section.image}/>
                    <h3>${section.title}</h3>
                    <p>${section.description}</p>
                </div>  
            `;
        }).join("");

        const pageHTML = `
            <div class="page-wrapper" id="menu-page-wrapper">
                <header>
                    <h2 class="page-title">Menu</h2>
                </header>
                <main>${sectionsHTML}</main>
                <footer>
                    <button id="home-btn"><img src=${homeIconActive} /></button>
                    <button id="favorite-btn"><img src=${favoriteIcon} /></button>
                    <button id="cart-btn"><img src=${cartIcon} /></button>
                    <button id="user-btn"><img src=${userIcon} /></button>
                </footer>
            </div>
        `;

        document.querySelector('body').innerHTML = pageHTML;

        this.addEventListeners();
    }

    static addEventListeners() {
        const menuSections = document.querySelectorAll(".menu-section");
        menuSections.forEach((section, index) => {
            const sectionData = _sections.get(this)[index];
            section.addEventListener('click', () => MenuSectionPage.render(sectionData));
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