import React from "react";
import Banner from '../../assets/Images/banner.jpg'
const BannerCard = () => {
  return (
    <div className="max-w-5xl mx-auto -mt-20 p-8">
      <div className="card rounded-4xl shadow-sm">
        <figure>
          <img
          className="rounded-4xl md:h-[500px] w-full object-cover"
            src={Banner}
            alt="Shoes"
          />
        </figure>
        
      </div>
    </div>
  );
};

export default BannerCard;
