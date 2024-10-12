const fs = require("fs")
class ProductsServices{
    async getProductsPage(){
        return fs.promises.readFile("./db/product.json", "utf-8")
        .then(data=>{
            return data
        })
    }

    async postCartProduct(body){
        return fs.promises.readFile("./db/product.json", "utf-8")
        .then(data=>{
            const products = JSON.parse(data)
            const product = products.find(elem=>elem.id === body.id)
            return fs.promises.readFile("./db/cart.json", "utf-8")
            .then(data=>{
                const cart = JSON.parse(data)
                const dubleProduct = cart.some(elem => elem.id === product.id)
                if(dubleProduct)return
                else{
                    cart.push(product)
                    return fs.promises.writeFile("./db/cart.json", JSON.stringify(cart))
                }
            })
        })
    }
}
module.exports = ProductsServices