import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../../redux/cart/cart.selector';
import './style.css';

const CartCountButton = ({ cartCount }) => {
  const [navigate, setNavigate] = React.useState(false);
  const redirect = async () => {

    setNavigate(true);
  }

  if (navigate) {
    return <Navigate to="/cart" />;
  }

  return (
    <div className='btnCartCount' onClick={redirect}>
      <div className='count'>{cartCount >= 100 ? '99+' : cartCount}</div>
      <i class='fas fa-shopping-cart'></i>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
});



export default  connect(mapStateToProps)(CartCountButton);