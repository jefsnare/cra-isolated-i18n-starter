const express = require('express');
const bodyParser = require('body-parser');

const Product = require('./modules/product/index');

const port = 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const productsAPI = new Product();

app.get('/products', (req, res, next) => {
    if (!productsAPI && !productsAPI.products) {
       res.status(400);
       next();
    }

    res.status(200);
    res.send(productsAPI.products);
});

app.get('/products/:category', (req, res, next) => {
    if (!req.params && !req.params.category) {
        res.status(500);
        next();
    }

    const products = Product.filterProducts(productsAPI.products, 'category', req.params.category);

    if (products && Boolean(products.length)) {
        res.status(200);
        res.send(products);
    } else {
        res.status(500);
        next();
    }
})

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))

