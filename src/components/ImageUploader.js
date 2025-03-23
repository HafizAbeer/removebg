import React, { useState } from "react";
import axios from "axios";

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setOutput(null);
  };

  const removeBg = async () => {
    if (!image) return alert("Please select an image first!");

    setLoading(true);
    const formData = new FormData();
    formData.append("image_file", image);
    formData.append("size", "auto");

    try {
      const res = await axios.post(process.env.REACT_APP_API_LINK, formData, {
        headers: {
          "X-Api-Key": process.env.REACT_APP_BG_API_KEY,
        },
        responseType: "blob",
      });
      setOutput(URL.createObjectURL(res.data));
    } catch (err) {
      console.error(err);
      alert("Error removing background");
    }
    setLoading(false);
  };

  return (
    <div className="text-center">
      <input type="file" onChange={handleImageChange} className="mb-4" />
      <br />
      <button
        onClick={removeBg}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Processing..." : "Remove Background"}
      </button>

      {output && (
        <div className="mt-4">
          <h3 className="mb-2 font-semibold">Result:</h3>
          <img src={output} alt="Output" className="mx-auto max-w-xs" />
          <a
            href={output}
            download="no-bg.png"
            className="block mt-2 text-blue-600"
          >
            Download
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
