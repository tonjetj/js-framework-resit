import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeAllFromCart } from '../../store/cartSlice';
import { useNavigate } from 'react-router-dom';
import * as S from './index.styles';


function Checkout() {
    const cartItems = useSelector(state => state.cart.cartItems);
    const navigate = useNavigate();
    const dispatch = useDispatch(); 

    const getCartItemQuantity = (productId) => {
      const cartItem = cartItems.find((product) => product.id === productId);
      return cartItem ? cartItem.quantity : 0;
    };

    const getTotalPrice = () => {
      let totalPrice = 0;
      let totalDiscount = 0;
    
      cartItems.forEach((product) => {
        const quantity = getCartItemQuantity(product.id);
        totalPrice += product.discountedPrice
          ? product.discountedPrice * quantity
          : product.price * quantity;
        totalDiscount += product.discountedPrice
          ? (product.price - product.discountedPrice) * quantity
          : 0;
      });
    
      return { total: Math.round(totalPrice), totalDiscount: Math.round(totalDiscount) };
    };
    

    const checkoutSuccess = () => {
      navigate('/checkoutSuccess');
      handleClearCart(); 
    }

    const handleClearCart = () => {
      cartItems.forEach((product) => {
        const quantity = getCartItemQuantity(product.id);
        dispatch(removeAllFromCart(product.id, quantity));
      })
    }
    

    return (
      <S.Container>
        <h1>Checkout</h1>
        <S.ProductContainer>
          {cartItems.map(product => (
            <S.Product key={product.id}>
              <S.ProductImage src={product.imageUrl}/>
              <S.CopyContainer>
                <p>{product.title}</p>
                    {product.discountedPrice && product.discountedPrice < product.price ? (
                    <>
                      <S.OldPrice>{Math.round(product.price)} kr</S.OldPrice>
                      <S.Discount>- {Math.round(product.price - product.discountedPrice)} kr</S.Discount>
                      <S.NewPrice>{Math.round(product.discountedPrice)} kr</S.NewPrice>
                    </>
                    ) : (
                      <p>{Math.round(product.price)} kr</p>
                    )}
                <p>Quantity: {getCartItemQuantity(product.id)}</p>
              </S.CopyContainer>
            </S.Product>
          ))}
           <S.TotalContainer>
              {getTotalPrice().totalDiscount > 0 && (
                  <S.Discount>You saved {getTotalPrice().totalDiscount} kr in total!</S.Discount>
                  )}
              <h2>Total to pay: {getTotalPrice().total} kr</h2>
          </S.TotalContainer>
        </S.ProductContainer>
        <div>
            <S.CheckoutBtn onClick={checkoutSuccess}>Checkout</S.CheckoutBtn>
        </div>
      </S.Container>
    );
}

export default Checkout;