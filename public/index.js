$(()=>{
    let productlist=$('#productlist')
    fetchproducts((products)=>{
        productlist.empty()
        for(product of products){
            productlist.append(createproductcard(product))
        }
    })})
   

    