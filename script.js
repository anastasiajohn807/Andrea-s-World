let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} has been added to your cart!`);
}

cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} has been added to your cart!`);
}

// Cart Page logic
function displayCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  const totalContainer = document.getElementById('total');

  if (!cartItemsContainer) return; // Exit if not on cart page

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    totalContainer.innerHTML = "";
    return;
  }

  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';
    itemDiv.innerHTML = `
      <p><strong>${item.name}</strong> - ₦${item.price.toLocaleString()}</p>
    `;
    cartItemsContainer.appendChild(itemDiv);
  });

  totalContainer.innerHTML = `<h3>Total: ₦${total.toLocaleString()}</h3>`;
}

window.onload = displayCart;
