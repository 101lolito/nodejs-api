const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended : false }));

app.use('/', (req, res, next) => {
    // console.log('This always Runs');
    next();
})


app.use('/add-product', (req, res, next) => {
    // console.log('In the other Middleware');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/', (req, res, next) => {
    // console.log('In the other Middleware');
    res.send('<h1>Hello From Express</h1>')
});

app.listen(5000)