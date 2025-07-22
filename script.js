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

const productLoader = document.getElementById("product-loader");

function loadProduct(productlist) {
  productLoader.innerHTML = "";
  productlist.forEach((product) => {
    const productCard = `
    <div class="product-grid-1 h-[30rem] p-2 border">
     <img class="w-full h-3/5" src="${product.image}" alt="" />
     <div class="product-info h-2/5 flex flex-col justify-center">
      <span>${product.category}</span>
      <a href="">${product.title}</a>
      <span>${product.price}</span>
     </div>
    </div>
    `;
    productLoader.innerHTML += productCard;
  });
}

loadProduct(product);