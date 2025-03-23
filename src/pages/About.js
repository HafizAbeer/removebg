import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center">
      {/* Icon & Heading */}
      <div className="flex items-center mb-4">
        <FaInfoCircle className="text-4xl text-blue-500 mr-2" />
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-600 text-transparent bg-clip-text pb-1">
          About BgRemover
        </h1>
      </div>

      {/* Description */}
      <p className="text-gray-700 max-w-2xl mb-6">
        <strong>BgRemover</strong> is your go-to free tool for removing image
        backgrounds effortlessly. Whether you're editing photos for personal
        use, e-commerce, or creative projects, our AI-powered platform delivers
        clean and professional results in seconds—no design skills required!
      </p>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-4xl">
        <div className="p-6 bg-white shadow-lg rounded-2xl border">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">
            Fast & Free
          </h2>
          <p className="text-gray-600">
            Remove backgrounds in just a few clicks, completely free!
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-2xl border">
          <h2 className="text-xl font-semibold mb-2 text-purple-600">
            AI Powered
          </h2>
          <p className="text-gray-600">
            Advanced AI technology ensures precise background removal.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-2xl border">
          <h2 className="text-xl font-semibold mb-2 text-green-600">
            No Signup Needed
          </h2>
          <p className="text-gray-600">
            Use instantly without the hassle of creating an account.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
