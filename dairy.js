var navbar = document.getElementsByTagName('myNavBar');
window.onscroll = function() {navStick()};
var sticky = navbar.offsetTop;
function navStick() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var totalArray = [];
// var totalTotalArray = [];

var Item = function(name, price){
  this.name = name;
  this.price = price;
}

var milk = new Item('milk', 5);
var butter = new Item('butter', 3);
var cheese = new Item('cheese', 4);
var milkButton = document.getElementById('milk-btn');
var butterButton = document.getElementById('butter-btn');
var cheeseButton = document.getElementById('cheese-btn');
var cartlist = document.getElementById('cartList');
var sum = 0;
// ********************** MILK BUTTON ************************
milkButton.addEventListener('click', function(){
  // create new element for selected item
  // append item to cartList
  // display name, price, and cart total
  var name = milk.name;
  var price = milk.price;
  totalArray.push(price);
  // totalTotalArray.push(price);
  var addedItem = document.createElement('li');
  var displayTotal = document.getElementById('display-total');
  addedItem.textContent = `${name} - $${price}`
  cartList.appendChild(addedItem);

  var total = function(arr){
    var sum = 0;
    for(let i = 0; i < arr.length; i++){
      var amount = arr[i];
      sum += amount;
    }
    displayTotal.textContent = `Cart Total: $${sum}.00`;
    return(totalTotalArray);
  }
  total(totalArray);
});

// ************************** BUTTER BUTTON ************************
butterButton.addEventListener('click', function(){
  // create new element for selected item
  // append item to cartList
  // display name, price, and cart total
  var name = butter.name;
  var price = butter.price;
  totalArray.push(price);
  // totalTotalArray.push(price);
  var addedItem = document.createElement('li');
  var displayTotal = document.getElementById('display-total');
  addedItem.textContent = `${name} - $${price}`
  cartList.appendChild(addedItem);

  var total = function(arr){
    var sum = 0;
    for(let i = 0; i < arr.length; i++){
      var amount = arr[i];
      sum += amount;
    }
    displayTotal.textContent = `Cart Total: $${sum}.00`;
    return(totalTotalArray);
  }
  total(totalArray);
});

// ************************** CHEESE BUTTON ************************
cheeseButton.addEventListener('click', function(){
  // create new element for selected item
  // append item to cartList
  // display name, price, and cart total
  var name = cheese.name;
  var price = cheese.price;
  totalArray.push(price);
  // totalTotalArray.push(price);
  var overall = document.getElementById('overall');
  var addedItem = document.createElement('li');
  var displayTotal = document.getElementById('display-total');
  addedItem.textContent = `${name} - $${price}`
  cartList.appendChild(addedItem);

  var total = function(arr){
    var sum = 0;
    for(let i = 0; i < arr.length; i++){
      var amount = arr[i];
      sum += amount;
    }
    displayTotal.textContent = `Cart Total: $${sum}.00`;
    // overall.textContent = `Overall Total: $${sum}.00`;
    return (totalTotalArray);
  }
  total(totalArray);
});

// var saver = document.getElementById('save');

//   var pleaseWork = function(arr){
//   var sumTotal = 0;
//   for(let i = 0; i < arr.length; i++){
//     sumTotal += arr[i];
//   }
//   // totalTotalArray
//   var lastTryy = document.createElement('h3');
//   lastTryy.textContent = `${sumTotal}`;
//   document.getElementById('reveal').appendChild(lastTryy);

//   return(sumTotal);
//   }


// saver.addEventListener('click', function(){
//   pleaseWork(totalTotalArray);
  // var totalObject = function(num){
  //   this.num = num;
  // }
  // var lastTry = new totalObject(objecto);
  // document.getElementById('reveal').textContent = `${sumTotal}`;
  // var frontPageTotal = document.getElementById('reveal');
  // frontPageTotal.textContent = `${totes}`;
// });

// var saveTotal = function(arr){

//   var sumT = 0;
//   for(let i = 0; i < arr.length; i++){
//     sumT += arr[i];
//   }
//   return sumT;
// }

// var overall = document.getElementById('overall');
// var save = document.getElementById('save');

// save.addEventListener('click', function(){
// function saveTotal (arr){
//   var overall = document.getElementById('overall');
//   var sumT = 0;
//   for(let i = 0; i < arr.length; i++){
//     sumT += arr[i];
//   }
//   return sumT;
//   var finalT = saveTotal(totalTotalArray);
//   overall.textContent = `${finalT}`;
//   }
// });


// var finalTotal = function saveTotal (arr){
//   var sumT = 0;
//   for(let i = 0; i < arr.length; i++){
//     sumT += arr[i];
//   }
//   return sumT;
//   var finalT = saveTotal(totalTotalArray);
//   overall.textContent = finalT;
// }

// save.addEventListener('click', function(){
//   overall.textContent = finalT;
// });







// function w3_open() {
//     document.getElementById("mySidebar").style.display = "block";
// }
// function w3_close() {
//     document.getElementById("mySidebar").style.display = "none";
// }
