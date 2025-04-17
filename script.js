document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.add-to-cart');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const name = button.dataset.name;
      const price = button.dataset.price;

      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push({ name, price });
      localStorage.setItem('cart', JSON.stringify(cart));
      alert(${name} به سبد خرید اضافه شد!);
    });
  });
});
