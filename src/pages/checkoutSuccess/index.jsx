import React from 'react';
import { Link } from 'react-router-dom';

function CheckoutSuccess() {

  return (
    <div>
    <h1>Order Successful!</h1>
    <p>Your order has been successfully placed. Thank you for shopping with us!</p>
    <Link to="/">Go back to the store</Link>
  </div>
  )
}

export default CheckoutSuccess;