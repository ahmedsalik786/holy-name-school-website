// eslint-disable-next-line no-unused-vars
import React from "react";
import Logo from "../../assets/logo.png";
import { FaUserGear } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="h-20 w-20 m-5 ml-52">
            <img src={Logo} alt="logo" />
          </div>
        </div>
        <div className="navbar-center flex flex-col gap-0">
          <p className="btn select-text btn-ghost text-xl">
            HOLY NAME HIGHER SECONDARY SCHOOL SIVASAGAR
          </p>
          <p className="btn btn-ghost text-xl">
            হোলি নেম হাইয়াৰ চেকেণ্ডাৰী স্কুল শিৱসাগৰ
          </p>
        </div>
        <div className="">
          <div className="h-20 w-20 m-5 ml-20">
            <img src={Logo} alt="logo" />
          </div>
        </div>
        <div className="navbar-end">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle  h-20 w-20"
            >
              <FaUserGear className="h-10 w-10" />
            </div>
            <ul
              style={{ right: "5px" }}
              tabIndex={0}
              className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-25"
            >
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
