


import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const SenityPassed = ({ handleInfo }) => {
  const pendingRequestsData = [
    {
      id: 1,
      parentId: "P001",
      consultationId: "C001",
      Documents: "insert",
      cfAssigned: "CF001",
      status: 0,
    },
    {
      id: 2,
      parentId: "P002",
      consultationId: "C002",
      Documents: "insert",
      cfAssigned: "CF002",
      status: 1,
    },
  ];

  return (
    <>
    <h1 className="text-[#454545] font-semibold text-lg font-display underline decoration-1 mb-4">
    Sanity passed Invoice
        </h1>
      <div className="mt-4 bg-white p-4 max-w-screen-xl mx-auto rounded-lg shadow-lg">
        <div className="flex flex-col w-full space-y-4">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between space-y-2 sm:space-y-0 sm:space-x-4">
            <div className=" sm:mr-auto">
              <span>
                <SearchIcon
                  className="relative left-9 "
                  style={{ fontSize: "30px", color: "gray" }}
                />
                <input
                  type="text"
                  placeholder="PendingOreders"
                  className="p-1 pl-9 rounded-full 420px:w-[50vh] text-center border-2 border-gray-400 320px:w-[40vh]"
                />
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-full">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2 text-center">Id</th>
                    <th className="px-4 py-2 text-center">Invoice No</th>
                    <th className="px-4 py-2 text-center">Vendor Name</th>
                    <th className="px-4 py-2 text-center">Total Amount</th>
                    <th className="px-4 py-2 text-center">Purchase Date</th>
                    <th className="px-4 py-2 text-center">Status</th>

                  </tr>
                </thead>
                <tbody>
                  {pendingRequestsData.map((row, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="border p-2 text-center">{row.id}</td>
                      <td className={`border p-2 text-center`} onClick={handleInfo}>
                        {row.parentId}
                      </td>
                      <td className="border p-2 text-center">{row.consultationId}</td>
                      <td className="px-4 py-2 text-center">
                        <DescriptionIcon className="mr-2 cursor-pointer" />
                      </td>
                      <td className="text-center" >
                        
                        <input type="checkbox" className="cursor-pointer" />
                        

                      </td>
                      <td className="text-center" >
                        
                        <input type="checkbox" className="cursor-pointer" />
                        

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
          // count={Math.ceil(filteredPatients.length / patientsPerPage)}
          // page={page}
          // onChange={handleChangePage}
          color="primary"
        />
      </Stack>
    </>
  );
};

export default SenityPassed;

