module.exports = class Product {
  constructor() {
    const { products } = require("../../json/products.json");

    this.products = products;
  }

  _reduceData(keys) {
    return this.products.map(product => {
      return Object.keys(product)
        .filter(key => keys.includes(key))
        .reduce((obj, key) => {
          obj[key] = product[key];
          return obj;
        }, {});
    });
  }

  static filterProducts(products, property, value) {
    return products.filter(product => product[property] === value);
  }

  get items() {
    return this._reduceData(["id", "title", "price", "category", "image"]);
  }
};
