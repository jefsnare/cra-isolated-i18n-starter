module.exports = class Product {
    constructor() {
        this.products = [{
            id: 201,
            title: 'Aardappelen',
            quantity: 500,
            quantityUnit: 'g',
            price: 1.35,
            category: 'basis'
        }, {
            id: 202,
            title: 'Andijvie',
            quantity: 800,
            quantityUnit: 'g',
            price: 1.99,
            category: 'basis'
        }, {
            id: 203,
            title: 'Appel',
            quantity: 1000,
            quantityUnit: 'g',
            price: 2.49,
            category: 'fruit'
        }, {
            id: 204,
            title: 'Banaan',
            quantity: 4,
            quantityUnit: 'stuks',
            price: 1.05,
            category: 'fruit'
        }];
    }

    static filterProducts(products, property, value) {
        return products.filter(product => product[property] === value);
    }

    get items() {
        return this.products;
    }
}

