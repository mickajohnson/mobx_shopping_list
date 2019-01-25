import { observable } from 'mobx';

class ShoppingList {
    @observable groceries = ['Spinach', "Yogurt"]
    @observable filter = ""
    @observable money = 3
}

const store = window.store = new ShoppingList();

export default store;
