// SocialLinks.js
import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

const SocialLinks = () => {
  return (
    <div className="bg-gray-200 p-4 w-1/4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Connect</h2>
      <ul className="list-none">
        <li>
          <a
            target="blank"
            href="https://facebook.com"
            className="text-blue-500 hover:text-blue-700 transition duration-300"
          >
            <AiFillFacebook />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com"
            className="text-pink-500 hover:text-pink-700 transition duration-300"
          >
            <AiOutlineInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://whatsapp.com"
            className="text-green-500 hover:text-green-700 transition duration-300"
          >
            <FaWhatsapp />
          </a>
        </li>
        <li>
          <a
            href="tel:+1234567890"
            className="text-indigo-500 hover:text-indigo-700 transition duration-300"
          >
            <FaPhone />
          </a>
        </li>
        <li>
          <a
            href="mailto:info@example.com"
            className="text-red-500 hover:text-red-700 transition duration-300"
          >
            <MdOutlineMailOutline />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
