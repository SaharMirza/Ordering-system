import axios from "axios";

export async function CreateOrder(Products, OrderTotal,devadd,specins,paymethod) {
  console.log(paymethod)
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  
  var response = axios.post("http://localhost:3000/Order",
    {
      Products: Products,
      OrderTotal: OrderTotal,
      Creation_time: time,
      Delivered_time: null,
      CustomerName: "Sahar",
      Status: "out for delivery",
      OrderDate: date,
      DeliveryAddress:devadd,
      SpecialInstructions: specins,
      PaymentMethod:paymethod
    })
    .catch(err => {
      console.log("err");
    });

  return response
}
