const fs = require("fs")
const path = require("path")

const p = path.join(path.dirname(require.main.filename),
    "data",
    "Products.json")
const getProductFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([])
        } else {
            cb(JSON.parse(fileContent))
        }
    })
}

module.exports = class Product {
    constructor(t) {
        this.title = t
    }

    saveProduct() {
        getProductFromFile(Product => {
            Product.push(this)
            fs.writeFile(p, JSON.stringify(Product), (err) => {
                console.log(err, "err occur")
            })
        })

    }


    static fetchAllProduct(cb) {
        getProductFromFile(cb)
    }
}
