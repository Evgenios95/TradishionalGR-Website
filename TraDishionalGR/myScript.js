function addUserName() {
  const userName = localStorage.fname;
  if (userName !== undefined) {
    document.getElementById(
      "loginNameMessage"
    ).innerHTML = `Welcome back, ${userName}!`;
  }
}

function onLogin() {
  localStorage.clear();
  store();
  console.log(localStorage);
}

function store() {
  let firstName = document.getElementById("fname");
  localStorage.setItem("fname", firstName.value);
  let lastName = document.getElementById("lname");
  localStorage.setItem("lname", lastName.value);
}

const products = [
  {
    p_image: "images/productPhotos/1augotaraxo.png",
    p_title: "Mesologgi bottarga",
    p_price: 32,
    p_details:
      "loremw adan wdaniw dnwaidn aiwdn aiwn ",
    id: 'other',
    productID: 1,
    isInCart: 0,
  },
  {
    p_image: "images/productPhotos/1fava.png",
    p_title: "Santorini fava beans",
    p_price: 22,
    p_details:
      "DDDDDDDDloremw dwqdqwdq d qwd qd qw dqd q",
    id: 'other',
    productID: 2,
    isInCart: 0,
  },
  {
    p_image: "images/productPhotos/1krokos.png",
    p_title: "Saffron",
    p_price: 22,
    p_details:
      "DDDDDDDDloremw adan wdaniw dnwaidn aiwdn ",
    id: 'other',
    productID: 3,
    isInCart: 0,
  },
  {
    p_image: "images/productPhotos/1meli-peuko.png",
    p_title: "Pinetree Honey",
    p_price: 22,
    p_details:
      "DDDDDDDDloremw adan wdaniw dnwaidn aiwdn ",
    id: 'other',
    productID: 4,
    isInCart: 0,
  },
  {
    p_image: "images/productPhotos/1Sisameleo.png",
    p_title: "Sesame Oil",
    p_price: 13,
    p_details:
      "n jownd ainwdi andoawndnwqoind wioqnd oqin",
    id: 'other',
    productID: 5,
    isInCart: 0,
  },
  {
    p_image: "images/productPhotos/1Syko-pellas.png",
    p_title: "Fig Sweet",
    p_price: 19,
    p_details:
      "ajownd ainwdi andoawndnwqoind wioqnd oqin",
    id: 'other',
    productID: 6,
    isInCart: 0,
  },
  {
    p_image: "images/productPhotos/1taxini.png",
    p_title: "Tahini",
    p_price: 32,
    p_details:
      " wajond ajownd ainwdi andoawndnwqoind wioqnd oqin",
    id: 'other',
    productID: 7,
    isInCart: 0,
  },
  {
    p_image: "images/productPhotos/1Tsaibio.png",
    p_title: "Mountain Tea (bio)",
    p_price: 13,
    p_details:
      "DDDDDDDDloremw  andoawndnwqoind wioqnd oqin",
    id: 'other',
    productID: 8,

    isInCart: 0,
  },
  {
    p_image: "images/productPhotos/2feta.png",
    p_title: "Olympos Feta",
    p_price: 41,
    p_details:
      "aidn waidnw wajond ajownd ainwdi andoawndnwqoind wioqnd oqin",
    id: 'cheese',

    productID: 9,
    isInCart: 0,
  },
  {
    p_image: "images/productPhotos/2kefalograviera.png",
    p_title: "Kefalograviera Naxou",
    p_price: 43,
    p_details:
      "DDDDDDDDloremw  andoawndnwqoind wioqnd oqin",
    id: 'cheese',
    productID: 10,
    isInCart: 0,
  },
  {
    p_image: "images/productPhotos/2ladotyri.png",
    p_title: "Mitilini Ladotiri",
    p_price: 52,
    p_details:
      "DDDDDDDDloremw adan wioqnd oqin",
    id: 'cheese',
    productID: 11,
    isInCart: 0,
  },
  {
    p_image: "images/productPhotos/2metsovone.png",
    p_title: "Metsovone",
    p_price: 67,
    p_details:
      "DDDDDDDDloremw oind wioqnd oqin",
    id: 'cheese',
    productID: 12,
    isInCart: 0,
  },
  {
    p_image: "images/productPhotos/3metaxa.png",
    p_title: "Metaxa Liqueur",
    p_price: 145,
    p_details:
      "idn waidnw wajond ajownd ainwdi andoawndnwqoind wioqnd oqin",
    id: 'spirits',
    productID: 13,
    isInCart: 0,
  },
  {
    p_image: "images/productPhotos/3nemea.png",
    p_title: "Nemea Red Wine",
    p_price: 512,
    p_details:
      " waidn waidnw wajond ajownd ainwdi andoawndnwqoind wioqnd oqin",
    id: 'spirits',
    productID: 14,
    isInCart: 0,
  },
  {
    p_image: "images/productPhotos/3tsipouro.png",
    p_title: "Apostolakis Tsipouro",
    p_price: 111,
    p_details:
      "DDDDDDDDloremw adan ioqnd oqin",
    id: 'spirits',
    productID: 15,
    isInCart: 0,
  },
  {
    p_image: "images/productPhotos/3tsipouro2.png",
    p_title: "Aged Tsipouro",
    p_price: 133,
    p_details:
      "aidnw wajond ajownd ainwdi andoawndnwqoind wioqnd oqin",
    id: 'spirits',
    productID: 16,
    isInCart: 0,
  },
];

function renderProducts (products) {
  var div = $('<div class="product-center-container">');
  for (let i = 0; i < products.length; i++) {
    div.append(fetchData(i));
    $(".mainProdSection").append(div);
  }
};

function fetchData(i) {
  return `
  <div class="product ${products[i].id}" >
  <h1 class="p_title">${products[i].p_title}</h1>
  <img class="p_image" src="${products[i].p_image}">
  <h4 class="p_price">$${products[i].p_price}</h4>
  <button class="itemsToCart"><img src="images/cartAdd.png" alt="Basket displayed here"></button><br><br>
  <a href="pDescription.html" button class="btn btn-light" style="background-color: #cc7511" onclick="saveDetails('${products[i].p_image}', '${products[i].p_title}', '${products[i].p_price}', '${products[i].p_details}');">Details</button></a> 
  </div> 
  `;
}


function filterSelection(c){
  var x = c;
  var i, productDivs;
  productDivs = document.getElementsByClassName("product");
  // if (c == "all"){
  //     c = "";
  // }

  for (i = 0; i < productDivs.length; i++) {
      //If the filterText is equal to the type
      if(productDivs[i].className.indexOf(c) > -1){
          productDivs[i].style.display = "inline-block";
      }else{
          productDivs[i].style.display = "none";
      }
  }
}