const path = require('path');
const express = require('express');
const errorController = require('./controllers/error')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended : false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/img')));

app.use('/admin', adminRoutes);
app.use('/admin/products', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => {
  console.log('\n|--------------------------------- | ');
  console.log('+ Server running on PORT :', PORT, '-- |');
  console.log('|--------------------------------- |\n');
});