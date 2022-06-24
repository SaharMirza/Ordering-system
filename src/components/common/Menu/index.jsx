import React, { forwardRef } from "react";
import './style.css';
import { getFoodItems } from '../../../API calls/FoodItems';
import MenuItem from './MenuItem';

const Menu = forwardRef(({ list }, ref) => {    

    
    

    return (
        <main ref={ref}>
            {list.map((item) => (
                <MenuItem item={item} key={item._id} />
            ))}
        </main>
    )
})

export default Menu;
