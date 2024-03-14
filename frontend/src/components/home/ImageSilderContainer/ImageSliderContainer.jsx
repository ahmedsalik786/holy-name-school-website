// eslint-disable-next-line no-unused-vars
import React from "react";

import PhotoSlider from "./PhotoSlider";
import Notice from "./Notice";
import SocialLinks from "./SocialLinks";
import "../../../styles/imageSilderContainer.css";
import { Link } from "react-router-dom";

const ImageSliderContainer = () => {
  return (
    <div>
      <div className="">
        <Link to={"/studentPortal"}>
          <div className="m-5 ml-20 mr-20 w-30 text-center font-black p-5 border-2 border-black rounded-full">
            STUDENT PORTAL FOR RESULT/FEE PAYMENT/ADMISSION
          </div>
        </Link>

        <div className="flex justify-between imageSilderContainer">
          <Notice />
          <PhotoSlider />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default ImageSliderContainer;
