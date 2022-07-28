import React from 'react';
import './AboutUs.css'
import history from './image.jpg'
import founder from './founder.jpg'

const AboutUs = () => {

  return (
    <div class="container text-center" id="about">
      <h1 id='h1' style={{marginTop:50}}>About Us</h1>
      <div class="row " id='rows'>
      <div class="col" >
          <img src={history} alt="" id='founder' />
        </div>
        <div class="col">
          <h2 id='h2'>History of Restuarant</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe sed illo enim aliquid officiis nemo quo at ex id voluptas et reprehenderit exercitationem dicta commodi perspiciatis velit quidem, ad ea.</p>
        </div>
        
      </div>

      <div class="row " id='rows'>
        <div class="col">
          <h2 id='h2'>Founder of Restuarant</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe sed illo enim aliquid officiis nemo quo at ex id voluptas et reprehenderit exercitationem dicta commodi perspiciatis velit quidem, ad ea.</p>
        </div>
        <div class="col" >
          <img src={founder} alt="" id='founder' />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;