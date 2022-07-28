import React from 'react';
import './style.css';
import { getProfile } from '../../../API calls/Restaurants';

const Logo = () => {
  const id = 3
  const [restaurant, setRestuarant] = React.useState([]);
  const [Logo, setLogo] = React.useState("");
  const [Cuisine, setCuisine] = React.useState("");
  const [RName, setRName] = React.useState("");
  
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
      console.log(restaurant)
      for (var item in restaurant) {
        if (restaurant[item].R_ID == id) {
          setLogo(restaurant[item].R_logo)
          setCuisine(restaurant[item].R_Cuisine)
          setRName(restaurant[item].R_name)
         }
      }
    }
    view()
  }, [restaurant])

  return (
 <div className='header-content_logo'>
    <div>
      <img src={Logo} alt='logo' />
      <span>
        <b>{RName}</b>
      </span>
    </div>
    <p>
      <b>{Cuisine}</b>
    </p>
  </div>
  )
};

export default Logo;