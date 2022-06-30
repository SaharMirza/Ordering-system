const express = require('express')
//const morgan = require('morgan')
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const createError = require('http-errors')
require ('dotenv').config()
const cors = require("cors");
const restaurantRoutes = require('./routes/restaurant');
const fooditemRoute = require('./Routes/Food_items')
const Orders = require('./Routes/order')

// connect db to node.js using link from database access and writing password 
mongoose.connect('mongodb+srv://SaharMirza:Strawberry2@eatery.mwwmq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

// to check if connection established or not 
mongoose.connection.on('error',err=>{
    console.log('connection failed'); // if error in connected to db
});

mongoose.connection.on('connected',connected=>{
    console.log('connected with db sucessfully....'); // if connected to db
})


//initalize app
const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); //data recieved should be in JSON
app.use('/restaurant', restaurantRoutes);
app.use('/Food_item', fooditemRoute)
app.use('/Order',Orders)

//catch wrong route 
app.use(async (req,res,next) => {
    next(createError.NotFound())
})

//error handler 
app.use((err,req,res,next) => {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message,
        },
    })
})

//start app
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Server running on port 3000')
})