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


// приватні поля
const _sections = new WeakMap();

export class Menu {
    constructor() {
        _sections.set(this, this.createMenu());
    }

    createMenu() {
        return [
            new MenuSection(
                'Coffee',
                'Freshly brewed coffee',
                'https://via.placeholder.com/300',
                [
                    new Drink('Espresso', 'https://via.placeholder.com/300', 2.99, 5.0),
                    new Drink('Latte', 'https://via.placeholder.com/300', 3.75, 4.25),
                    new Drink('Cappucino', 'https://via.placeholder.com/300', 2.09, 5.75),
                ]
            ),
            new MenuSection(
                'Breakfast',
                'Hearty, hot & Fresh',
                'https://via.placeholder.com/300',
                [
                    new Breakfast('Ukrainian breakfast', 'https://via.placeholder.com/300', 2.99, 5.0, 'Смачно!', ['Salad', 'Syrnyky']),
                    new Breakfast('American breakfast', 'https://via.placeholder.com/300', 3.75, 4.25, 'Смачно!', ['Salad', 'Orange juice']),
                    new Breakfast('French breakfast', 'https://via.placeholder.com/300', 2.09, 5.75, 'Смачно!', ['Croissant', 'Creme frappe']),
                ]
            ),
            new MenuSection(
                'Munchies',
                'Perfectly Baked Goodies',
                'https://via.placeholder.com/300',
                [
                    new Snack('Cookie', 'https://via.placeholder.com/300', 2.99, 5.0, "Ingridients: "),
                    new Snack('Pastry', 'https://via.placeholder.com/300', 3.75, 4.25, "Ingridients: "),
                    new Snack('Cake', 'https://via.placeholder.com/300', 2.09, 5.75, "Ingridients: "),
                ]
            ),
            new MenuSection(
                'Lunch',
                'Hearty, hot & Fresh',
                'https://via.placeholder.com/300',
                [
                    new Lunch('Ukrainian lunch', 'https://via.placeholder.com/300', 2.99, 5.0, 'Смачно!', ['Vegan', 'Healthy']),
                    new Lunch('American lunch', 'https://via.placeholder.com/300', 3.75, 4.25, 'Смачно!', ['Diary free', 'Healthy']),
                    new Lunch('French lunch', 'https://via.placeholder.com/300', 2.09, 5.75, 'Смачно!', ['Vegetarian', 'Gluten free', 'Sugar free']),
                ]
            ),
            new MenuSection(
                'Fries',
                'Fresh & Crispy',
                'https://via.placeholder.com/300',
                [
                    new Snack('Fish and Chips', 'https://via.placeholder.com/300', 2.99, 5.0, "Ingridients: "),
                    new Snack('French Fries', 'https://via.placeholder.com/300', 3.75, 4.25, "Ingridients: "),
                    new Snack('Sweet potato fries', 'https://via.placeholder.com/300', 2.09, 5.75, "Ingridients: "),
                ]
            ),
            new MenuSection(
                'Drinks',
                'Healthy & Fresh',
                'https://via.placeholder.com/300',
                [
                    new Drink('Cola', 'https://via.placeholder.com/300', 2.99, 5.0),
                    new Drink('Sprite', 'https://via.placeholder.com/300', 3.75, 4.25),
                ]
            )
        ]
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
}