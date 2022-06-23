import axios from "axios";


export async function getProfile() {   

    var response = await axios.get(`http://localhost:3000/restaurant`)
       .catch(err => {
          console.log(err)
       })
 
       return response;
 }

