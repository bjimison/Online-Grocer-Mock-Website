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

var beans = new Item('beans', 5);
var nuts = new Item('nuts', 3);
var seeds = new Item('seeds', 4);
var beansButton = document.getElementById('beans-btn');
var nutsButton = document.getElementById('nuts-btn');
var seedsButton = document.getElementById('seeds-btn');
var cartlist = document.getElementById('cartList');

// ********************** BEANS BUTTON ************************
beansButton.addEventListener('click', function(){
  // create new element for selected item
  // append item to cartList
  // display name, price, and cart total
  var name = beans.name;
  var price = beans.price;
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

// ************************** NUTS BUTTON ************************
nutsButton.addEventListener('click', function(){
  // create new element for selected item
  // append item to cartList
  // display name, price, and cart total
  var name = nuts.name;
  var price = nuts.price;
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

// ************************** SEEDS BUTTON ************************
seedsButton.addEventListener('click', function(){
  // create new element for selected item
  // append item to cartList
  // display name, price, and cart total
  var name = seeds.name;
  var price = seeds.price;
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
