const product = document.querySelector(".carts")

product.addEventListener("click", (e)=>{
    if(e.target.localName === "button"){
        fetch(`http://localhost:3000/cart/${e.target.dataset.n}`, {
            method : "DELETE"
        })
    }

})