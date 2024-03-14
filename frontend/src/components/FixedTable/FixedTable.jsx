import React from "react";
import Curriculum from "./TableItems/Curriculum ";
import Board from "./TableItems/Board";
import SchoolAddress from "./TableItems/SchoolAddress";
import QuickLinks from "./TableItems/QuickLinks";
import DevelopedBy from "./TableItems/DevelopedBy";

import logo from "../../assets/logo.png";

const FixedTable = () => {
  return (
    <div className="bg-blue-950 text-white">
      <div className="grid grid-cols-5 bg-blue-950 text-white p-4 pl-10 items-center">
        <Curriculum />
        <Board />
        <SchoolAddress />
        <QuickLinks />
        {/* Adjusted the padding and size for better alignment */}
        <div className="flex justify-center items-center p-2">
          <img
            src={logo}
            className="h-24 w-24 md:h-32 md:w-32"
            alt="School Logo"
          />
        </div>
      </div>
      <DevelopedBy />
    </div>
  );
};

export default FixedTable;
