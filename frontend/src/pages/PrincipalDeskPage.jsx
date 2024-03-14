import React from "react";
import PrincipalDesk from "../components/principalDesk/PrincipalDesk";
import Navbar from "../components/Navbar/Navbar";
import HeaderButtons from "../components/HeaderButtons/HeaderButtons";
import FixedTable from "../components/FixedTable/FixedTable";

const PrincipalDeskPage = () => {
  return (
    <div>
      <Navbar />
      <HeaderButtons />
      <PrincipalDesk />
      <FixedTable />
    </div>
  );
};

export default PrincipalDeskPage;
