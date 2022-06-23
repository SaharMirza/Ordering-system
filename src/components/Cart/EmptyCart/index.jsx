import React from 'react';
import { Navigate } from 'react-router-dom';
import './style.css';

const EmptyCart = () => {
    const [navigate, setNavigate] = React.useState(false);
    const redirect = async () => {
  
      setNavigate(true);
    }
  
    if (navigate) {
      return <Navigate to="/" />;
    }
  return (
    <div className='emptyCart'>
      <img src='https://toppng.com/uploads/preview/sign-in-empty-cart-ico-11562967535jqgfqtduyd.png' alt='' />
      <button onClick={redirect}>
        <i className='fas fa-long-arrow-alt-left'></i> Shop Now
      </button>
    </div>
  );
};

export default EmptyCart;