import React from "react";
import './style.css';
import { getFoodItems } from '../../../API calls/FoodItems';
import MenuItem from './MenuItem';

const Menu = () => {

    const id = localStorage.getItem("RID")
    const [ItemsData, setItemsData] = React.useState([]);
    const [menuItemsData, setmenuItemsData] = React.useState([]);
    var prior = [];

    React.useEffect(() => {
        const view2 = async () => {
            getFoodItems().then((response) => {
                setItemsData(response.data.Food_items)
            })
        }
        view2()
    }, [])

    React.useEffect(() => {
        const view = async () => {
            for (var item in ItemsData) {
                if (ItemsData[item].R_ID == id) {
                    prior.push(ItemsData[item])
                }
            }
            setmenuItemsData(prior)
        }
        view()
    }, [ItemsData])



    return (
        <main>
            {menuItemsData.map((item) => (

                <MenuItem item={item} key={item._id} />
            ))}
        </main>
    )
}

export default Menu;
