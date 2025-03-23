import React from "react";
import ImageUploader from "../components/ImageUploader";
import { FaCloudUploadAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text pb-1">
        Remove Background Instantly
      </h1>

      <p className="text-gray-600 mb-8 max-w-xl">
        Upload your image and get a clean background-free result in seconds.
        It's free, fast, and easy!
      </p>

      {/* Upload Section */}
      <div className="w-full md:w-2/3 lg:w-1/2 p-8 bg-white shadow-lg rounded-2xl border">
        <div className="flex justify-center mb-4">
          <FaCloudUploadAlt className="text-6xl text-blue-500" />
        </div>
        <ImageUploader />
      </div>

      {/* Ad Placeholder */}
      <div className="mt-12 w-full">
        <div className="border p-4 bg-gray-100 rounded-lg shadow-sm">
          {/* <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-XXXX"
            data-ad-slot="XXXX"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins> */}
          <p className="text-sm text-gray-500">Advertisement</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
