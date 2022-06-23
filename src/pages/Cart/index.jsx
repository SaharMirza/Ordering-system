import React from 'react';
import Footer from '../../components/common/Footer';
import Logo from '../../components/common/Logo';
import EmptyCart from '../../components/Cart/EmptyCart';

import './style.css';

const Cart = () => {
  return (
    <>
      <div className='cart-header'>
        <Logo />
      </div>
     {/* <EmptyCart />         */}
        <div className='orders'>
          <h1 className='orders-heading'>Your Orders</h1>         
          <h3 className='orders-total'>Your Total $0</h3>
        </div>      
      <Footer />
    </>
  );
};

export default Cart;