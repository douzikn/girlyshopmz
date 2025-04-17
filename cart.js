// اضافه کردن محصول به سبد خرید
function addToCart(productName, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const product = {
    name: productName,
    price: price,
    image: image,
    quantity: 1,
  };

  // بررسی اینکه آیا محصول از قبل توی سبد هست
  const existing = cart.find(item => item.name === product.name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(${productName} به سبد خرید اضافه شد!);
}
