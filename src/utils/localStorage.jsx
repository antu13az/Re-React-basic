const getStoredCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }

  return [];
};

const saveCartToLs = (cart) => {
  const cartStringFide = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringFide);
};
const addToLs = (id) => {
    
  const cart = getStoredCart(id);
  cart.push(id);
  saveCartToLs(cart);
};

export { addToLs,getStoredCart };
