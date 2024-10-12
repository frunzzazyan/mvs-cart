const products = document.querySelector(".products")

products.addEventListener("click", (e)=>{
    if(e.target.localName === "button"){
        fetch("http://localhost:3000/cart", {
            method : "post",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({id : e.target.dataset.n})
        })
    }

})