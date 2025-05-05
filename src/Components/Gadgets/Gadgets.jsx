import React, { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    fetch("../../../public/prodactData.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  return (
    <div className="mt-7">
      <h2 className="text-center font-bold text-4xl mb-8">
        Explore Cutting-Edge Gadgets{" "}
      </h2>

      <div className="actionBtn flex justify-center gap-3 my-6">
        <button className="btn btn-neutral">Neutral</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
      </div>

      <div className="grid gap-6  md:grid-cols-2 lg:grid-cols-3">
        {gadgets.map((gadget, idx) => (
          <Gadget key={idx} gadget={gadget}></Gadget>
        ))}
      </div>
    </div>
  );
};

export default Gadgets;
