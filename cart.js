let cart = [];

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  alert(productName + " به سبد خرید اضافه شد!");
  updateCartCount();
}

function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

function showCart() {
  let cartItems = "";
  let total = 0;

  cart.forEach(item => {
    cartItems += <li>${item.name} - ${item.price.toLocaleString()} تومان</li>;
    total += item.price;
  });

  document.getElementById("cart-items").innerHTML = cartItems || "<li>سبد خرید خالی است.</li>";
  document.getElementById("cart-total").textContent = total.toLocaleString();
}
