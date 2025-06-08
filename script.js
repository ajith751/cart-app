const products = [
  { id: 1, name: "Apple", price: 1 },
  { id: 2, name: "Banana", price: 0.5 },
  { id: 3, name: "Orange", price: 0.8 }
];

const productContainer = document.getElementById("products");
const cartContainer = document.getElementById("cart");

function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartContainer.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartContainer.appendChild(li);
  });
}

function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

products.forEach(product => {
  const div = document.createElement("div");
  div.innerHTML = `
    <strong>${product.name}</strong> - $${product.price}
    <button>Add to Cart</button>
  `;
  div.querySelector("button").addEventListener("click", () => addToCart(product));
  productContainer.appendChild(div);
});

loadCart();

