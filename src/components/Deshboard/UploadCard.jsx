import React, { useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import loadingGif from "../../assets/images/ld.gif";

const UploadCard = ({ setShowupload, setInvoiceData, setShowData }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (
      selectedFile &&
      (selectedFile.type.startsWith("image/") || selectedFile.type === "application/pdf")
    ) {
      setFile(selectedFile);
    } else {
      alert("Please select a valid image or PDF file!");
      setFile(null);
    }
  };

  // Convert image to PDF
  const convertImageToPDF = async (imageFile) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = function (event) {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const pdf = new jsPDF();
          const width = pdf.internal.pageSize.getWidth();
          const height = pdf.internal.pageSize.getHeight();
          pdf.addImage(img, "JPEG", 0, 0, width, height);
          const pdfBlob = pdf.output("blob");
          resolve(pdfBlob);
        };
        img.onerror = reject;
      };
      reader.onerror = reject;
      reader.readAsDataURL(imageFile);
    });
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("No file selected!");
      console.error("No file selected");
      return;
    }

    setLoading(true);

    try {
      let fileToUpload;

      if (file.type.startsWith("image/")) {
        fileToUpload = await convertImageToPDF(file);
      } else if (file.type === "application/pdf") {
        fileToUpload = file; 
      } else {
        throw new Error("Unsupported file format");
      }

      const formData = new FormData();
      formData.append("file", fileToUpload, file.type.startsWith("image/") ? "converted.pdf" : file.name);

      const res = await axios.post(
        "http://34.47.195.164:8080/parse-pdf",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(res.data);

      
      setShowupload(false);
    } catch (error) {
      console.error("Error uploading file:", error);

    }
  };

  return (
    <div>
      {loading ? (
        <div
          className="flex justify-center items-center flex-col fixed w-200px sm:h-[300px] sm:w-[600px] p-4"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <img
            src={loadingGif}
            alt="Loading..."
            className="w-[100px] h-[100px] mb-4"
          />
          <p className="text-black">Uploading file...</p>
        </div>
      ) : (
        <div
          className="bg-gray-200 flex justify-center items-center flex-col fixed w-200px sm:h-[300px] sm:w-[600px] p-4 rounded-xl shadow-xl"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="sm:flex pl-2 mb-[30px] sm:mb-[70px] sm:text-xl">
            <p className="mb-[5px]">Upload an image or PDF file</p>
            <input
              className="w-[220px] sm:w-[280px] ml-1"
              type="file"
              onChange={handleFileChange}
              accept="image/*, application/pdf"
            />
          </div>
          <div className="flex justify-center items-center gap-[90px]">
            <button
              className="px-4 py-[3px] text-white bg-green-400 rounded-md"
              onClick={handleUpload}
            >
              Upload
            </button>
            <button
              className="px-5 py-[3px] text-white bg-red-400 rounded-md"
              onClick={() => setShowupload(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadCard;
