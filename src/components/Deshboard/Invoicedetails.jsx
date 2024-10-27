import { useState } from "react";
import UploadCard from "./UploadCard";

const Invoicedetails = () => {
  const [showupload, setShowupload] = useState(false);

  return (
    <>
      <div
        className={`
          ${showupload ? " blur-sm " : ""} 
        `}
      >
        <div className="fixed w-2.5/5 ml-20 h-full">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="flex items-center justify-center w-64 h-36 p-4 bg-[#76a2b6]  rounded-xl text-white  font-medium text-lg  relative">
              <div>Sanity Checked Invoice</div>
              <div className="absolute bottom-0 right-0 p-5">20</div>
            </div>

            <div className="flex items-center justify-center w-64 h-36 p-4 bg-[#6d797b] rounded-xl text-white font-medium text-lg relative">
              <div>Failed Invoice</div>
              <div className="absolute bottom-0 right-0 p-5">20</div>
            </div>

            <div className="flex items-center justify-center w-64 h-36 p-4 bg-[#6d797b] rounded-xl text-white font-medium text-lg  relative">
              <div>Total Invoice</div>
              <div className="absolute bottom-0 right-0 p-5">20</div>
            </div>

            <div
              className="flex items-center justify-center w-64 h-36 p-4 bg-[#76a2b6]  rounded-xl text-white font-medium text-lg relative"
              onClick={() => setShowupload(true)}
            >
              <div>Upload Invoice</div>
            </div>
          </div>
        </div>
      </div>
      {showupload && (
        <div>
          <UploadCard setShowupload={setShowupload} />
        </div>
      )}
    </>
  );
};

export default Invoicedetails;
