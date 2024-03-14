// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const HeaderButtons = () => {
  return (
    <div className="bg-base-100 flex flex-row gap-1 justify-center">
      <Link to="/">
        <button className="btn btn-outline btn-neutral">Home</button>
      </Link>
      <Link to="/principaldesk">
        <button className="btn btn-outline btn-neutral">Principal</button>
      </Link>
      <Link to="/about">
        <button className="btn btn-outline btn-neutral">About</button>
      </Link>
      <Link to="/courses">
        <button className="btn btn-outline btn-neutral">Courses</button>
      </Link>
      <Link to="/admission">
        <button className="btn btn-outline btn-neutral">Admission</button>
      </Link>
      <Link to="/faculity">
        <button className="btn btn-outline btn-neutral">Faculty</button>
      </Link>
      <Link to="/gallery">
        <button className="btn btn-outline btn-neutral">Gallery</button>
      </Link>
      <Link to="/notice">
        <button className="btn btn-outline btn-neutral">Notice</button>
      </Link>
      <Link to="/career">
        <button className="btn btn-outline btn-neutral">Career</button>
      </Link>
      <Link to="/complaints">
        <button className="btn btn-outline btn-neutral">Complaints</button>
      </Link>
      <Link to="/contact">
        <button className="btn btn-outline btn-neutral">Contact</button>
      </Link>
    </div>
  );
};

export default HeaderButtons;
