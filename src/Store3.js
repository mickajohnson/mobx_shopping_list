import { observable, configure, action, computed, autorun, reaction } from 'mobx';

configure({enforceActions: 'always'});

class ShoppingList {
    @observable groceries = ['Yogurt', 'Cheese', 'Milk']
    @observable filter = ""
    @observable money = 4

    @action updateFilter = (val) => {
        this.filter = val
    }

    @computed get filteredGroceries() {
        const regex = new RegExp(this.filter, 'i');
        return this.groceries.filter(grocery => !this.filter || regex.test(grocery));
    }

    newFilter = autorun(() => {
        console.log('Filter changed to: ', this.filter)
    })

    NoResults = reaction(
        () => this.filteredGroceries.length,
        length => {
            if (length === 0) {
                console.log('No Results');
            }
        }
    )
}


const store = window.store = new ShoppingList()

export default store;