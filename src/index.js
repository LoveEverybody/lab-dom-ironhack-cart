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
  const target = event.currentTarget.parentNode.parentNode;
  target.parentNode.removeChild(target);
  calculateAll()
  /* Another way...
  const row = target.parentNode.parentNode;
  row.remove()
  calculateAll()
  */
}

// ITERATION 5

function createProduct() {
  //console.log("Create new product")
  const newProduct = document.querySelector(".create-product");
   
  const productNameNew = newProduct.querySelector('input')
  const productPriceNew = newProduct.querySelector('input[type=number]')

  //let productName = productNameNew.value
  //let productPrice = productPriceNew.valueAsNumber

  const productName = productNameNew.value
  const productPrice = productPriceNew.valueAsNumber

  //console.log(productName, productPrice)
  if(productName === '' || productPrice === 0){
    window.alert("Please, type product name and price")
    return;
  }
  const newRow = document.createElement('tr')
  newRow.className = ('product');


  const productContent =`
                          <td class="name">
                            <span>${productName}</span>
                          </td>
                          <td class="price">
                            $<span>${productPrice}</span>
                          </td>
                          <td class="quantity">
                            <input type="number" value="0" min="0" placeholder="Quantity" />
                          </td>
                          <td class="subtotal">
                            $<span>0</span>
                          </td>
                          <td class="action">
                            <button class="btn btn-remove">Remove</button>
                          </td>
                        `

newRow.innerHTML = productContent;

const removeButton = newRow.querySelector('.btn-remove')
removeButton.addEventListener('click', removeProduct)

const tBodyElement = document.querySelector('tbody');
tBodyElement.appendChild(newRow);


/**** It is not cleaning the input ****/

//productName.value = '';
//productPrice.value = 0;

productNameNew.value = ''
productPriceNew.value = 0
//console.log(productName, productName.value)
//console.log(productPrice, productPrice.value)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn.btn-remove');
  removeBtns.forEach((removeBtn) => {
    removeBtn.addEventListener('click', removeProduct)
  });

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

  //... your code goes here
});


//<canvas id="example" width="300" height="300"></canvas>