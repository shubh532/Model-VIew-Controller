const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const ErrorControllers=require("./Controllers/Error")
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const AdminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', AdminRoutes);
app.use(shopRoutes);

app.use(ErrorControllers.get404);

app.listen(3000,()=>{
  console.log("please click on this with ctrl+left click http://localhost:3000")
})
