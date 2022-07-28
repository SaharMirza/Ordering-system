import axios from "axios";

export async function AddFoodItems(updatename,updatecategory,updateprice,updateURL,updatedes,R_ID) {
  var response = axios.post("http://localhost:3000/Food_item",
  {
    Item_Name:updatename,
    Cat_id:updatecategory,
    Item_price:updateprice,
    Item_picture: updateURL,
    Item_desc: updatedes,
    R_ID:3

  })
    .catch(err => {
      console.log("err");
    });

  return response
}

export async function getFoodItems() {
  var response = axios.get("http://localhost:3000/Food_item")
    .catch(err => {
      console.log("err");
    });

  return response
}
export async function deleteFoodItem(id) {
  var response = axios.delete(`http://localhost:3000/Food_item/${id}`)
    .catch(err => {
      console.log(err);
    });

  return response
}

export async function getfooditembyid(id) {

  var response = await axios.get(`http://localhost:3000/Food_item/${id}`)
    .catch(err => {
      console.log("err");
    });

  return response
}

export async function updatefooditembyid(id,updatename,updateprice,updatedes,updateURL,RID, updateCAT_ID) {

  var response = await axios.put(`http://localhost:3000/Food_item/${id}`,
    {
      Item_Name:updatename,
      Cat_id: updateCAT_ID,
      Item_price:updateprice,
      Item_picture: updateURL,
      Item_desc: updatedes,
      R_ID:RID

    })
    .catch(err => {
      console.log("err");
    });

  return response
}
