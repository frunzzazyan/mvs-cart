class ProductsControllers{
    async getProductsPage(req,res,next){
        const products = await req.app.locals.services.products.getProductsPage()
        res.render("products", {products: JSON.parse(products)} )
    }

    async postCartProduct(req,res,next){
        return await req.app.locals.services.products.postCartProduct(req.body)
    }
}

module.exports = ProductsControllers