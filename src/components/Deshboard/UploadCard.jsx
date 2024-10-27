import React, { useState } from "react";
import axios from "axios";

const UploadCard = ({ setShowupload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("No file selected!");
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("invoice", file);

    try {
      const res = await axios.post(
        "https://invoice-management-backend.vercel.app/upload-invoice",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(res.data.status)
      console.log(res.data)
      console.log(res.data.status)
      setShowupload(false);
      console.log("File uploaded successfully:", res.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <>
<div
  className="bg-gray-200 flex justify-center items-center flex-col fixed w-200px sm:h-[300px] sm:w-[600px] p-4 rounded-xl shadow-xl "
  style={{
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }}
>
        <div className="sm:flex pl-2 mb-[30px] sm:mb-[70px]  sm:text-xl">
          <p className=" mb-[5px]">Upload a file</p>
          <input
            className="w-[220px] sm:w-[280px] ml-1 "
            type="file"
            onChange={handleFileChange}
            accept="application/pdf"
          />
        </div>
        <div className="flex justify-center items-center gap-[90px]">
          <button className="px-4 py-[3px] text-white bg-green-400 rounded-md " onClick={handleUpload}>Upload</button>
          <button className="px-5 py-[3px] text-white bg-red-400 rounded-md " onClick={() => setShowupload(false)}>Cancel</button>
        </div>
      </div>
    </>
  );
};

export default UploadCard;
