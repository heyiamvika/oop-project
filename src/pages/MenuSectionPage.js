import {
    MenuPage
}
from './MenuPage';
import {
    DishPage
}
from './DishPage';

import backButton from '../images/arrow-black.svg';

const _dishes = new WeakMap();

export class MenuSectionPage {
    static render(section) {
        _dishes.set(this, section.dishes);

        const dishesHTML = _dishes.get(this)
            .map(dish => dish.getPreviewHTML())
            .join("");

        const pageHTML = `
            <div class="page-wrapper" id="menu-section-page-wrapper">
                <header>
                    <button class="back-btn"><img src="${backButton}" /></button>
                    <h2 class="page-title">${section.title}</h2>
                </header>
                <main>
                    ${dishesHTML}
                </main>
            </div>
        `;

        document.querySelector('body').innerHTML = pageHTML;

        this.addEventListeners();
    }

    static addEventListeners() {
        const backButton = document.querySelector(".back-btn");
        const onBackBtnClick = () => MenuPage.render();
        backButton.addEventListener('click', () => onBackBtnClick());

        const dishPreviews = document.querySelectorAll(".dish-preview");
        const onDishPreviewClick = (dishData) => DishPage.render(dishData);
        dishPreviews.forEach((preview, index) => {
            preview.addEventListener('click', () => onDishPreviewClick(_dishes.get(this)[index]));
        });
    }
}