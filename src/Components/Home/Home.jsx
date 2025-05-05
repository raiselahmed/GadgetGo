import React from 'react';
import Banner from '../Banner/Banner';
import BannerCard from '../BannerCard/BannerCard';
import Gadgets from '../Gadgets/Gadgets';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <BannerCard></BannerCard>
           <Gadgets></Gadgets>
        </div>
    );
};

export default Home;