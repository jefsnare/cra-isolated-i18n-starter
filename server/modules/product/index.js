module.exports = class Product {
  constructor() {
    this.products = [
      {
        id: 201,
        title: "Aardappelen",
        quantity: 500,
        quantityUnit: "g",
        price: 1.35,
        category: "basis",
        image: "https://placeimg.com/350/150/nature"
      },
      {
        id: 202,
        title: "Andijvie",
        quantity: 800,
        quantityUnit: "g",
        price: 1.99,
        category: "basis",
        image: "https://placeimg.com/350/150/nature"
      },
      {
        id: 203,
        title: "Appel",
        quantity: 1000,
        quantityUnit: "g",
        price: 2.49,
        category: "fruit",
        image: "https://placeimg.com/350/150/nature"
      },
      {
        id: 204,
        title: "Banaan",
        quantity: 4,
        quantityUnit: "stuks",
        price: 1.05,
        category: "fruit",
        image: "https://placeimg.com/350/150/nature"
      },
      {
        id: 205,
        title: "Kiwi",
        quantity: 250,
        quantityUnit: "g",
        price: 1.15,
        category: "fruit",
        image: "https://placeimg.com/350/150/nature"
      },
      {
        id: 208,
        title: "Mango",
        quantity: 2,
        quantityUnit: "stuks",
        price: 2.99,
        category: "fruit",
        image: "https://placeimg.com/350/150/nature"
      }
    ];
  }

  static filterProducts(products, property, value) {
    return products.filter(product => product[property] === value);
  }

  get items() {
    return this.products;
  }
};
