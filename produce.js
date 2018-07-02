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

var lettuce = new Item('lettuce', 5);
var carrots = new Item('carrots', 3);
var tomatoes = new Item('tomatoes', 4);
var lettuceButton = document.getElementById('lettuce-btn');
var carrotsButton = document.getElementById('carrots-btn');
var tomatoesButton = document.getElementById('tomatoes-btn');
var cartlist = document.getElementById('cartList');

// ********************** lettuce BUTTON ************************
lettuceButton.addEventListener('click', function(){
  // create new element for selected item
  // append item to cartList
  // display name, price, and cart total
  var name = lettuce.name;
  var price = lettuce.price;
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

// ************************** CARROTS BUTTON ************************
carrotsButton.addEventListener('click', function(){
  // create new element for selected item
  // append item to cartList
  // display name, price, and cart total
  var name = carrots.name;
  var price = carrots.price;
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

// ************************** TOMATOES BUTTON ************************
tomatoesButton.addEventListener('click', function(){
  // create new element for selected item
  // append item to cartList
  // display name, price, and cart total
  var name = tomatoes.name;
  var price = tomatoes.price;
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
