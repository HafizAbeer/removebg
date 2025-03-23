import React from "react";
import { Link } from "react-router-dom";

const year = new Date().getFullYear();

const Footer = () => (
  <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 mt-8 flex flex-col md:flex-row justify-between items-center">
    <div className="text-center md:text-left mb-4 md:mb-0">
      <p>&copy; {year} BgRemover. All rights reserved.</p>
    </div>

    <div className="w-full md:w-auto my-4 md:my-0">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-XXXX"
        data-ad-slot="XXXX"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>

    <div className="flex space-x-4 mb-4 md:mb-0">
      <Link
        to="/terms"
        className="hover:underline hover:text-gray-200 transition duration-200"
      >
        Terms & Conditions
      </Link>
      <Link
        to="/privacy"
        className="hover:underline hover:text-gray-200 transition duration-200"
      >
        Privacy Policy
      </Link>
    </div>
  </footer>
);

export default Footer;
