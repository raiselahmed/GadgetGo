import React from "react";

const CartLst = ({ cartList }) => {
    const {product_title, description, price} = cartList

  return (
    <div>
      <div className="sm:flex gap-4 items-center border ps-3 my-6 rounded-2xl py-5">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
        //   src={image}
          className="w-[129px] h-[172px] my-auto rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-2xl font-bold">{product_title}</h1>
          <p className="py-3"> {description}</p>
          <strong>Price: $ {price}</strong>
        </div>
      </div>
    </div>
  );
};

export default CartLst;
