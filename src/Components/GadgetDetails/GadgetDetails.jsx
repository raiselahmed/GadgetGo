import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import PdetailsBg from '../pdetailsBg/PdetailsBg';
import PdtailsCard from '../pDetailssCard/PdtailsCard';


const GadgetDetails = () => {
    const {gadgetsId} = useParams();
    const data = useLoaderData();
    const id = parseInt(gadgetsId);
    
    const gadget = data.find((gadget) => gadget.product_id === id);

    // console.log(gadget)
//    const {product_title, price, description, specification,rating,availability } =gadget; 


    return (
        <div>
           
            <PdetailsBg></PdetailsBg>
            <PdtailsCard gadget={gadget}></PdtailsCard>
        </div>
    );
};

export default GadgetDetails;