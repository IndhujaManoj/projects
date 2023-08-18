var c = 0;
document.getElementById("value").innerText = c;

function increment() {
  c += 1;
  document.getElementById("value").innerText = c;
  updateItemPrice();
}

function decrement() {
  if (c > 0) {
    c -= 1;
    document.getElementById("value").innerText = c;
    updateItemPrice();
  }
}

function updateItemPrice() {
  var itemPriceElement = document.getElementById("summary-price");
  var originalPrice = 20.00; 
  var shippingCost = 4.99; 
  var totalCost=document.getElementById('summary-item')
  totalCost.innerText=(originalPrice*c+shippingCost).toFixed(2)
//   var totalCost = originalPrice + shippingCost * c;

  itemPriceElement.innerText = "$" + originalPrice*c+".00";
}

function reset() {
  c = 0;
  document.getElementById("value").innerText = c;
  updateItemPrice();
}

// var c=0;
// document.getElementById("value").innerText =c;
// function increment(){
//     c+=1;
//     document.getElementById("value").innerText = c;
//     console.log(c)
//     document.getElementsByClassName('item-price').innerHTML=""
// }
// function decrement(){
//     c-=1;
//     document.getElementById("value").innerText = c;
// }
// function reset(){
//     c=00;
//     document.getElementById("value").innerText = c;
// }


// var b=0;
// document.getElementById("value1").innerText =b;
// function increment1(){
//     b+=1;
//     document.getElementById("value1").innerText = b;
// }
// function decrement1(){
//     b-=1;
//     document.getElementById("value1").innerText = b;
// }
// function reset1(){
//     b=00;
//     document.getElementById("value1").innerText = b;
// }


// var a=0;
// document.getElementById("value2").innerText =a;
// function increment2(){
//     a+=1;
//     document.getElementById("value2").innerText = a;
// }
// function decrement2(){
//     a-=1;
//     document.getElementById("value2").innerText = a;
// }
// function reset2(){
//     a=00;
//     document.getElementById("value2").innerText = a;
// }
