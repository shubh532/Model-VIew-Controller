const Product = require("../Models/Product")
const fs = require("fs")

exports.getAddProducts = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
}
exports.PostAddProducts = (req, res, next) => {
    const product = new Product(req.body.title)
    product.saveProduct()
    res.redirect("/")

}
exports.getProducts = (req, res, next) => {
    Product.fetchAllProduct((Products)=>{
        res.render('shop', {
            prods: Products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: Products.length > 0,
            activeShop: true,
            productCSS: true
        })
    })
    
}

