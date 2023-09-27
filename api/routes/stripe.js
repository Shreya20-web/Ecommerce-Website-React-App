const router = require("express").Router();
const stripe = require("stripe")('sk_test_51MT2nsSBu4jF6idl1TJl3HAMPUEiICMq6vSTumAKjQlVp6vNTaMvSoeAR9yWcHNcvrNTdoTMlnDAv03s4tEI7VTq00ItvULZYR');

router.post("/payment", async (req, res) => {

  try{
  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: 'usd',   
    payment_method_types: ['card'],
  });

  const paymentId = paymentIntent.id;
  const resData = await stripe.paymentIntents.retrieve(paymentId)
  return res.send(resData)

}catch(err){
  return res.send(500).json(err);
}


  // stripe.charges.create(
  //   {
  //     // source: req.body.tokenId,
  //     // amount: req.body.amount,
  //     amount: 2000,
  //     currency: "usd",
  //   },
  //   (stripeErr, stripeRes) => {
  //     if (stripeErr) {
  //       console.log(stripeErr);
  //       res.status(500).json(stripeErr);
  //     } else {
  //       res.status(200).json(stripeRes);
  //     }
  //   }
  // );
});

module.exports = router;