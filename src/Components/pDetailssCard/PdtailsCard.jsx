import React, { useContext,  } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { TbArrowBack } from "react-icons/tb";
import { FaShieldHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router";
import { addToStoredGadgetList,  } from "../../Utilitys/AddToDb";
import { Cartcout } from "../Root/Root";

const PdtailsCard = ({ gadget }) => {
  // const [count, setCount] = useContext(Cartcout)
  const [count,setCount] = useContext(Cartcout)
  const {
    product_title,
    price,
    product_id,
    specification,
    rating,
   
  } = gadget;

  const navigate = useNavigate();
  const handleGoBack = ()=>{
    navigate(-1)
  }

  const hadleCartCount = ()=>{
    const newCount = count + 1;
    setCount(newCount);
  }
  const handleToCard = (id)=>{
    addToStoredGadgetList(id)
    console.log('ok')
    hadleCartCount() // i want this count set our navbar
   
  }

  return (
    <div className="max-w-5xl mx-auto -mt-20 p-8 rou">
      <div className="hero bg-base-200 rounded-4xl">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{product_title}</h1>
            <p className="py-6">Price : $ {price}</p>
            <button className="btn mb-4">inStock</button>

            <div className="">
              <strong className="mb-4">Specification</strong>
              <div className="mt-3">
                {specification.map((spe, idx) => (
                  <p className="flex items-center" key={idx}>
                    <IoMdCheckmarkCircleOutline className="me-3" />
                    {spe}
                  </p>
                ))}
              </div>
            </div>
              
            <div>
              <strong className="flex items-center ">
                Rating <MdOutlineStarPurple500 className="ms-2 text-[yellow]" />
              </strong>
              <div>
                <strong className="flex items-center gap-2">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      aria-label="1 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      aria-label="2 star"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      aria-label="3 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      aria-label="4 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      aria-label="5 star"
                    />
                  </div>
                  {rating}
                </strong>

                <div className="flex my-3">
                  <button onClick={()=>handleToCard(product_id)} className="btn btn-outline btn-primary">Add To Card <FiShoppingCart />
                  </button>
                  <button className="btn btn-outline btn-secondary ms-6">
                  <FaShieldHeart />
                  </button>
                    <button onClick={handleGoBack} className="btn btn-outline btn-secondary ms-6">
                      <TbArrowBack />
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdtailsCard;
