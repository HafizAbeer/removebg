import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXX";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);
  }, []);

  return (
    <nav className=" bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 flex justify-between">
      <div className="text-xl font-bold">
        <Link to="/">BgRemover</Link>
      </div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-yellow-400">
          Home
        </Link>
        <Link to="/about" className="hover:text-yellow-400">
          About
        </Link>
        <Link to="/contact" className="hover:text-yellow-400">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
