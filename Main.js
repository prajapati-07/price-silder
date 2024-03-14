document.addEventListener("DOMContentLoaded",function(){
    const pricerange=document.getElementById("pricerange");
    const selectedprice=document.getElementById("selectedprice");
     pricerange.addEventListener("input",function(){
        const price=this.value;
        selectedprice.textContent=`Selected Price: $${price}`;

     });
});