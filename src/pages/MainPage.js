import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import search from "../assists/icon/search.png";
import count from "../assists/icon/count.png";
import chair from "../assists/icon/chair.png";
import party from "../assists/icon/party.png";
import "../../src/index.css";
import { Link } from "react-router-dom";
import axios from "axios";

const MainPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [userCount, setUsersCount] = useState("");
  const [bookingCount, setBookingCount] = useState("");
  const [eventsCount, setEventsCount] = useState("");
  const [showComingParties, setShowComingParties] = useState(false);
  const [showOldParties, setShowOldParties] = useState(false);
  const [events, setEvents] = useState([]);
  const token = localStorage.getItem("token");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentDate = new Date();
  const formattedDate = currentDate
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.whiteeagles.net/public/api/events",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        setEvents(response.data.events);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.whiteeagles.net/public/api/users_count",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        setUsersCount(response.data.count);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.whiteeagles.net/public/api/booking_count",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        setBookingCount(response.data.count);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.whiteeagles.net/public/api/events_count",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        setEventsCount(response.data.count);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [token]);

  useEffect(() => {
    const filteredEvents = events.filter((event) => event.historyEnded); // Assuming 'historyEnded' is the property indicating ended history
    setSearchResults(filteredEvents);
  }, [events]);

  useEffect(() => {
    const filteredEvents = events.filter((event) =>
      event.event.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResults(filteredEvents);
  }, [searchInput, events]);

  const handleSearch = (e) => {
    e.preventDefault();
    // console.log("Searching for:", searchInput);
  };

  const showNewParties = () => {
    setShowComingParties((prevShow) => !prevShow);
  };

  const showlastParties = () => {
    setShowOldParties((prevShow) => !prevShow);
  };

  function parseDateString(dateString) {
    const [date, time] = dateString.split(" ");
    const [year, month, day] = date.split("-");
    const [hours, minutes, seconds] = time.split(":");
    const parsedDate = new Date(year, month - 1, day, hours, minutes, seconds);

    const localeOptions = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      locale: "ar",
    };

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

  function formatDate(dateTimeString) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const date = new Date(dateTimeString).toLocaleDateString("ar", options);

    const timeOptions = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      hourCycle: "h23",
    };
    let time = new Date(dateTimeString).toLocaleTimeString("ar", timeOptions);

    time = time.replace("ص", "صباحًا").replace("م", "مساءً");

    return `${date}، ${time}`;
  }

  return (
    <div className="grid grid-cols-5  h-screen ">
      <SideBar />
      <div className="col-span-4 bg-[#f9f9ff] rounded-[20px] flex mb-[20px] mt-[30px] ml-[40px] p-[25px] flex-col items-start h-[92vh]">
        <div className="header flex justify-between w-[100%] h-[35px] mt-[5px] mb-[5px]">
          <h3 className="text-[24px] font-bold text-[#041461]">
            لوحة المعلومات
          </h3>
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
              onChange={(e) => setSearchInput(e.target.value)}
              className="text-[16px] font-bold text-white w-[80%] ml-[20px] bg-[#041461] outline-none placeholder-white"
              placeholder="ابحث في لوحة معلوماتك"
            />
          </form>
        </div>

        <div className=" flex w-[100%] justify-between mt-[30px] mb-[20px]">
          <div
            className="flex items-center bg-white rounded-[16px] pr-[24px] py-[5px] w-[32%] h-[70px] border border-[#0413616b]"
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="flex justify-center items-center rounded-full w-[50px] h-[50px] text-white bg-[#041461] text-[14px]">
              <img src={count} alt="count" />
            </div>

            <div className=" mr-[20px]">
              <h3 className="text-[16px] font-bold text-[#041461]">
                عدد المستخدمين
              </h3>
              <h3 className="text-[12px]">{userCount} مستخدم</h3>
            </div>
          </div>
          <div
            className="flex items-center bg-white rounded-[16px] pr-[24px] py-[5px] w-[32%]  h-[70px] border border-[#0413616b]"
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="flex justify-center items-center rounded-full w-[50px] h-[50px] text-white bg-[#041461] text-[14px]">
              <img src={chair} alt="chair" />
            </div>
            <div className=" mr-[20px]">
              <h3 className="text-[16px] font-bold text-[#041461]">
                عدد الحجوزات
              </h3>
              <h3 className="text-[12px]">{bookingCount} حجز</h3>
            </div>
          </div>
          <div
            className="flex items-center bg-white rounded-[16px] pr-[24px] py-[5px] w-[32%]  h-[70px] border border-[#0413616b]"
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="flex justify-center items-center rounded-full w-[50px] h-[50px] text-white bg-[#041461] text-[14px]">
              <img src={party} alt="party" />
            </div>
            <div className=" mr-[20px]">
              <h3 className="text-[16px] font-bold text-[#041461]">
                عدد الحفلات
              </h3>
              <h3 className="text-[12px]">{eventsCount} حفلة</h3>
            </div>
          </div>
        </div>
        <div className="overflow-auto w-[100%]  ssc">
          <div className="upcomingConcerts flex bg-white rounded-[16px] p-[24px] w-[100%] flex-col">
            <div className="head flex justify-between w-full items-center mb-[10px]">
              <h3 className="text-[20px] font-bold text-[#041361c2]">
                الحفلات القادمة
              </h3>
              <div className="relative">
                <h3
                  className="text-[20px] font-bold text-[#041361c2] cursor-pointer"
                  onClick={showNewParties}
                >
                  ...
                </h3>
                <div
                  className="absolute top-[40px] left-0 w-[128px] h-[112px] border-solid border-[3px] border-[#041361c2] rounded-[16px] bg-white"
                  style={{ display: showComingParties ? "block" : "none" }}
                >
                  <div className="flex flex-col justify-center items-center h-full">
                    <Link
                      to="/NewEvents"
                      className="h-[50%] flex justify-center items-center cursor-pointer"
                    >
                      <h3>عرض الكل</h3>
                    </Link>
                    <div className="w-full h-[3px] bg-[#041361c2]"></div>
                    <Link
                      to="/AddEvents"
                      className="h-[50%] flex justify-center items-center cursor-pointer"
                    >
                      <h3>إضـافـة</h3>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="parties flex items-start overflow-x-auto my-[10px]">
              {loading ? (
                <div className="flex justify-center items-center w-full h-[200px]">
                  <div className="spinner flex justify-center items-center h-full">
                    {[...Array(10)].map((_, index) => (
                      <div
                        key={index}
                        className="w-4 h-4 bg-black rounded-full mx-1 animate-bounce"
                      ></div>
                    ))}
                  </div>
                </div>
              ) : (
                searchResults
                  .filter((party) => party.event.date_time > formattedDate)
                  .map((party) => {
                    return (
                      <Link
                        to={`/ShowNewEventDetails/${party.event.id}`}
                        key={party.event.id}
                        className="partyContainer ml-[70px]"
                      >
                        <div className="party border-solid border-[1px] border-gray-400 rounded-[18px] ml-[10px] w-[260px] h-[240px] mb-[10px]">
                          <div className="img">
                            <img
                              src={`https://api.whiteeagles.net/public/storage/${party.event.banner}`}
                              alt="MainPage"
                              className="mainImg w-[105%] h-[125px] rounded-tl-[16px] rounded-tr-[16px]"
                            />
                          </div>
                          <div className="grid grid-cols-1 gap-2 justify-items-center items-center p-[5px]">
                            <div className="content flex flex-col justify-center items-center  overflow-hidden w-full">
                              <h3 className="name text-[14px] text-[#041361a8] font-bold my-[5px] text-center h-[40px] flex justify-center items-center ">
                                {party.event.title}
                              </h3>
                            </div>
                            <h4 className="timeAndDate text-[12px] text-[#838389] mt-[10px]">
                              {formatDate(party.event.date_time)}
                            </h4>
                          </div>
                        </div>
                      </Link>
                    );
                  })
              )}
            </div>
          </div>

          <div
            className="endedConcerts flex bg-white rounded-[16px] p-[24px]  flex-col  my-[20px] w-full overflow-hidden "
            style={{
              boxShadow: "0px  4px 4px rgba(0, 0, 0, 0.25)",
              WebkitOverflowScrolling: "touch",
              msOverflowStyle: "none", // Hide scrollbar on Edge and IE
              WebkitScrollbarWidth: "auto", // Set scrollbar width to auto
              WebkitScrollbarColor: "transparent transparent", // Set scrollbar color to transparent
            }}
          >
            <div className="head flex justify-between items-center mb-[10px] ">
              <h3 className="text-[20px] font-bold text-[#041361c2]">
                الحفلات المنتهيه
              </h3>

              <div className="relative">
                <h3
                  className="text-[20px] font-bold text-[#041361c2] cursor-pointer "
                  onClick={showlastParties}
                >
                  ...
                </h3>
                <div
                  className="absolute top-[40px] left-0 w-[128px] h-[112px] border-solid border-[3px] border-[#041361c2] rounded-[16px] bg-white  "
                  style={{ display: showOldParties ? "block" : "none" }}
                >
                  <div className="flex flex-col justify-center items-center h-full ">
                    <Link
                      to="/EndedEvents "
                      className="h-[50%] flex justify-center items-center cursor-pointer "
                    >
                      <h3 className="">عرض الكل</h3>
                    </Link>
                    <div className="w-full h-[3px] bg-[#041361c2]"></div>
                    <Link
                      to="/AddEvents"
                      className="h-[50%] flex justify-center items-center cursor-pointer "
                    >
                      <h3 className="">إضـافـة</h3>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="parties flex items-start overflow-x-auto my-[10px]"
              style={{
                WebkitOverflowScrolling: "touch",
                msOverflowStyle: "none", // Hide scrollbar on Edge and IE
                WebkitScrollbarWidth: "auto", // Set scrollbar width to auto
                WebkitScrollbarColor: "transparent transparent", // Set scrollbar color to transparent
              }}
            >
              {searchResults
                .filter((party) => party.event.date_time < formattedDate) // Filter parties whose history has ended
                .map((party) => (
                  <Link
                    to={`/ShowEndedEventDetail/${party.event.id}`}
                    key={party.event.id}
                    className="partyContainer ml-[70px]"
                  >
                    <div className="party border-solid border-[1px] border-gray-400 rounded-[18px] ml-[10px] w-[260px] h-[240px] mb-[10px]">
                      <div className="img">
                        <img
                          src={`https://api.whiteeagles.net/public/storage/${party.event.banner}`}
                          alt="MainPage"
                          className="mainImg w-[105%] h-[125px] rounded-tl-[16px] rounded-tr-[16px]"
                        />
                      </div>
                      <div className="grid grid-cols-1 gap-2 justify-items-center items-center p-[5px]">
                        <div className="content flex flex-col justify-center items-center  overflow-hidden w-full">
                          <h3 className="name text-[14px] text-[#041361a8] font-bold my-[5px] text-center h-[40px] flex justify-center items-center ">
                            {party.event.title}
                          </h3>
                        </div>
                        <h4 className="timeAndDate text-[12px] text-[#838389] mt-[10px]">
                          {formatDate(party.event.date_time)}
                        </h4>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
