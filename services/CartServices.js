const fs = require("fs")
class CartServices{ 
    async getCartPage(){
        return fs.promises.readFile("./db/cart.json" , "utf-8")
        .then(data=>{
            return data
        })
    }
    async deleteCartProduct(id){
        return fs.promises.readFile("./db/cart.json" , "utf-8")
        .then(data=>{
            const cart = JSON.parse(data)
            const newCart = cart.filter(elem=>elem.id !== id)
            return fs.promises.writeFile("./db/cart.json", JSON.stringify(newCart))
        })
    }
}

module.exports = CartServices