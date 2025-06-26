let cart = [];

const cartMemory = {
  addItem: (item) => {
    // Buscar por id (o usa _id si tienes)
    const exists = cart.find(p => p.id === item.id);
    if (exists) {
      exists.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }
  },
  getCart: () => cart,
  removeItem: (id) => {
    cart = cart.filter(p => p.id !== id);
  },
  clear: () => {
    cart = [];
  }
};

export default cartMemory;
