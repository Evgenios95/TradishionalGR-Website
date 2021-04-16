/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////Getting rid of the ugly html////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
const mostTopNavFinder = document.querySelector(".mostTop");
const navFinder = document.querySelector(".navMain");
const footerFinder = document.querySelector(".Tradishional-Footer");

const addTopNavFooter = function () {
  const navTString = `
  <p class="welcomeMessage" id="loginNameMessage">Log in to get started</p>
  <img src="images/myLogo2.png" alt="Logo" class="logo" />
  <form class="login">
      <input
        type="text"
        placeholder="first name"
        class="userInput"
        id ="fname"
      />
      
      <input
        type="text"
        placeholder="last name"
        class="userInput"
        id ="lname"
      />
      <button class="loginButton" onclick="onLogin()">&rarr;</button>
    </form>`;

  mostTopNavFinder.innerHTML = navTString;

  const navBStrign = `<ul>
    <li><a href="HomePage.html">Home</a></li>
    <li><a href="products.html" class="allProd">All Products</a></li>
    <li><a class="drop" href="#">Categories</a>
    <ul>
        <li><button class="filterbtn" onclick="filterProductCategory('cheese')">Cheese</button></li>
        <li><button class="filterbtn" onclick="filterProductCategory('spirits')">Spirits</button></li>
        <li><button class="filterbtn" onclick="filterProductCategory('other')">Other</button></li>
    </ul>
    </li>
    <li>
        <a href="Basket.html">
            <div class="myBasketButton">
                <span class="spanBasketButton">
                    <i class="fas fa-shopping-basket"></i>
                </span>
                <div class="itemsToBasket">
                    0
                </div>
            </div>
        </a>
    </li>
</ul>`;

  navFinder.innerHTML = navBStrign;

  let footString = `    <div class="container">
<div class="row">
  <div class="col-sm-12 col-md-6">
    <h6>About</h6>
    <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quas delectus
      assumenda, saepe adipisci at natus similique alias illo eveniet reprehenderit ea aperiam, hic nostrum soluta
      impedit iure ex ab. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe perferendis voluptate
      odit quam eaque, explicabo voluptatibus!</p>
  </div>

  <div class="col-xs-6 col-md-3">
    <h6>Categories</h6>
    <ul class="footer-links" style="text-align: center">
      <li><a href="#">Best cheese EU?</a></li>
      <li><a href="#">Best spirits EU?</a></li>
      <li><a href="#">Best everything?</a></li>
      <li><a href="#">Best every-everything?</a></li>
      <li><a href="#">Saul Goodmaaaaan👨‍⚖️</a></li>
    </ul>
  </div>

  <div class="col-xs-6 col-md-3">
    <h6>Quick Links</h6>
    <ul class="footer-links" style="text-align: center">
      <li><a href="#">About Us</a></li>
      <li><a href="#">Contact Us</a></li>
      <li><a href="#">Contribute</a></li>
      <li><a href="#">Privacy Policy</a></li>
      <li><a href="#">Sitemap</a></li>
    </ul>
  </div>
</div>
<hr>
</div>
<div class="container">
<div class="row">
  <div class="col-md-8 col-sm-6 col-xs-12">
    <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by
      <a href="#">Tradishional-GR</a>.
    </p>
  </div>

  <div class="col-md-4 col-sm-6 col-xs-12">
    <ul class="social-icons">
      <li><a class="facebook" href="#"><i class="fab fa-facebook"></i></a></li>
      <li><a class="twitter" href="#"><i class="fab fa-twitter"></i></a></li>
      <li><a class="instagram" href="#"><i class="fab fa-instagram"></i> </a></li>
      <li><a class="linkedin" href="#"><i class="fab fa-linkedin"></i> </a></li>
    </ul>
  </div>
</div>
</div>`;

  footerFinder.innerHTML = footString;
};

const addFooter = function () {};
