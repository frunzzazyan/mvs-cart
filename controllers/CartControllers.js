class CartController{
    async getCartPage(req,res,next){
        const cart = await req.app.locals.services.cart.getCartPage()
        res.render("cart", {cart : JSON.parse(cart)})
    }
    async deleteCartProduct(req,res,next){
        return await req.app.locals.services.cart.deleteCartProduct(req.params.id)
        // redirect - chi ashxatum ejy tarmacnelu hamar
    }
}

module.exports = CartController