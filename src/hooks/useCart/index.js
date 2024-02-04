import { useSelector } from "react-redux";

export const useCartItemQuantity = (productId) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartItem = cartItems.find((product) => product.id === productId);
  return cartItem ? cartItem.quantity : 0;
};
