import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeaderButtons from "../components/HeaderButtons/HeaderButtons";
import FixedTable from "../components/FixedTable/FixedTable";

const CoursesPage = () => {
  return (
    <div>
      <Navbar />

      <HeaderButtons />
      <FixedTable />
    </div>
  );
};

export default CoursesPage;
