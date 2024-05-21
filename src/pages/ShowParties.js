import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../components/SideBar";
import search from "../assists/icon/search.png";
import date from "../assists/icon/date.png";
import locationIcon from "../assists/icon/location.png";
import time from "../assists/icon/time.png";
import { useLocation, useNavigate } from "react-router";
import arrow from "../assists/icon/arrow.png";
import { Link } from "react-router-dom";

const ShowParties = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState(""); // State variable for search input
  const [isLoading, setIsLoading] = useState(true);
  const nameFilter = location.state.name;
  const token = localStorage.getItem("token");
  const [events, setEvents] = useState([]);
  const [searchResults, setSearchResults] = useState([]); // State variable for filtered search results

  // UseEffect to filter events based on searchInput changes
  useEffect(() => {
    const filteredEvents = events.filter((event) =>
      event.event.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResults(filteredEvents);
  }, [searchInput, events]);

  // Fetch data on initial render
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.whiteeagles.net/public/api/category_events?category=${nameFilter}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        setEvents(response.data.data); // Set events data
        setIsLoading(false); // Set loading to false after data fetch
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    fetchData();
  }, [nameFilter, token]); // Add token to dependency array

  //   console.log("Name Filter:", nameFilter);
  function parseDateString(dateString) {
    const [date, time] = dateString.split(" ");
    const [year, month, day] = date.split("-");
    const [hours, minutes, seconds] = time.split(":");
    const parsedDate = new Date(year, month - 1, day, hours, minutes, seconds);

    // Customize the AM/PM strings
    const localeOptions = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      locale: "ar",
    };

    // Format time with customized AM/PM strings
    const timeComponent = parsedDate
      .toLocaleTimeString("ar", localeOptions)
      .replace("ص", "صباحا")
      .replace("م", "مساءا");

    return {
      dateComponent: parsedDate.toLocaleDateString("ar", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      timeComponent: timeComponent,
    };
  }

  const goToBooking = (partyId) => {
    navigate("/Booking", {
      state: { idFilter: partyId },
    });
  };

  return (
    <div className="grid grid-cols-5 h-screen">
      <SideBar />
      <div className="col-span-4 bg-[#f9f9ff] rounded-[20px] flex mb-[20px] mt-[30px] ml-[40px] p-[25px] flex-col items-start h-[92vh] overflow-hidden">
        <div className="header flex justify-between w-[100%] h-[35px] mt-[5px] mb-[5px]">
          <div className="flex items-center">
            <Link to="/Reservations" className="ml-[10px]">
              <img src={arrow} alt="arrow" className="w-[23px] h-[23px]" />
            </Link>
            <h3 className="text-[24px] font-bold text-[#041461]">
              لوحة المعلومات /
              <span className="text-[20px]">الحجوزات/ {nameFilter}</span>
            </h3>
          </div>
          <form className="flex bg-[#041461] items-center w-[40%] p-[20px] rounded-[16px] h-[50px]">
            <img
              src={search}
              alt="searchicon"
              className="w-[23px] h-[23px] ml-[20px] mb-[-5px] mr-[20px]"
            />
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)} // Handle search input changes
              className="text-[16px] font-bold text-white w-[80%] ml-[20px] bg-[#041461] outline-none placeholder-white"
              placeholder="ابحث في الحجوزات"
            />
          </form>
        </div>

        <div className="title w-[270px] h-[75px] rounded-[20px] text-white font-bold bg-[#041461]  flex justify-center items-center text-[22px] mx-auto mt-[50px]">
          <h3>{nameFilter}</h3>
        </div>

        <div
          className="content border border-[px] w-full h-[70vh] mt-[40px] overflow-auto rounded-[16px] p-[20px]  gap-[0px] ssc grid grid-cols-3"
          style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
        >
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            searchResults.map((party) => (
              <div
                key={party.event.id}
                className="box w-[280px] h-[300px] rounded-[16px] border border-[2px] mx-auto mt-[20px] cursor-pointer"
                onClick={() => goToBooking(party.event.id)} // Call goToBooking with party ID
              >
                <div className="w-full">
                  <img
                    src={`https://api.whiteeagles.net/public/storage/${party.event.banner}`}
                    alt="party"
                    className="w-full h-[125px] rounded-tr-[16px]  rounded-tl-[16px]"
                  />
                  <div className="grid grid-cols-1  gap-4">
                    <div className="content">
                      <div className="title flex justify-center mt-[10px] text-center">
                        <h3 className="text-[#041461] text-[16px] font-bold w-full overflow-hidden">
                          {party.event.title}
                        </h3>
                      </div>
                    </div>
                    <div className="info pr-[8px] mt-auto">
                      <div className="date flex mt-[10px]">
                        <img src={date} alt="date" />
                        <h3 className="text-[12px] mr-[10px]">
                          {parseDateString(party.event.date_time).dateComponent}
                        </h3>
                      </div>
                      <div className="location flex mt-[10px]">
                        <img
                          src={locationIcon}
                          alt="location"
                          className="w-[15px] h-[20px]"
                        />
                        <h3 className="text-[12px] mr-[10px] overflow-hidden ml-[5px]">
                          {party.event.location}
                        </h3>
                      </div>
                      <div className="time flex mt-[10px] ">
                        <img
                          src={time}
                          alt="time"
                          className="w-[20px] h-[25px]"
                        />
                        <h3 className="text-[12px] mr-[10px]">
                          {parseDateString(party.event.date_time).timeComponent}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowParties;
