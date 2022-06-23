import React from "react";
import './style.css';

import ButtonAddRemoveItem from '../../ButtonAddRemove';

const MenuItem = ({item}) => {

    const{_id, Item_Name ,Cat_id,Item_price,Item_picture,Item_desc,R_ID}=item
  
    return (
        <div className='item'>
          <img src={Item_picture} alt='food' />
          <div className='item-head_desc'>
            <p className='head_desc-name'>{Item_Name}</p>
            <p className='head_desc-info'>
              <small>{Item_desc}</small>
            </p>
          </div>
          <div className='item-foot_desc'>
            <span className='foot_desc-price'>${Item_price}</span>
            <ButtonAddRemoveItem
          quantity={1}
        />
            
          </div>
        </div>
      );
}

export default MenuItem;
