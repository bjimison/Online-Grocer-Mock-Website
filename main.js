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

var milk = new Item('milk', 5);
var butter = new Item('butter', 3);
var cheese = new Item('cheese', 4);
var milkButton = document.getElementById('milk-btn');
var butterButton = document.getElementById('butter-btn');
var cheeseButton = document.getElementById('cheese-btn');
var cartlist = document.getElementById('cartList');

// ********************** MILK BUTTON ************************
milkButton.addEventListener('click', function(){
  // create new element for selected item
  // append item to cartList
  // display name, price, and cart total
  var name = milk.name;
  var price = milk.price;
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

// ************************** BUTTER BUTTON ************************
butterButton.addEventListener('click', function(){
  // create new element for selected item
  // append item to cartList
  // display name, price, and cart total
  var name = butter.name;
  var price = butter.price;
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

// ************************** CHEESE BUTTON ************************
cheeseButton.addEventListener('click', function(){
  // create new element for selected item
  // append item to cartList
  // display name, price, and cart total
  var name = cheese.name;
  var price = cheese.price;
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




