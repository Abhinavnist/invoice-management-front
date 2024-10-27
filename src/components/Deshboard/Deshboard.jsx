import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom"; // Import Link for navigation
import Logo from "../../assets/images/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CameraIcon from "@mui/icons-material/Camera";
import Resdeshboard from "./Resdeshboard";

const Deshboard = () => {
  const [active, setActive] = useState("/invoicedetails");

  const sidebarMenu = [
    {
      text: "Dashboard",
      icon: <ContentCopyIcon />,
      url: "/deshboard/invoicedetails",
    },
    { text: "Sanity list", icon: <CameraIcon />, url: "/" },
  ];

  const handleClick = (url) => {
    setActive(url);
  };

  const [currentTime, setCurrentTime] = useState(() => {
    const now = new Date();
    return `${now.toLocaleDateString()} | ${now.toLocaleTimeString()}`;
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentTime(
        `${now.toLocaleDateString()} | ${now.toLocaleTimeString()}`
      );
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="hidden md:flex h-svh"
      >
        <div className="w-[200px] bg-[#2d718f] text-white flex flex-col justify-between">
          <div className="mt-8">
            <h1 className="text-center">
              <img src={Logo} alt="Logo" className="w-31 mx-auto" />
            </h1>

            <ul className="mt-16 space-y-4 text-lg px-4 font-sans font-medium">
              {sidebarMenu.map((item, index) => (
                <li
                  key={index}
                  className={`flex items-center p-1 hover:bg-[#578da5] rounded-lg cursor-pointer ${
                    active === item.url ? "bg-[#578da5] " : ""
                  }`}
                  onClick={() => handleClick(item.url)}
                >
                  <span className="mr-3">{item.icon}</span>
                  <Link to={item.url}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex-1 flex flex-col mt-10">
          <div className="bg-[#2d718f] text-white h-20` px-6 flex flex-col  justify-between">
            <div className="flex justify-end items-center space-x-6 my-2 mx-3">
              <span>{currentTime}</span>
              <span>
                <AccountCircleIcon />
              </span>
            </div>
          </div>

          <div className="p-8 overflow-auto h-full">
            <Outlet />
          </div>
        </div>
      </div>

      <div className="md:hidden visible">
        <Resdeshboard />
      </div>
    </>
  );
};

export default Deshboard;
