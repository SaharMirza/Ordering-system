import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CreateOrder } from '../../API calls/Orders';
import EmptyCart from '../../components/Cart/EmptyCart';
import Footer from '../../components/common/Footer';
import Logo from '../../components/common/Logo';
import Menu from '../../components/common/Menu';
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from '../../redux/cart/cart.selector';
import './style.css';


const Cart = ({ cartCount, cartList, cartTotal }) => {
  const [devadd, setdevadd] = React.useState()
  const [specinst,setspecinst]=React.useState()
  const [paymethod,setpaymethod]=React.useState("")

  // Adding Order to Database
  const ordersave = () => {
    CreateOrder(cartList, cartTotal,devadd,specinst,paymethod).then((response) => {
      alert("Order Successfull")     
    })
  }

  return (
    <>
      <div className='cart-header'>
        <Logo />
      </div>
      {cartCount === 0 ? (
        <EmptyCart />
      ) : (
        <div className='orders'>
          <div class="row">
            <div class="column">
              <div class="card"  >
                <label class="form-label" id="label">Your Delivery Address</label>
                <input type="text" class="form-control"
                onChange={(event) => {
                  setdevadd(event.target.value);
                }}/>
              </div>
              <div class="card" >
                <label class="form-label"id="label">Special Instructions</label>
                <input type="text" placeholder="Add any comments, e.g. allegries or delivery instructions " class="form-control"
               onChange={(event) => {
                setspecinst(event.target.value);
              }} />
              </div>
            </div>
            <div class="column">
              <div class="card" >
                <label class="form-label" id="label">Payment Methods</label>                
                  <button type="button" class="button" onClick={()=>setpaymethod("Cash on Delivery")}>
                    <img src="https://icon-library.com/images/cash-on-delivery-icon/cash-on-delivery-icon-5.jpg" class="card-img-top" id="image" alt="..." />
                    <h1 class="card-title" >Cash On Delivery</h1>
                  </button>               
              </div>
            </div>
          </div>
          <h1 className='orders-heading'>Your Orders</h1>
          <div className='orders-menu'>
            <Menu list={cartList} />
          </div>
          <h3 className='orders-total'>Your Total ${cartTotal}</h3>
          <button type="button" onClick={ordersave} class="btn btn-danger" id='placeorder'>Place Order</button>
        </div>
      )}
      <Footer />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);