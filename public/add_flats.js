$(()=>{
    let flatname=$('#flatname')
            let desc=$('#desc')
            let cont=$('#cont')
            let price=$('#price')
            let address=$('#address')

     $('#productbtn').click(function(){
         addflats(
            flatname.val(),
            desc.val(),
            cont.val(),
            price.val(),
            address.val()
            /*function(addedproduct){
           window.alert("added" +addedproduct.name + "to the site")
            })*/
        )})})
        

