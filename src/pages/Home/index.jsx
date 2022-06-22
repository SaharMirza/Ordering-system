import React from "react";
import CardCountButton from '../../components/common/CartCountButton'
import Footer from '../../components/common/Footer'
import Menu from '../../components/common/Menu'
import Banner from '../../components/Home/Banner'


const Home = () => {
    return(
        <div>
         {/* banner */}
         <Banner/>         
         {/* Menu */}
         <Menu/>
         {/* Footer */}
         <Footer/>
         {/* Cart Count Button */}
        <CardCountButton/>
         </div>
    );
};

export default Home;
