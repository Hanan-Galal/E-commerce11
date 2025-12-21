products = [
  {
    name: "Hydrating Face Cream",
    price: 25.0,
    image: "images/product1.png.jpg",
  },
  {
    name: "Revitalizing Eye Serum",
    price: 30.0,
    image: "images/product2.png.jpg",
  },
  {
    name: "Gentle Foaming Cleanser",
    price: 20.0,
    image: "images/product3.png.jpg",
  },
  {
    name: "Nourishing Night Balm",
    price: 35.0,
    image: "images/product4.png.jpg",
  },
  { name: "Vitamin C Serum", price: 32.0, image: "images/product5.png.jpg" },
  { name: "Sunscreen SPF 50", price: 28.0, image: "images/product6.png" },
  { name: "Exfoliating Scrub", price: 22.0, image: "images/product7.png "},
  {
    name: "Moisturizing Body Lotion",
    price: 26.0,
    image: "images/product8.jpg ",
  },
    {
    name: "Moisturizing Body Lotion",
    price: 26.0,
    image: "images/product9.png ",
  }
];
const productsContainer = document.getElementById("products-container");
products.forEach((product) => {
  productsContainer.innerHTML += `
    <div class="bg-pink-50 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <img src="${product.image}" alt="${product.name}" class="w-64 h-64 object-cover rounded-lg shadow-lg"/>
    <h3 class="text-2xl font-bold text-gray-500 mt-4">${product.name}</h3>
    <p class="text-xl text-gray-400 m-4">$${product.price}</p>
    <a href="#" class="text-white bg-gray-500 rounded p-2 ">add to cart</a>
            </div>`;
});
