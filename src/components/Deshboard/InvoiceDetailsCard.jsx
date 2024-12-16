import React from "react";
const InvoiceDetailsCard = ({ invoiceData, setShowData }) => {
  const handleCancel = () => {
    setShowData(false);
  };

  if (!invoiceData) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="bg-gray-200 flex justify-center items-center flex-col fixed p-4 rounded-xl shadow-xl"
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h1 className="block mr-auto text-[20px] mb-5">Invoice Parse Details</h1>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <div className="flex flex-col align-top justify-start gap-2 md:w-1/2">
          <div className="flex align-center items-center text-[15px] h-[50px]">
            <div className="w-[150px] text-left">Invoice Number</div>
            <div className="w-[150px] text-gray-700 text-left bg-gray-300 text-[12px] p-1">
              {invoiceData.invoiceNumber || "N/A"}
            </div>
          </div>
          <div className="flex align-center items-center text-[15px] h-[50px]">
            <div className="w-[150px] text-left">Vendor ID</div>
            <div className="w-[150px] text-gray-700 text-left bg-gray-300 text-[12px] p-1">
              {invoiceData.vendorId || "N/A"}
            </div>
          </div>
          <div className="flex align-center items-center text-[15px] h-[50px]">
            <div className="w-[150px] text-left">Date of Purchase</div>
            <div className="w-[150px] text-gray-700 text-left bg-gray-300 text-[12px] p-1">
              {invoiceData.dop || "N/A"}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:w-1/2">
          <div className="flex align-center items-center text-[15px] h-[50px]">
            <div className="w-[150px] text-left">Vendor Name</div>
            <div className="w-[150px] text-gray-700 text-left bg-gray-300 text-[12px] p-1">
              {invoiceData.vendorName || "N/A"}
            </div>
          </div>
          <div className="flex align-center items-center text-[15px] h-[50px]">
            <div className="w-[150px] text-left">Currency</div>
            <div className="w-[150px] text-gray-700 text-left bg-gray-300 text-[12px] p-1">
              {invoiceData.currencyType || "N/A"}
            </div>
          </div>
          <div className="flex align-center items-center text-[15px] h-[50px]">
            <div className="w-[150px] text-left">Amount</div>
            <div className="w-[150px] text-gray-700 text-left bg-gray-300 text-[12px] p-1">
              {invoiceData.amount || "N/A"}
            </div>
          </div>
        </div>
      </div>
      <button
        className="block ml-auto bg-blue-400 mt-5 px-2 rounded hover:bg-blue-600"
        onClick={handleCancel}
      >
        Cancel
      </button>
    </div>
  );
};

export default InvoiceDetailsCard;


