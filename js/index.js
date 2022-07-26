// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = price*quantity
  const subTotalCell = product.querySelector('.subtotal span')
  subTotalCell.innerHTML = subTotal
  return subTotal
}
//redo the first iteration with help from Ece

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
 const products = document.getElementsByClassName('product');

 // another way to achieve it
/* let total = 0;
 let rows = document.querySelectorAll(".product");

 rows.forEach(function (product) {
   let subTotal = updateSubtotal(product);
   total += subTotal;
 }) */

// I used for...of while Ece used for each!

  // ITERATION 3
  let sum = 0
  for (element of products){
    sum+=updateSubtotal(element)
  }
  const totalSum = document.querySelector('#total-value span')
  totalSum.innerHTML = sum
}
//At the end of the calculateAll() function, reuse the total value you just calculated in the previous iteration and update the corresponding DOM element. Calculate the total price for the products in your cart by summing all of the subtotals returned by updateSubtotal() when it was called with each product.

// Lastly, display that value on your DOM.

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
