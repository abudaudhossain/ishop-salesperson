const addToCart = (previousCart, item) => {
  const existItem = previousCart.find(
    (previousItem) => previousItem.id === item.id
  );
  if (existItem) {
    existItem.quantity += item.quantity;
  } else {
    previousCart.push(item);
  }

  return previousCart;
};

export default addToCart