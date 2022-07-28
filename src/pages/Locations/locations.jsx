import React from 'react';
import './locations.css'


const Locations = () => {
  return (
    <div class="container text-center" style={{marginTop:100}} id='locations'>
      <h1 id='h1'>Our Restaurants</h1>
      <div class="row justify-content-evenly" style={{marginTop:50}}>
        <div class="col-4">
          <div class="card" >
            <div class="card-body">
              <h5 class="card-title" id='card-title'>Location 1</h5>
              <h6 class="card-subtitle mb-2 text-muted">Address</h6>
              <p class="card-text" id='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <h6>Phone Number: Lorem ipsu</h6>              
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card" >
            <div class="card-body">
            <h5 class="card-title" id='card-title'>Location 2</h5>
              <h6 class="card-subtitle mb-2 text-muted">Address</h6>
              <p class="card-text" id='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <h6>Phone Number: Lorem ipsu</h6>    
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card" >
            <div class="card-body">
            <h5 class="card-title" id='card-title'>Location 3</h5>
              <h6 class="card-subtitle mb-2 text-muted">Address</h6>
              <p class="card-text" id='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <h6>Phone Number: Lorem ipsu</h6>      
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Locations;