import { observable, computed, action, configure } from 'mobx';

configure({enforceActions: 'always'});

class ShoppingList {
    @observable groceries = ['Spinach', "Yogurt"]
    @observable filter = ""
    @observable money = 3

    @action changeFilter = (val) => {
        this.filter = val;
    }

    @computed get filteredGroceries() {
        const regex = new RegExp(this.filter, 'i');
        return this.groceries.filter(item => !this.filter || regex.test(item));
    }
}

const store = window.store = new ShoppingList();

export default store;
