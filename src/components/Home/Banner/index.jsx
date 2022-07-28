import React from 'react';
import './style.css';
import Navbar from '../../common/Navbar';
import { getProfile } from '../../../API calls/Restaurants';


const Banner = ({ handleScrollMenu }) => {

  const id = 3
  const [restaurant, setRestuarant] = React.useState([]);
  const [BannerImage, setBannerImage] = React.useState("");
  const [BannerHeadline, setBannerHeadline] = React.useState("");
  const [BannerDes, setBannerDes] = React.useState("");

  //getting all resturants
  React.useEffect(() => {
    const view2 = async () => {
      getProfile().then((response) => {
        setRestuarant(response.data.products)
      })
    }
    view2()
  }, [])

  React.useEffect(() => {
    const view = async () => {
      for (var item in restaurant) {
        if (restaurant[item].R_ID == id) {
          setBannerImage(restaurant[item].R_BannerImage)
          setBannerHeadline(restaurant[item].R_BannerHeadline)
          setBannerDes(restaurant[item].R_BannerDes)

        }
      }
    }
    view()
  }, [restaurant])

  return (
    <header>
      <div className='header-content'>       
        <div className='content-main'>
          <h1>{BannerHeadline}</h1>
          <p>{BannerDes}</p>
          <button onClick={handleScrollMenu}>
            View Menu <i className='fas fa-long-arrow-alt-right'></i>
          </button>
        </div>
      </div>
      <img className='header-img' src={BannerImage} alt='banner' />
    </header>
  );
};

export default Banner;
