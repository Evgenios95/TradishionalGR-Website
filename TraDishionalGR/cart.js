const cartButtons = document.querySelectorAll(".itemsToCart");

/* For every single one of the add to cart buttons, add 
an event listener to it which calls the cartQty and the 
totalCost functions. The parameters of these functions 
correspond to each individual product, which button is pressed.*/
for (let i = 0; i < cartButtons.length; i++) {
  cartButtons[i].addEventListener("click", () => {
    cartQty(products[i]);
    totalCost(products[i]);
  });
}


function onLoadCartNumbers() {
  let productQty = localStorage.getItem("cartQty");
  if (productQty) {
    document.querySelector(".itemsToBasket").textContent = productQty;
  }
}

/**
 * 1. We assign to a vaariable called productQty the cartQty value that we retrieve from the local storage
 * 2. After that, the variable is converted to a number, since everything that we retrieve from the localstorage comes as a string.
 * 3. else: If the productqty doesn't exist, then we set it, and give it a value of 1. We also choose the tiny div (in the navigation)
 *    which is in the basket button and we change its content from 0 to 1.
 * 4. if: If the previous step is already done, increment the value of cartQty and also update the value of our basket 
 *    in the navigation from 1 to ++.
 * 5. Last, we set the product.
 * @param {*} product the product that I will set through the setItems function below. 
 */
function cartQty(product) {
  let productQty = localStorage.getItem("cartQty");
  productQty = parseInt(productQty);

  if (productQty) {
    localStorage.setItem("cartQty", productQty + 1);
    document.querySelector(".itemsToBasket").textContent = productQty + 1;
  } else {
    localStorage.setItem("cartQty", 1);
    document.querySelector(".itemsToBasket").textContent = 1;
  }
  setItems(product);
}

/**
 * 1. cartItems is the variable where we store the productsInCart that we retrieve from the localStorage as a string,
 *    and since it's a string we need to parse it into an object.
 * 2. If cartItems already exists, and if the id of the product is undefined, which means that it's empty, put into the cartItems
 *    the value of cartItems with the properties of the old cart, and set the product id to product.
 * @param {*} product my product from the products
 */
function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.productID] == undefined) {
      cartItems = {
        ...cartItems,
        [product.productID]: product,
      };
    }
    cartItems[product.productID].isInCart += 1;
  } else {
    product.isInCart = 1;
    cartItems = {
      [product.productID]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

/**
 * 1. cartCost will be the variable that we store the totalCost from the localStorage
 * 2. The totalCost accepts the product's price if it's null in the beginning and after 
 *    that its value it's updated and the new product's price increases the value of the cartCost.
 * 3. Note: Since the cartCost is retrieved as a string from the localStorage, we need ofc to 
 *    convert it into a number.
 * @param {*} product just the product that we choose to add in the basket.
 */
function totalCost(product) {
  // console.log('The products price is', product.p_price);
  let cartCost = localStorage.getItem("totalCost");
  cartCost = Number(cartCost);
  // console.log(typeof cartCost);

  if (cartCost == null) {
    localStorage.setItem("totalCost", product.p_price);
  } else {
    localStorage.setItem("totalCost", (cartCost += product.p_price));
  }
}

/**
 * That's just the rendering method:
 * 1. We get the cost and the items of the cart from their localStorage places and we parse the items into an object,
 *    in order to retrieve their values, and render them since they are retrieved in a string form.
 * 2. I split my toBeRendered categories to 2 divs. One for the products, and one for the total Price, since I don't want
 *    to display the totalPrice in every "iteration" of a product added to my view.
 */
function displayCart() {
  let cartCost = localStorage.getItem("totalCost");

  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  let productContainer = document.querySelector(".gridItem");
  let priceContainer = document.querySelector(".basketTotalContainer");
  if (cartItems && productContainer) {
    //is there something there already?
    productContainer.innerHTML = "";
    priceContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
            <div class="child-1">
                <img src="${item.p_image}">
            </div>
            <div class ="child-2">
            <div>
                <h2> ${item.p_title} </h2>
                <h3> $${item.p_price},00 </h3>
                <h4 class ="total">Total item cost:  $${
                  item.isInCart * item.p_price
                },00</h4>
                </div>
            </div>
            `;
    });
    priceContainer.innerHTML += `
        <h4 class= "basketTotalTitle">
        Basket Total
        </h4>
        <hr>
        <h4 class ="basketTotal">
            $ ${cartCost},00
        </h4>`;
  }
}

onLoadCartNumbers();
//run whenever the page loads
displayCart();
