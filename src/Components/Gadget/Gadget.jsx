import React from "react";
import {  useNavigate, } from "react-router";

const Gadget = ({ gadget }) => {
   const {product_id, product_title,price }= gadget;

 


   const navigate = useNavigate();
   const handleDetails = ()=>{
        navigate(`/gadgets/${product_id}`)
   }
  return (
    <div>
      <div className="card p-0 bg-base-100 shadow-sm">
        <figure className="p-3">
          <img
            className=" rounded-2xl object-cover"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body p-0 px-4">
          <h2 className="card-title">{product_title}</h2>
          <p>
            Price : {price}Tk
          </p>
          <div className="card-actions">
          <button onClick={handleDetails}  className="btn btn-outline btn-secondary ">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
