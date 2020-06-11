import {
    MenuSection
} from './MenuSection';
import {
    Drink
} from './Drink';
import {
    Snack
} from './Snack';
import {
    Breakfast
} from './Breakfast';
import {
    Lunch
} from './Lunch';

import coffeeSectionImg from '../images/content/_menu_section_page_coffee.jpeg';
import breakfastSectionImg from '../images/content/_menu_section_page_breakfast.jpg';
import lunchSectionImg from '../images/content/_menu_section_page_lunch.jpg';
import drinksSectionImg from '../images/content/_menu_section_page_drinks.jpg';
import munchiesSectionImg from '../images/content/_menu_section_page_munchies.jpg';
import friesSectionImg from '../images/content/_menu_section_page_fries.jpg';

// приватні поля
const _sections = new WeakMap();

export class Menu {
    constructor() {
        _sections.set(this, this.createMenu());
    }

    get sections() {
        return _sections.get(this).map(section => {
            return {
                title: section.title,
                description: section.description,
                image: section.image,
                dishes: section.dishes
            }
        });
    }

    createMenu() {
        return [
            new MenuSection(
                'Coffee',
                'Freshly brewed coffee',
                coffeeSectionImg,
                [
                    new Drink('Espresso', coffeeSectionImg, 2.99, 5.0),
                    new Drink('Latte', coffeeSectionImg, 3.75, 4.25),
                    new Drink('Cappucino', coffeeSectionImg, 2.09, 5.75),
                ]
            ),
            new MenuSection(
                'Breakfast',
                'Hearty, hot & Fresh',
                breakfastSectionImg,
                [
                    new Breakfast('Ukrainian breakfast', breakfastSectionImg, 2.99, 5.0, 'Tasty Ukrainian breakfast', ['Salad', 'Syrnyky']),
                    new Breakfast('American breakfast', breakfastSectionImg, 3.75, 4.25, 'Tasty American breakfast', ['Salad', 'Orange juice']),
                    new Breakfast('French breakfast', breakfastSectionImg, 2.09, 5.75, 'Tasty French breakfast', ['Croissant', 'Creme frappe']),
                ]
            ),
            new MenuSection(
                'Munchies',
                'Perfectly Baked Goodies',
                munchiesSectionImg,
                [
                    new Snack('Cookie', munchiesSectionImg, 2.99, 5.0, "Ingridients: flour, sugar, eggs, milk"),
                    new Snack('Pastry', munchiesSectionImg, 3.75, 4.25, "Ingridients: flour, sugar, eggs"),
                    new Snack('Cake', munchiesSectionImg, 2.09, 5.75, "Ingridients: creme, flour, sugar, eggs"),
                ]
            ),
            new MenuSection(
                'Lunch',
                'Hearty, hot & Fresh',
                lunchSectionImg,
                [
                    new Lunch('Ukrainian lunch', lunchSectionImg, 2.99, 5.0, 'Tasty Ukrainian lunch', ['Vegan', 'Healthy']),
                    new Lunch('American lunch', lunchSectionImg, 3.75, 4.25, 'Tasty American breakfast', ['Diary free', 'Oil free']),
                    new Lunch('French lunch', lunchSectionImg, 2.09, 5.75, 'Tasty French breakfast', ['Vegetarian', 'Gluten free', 'Sugar free']),
                ]
            ),
            new MenuSection(
                'Fries',
                'Fresh & Crispy',
                friesSectionImg,
                [
                    new Snack('Fish and Chips', friesSectionImg, 2.99, 5.0, "Ingridients: potaoes, oil, fish"),
                    new Snack('French Fries', friesSectionImg, 3.75, 4.25, "Ingridients: salt, oil, potatoes"),
                    new Snack('Sweet potato fries', friesSectionImg, 2.09, 5.75, "Ingridients: sweet potatoes, paprika, salt"),
                ]
            ),
            new MenuSection(
                'Drinks',
                'Healthy & Fresh',
                drinksSectionImg,
                [
                    new Drink('Cola', drinksSectionImg, 2.99, 5.0),
                    new Drink('Sprite', drinksSectionImg, 3.75, 4.25),
                ]
            )
        ]
    }
}