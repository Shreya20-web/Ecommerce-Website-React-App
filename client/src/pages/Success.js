import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { BsBagCheckFill } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import {RandomConfetti} from "../lib/Utils.js"

const Success = () => {
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  // const data = location.state.stripeData;
  // const cart = location.state.cart;
  // const currentUser = useSelector((state) => state.user.currentUser);
  // const [orderId, setOrderId] = useState(null);

  // useEffect(() => {
  //   const createOrder = async () => {
  //     try {
  //       const res = await userRequest.post("/orders", {
  //         userId: currentUser._id,
  //         products: cart.products.map((item) => ({
  //           productId: item._id,
  //           quantity: item._quantity,
  //         })),
  //         amount: cart.total,
  //         address: data.billing_details.address,
  //       });
  //       setOrderId(res.data._id);
  //     } catch {}
  //   };
  //   data && createOrder();
  // }, [cart, data, currentUser]);

  // const removeLocal = () => {
  //   try{
  //     localStorage.removeItem("persist:root");
  //     // cart="";
  //     // currentUser="";
  //   }catch(err){
  //     console.log(err);
  //   }
  // }

  useEffect(() => {
    RandomConfetti();
  }, [])


  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:order@example.com">
            order@example.com
          </a>
        </p>
        <Link to="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        <ToastContainer />
        </Link>
      </div>
    </div>
  );
};

export default Success;