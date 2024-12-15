import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import InvoiceDetailsCard from "./InvoiceDetailsCard";
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import Sanity2Check from "./Sanity2Check";



const Sanity2Vari = () => {
  const [sanityData, setSanityData] = useState([]); // State to store fetched data
  const navigate = useNavigate(); // InvoiceData, setShowData

  const [invoiceData, setInvoiceData] = useState(null); // State to store selected invoice data
  const [showSanity2Check, setShowSanity2Check] = useState(false); // State to control visibility of InvoiceDetailsCard

  useEffect(() => {
    const fetchSanityData = async () => {
      try {
        const res = await axios.get("http://34.47.195.164:8080/api/getSanity2Data");
        setSanityData(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.error("Error fetching passed sanity data:", error);
      }
    };
    fetchSanityData();
  }, []);

  const SanityLevels2List = () => {
    navigate("/SanityLevels2List");
  };

  const handleInfo = (no) => {
    setInvoiceData(no);
    setShowSanity2Check(true);
  };

  return (
    <>
      <div
        className={`
                    ${showSanity2Check ? " blur-sm " : ""} 

        `}
      >
        <h1 className="text-[#454545] font-semibold text-lg font-display underline decoration-1 mb-4 w-min text-nowrap">
          Sanity -2 Verification
        </h1>
        <div className="mt-4 bg-white p-4 max-w-screen-xl mx-auto rounded-lg shadow-lg">
          <div className="flex flex-col w-full space-y-4">
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="sm:mr-auto">
                <span className="">
                  <SearchIcon
                    className="relative left-9"
                    style={{ fontSize: "30px", color: "gray" }}
                  />
                  <input
                    type="text"
                    placeholder="Search"
                    className="p-1 pl-9 rounded-full w-[30vh] border-2 border-gray-400"
                  />
                </span>
              </div>
                <button
                  className="h-[30px] w-[145px] text-white  bg-[#2C738E] ml-auto"
                  onClick={SanityLevels2List}
                >
                 Sanity Level -2
                </button>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-full">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="px-4 py-2 text-center">ID</th>
                      <th className="px-4 py-2 text-center">Invoice No</th>
                      <th className="px-4 py-2 text-center">Vendor Name</th>
                      <th className="px-4 py-2 text-center">Total Amount</th>
                      <th className="px-4 py-2 text-center">Purchase Date</th>
                      <th className="px-4 py-2 text-center">Sanity 1</th>
                      <th className="px-4 py-2 text-center">Verify</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sanityData.map((row, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="border p-2 text-center">INV{index}</td>
                        <td
                          className="border p-2 text-center "
                        >
                          {row.invoiceNumber || "N/A"}
                        </td>
                        <td className="border p-2 text-center">
                          {row.vendorName || "N/A"}
                        </td>
                        <td className="border p-2 text-center">
                          {row.amount || "N/A"}
                        </td>
                        <td className="border p-2 text-center">
                          {new Date(row.dop).toLocaleDateString() || "N/A"}
                        </td>
                        <td className="border p-2 text-center">
                          Passed
                        </td>
                        <td
                          className="border p-2 text-center cursor-pointer"
                          onClick={() => handleInfo(row.invoiceNumber)}
                        >
                          <NetworkCheckIcon/>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Stack spacing={2} className="flex items-end mt-4">
          <Pagination
            count={Math.ceil(sanityData.length / 10)}
            color="primary"
          />
        </Stack>
      </div>


      {showSanity2Check && (
        <div>
          < Sanity2Check invoiceData={invoiceData} setShowSanity2Check={setShowSanity2Check}/>
        </div>
      )}

    </>
  );
};

export default Sanity2Vari;