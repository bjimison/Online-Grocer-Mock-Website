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

var Item = function(name, price){
  this.name = name;
  this.price = price;
}

var groundBeef = new Item('groundBeef', 5);
var steak = new Item('steak', 3);
var ham = new Item('ham', 4);
var groundBeefButton = document.getElementById('groundBeef-btn');
var steakButton = document.getElementById('steak-btn');
var hamButton = document.getElementById('ham-btn');
var cartlist = document.getElementById('cartList');

// ********************** GROUNDBEEF BUTTON ************************
groundBeefButton.addEventListener('click', function(){
  // create new element for selected item
  // append item to cartList
  // display name, price, and cart total
  var name = groundBeef.name;
  var price = groundBeef.price;
  totalArray.push(price);
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
  }
  total(totalArray);
});

// ************************** STEAK BUTTON ************************
steakButton.addEventListener('click', function(){
  // create new element for selected item
  // append item to cartList
  // display name, price, and cart total
  var name = steak.name;
  var price = steak.price;
  totalArray.push(price);
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
  }
  total(totalArray);
});

// ************************** HAM BUTTON ************************
hamButton.addEventListener('click', function(){
  // create new element for selected item
  // append item to cartList
  // display name, price, and cart total
  var name = ham.name;
  var price = ham.price;
  totalArray.push(price);
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
  }
  total(totalArray);
});











// function w3_open() {
//     document.getElementById("mySidebar").style.display = "block";
// }
// function w3_close() {
//     document.getElementById("mySidebar").style.display = "none";
// }
