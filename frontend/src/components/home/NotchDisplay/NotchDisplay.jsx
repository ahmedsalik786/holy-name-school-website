// eslint-disable-next-line no-unused-vars
import React from "react";
import "./notchDisplay.css"; // Make sure to import your CSS file if the animation is defined there

const NotchDisplay = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-blue-600 mt-10 h-10">
      <p className="animate-marquee p-2  text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odit
        natus dolor tempore excepturi voluptatum in facere consequuntur rerum
        quibusdam.
      </p>
    </div>
  );
};

export default NotchDisplay;
