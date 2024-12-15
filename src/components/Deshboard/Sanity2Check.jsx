import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Sanity2Check = ({ setShowSanity2Check, invoiceData }) => {
  const [sanityResult, setSanityResult] = useState(null);

  const handleCancel = () => {
    setShowSanity2Check(false);
  };

  useEffect(() => {
    const fetchSanityData = async () => {
      try {
        const res = await axios.get(`http://34.47.195.164:8080/api/compare-sanity/${invoiceData}`);
        setSanityResult(res.data);
      } catch (error) {
        console.error('Error fetching sanity data:', error);
      }
    };
    fetchSanityData();
  }, [invoiceData]);

  if (!sanityResult) {
    return <div>Loading...</div>;
  }

  // Map API field names to display field names
  const fieldMapping = [
    { apiField: 'invoiceNumber', displayField: 'Invoice No' },
    { apiField: 'dop', displayField: 'Date of Purchase' },
    { apiField: 'vendorName', displayField: 'Vendor Name' },
    { apiField: 'amount', displayField: 'Total Amount' },
  ];

  return (
    <div
      className="flex justify-center items-center flex-col fixed rounded-xl shadow-xl"
      style={{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="bg-teal-600 rounded-lg p-6 w-80 text-center relative text-lime-300">
        <div
          className="absolute top-4 right-4 text-red-500 text-lg cursor-pointer"
          onClick={handleCancel}
        >
          &#10005;
        </div>

        {sanityResult.success ? (
          <>
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Sanity Level - 2</h2>
              <p className="text-lg font-semibold text-lime-300">Passed</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              {fieldMapping.map(({ displayField }, index) => (
                <div key={index} className="flex justify-between text-white text-sm">
                  <span>{displayField}</span>
                  <span className="text-green-400 text-base">&#10003;</span>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Sanity Level - 2</h2>
              <p className="text-lg font-semibold text-red-400">Failed</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              {fieldMapping.map(({ apiField, displayField }, index) => {
                const mismatch = sanityResult.mismatches.find(
                  (m) => m.field.toLowerCase() === apiField.toLowerCase()
                );
                return (
                  <div key={index} className="flex justify-between text-white text-sm">
                    <span>{displayField}</span>
                    {mismatch ? (
                      <span className="text-red-500 text-base">&#10007;</span>
                    ) : (
                      <span className="text-green-400 text-base">&#10003;</span>
                    )}
                  </div>
                );
              })}
            </div>

           
          </>
        )}
      </div>
    </div>
  );
};

export default Sanity2Check;
