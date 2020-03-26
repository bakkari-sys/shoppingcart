
let croix =     document.getElementsByClassName("croix-button")
let rowElement = document.getElementsByClassName("row")
let price = document.getElementsByClassName("price-value")
let total = document.getElementById("total-price") 
let sum =0 ;
let plus =  document.getElementsByClassName("plus-button")
let minus =  document.getElementsByClassName("minus-button")
let quantite =  document.getElementsByClassName("quantite-label")

for(let i =0 ; i< croix.length;i++)
{
   croix[i].addEventListener('click',function(){
   rowElement[i].style.display="none";
   sum =sum-parseInt(quantite[i].innerText)*parseFloat(price[i].innerText);
   total.innerText =sum
}
   )}

let heart = document.getElementsByClassName("heart-button")
for (let i = 0 ; i < heart.length ; i++)
{
    heart[i].addEventListener("click", function()
    { if(heart[i].style.color != "red")
    heart[i].style.color="red"
    else heart[i].style.color ="black"
    }
    )
}


for(let i = 0 ; i < plus.length; i++)
{
 
   plus[i].addEventListener('click',function()
   {
       quantite[i].innerText=parseInt(quantite[i].innerText) + 1 ;
       sum += parseFloat(price[i].innerText) ;
       total.innerText=sum ;
     
   })

}
for(let i = 0 ; i < minus.length; i++)
{
   minus[i].addEventListener('click',function()
   {
       quantite[i].innerText=parseInt(quantite[i].innerText) - 1 ;
       
       if(parseInt(quantite[i].innerText)<0)
       {
       alert("quantity cannot be negative")
       quantite[i].innerText=0;
    }
    else
    {
    sum -= parseFloat(price[i].innerText)  ;
    total.innerText=sum ;}

   })

}


