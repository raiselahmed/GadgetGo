import React, { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredGadgetList } from "../../Utilitys/AddToDb";
import CartLst from "../CartList/CartLst";
import { toast } from "react-toastify";

const Dashboard = () => {
  const allGadget = useLoaderData();
  const [gadgetx, setGadgetsx] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storeGadgetLsit = getStoredGadgetList();
    console.log(storeGadgetLsit, allGadget);
    const storeGadgetLsitInt = storeGadgetLsit.map((id) => parseInt(id));
    const addCartToGadgetList = allGadget.filter((gadget) =>
      storeGadgetLsitInt.includes(gadget.product_id)
    );

    setGadgetsx(addCartToGadgetList);
  }, [allGadget]);

  const totalCost = gadgetx.reduce((sum, item) => sum + (item.price || 0), 0);
  const handleConfirmPurchase = () => {
   
    toast.success(`Thank you for your purchase! Total cost: ${totalCost}`);
    
    // Optional: Clear the cart if intended
    setGadgetsx([]);
    
    // Close the modal
    setIsModalOpen(false);
  };


  return (
    <div>
      <div
        className="hero pb-8 md:pb-19"
        style={{
          background: "#9339dd",
        }}
      >
        <div className="hero-content text-neutral-content ">
          <div className="">
            <h1 className="mb-6 text-5xl font-bold text-center">Dashboard</h1>
            <p className="text-center">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to <br /> the coolest accessories,
              we have it all!
            </p>
          </div>
        </div>
      </div>

      <div className="px-8 my-5">
        <Tabs>
          <TabList>
            <Tab>Cart</Tab>
            <Tab>Wishlist</Tab>
          </TabList>

          <TabPanel>
            <div className="flex justify-between md:px-8">
              <h2 className="text-2xl font-bold">Cart</h2>

              <div className="sm:flex gap-3">
                <h2 className="md:text-2xl font-bold">
                  Total cost:{totalCost}{" "}
                </h2>
                <button className="btn me-2 btn-outline btn-warning">
                  Sort by Price
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn btn-success"
                >
                  Purchase
                </button>
              </div>
            </div>

            {gadgetx.map((cartList, idx) => (
              <CartLst key={idx} cartList={cartList}></CartLst>
            ))}
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {isModalOpen && (
        <dialog className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Confirm Purchase</h3>
            <p className="py-4">
              Your total cost is <strong>{totalCost}</strong>. Would you like to
              proceed with the purchase?
            </p>
            <div className="modal-action">
              <NavLink to={'/'}>
              <button
                className="btn btn-success"
              onClick={handleConfirmPurchase}
              >
                Confirm
              </button> 
              </NavLink>

              {/**/}

              <button
                className="btn btn-outline"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Dashboard;
