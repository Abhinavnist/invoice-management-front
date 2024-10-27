import React, { useState, useEffect, useRef } from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom"; // Import Link for navigation
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CameraIcon from "@mui/icons-material/Camera";
import LogoutIcon from "@mui/icons-material/Logout";

import {
  MenuRounded as MenuIcon,
  CloseRounded as CloseIcon,
} from "@mui/icons-material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logo from "../../assets/images/logo.png";
export default function Resdeshboard() {
  


  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();


  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const sidebarItems = [
    {
        text: "Dashboard",
        icon: <ContentCopyIcon />,
        url: "/invoicedetails",
      },
      { text: "Sanity list", icon: <CameraIcon />, url: "/" },
  ];
  const [active, setActive] = useState("/invoicedetails");
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

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <div className={`bg-gray-300 flex flex-col h-screen overflow-hidden `}>
        <div className="fixed top-0 left-0 w-full h-16 flex items-center px-4 bg-[#2d718f] z-30">
          <button onClick={toggleDrawer} className="text-white mr-4">
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
          <h4 className="text-lg font-semibold text-white flex items-center">
            <img src={Logo} alt="Logo" className="h-6" />
          </h4>

          <div className="flex-grow"></div>
          <div className="flex relative items-center justify-center">
            <time
              dateTime={currentTime}
              className="text-white text-[11px] mr-3 md:text-sm lg:text-base decoration-1 decoration-gray-500"
            >
              {currentTime}
            </time>
            <div className="text-white">
              <AccountCircleIcon />
            </div>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Drawer */}
          <div
            ref={sidebarRef}
            className={`z-20 fixed top-0 left-0 h-full text-white transition-transform duration-300 ${
              isOpen ? "w-52" : "w-16"
            } ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:w-64`}
            style={{ background: "#2d718f" }}
          >
            <div className="flex flex-col h-full">
              {/* Drawer Header */}
              <div className="h-16 flex items-center justify-center px-4">
                <h1 className="text-lg font-semibold text-white">
                  <img src={Logo} alt="Logo" className="h-8" />
                </h1>
              </div>

              <div className="flex flex-col flex-1">
                <ul className="flex flex-col mt-8 space-y-2 font-sans font-medium">
                  {sidebarItems.map((item, index) => (
                    <li key={index} className="group cursor-pointer">
                      <div
                        className="flex items-center space-x-2 px-4 py-2 group-hover:bg-gray-700 hover:rounded-full transition-colors"
                        onClick={() => handleClick(item.url)}
                      >
                        {item.icon}
                        <span
                          className={`transition-opacity duration-300 ${
                            isOpen ? "opacity-100" : "opacity-0"
                          } whitespace-nowrap`}
                        >
                          <Link to={`${item.url}`}>{item.text}</Link>
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <button
              className="mx-5 p-1 bg-[#3490b7] hover:bg-[#578da5] rounded-lg cursor-pointer block mt-auto mb-[40px] text-lg"
              onClick={handleLogout}
            >
              <LogoutIcon className="mr-3" />
              Logout
            </button>
            </div>
          </div>

          <div
            className={`bg-gray-300 transition-all duration-300 ${
              isOpen ? "ml-24" : "ml-2"
            } lg:ml-64`}
          >
            <div className="h-full pt-20 w-screen md:px-8 lg:px-16 overflow-auto">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
