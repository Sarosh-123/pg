
function fetchproducts(done){
    $.get('/api/flat',(data)=>{
         done(data)
    }
     ) }

     function addflats(name,desc,cont,price,address){
         $.post('/api/flat',{
             name:name,
             desc:desc,
             cont:cont,
             price:price,
             address:address
         },/*function(data){
             done(data)
         }*/)
     }

function createproductcard(product){
return $(`
<div class="col-4 card mx-2 p-4">
   <h4 class="product-name">${product.name}:${product.desc}</h4>
   <div class="manufacturer"><b>Username</b>:@${product.owner}</div>
   <div class="row">
       <div class="row m-3 p-3"><b>$${product.price}/month</b></div>
       <div class="col m-3 p-3"><b>contact:${product.owner_cont}</b></div>
       <div class="col m-3 p-3"><b>address:${product.address}</b></div>
       <button onclick="mybutton()" class="col  btn btn-primary" ">CHAT</button>
    
   </div>
       </div>

`)}
function mybutton(){
location.replace("/cart")
}
$(()=>{
$('#btn').click(()=>{
    location.replace("/add_flats.html")
        
})
$('#btn1').click(()=>{
    location.replace("/cart")
})
})
