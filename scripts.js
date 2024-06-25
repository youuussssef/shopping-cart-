let heart_btn=document.getElementsByClassName("heart_btn");
let plus_btn=document.getElementsByClassName("plus-btn");
let Quant=document.getElementsByClassName("Quant");
let minus_btn=document.getElementsByClassName("minus-btn")
let total=document.getElementById("finalPrice")
let price=[1379,176,249]
let deletee_btn=document.getElementsByClassName("delete")
let item=document.getElementsByClassName("Item")
for (let index = 0; index < heart_btn.length; index++) {
    // Heart Button
    heart_btn[index].addEventListener("click",function(){
        if(heart_btn[index].style.color=="red"){
            heart_btn[index].style.color="black"
        }
        else{
            heart_btn[index].style.color="red"
        }
    })

    // Plus Button
    plus_btn[index].addEventListener("click",function(){
        Quant[index].value=Number(Quant[index].value)+1
        total.value=Number(total.value)+Number(price[index])
    })
    // Minus Button
    minus_btn[index].addEventListener("click",function(){
    if (Number(Quant[index].value)>1){
        Quant[index].value=Number(Quant[index].value)-1
        total.value=Number(total.value)-Number(price[index])
    }
    })
    // delete
    deletee_btn[index].addEventListener("click",function() {
item[index].style.display="none"
total.value=Number(total.value)-(price[index]*Number(Quant[index].value))

    })
}
