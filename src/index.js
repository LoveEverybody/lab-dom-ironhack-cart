// ITERATION 1

function updateSubtotal(product) {
  //I was doing document.querySelector... and not in the specific prodcut...
  //it was returning allways the same product (first) - ok now
  const productPrice = product.querySelector('.price span').innerText;
  const productQuantity = product.querySelector('.quantity input').value;
  const subTotal = Number(productPrice) * Number(productQuantity);
  const subTotalOdd = product.querySelector('.subtotal span')
  subTotalOdd.innerText = subTotal
  return subTotal;
}

function calculateAll() {
  const browserProducts = document.getElementsByClassName('product')
  const allProducts = [...browserProducts]
  let totalProducts = 0;
  allProducts.forEach(product => totalProducts += updateSubtotal(product))
  //for(let i = 0; i < allProducts.length; i++){
   //console.log(updateSubtotal(allProducts[i]))
 // }
  

  document.querySelector("#total-value span").innerText = totalProducts;

  
  //console.log(document.querySelectorAll())

  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

/*window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const  removeBtn = document.getElementsByClassName('btn btn-remove')

  removeBtn.forEach(remove => {remove.addEventListener('click', removeProduct);})


});*/

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn.btn-remove');
  removeBtns.forEach((removeBtn) => {
    removeBtn.addEventListener('click', removeProduct)
  });

  //... your code goes here
});


//<canvas id="example" width="300" height="300"></canvas>