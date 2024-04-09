import React, { useState, useEffect } from "react";
import axios from "axios";
import search from "../assists/icon/search.png";
import SideBar from "../components/SideBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import arrow from "../assists/icon/arrow.png";

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [bookingId, setBookingId] = useState("");
  const [eventCategoryEventId, setEventCategoryEventId] = useState("");
  const [ticketsNumber, setTicketsNumber] = useState("");
  const [nameEN, setNameEN] = useState("");
  const [email, setEmail] = useState("");
  const [img, setImg] = useState("");
  const [data, setData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const token = localStorage.getItem("token");
  const idFilter = location.state.idFilter;

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://sterling-owl-profound.ngrok-free.app/api/event_bookings?event_id=${idFilter}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    fetchData();
  }, [idFilter, token]);

  const handleSearch = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    if (inputValue.trim() === "") {
      setSearchResults([]);
      return;
    }

    const filteredResults = data.filter((user) =>
      user.user.nameEN.startsWith(inputValue)
    );
    setSearchResults(filteredResults);
  };

  const saveBookingIdToLocal = (
    bookingId,
    eventCategoryEventId,
    ticketsNumber,
    nameEN,
    email,
    img
  ) => {
    localStorage.setItem("bookingId", bookingId);
    localStorage.setItem("eventCategoryEventId", eventCategoryEventId);
    localStorage.setItem("ticketsNumber", ticketsNumber);
    localStorage.setItem("nameEN", nameEN);
    localStorage.setItem("email", email);
    localStorage.setItem("img", img);
  };

  return (
    <div className="grid grid-cols-5 h-screen">
      <SideBar />
      <div className="col-span-4 bg-[#f9f9ff] rounded-[20px] flex mb-[20px] mt-[30px] ml-[40px] p-[25px] flex-col items-start h-[92vh] overflow-hidden">
        <div className="header flex justify-between w-[100%] h-[35px] mt-[5px] mb-[5px]">
          <div className="flex items-center">
            <button onClick={goBack} className="ml-[10px]">
              <img src={arrow} alt="arrow" className="w-[23px] h-[23px]" />
            </button>
            <h3 className="text-[24px] font-bold text-[#041461]">
              لوحة المعلومات/
              <span className="text-[20px]">
                <span>الحجوزات /</span>
                <span>الحجوزات</span>
              </span>
            </h3>
          </div>
          <form
            onSubmit={handleSearch}
            className="flex bg-[#041461] items-center w-[40%] p-[20px] rounded-[16px] h-[50px]"
          >
            <img
              src={search}
              alt="searchicon"
              className="w-[23px] h-[23px] ml-[20px] mb-[-5px] mr-[20px]"
            />
            <input
              type="text"
              value={searchInput}
              onChange={handleSearch}
              className="text-[16px] font-bold text-white w-[80%] ml-[20px] bg-[#041461] outline-none placeholder-white"
              placeholder="ابحث عن المستخدمين"
            />
          </form>
        </div>
        <div
          className="countUsers w-[225px] h-[70px] rounded-[16px]  flex justify-center items-center my-[20px] py-[15px] border border-[#0413616b]"
          style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
        >
          <h3 className="font-bold text-[16px] text-[#041461]">
            عدد المستخدمين :
            <span>{searchInput ? searchResults.length : data.length}</span>
          </h3>
        </div>
        <div className="w-full ">
          <div className="headerInfo text-[18px] text-[#041461] font-bold grid grid-cols-4 items-center w-[85%] my-[10px]  justify-items-center ">
            <h3 className=" "></h3>
            <h3 className=" ">عدد التذاكر</h3>
            <h3 className="">الحفلة</h3>
            <h3 className="">المبلغ</h3>
          </div>
          <div className="overflow-auto h-[60vh] ssc">
            {(searchInput ? searchResults : data).map((user) => (
              <div
                key={user.booking.id}
                className="flex justify-between items-center w-full"
              >
                <div className="info text-[15px] text-[#041461] font-bold items-center w-[85%] my-[10px] bg-[#727db5ab] rounded-[24px] grid grid-cols-4 py-[15px] justify-items-start">
                  <div className="flex pr-[20px] col-span-1">
                    <img
                      src={`https://sterling-owl-profound.ngrok-free.app/storage/${user.user.image}`}
                      alt="user"
                      className="image_user w-[50px] h-[50px] rounded-full text-center"
                    />
                    <div className="flex flex-col items-start mr-[20px]">
                      <h3 className="name_user">{user.user.nameEN}</h3>
                      <h3 className="email_user text-[12px]">
                        {user.user.email}
                      </h3>
                    </div>
                  </div>
                  <h3 className="numberOfCompanions_user col-span-1 justify-self-center">
                    {user.booking.tickets_number}
                  </h3>
                  <h3 className="party_user col-span-1 justify-self-center">
                    {user.booking.event.title}
                  </h3>
                  <h3 className="cost_user col-span-1 justify-self-center">
                    {user.booking.total_price}
                  </h3>
                </div>

                <Link
                  to="/ShowTicket"
                  onClick={() => {
                    setBookingId(user.booking.id);
                    setEventCategoryEventId(
                      user.booking.event.category_event_id
                    );
                    setEmail(user.user.email);
                    setNameEN(user.user.nameEN);
                    setImg(user.user.image);
                    setTicketsNumber(user.booking.tickets_number);
                    saveBookingIdToLocal(
                      user.booking.id,
                      user.booking.event.category_event_id,
                      user.booking.tickets_number,
                      user.user.nameEN,
                      user.user.email,
                      user.user.image
                    );
                  }}
                  className="w-[130px] h-[50px] flex justify-center items-center bg-[#041461] rounded-[10px] text-white mx-[10px] cursor-pointer"
                >
                  عرض التذاكر
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
