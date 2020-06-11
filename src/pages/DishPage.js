import {
    MenuPage
} from './MenuPage';
import {
    cart
} from '../classes/Cart';
import {
    user
} from '../classes/User';

import likeIcon from '../images/like.svg';
import likeIconClicked from '../images/like-clicked.svg';
import backButton from '../images/arrow.svg';

export class DishPage {
    static render(dish) {
        const isDishLiked = user.favorites.find(fav => fav.title === dish.title);
        const dishLayout = dish.getLayoutHTML();

        const pageHTML = `
            <div class="dish-page-wrapper">
                <button class="like-btn ${isDishLiked ? "like-btn-active" : "like-btn-inactive"}">
                    <img src="${isDishLiked ? likeIconClicked : likeIcon}"/>
                </button>
                <div class="dish-page-image" style="background-image: url(${dish.image})">
                    <button class="back-btn"><img src=${backButton} /></button>  
                </div>  
                ${dishLayout}
            </div>
        `;

        document.querySelector('body').innerHTML = pageHTML;
        this.addEventListeners(dish, isDishLiked);
    }

    static addEventListeners(dish, isDishLiked) {
        const backButton = document.querySelector(".back-btn");
        const onBackBtnClick = () => MenuPage.render();
        backButton.addEventListener('click', () => onBackBtnClick());

        const addToCardButton = document.querySelector(".add-to-cart-btn");
        const onAddToCardButtonClick = () => {
            cart.addItem(dish);
            addToCardButton.textContent = "Added!";
        };
        addToCardButton.addEventListener('click', () => onAddToCardButtonClick());

        if (isDishLiked) {
            const likeButtonActive = document.querySelector(".like-btn-active");
            const onLikeBtnActiveClick = () => {
                user.removeFavorite(dish);
                DishPage.render(dish);
            };
            likeButtonActive.addEventListener('click', () => onLikeBtnActiveClick());
        } else {
            const likeButtonInactive = document.querySelector(".like-btn-inactive");
            const onLikeBtnInactiveClick = () => {
                user.addFavorite(dish);
                DishPage.render(dish);
            };
            likeButtonInactive.addEventListener('click', () => onLikeBtnInactiveClick());
        }
    }

}