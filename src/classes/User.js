import userPhoto from '../images/content/user.jpg';

// приватні поля
const _favorites = new WeakMap();

class User {
    constructor(name, title, photo, info) {
        this._userName = name;
        this._title = title;
        this._photo = photo;
        this._info = info;
        // приватне поле для збереження улюблених страв
        _favorites.set(this, []);
    }

    get userName() {
        return this._userName;
    }

    set userName(name) {
        if (name.length <= 1)
            throw new Error("Name is too short");

        this._userName = name;
    }

    get title() {
        return this._title;
    }

    set title(title) {
        if (title.length <= 1)
            throw new Error("Title is too short");

        this._title = title;
    }

    get photo() {
        return this._photo;
    }

    set photo(src) {
        this._photo = src;
    }

    get info() {
        return this._info;
    }

    set info(info) {
        this._info = info;
    }

    get favorites() {
        return _favorites.get(this);
    }

    addFavorite(dish) {
        this.favorites.push(dish);
    }

    removeFavorite(dish) {
        const newFavorites = this.favorites.filter(item => item.title !== dish.title);
        _favorites.set(this, newFavorites);
    }
}

// в реальному додатку дані про користувачів беруться з бази даних
export const user = new User(
    'Vika',
    'Software Engineer',
    userPhoto,
    'Lorem ipsum, or lipsum as it is sometimes known,is dummy text used in laying out print graphicor web designs. The passage is attributed to anunknown typesetter in the 15th century who is thought to have scrambled parts of.'
);