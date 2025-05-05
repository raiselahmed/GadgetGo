import React, { createContext, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Fotter from "../Fotter/Fotter";
import { Outlet } from "react-router";

export const Cartcout = createContext(0);

const Root = () => {

    const [count, setCount] = useState(0)

  return (
    <div className="max-w-7xl mx-auto">
      <Cartcout.Provider value={[count, setCount]}>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Fotter></Fotter>
      </Cartcout.Provider>
    </div>
  );
};

export default Root;
