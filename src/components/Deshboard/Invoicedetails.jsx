import { useState, useEffect } from "react";
import UploadCard from "./UploadCard";
import InvoiceDetailsCard from "./InvoiceDetailsCard";
import axios from "axios"
import { useNavigate } from "react-router-dom";
const Invoicedetails = () => {
  const [showupload, setShowupload] = useState(false);
  const [showData, setShowData] = useState(false);
  const [InvoiceData, setInvoiceData] = useState([]);
  const [passS, setPassS] = useState(0);
  const [failedS, setFailedS] = useState(0);
  const navigate =useNavigate();

 
  useEffect(() => {
    const fetchSanityData = async () => {
      try {
        const res = await axios.get("http://34.47.195.164:8080/getSanity");
        const passLength = res.data.data.length; // Correctly access nested data array
        console.log("Sanity Passed:", passLength);
        setPassS(passLength);
      } catch (error) {
        console.error("Error fetching passed sanity data:", error);
      }
    };
  
    const fetchSanityFailed = async () => {
      try {
        const res = await axios.get("http://34.47.195.164:8080/getFailed-sanity");
        const failLength = res.data.data.length; // Correctly access nested data array
        console.log("Sanity Failed:", failLength);
        setFailedS(failLength);
      } catch (error) {
        console.error("Error fetching failed sanity data:", error);
      }
    };
  
    fetchSanityData();
    fetchSanityFailed();
  }, []);

  const passedList = () => {
    navigate("/senityPassed");
  };
  
  const failedList = () => {
    navigate("/senityFailed");
  };
  return (
    <>
      <div
        className={`
          ${showupload ? " blur-sm " : ""} 
                    ${showData ? " blur-sm " : ""} 

        `}
      >
        <div className="fixed w-2.5/5 ml-20 h-full">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="flex items-center justify-center w-64 h-36 p-4 bg-[#76a2b6]  rounded-xl text-white  font-medium text-lg  relative cursor-pointer"
                        onClick={passedList}

            >
              <div>Sanity Checked Invoice</div>
              <div className="absolute bottom-0 right-0 p-5">{passS}</div>
            </div>

            <div className="flex items-center justify-center w-64 h-36 p-4 bg-[#6d797b] rounded-xl text-white font-medium text-lg relative cursor-pointer"
            onClick={failedList}
            >
              <div>Failed Invoice</div>
              <div className="absolute bottom-0 right-0 p-5">{failedS}</div>
            </div>

            <div className="flex items-center justify-center w-64 h-36 p-4 bg-[#6d797b] rounded-xl text-white font-medium text-lg  relative cursor-pointer">
              <div>Total Invoice</div>
              <div className="absolute bottom-0 right-0 p-5">{passS+failedS}</div>
            </div>

            <div
              className="flex items-center justify-center w-64 h-36 p-4 bg-[#76a2b6]  rounded-xl text-white font-medium text-lg relative cursor-pointer"
              onClick={() => setShowupload(true)}
            >
              <div>Upload Invoice</div>
            </div>
          </div>
        </div>
      </div>
      {showupload && (
        <div>
          <UploadCard
            setShowupload={setShowupload}
            setInvoiceData={setInvoiceData}
            setShowData={setShowData}
          />
        </div>
      )}
{/* 
      {showData && (
        <div>
          <InvoiceDetailsCard InvoiceData={InvoiceData} setShowData={setShowData}/>
        </div>
      )} */}
    </>
  );
};

export default Invoicedetails;
