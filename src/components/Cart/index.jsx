import React, { useState } from 'react';
import * as S from '../Cart/index.styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/cartSlice';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const [isCartVisible, setCartVisibility] = useState(false);
  const navigate = useNavigate(); 

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product.id));
  };

  const handleCartToggle = () => {
    setCartVisibility(!isCartVisible);
  }

  const handleCloseCart = () => {
    setCartVisibility(false);
  }

  const getCartItemQuantity = (productId) => {
    const cartItem = cartItems.find((product) => product.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleRemoveAllFromCart = (product) => {
    const quantity = getCartItemQuantity(product.id);
    for (let i = 0; i < quantity; i++) {
      dispatch(removeFromCart(product.id));
    }
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((product) => {
      const quantity = getCartItemQuantity(product.id);
      totalPrice += product.discountedPrice
        ? product.discountedPrice * quantity
        : product.price * quantity;
    });
    return Math.round(totalPrice);
  };

  const handleCheckout = () => {
    navigate('/checkout');
    setCartVisibility(false); 
  }

  return (
    <S.Cart>
      <S.CartIcon onClick={handleCartToggle}>
        <ShoppingBagOutlinedIcon />
        <span>({cartItemCount})</span>
      </S.CartIcon>
      {isCartVisible ? (
        <S.OpenedCart>
          <S.TopOpenedCart>
            <S.TopTitle>
              Shopping Cart
            </S.TopTitle>
            <S.CloseCart onClick={handleCloseCart}>
              <CloseRoundedIcon/>
            </S.CloseCart>
          </S.TopOpenedCart>
          {cartItems.length === 0 ? (
            <S.CartContent>
              <p>Shopping cart is empty.</p>
            </S.CartContent>
          ) : (
            <S.CartContent>
              <S.CartList>
                {cartItems.map(product => (
                  <S.CartItem key={product.id}>
                      <S.ProductImage src={product.imageUrl} alt={product.imageUrl}/>
                    <S.ProductDetails>

                        <S.TitlePriceContainer>
                          <h4>{product.title}</h4>
                          <S.Prices>
                              {product.discountedPrice && product.discountedPrice < product.price ? (
                                <>
                                  <S.OldPrice>{Math.round(product.price)} kr</S.OldPrice>
                                  <S.NewPrice>{Math.round(product.discountedPrice)} kr</S.NewPrice>
                                </>
                              ) : (
                                <p>{Math.round(product.price)} kr</p>
                              )}
                          </S.Prices>
                        </S.TitlePriceContainer>
                        <div>
                          <S.Tags>{product.tags.join(" • ")}</S.Tags>
                        </div>

                      <S.QuantityContainer>
                        <S.QuantityButtons>
                          <S.MinusButton onClick={() => handleRemoveFromCart(product)}>-</S.MinusButton>
                          <S.QuantityDisplay>{getCartItemQuantity(product.id)}</S.QuantityDisplay>
                          <S.QuantityButton onClick={() => handleAddToCart(product)}>+</S.QuantityButton>
                        </S.QuantityButtons>

                        <div>
                          <S.DeleteButton onClick={() => handleRemoveAllFromCart(product)}><DeleteForeverIcon fontSize='small'/></S.DeleteButton>
                        </div>
                      </S.QuantityContainer>
                      
                    </S.ProductDetails>
                  </S.CartItem>
                ))}
              </S.CartList>
              <S.SubTotalContainer>
                <div>
                    <p>Subtotal</p>
                    <p>{getTotalPrice()} kr</p>
                </div>
                <p>Shipping and taxes calculated at checkout.</p>
                <div>
                  <S.ToCheckout onClick={handleCheckout}>Checkout</S.ToCheckout>
                </div>
              </S.SubTotalContainer>
            </S.CartContent>
          )}
        </S.OpenedCart>
      ) : null}
    </S.Cart>
  )
}

export default Cart;
