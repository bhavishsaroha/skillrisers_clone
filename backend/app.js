import express from 'express';
import { createConnection } from './shared/db/connection.js';
import dotenv from 'dotenv';
import { courseroutes } from './modules/course/routes/course-route.js';
import cors from 'cors';
import Razorpay from 'razorpay';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); 
app.use('/', courseroutes);


const razorpay = new Razorpay({
    key_id: 'rzp_test_trb7SopabtgZsI',
  //   key_secret: 'YOUR_RAZORPAY_SECRET',
  });
  
  app.post('/razorpay/order', async (req, res) => {
    const options = {
      amount: 50000, // Amount in the smallest currency unit
      currency: 'INR',
      receipt: 'order_rcptid_11',
    };
    try {
      const order = await razorpay.orders.create(options);
      res.json(order);
    } catch (error) {
      res.status(500).send(error);
    }
  });




const promise = createConnection();
promise.then(r=>{
    app.listen(4444,err=>{
        if (err){
            console.log('Application Crash',err);
        }
        else{
            console.log('Application up and running');
        }
    })    
}).catch(err=>{
    console.log("Application can't up DB down");
})

