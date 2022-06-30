import React, { useRef } from "react";
import CardCountButton from '../../components/common/CartCountButton'
import Footer from '../../components/common/Footer'
import Menu from '../../components/common/Menu'
import Navbar from '../../components/common/Navbar'
import Banner from '../../components/Home/Banner'
import { getFoodItems } from '../../API calls/FoodItems';

const Home = () => {
    const id = Number(window.location.pathname.split('/')[1]) // ans is 3
    localStorage.setItem("RID", id)
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

    const menuRef = useRef();

    const handleScrollMenu = () => {
        menuRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            
            {/* banner */}
            <Banner handleScrollMenu={handleScrollMenu} />
            {/* Menu */}
            <Menu list={menuItemsData} ref={menuRef} />
            {/* Footer */}
            <Footer />
            {/* Cart Count Button */}
            <CardCountButton />
        </div>
    );
};

export default Home;
