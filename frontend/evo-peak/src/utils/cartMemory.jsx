let cart = JSON.parse(localStorage.getItem('cart')) || [];

const saveCart = () => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const cartMemory = {
  addItem: (item) => {
    const exists = cart.find(p => p._id === item._id);
    if (exists) {
      exists.quantity += item.quantity;
    } else {
      cart.push({ ...item });
    }
    saveCart();
  },
  getCart: () => JSON.parse(JSON.stringify(cart)),
  removeItem: (_id) => {
    const index = cart.findIndex(p => p._id === _id);
    if (index !== -1) {
      if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
      } else {
        cart.splice(index, 1);
      }
    }
    saveCart();
  },
  clear: () => {
    cart = [];
    saveCart();
  }
};

export default cartMemory;
