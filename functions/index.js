const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_Zdp8tyaO97rQxarl2ho60bUR00q9fALfv2');

//API

//App config
const app = express();

//Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//API Routes
app.get('/', (req, res) => res.status(200).send('HELLOWORLD'));
app.post('/payments/create', async (req, res) => {
  const total = req.query.total;
  console.log('Payment Request Received, for this amount!$$$', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen cmd
exports.api = functions.https.onRequest(app);

//Example endpoint
// http://localhost:5001/ecom8-26530/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
