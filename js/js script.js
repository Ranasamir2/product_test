var allProducts = document.querySelectorAll(".products li") 
var div1 = document.querySelector("#div1") 
var btn1 = document.querySelector("#showprice") 
var div2 = document.querySelector("#div2") 
var totalPrice = 0 
 
allProducts.forEach(function (item) { 
    item.onclick = function (){ 
        div1.innerHTML += item.textContent + "," 
        totalPrice +=  +(item.getAttribute("price")) 
        // div2.innerHTML = totalPrice 
        if (div1.innerHTML != ""){ 
            btn1.style.display = "block" 
            btn1.style.width = "200px" 
            btn1.style.height = "45px" 
            btn1.style.backgroundColor = "brown" 
            btn1.style.color = "white" 
            btn1.style.fontSize = "23px" 
        } 
         
    } 
}) 
 
btn1.onclick = function (){ 
    div2.innerHTML=(totalPrice) 
}