import React from "react";
import ImageSliderContainer from "../components/home/ImageSilderContainer/ImageSliderContainer";
import NotchDisplay from "../components/home/NotchDisplay/NotchDisplay";
import WhyHolyName from "../components/home/WhyHolyName/WhyHolyName";
import Facilities from "../components/home/Facilities/Facilities";
import OurEvents from "../components/home/OurEvents/OurEvents";
import VideoBlog from "../components/home/VideoBlog/VideoBlog";
import Commitees from "../components/home/Commitees/Commitees";
import FixedTable from "../components/FixedTable/FixedTable";
import Navbar from "../components/Navbar/Navbar";
import HeaderButtons from "../components/HeaderButtons/HeaderButtons";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeaderButtons />
      <ImageSliderContainer />
      <NotchDisplay />
      <WhyHolyName />
      <Facilities />
      <OurEvents />
      <VideoBlog />
      <Commitees />
      <FixedTable />
    </div>
  );
};

export default HomePage;
