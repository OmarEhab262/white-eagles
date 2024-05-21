import React, { useEffect, useState } from "react";
import logo from "../assists/imgs/logo.png";
import home from "../assists/icon/home.png";
import bhome from "../assists/icon/bhome.png";
import users from "../assists/icon/users.png";
import busers from "../assists/icon/busers.png";
import reservations from "../assists/icon/reservations.png";
import breservations from "../assists/icon/breservations.png";
import parties from "../assists/icon/parties.png";
import bparties from "../assists/icon/bparties.png";
import { Link, useLocation, useParams } from "react-router-dom";
import down from "../assists/icon/down.png";
import warrow from "../assists/icon/warrow.png";
import axios from "axios";
const SideBar = ({ activeItemProp }) => {
  const [activeItem, setActiveItem] = useState(""); // Initialize with an empty string
  const [isRotated, setIsRotated] = useState(false);
  const [show, setShow] = useState(false);
  const [activeParty, setActiveParty] = useState(false);
  const location = useLocation();
  const { id } = useParams();
  const goToUserpage = () => {
    window.location.href = "/User";
  };
  useEffect(() => {
    // Update activeItem based on the activeItemProp whenever the prop changes
    setActiveItem(activeItemProp);
  }, [activeItemProp]);

  useEffect(() => {
    // Set activeItem based on the current location pathname and the id variable
    const pathname = location.pathname;
    if (pathname === "/MainPage") {
      setActiveItem("home");
    }
    if (pathname === "/MainPage/") {
      setActiveItem("home");
    }
    if (pathname === "/Dashboard/MainPage") {
      setActiveItem("home");
    } else if (pathname === "/Users") {
      setActiveItem("users");
    } else if (pathname === "/Classification") {
      setActiveItem("classification");
    }
    if (location.pathname.endsWith("/ShowParties")) {
      setActiveItem("reservations");
    }
    if (location.pathname.endsWith("/Booking")) {
      setActiveItem("reservations");
    } else if (pathname === "/Reservations") {
      setActiveItem("reservations");
    } else if (pathname === "/ShowTicket") {
      setActiveItem("reservations");
    } else if (pathname === "/EndedEvents") {
      setActiveItem("newEvents");
    }
    if (location.pathname.endsWith("/NewEvents")) {
      setActiveItem("newEvents");
    }

    if (location.pathname.endsWith(`/ShowEndedEventDetail/${id}`)) {
      setActiveItem("newEvents");
    }
    if (location.pathname.endsWith("/EditEventDetail")) {
      setActiveItem("newEvents");
    }
    if (location.pathname.endsWith(`/ShowNewEventDetails/${id}`)) {
      setActiveItem("newEvents");
    }
    if (location.pathname.endsWith("/AddEvents")) {
      setActiveItem("addEvents");
    }
    if (location.pathname.endsWith("/CreatedParty")) {
      setActiveItem("endedEvents");
    }
    // Add more conditions for other pages if needed
  }, [location.pathname, id]); // Include 'id' in the dependency array

  const handleInputChange = () => {
    setIsRotated(!isRotated);
  };
  const handlePartyChange = () => {
    setActiveParty(true);
    setActiveItem("");
    setShow(!show);
  };
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.whiteeagles.net/public/api/profile",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [token]); // Include 'token' in the dependency array

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="spinner flex justify-center items-center h-full">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="w-4 h-4 bg-black rounded-full mx-1 animate-bounce"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  if (!userData) {
    return <div>No user data available.</div>;
  }
  return (
    <div className="col-span-1 min-h-screen flex justify-between flex-col">
      <div className="logo   flex justify-center items-center  ">
        <img
          src={logo}
          alt="logo"
          className="w-[150px] self-end pl-[20px] mt-[50px] ml-[-30px] mb-[15px]"
        />
      </div>
      <div className="nav flex flex-col h-[70%]">
        <Link
          to="/MainPage"
          className={`${
            activeItem === "home"
              ? "bg-[#f9f9ff] p-[15px] rounded-br-[20px] rounded-tr-[20px]  w-[80%] self-end relative mt-[5px]"
              : "p-[15px] rounded-br-[20px] rounded-tr-[20px] w-[80%] self-end mt-[5px]"
          }`}
        >
          <div className="flex items-center cursor-pointer">
            <img
              src={activeItem === "home" ? bhome : home}
              alt="home"
              className="ml-[16px]"
            />
            <h3
              className={`font-[700] ${
                activeItem === "home" ? "text-[#041461]" : "text-[#838389]"
              }`}
            >
              الصفحة الرئيسية
            </h3>
          </div>
          {activeItem === "home" && (
            <div className="absolute bottom-0 right-[-120%] w-[100%] h-[100%] bg-white rounded-tl-[10px] rounded-bl-[10px]"></div>
          )}
        </Link>
        <Link
          to="/Users"
          className={`${
            activeItem === "users"
              ? "bg-[#f9f9ff] p-[15px] rounded-br-[20px] rounded-tr-[20px]  w-[80%] self-end relative mt-[5px]"
              : "p-[15px] rounded-br-[20px] rounded-tr-[20px] w-[80%] self-end mt-[5px]"
          }`}
        >
          <div className="flex cursor-pointer ">
            <img
              src={activeItem === "users" ? busers : users}
              alt="users"
              className="ml-[16px]"
            />
            <h3
              className={`font-[700] ${
                activeItem === "users" ? "text-[#041461]" : "text-[#838389]"
              }`}
            >
              المستخدمين
            </h3>
          </div>
          {activeItem === "users" && (
            <div className="absolute bottom-0 right-[-120%] w-[100%] h-[100%] bg-white rounded-tl-[10px] rounded-bl-[10px]"></div>
          )}
        </Link>
        {/* <Link
          to="/Classification"
          className={`${
            activeItem === "classification"
              ? "bg-[#f9f9ff] p-[15px] rounded-br-[20px] rounded-tr-[20px]  w-[80%] self-end relative mt-[5px]"
              : "p-[15px] rounded-br-[20px] rounded-tr-[20px] w-[80%] self-end mt-[5px]"
          }`}
        >
          <div className="flex cursor-pointer">
            <img
              src={
                activeItem === "classification"
                  ? bclassification
                  : classification
              }
              alt="classification"
              className="ml-[16px]"
            />
            <h3
              className={`font-[700] ${
                activeItem === "classification"
                  ? "text-[#041461]"
                  : "text-[#838389]"
              }`}
            >
              التصنيفات
            </h3>
          </div>
          {activeItem === "classification" && (
            <div className="absolute bottom-0 right-[-120%] w-[100%] h-[100%] bg-white rounded-tl-[10px] rounded-bl-[10px]"></div>
          )}
        </Link> */}
        <Link
          to="/Reservations"
          className={`${
            activeItem === "reservations"
              ? "bg-[#f9f9ff] p-[15px] rounded-br-[20px] rounded-tr-[20px]  w-[80%] self-end relative mt-[5px]"
              : "p-[15px] rounded-br-[20px] rounded-tr-[20px] w-[80%] self-end mt-[5px]"
          }`}
        >
          <div className="flex cursor-pointer">
            <img
              src={activeItem === "reservations" ? breservations : reservations}
              alt="reservations"
              className="ml-[16px]"
            />
            <h3
              className={`font-[700] ${
                activeItem === "reservations"
                  ? "text-[#041461]"
                  : "text-[#838389]"
              }`}
            >
              الحجوزات
            </h3>
          </div>
          {activeItem === "reservations" && (
            <div className="absolute bottom-0 right-[-120%] w-[100%] h-[100%] bg-white rounded-tl-[10px] rounded-bl-[10px]"></div>
          )}
        </Link>
        <div
          //   to="/EndedEvents"
          onClick={() => {
            handleInputChange();
            handlePartyChange();
          }}
          className={`${
            activeParty === true ||
            activeItem === "newEvents" ||
            activeItem === "addEvents"
              ? "bg-[#f9f9ff] p-[15px] rounded-br-[20px] rounded-tr-[20px]  w-[80%] self-end relative mt-[5px] "
              : "p-[15px] rounded-br-[20px] rounded-tr-[20px] w-[80%] self-end mt-[5px] "
          }`}
        >
          <div className="flex cursor-pointer justify-between items-center">
            <div className="flex justify-center items-center ">
              {" "}
              <img
                src={
                  activeParty === true ||
                  activeItem === "newEvents" ||
                  activeItem === "addEvents"
                    ? bparties
                    : parties
                }
                alt="parties"
                className="ml-[16px]"
              />
              <h3
                className={`font-[700] ${
                  activeParty ||
                  activeItem === "newEvents" ||
                  activeItem === "addEvents"
                    ? "text-[#041461]"
                    : "text-[#838389]"
                }`}
              >
                {activeItem === "newEvents"
                  ? "عرض"
                  : activeItem === "addEvents"
                  ? "إضافة"
                  : "الحفلات"}
              </h3>
            </div>
            <div className="w-[30px]">
              {" "}
              <img
                src={
                  activeParty ||
                  activeItem === "newEvents" ||
                  activeItem === "addEvents"
                    ? down
                    : warrow
                }
                alt=""
                className={`transition-transform transform ${
                  isRotated ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
          {activeParty === true && (
            <div className="absolute bottom-0 right-[-120%] w-[100%] h-[100%] bg-white rounded-tl-[10px] rounded-bl-[10px]"></div>
          )}
        </div>
        <div
          className={`ease-in duration-300 ${
            show ? "show" : "hidden"
          } w-[70%] self-end relative mt-[15px] bg-white rounded-[24px] h-[125px] ml-[20px] text-[#041461] font-[700] text-[16px] overflow-hidden`}
        >
          <Link
            className="up h-[50%] border-b-2 flex justify-center items-center border-[#041461] cursor-pointer hover:bg-gray-300"
            to="/NewEvents"
          >
            <h3>عرض</h3>
          </Link>
          <Link
            className="down h-[50%] border-t-2 flex justify-center items-center border-[#041461] cursor-pointer  hover:bg-gray-300"
            to="/AddEvents"
          >
            <h3>إضافة</h3>
          </Link>
        </div>
      </div>
      <div className="user flex justify-center items-center flex-col w-full h-[15vh]">
        <div className="line w-[70%] bg-white h-[1px]"></div>
        <div className="content flex items-center mt-[20px]">
          <div
            className="img w-[64px] h-[64px] overflow-hidden rounded-full flex justify-center items-center cursor-pointer"
            onClick={goToUserpage}
          >
            <img
              src={`https://api.whiteeagles.net/public/storage/${userData.image}`}
              alt="user1"
              className="rounded-full w-full h-full object-cover  object-center"
            />
          </div>
          <div className="info mr-[20px] w-[100px] overflow-hidden ">
            {loading ? (
              <p>Loading...</p>
            ) : userData ? (
              <>
                <h3 className="text-[14px] font-bold text-white mb-[5px]">
                  {userData.nameEN}
                </h3>
                <h4
                  className="text-[12px] text-gray-500 overflow-x-auto overflow-y-hidden userssss "
                  title={userData.email}
                >
                  {userData.email}
                </h4>
              </>
            ) : (
              <p>Error fetching user data</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
