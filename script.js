// Index Page................................................................................

const dummyUser = {
  username: "admin",
  password: "1234",
};

const loginForm = document.getElementById("login-form");
const messagePara = document.getElementById("login-message");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const enteredUsername = document.getElementById("username").value.trim();
    const enteredPassword = document.getElementById("password").value.trim();

    if (
      enteredUsername === dummyUser.username &&
      enteredPassword === dummyUser.password
    ) {
      messagePara.textContent = `🎉 Welcome, ${enteredUsername}!`;
      messagePara.style.color = "green";
      setTimeout(() => {
        window.location.href = "home.html";
      }, 1000);
    } else {
      messagePara.textContent = "❌ Invalid username or password.";
      messagePara.style.color = "red";
    }
  });
}

// Product Grid................................................................................

const product = [
  {
    id: 1,
    title: "Xiaomi Mi Band 5",
    category: "Watches",
    price: 1999.0,
    image: "images/watch.png",
  },
  {
    id: 2,
    title: "Big Power Sound Speaker",
    category: "Speaker",
    price: 2750.0,
    image: "images/speaker.png",
  },
  {
    id: 3,
    title: "Wifi Security Camera",
    category: "Camera",
    price: 2999.0,
    image: "images/webcam.png",
  },
  {
    id: 4,
    title: "iPhone 6s",
    category: "Phones",
    price: 39999.0,
    image: "images/phone.png",
  },
  {
    id: 5,
    title: "Wireless Headphones",
    category: "Headphones",
    price: 3499.0,
    image: "images/headphones.png",
  },
  {
    id: 6,
    title: "Mini Bluetooth Speaker",
    category: "Speaker",
    price: 799.0,
    image: "images/mini-speaker.png",
  },
  {
    id: 7,
    title: "PX7 Wireless Headphones",
    category: "Headphones",
    price: 1999.0,
    image: "images/PX7-headphones.png",
  },
  {
    id: 8,
    title: "Apple Macbook Air",
    category: "Laptop",
    price: 79999.0,
    image: "images/macbook.png",
  },
  {
    id: 9,
    title: "Apple Macbook Air",
    category: "Laptop",
    price: 79999.0,
    image: "images/macbook.png",
  },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const productLoader = document.getElementById("product-loader");

function loadProduct(productlist) {
  productLoader.innerHTML = "";
  productlist.forEach((product) => {
    const productCard = `
    <div class="product-grid-1 h-[30rem] p-2 border rounded">
        <img class="w-full h-3/5" src="${product.image}" alt="" />
        <div class="product-info h-2/5 flex flex-col justify-evenly">
          <span>${product.category}</span>
          <a href="#">${product.title}</a>
          <span>${product.price}</span>
          <div class="buttons flex justify-between">
            <button class="addCart w-28 h-11 bg-blue-500 text-white rounded" data-id="${product.id}">
              Add to Cart
            </button>
            <button class="w-28 h-11 bg-yellow-500 text-black rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    `;
    productLoader.innerHTML += productCard;
  });
}

if (productLoader) {
  loadProduct(product);
}

document.querySelectorAll(".addCart").forEach((btn) => {
  btn.addEventListener("click", function handleAddCart(e) {
    const productId = parseInt(e.target.dataset.id);
    const selectedProduct = product.find((p) => p.id === productId);

    cart.push(selectedProduct);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${selectedProduct.title} added to cart!`);
  });
});

// Cart................................................................................

const cartitems = JSON.parse(localStorage.getItem("cart")) || [];

function displayCartItem() {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = "";

  if (cartitems.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty</p>";
    return;
  }

  cartitems.forEach((items) => {
    cartContainer.innerHTML += `
  <div class="cart-product1 w-full h-32 flex justify-between items-center gap-2.5 border border-gray-300 pt-7 pb-7 pr-5 pl-5">
    <div class="product-name1 w-2/5">${items.name}</div>
    <div class="choose-quantity1 flex flex-col w-1/5">
    <select class="border border-gray-300 rounded h-10" name="" id="">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
            </div>
            <div class="subtotal1 w-1/5">${items.price}</div>
            <div class="remove1 w-1/5">Remove</div>
          </div>
  `;
  });
}

if (cartContainer) {
  displayCartItem();
}

// cart count.........................................................................

let count = 0;
const cartCount = document.getElementById("cart-count");
const cartElement = document.querySelectorAll(".addCart");

cartElement.forEach((button) => {
  button.addEventListener("click", () => {
    count++;
    cartCount.textContent = count;
  });
});
