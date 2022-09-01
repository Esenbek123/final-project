export function getCountProductsCart() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  return cart ? cart.towars.length : 0;
}

export function calcSubPrice(towar) {
  return towar.count * towar.item.price;
}

export function calcTotalPrice(towars) {
  let totalPrice = 0;
  towars.forEach((item) => {
    totalPrice += item.subPrice;
  });
  return totalPrice;
}

export function checkProductInCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    cart = {
      towars: [],
      totalPrice: 0,
    };
  }
  let newCart = cart.towars.filter((elem) => elem.item.id === id);
  return newCart.length > 0 ? true : false;
}
