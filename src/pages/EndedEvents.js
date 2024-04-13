import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import search from "../assists/icon/search.png";
import date from "../assists/icon/date.png";
import location from "../assists/icon/location.png";
import time from "../assists/icon/time.png";
import "../../src/index.css";
import { Link } from "react-router-dom";
import axios from "axios";

const EndedEvents = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [searchInput, setSearchInput] = useState("");
  const [events, setEvents] = useState([]);
  const token = localStorage.getItem("token");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update current date every second

    return () => clearInterval(interval);
  }, []); // Run only once on component mount

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search logic here
    // console.log("Searching for:", searchInput);
  };

  useEffect(() => {
    const filteredEvents = events.filter(
      (event) =>
        event.event.title.toLowerCase().includes(searchInput.toLowerCase()) &&
        new Date(event.event.date_time) < currentDate
    );

    // Sort the filtered events by date in ascending order
    filteredEvents.sort(
      (a, b) => new Date(a.event.date_time) - new Date(b.event.date_time)
    );

    setSearchResults(filteredEvents);
  }, [searchInput, events, currentDate]);
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
        setEvents(response.data.events); // Assuming the events array is directly inside the response data
        // console.log(response.data.events); // Logging the fetched events
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [token]);

  function parseDateString(dateString) {
    const [date, time] = dateString.split(" ");
    const [year, month, day] = date.split("-");
    const [hours, minutes, seconds] = time.split(":");
    const parsedDate = new Date(year, month - 1, day, hours, minutes, seconds);

    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
      locale: "ar",
    };

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

    const formattedDate = parsedDate.toLocaleString("ar", options);
    return {
      dateComponent: parsedDate.toLocaleDateString("ar", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      timeComponent: timeComponent,
    };
  }
  return (
    <div className="grid grid-cols-5 h-screen">
      <SideBar />
      <div className="col-span-4 bg-[#f9f9ff] rounded-[20px] flex mb-[20px] mt-[30px] ml-[40px] p-[25px] flex-col items-start h-[92vh] overflow-hidden">
        <div className="header flex justify-between w-[100%] h-[35px] mt-[5px] mb-[5px]">
          <h3 className="text-[24px] font-bold text-[#041461]">
            لوحة المعلومات/ <span className="text-[20px]">الإيفنتات</span>
          </h3>
          <div className="w-[70%] flex justify-end ">
            <Link
              to="/AddEvents"
              className="w-[155px] h-[50px] rounded-[16px] bg-[#041461] text-white font-bold text-[16px] flex justify-center items-center ml-[30px]"
            >
              <h3>اضافة حفلة</h3>
              <h3 className="text-[50px] font-thin mt-[-10px] mr-[15px]">+</h3>
            </Link>
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
        </div>
        <div className="events flex justify-center items-center w-full mt-[30px] font-bold">
          <Link
            to="/NewEvents"
            className="coming w-[20%] h-[60px] bg-white rounded-[16px] flex justify-center items-center m-[20px]"
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            <h3 className="text-[#041461] text-[18px] cursor-pointer">
              حفلات قادمة
            </h3>
          </Link>
          <Link
            to="/EndedEvents"
            className="coming w-[20%] h-[60px] bg-[#041461] rounded-[16px] flex justify-center items-center m-[20px]"
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            <h3 className="text-white text-[18px] cursor-pointer">
              حفلات منتهية
            </h3>
          </Link>
        </div>
        <div className="content w-full overflow-auto ssc flex flex-col items-center">
          <div
            className="funDay flex p-[20px] flex-col w-[99%] rounded-[16px] my-[20px]"
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="head text-[20px] font-bold text-[#041461] text-center">
              <h3>حفلات فان داى</h3>
            </div>
            <div
              className="boxes flex items-start overflow-auto ssc mt-[20px] overflow-y-hidden"
              style={{
                width: "100%",
                maxHeight: "calc(92vh - 270px)",
                overflowX: "auto",
              }}
            >
              <div className="boxes-inner flex">
                {searchResults
                  .filter(
                    (item) =>
                      item.event.category_event_id === 6 && // Update category_event_id to 3 for "حفلات فان داى"
                      new Date(item.event.date_time) < currentDate // Filter events happening today
                  )
                  .sort(
                    (a, b) =>
                      new Date(a.event.date_time) - new Date(b.event.date_time)
                  ) // Sort events by date
                  .map((item) => (
                    <Link
                      to={`/ShowNewEventDetails/${item.event.id}`}
                      key={item.event.id}
                      className="box w-[280px] h-[280px] rounded-[16px] border border-[2px] mr-[20px]"
                    >
                      <div className="w-full">
                        <img
                          src={`https://api.whiteeagles.net/public/storage/${item.event.banner}`}
                          alt="party"
                          className="w-full h-[125px] rounded-tr-[16px]  rounded-tl-[16px]"
                        />
                        <div className="grid grid-cols-1  gap-4">
                          <div className="content">
                            <div className="title flex justify-center mt-[10px] text-center">
                              <h3 className="text-[#041461] text-[16px] font-bold">
                                {item.event.title}
                              </h3>
                            </div>
                          </div>
                          <div className="info pr-[8px] mt-auto">
                            <div className="date flex mt-[10px]">
                              <img src={date} alt="date" />
                              <h3 className="text-[12px] mr-[10px]">
                                {
                                  parseDateString(item.event.date_time)
                                    .dateComponent
                                }
                              </h3>
                            </div>
                            <div className="location flex mt-[10px]">
                              <img src={location} alt="location" />
                              <h3 className="text-[12px] mr-[10px] overflow-hidden hover:font-bold">
                                {item.event.location}
                              </h3>
                            </div>
                            <div className="time flex mt-[10px]">
                              <img src={time} alt="time" />
                              <h3 className="text-[12px] mr-[10px]">
                                {
                                  parseDateString(item.event.date_time)
                                    .timeComponent
                                }
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
          <div
            className="bazaar flex p-[20px] flex-col w-[99%] rounded-[16px] my-[20px]"
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="head text-[20px] font-bold text-[#041461] text-center">
              <h3>بازار</h3>
            </div>
            <div
              className="boxes flex items-start overflow-auto ssc mt-[20px] overflow-y-hidden"
              style={{
                width: "100%",
                maxHeight: "calc(92vh - 270px)",
                overflowX: "auto",
              }}
            >
              <div className="boxes-inner flex">
                {searchResults
                  .filter(
                    (item) =>
                      item.event.category_event_id === 5 && // Update category_event_id to 3 for "حفلات فان داى"
                      new Date(item.event.date_time) < currentDate // Filter events happening today
                  )
                  .sort(
                    (a, b) =>
                      new Date(a.event.date_time) - new Date(b.event.date_time)
                  ) // Sort events by date
                  .map((item) => (
                    <Link
                      to={`/ShowNewEventDetails/${item.event.id}`}
                      key={item.event.id}
                      className="box w-[280px] h-[280px] rounded-[16px] border border-[2px] mr-[20px]"
                    >
                      <div className="w-full">
                        <img
                          src={`https://api.whiteeagles.net/public/storage/${item.event.banner}`}
                          alt="party"
                          className="w-full h-[125px] rounded-tr-[16px]  rounded-tl-[16px]"
                        />
                        <div className="grid grid-cols-1  gap-4">
                          <div className="content">
                            <div className="title flex justify-center mt-[10px] text-center">
                              <h3 className="text-[#041461] text-[16px] font-bold">
                                {item.event.title}
                              </h3>
                            </div>
                          </div>
                          <div className="info pr-[8px] mt-auto">
                            <div className="date flex mt-[10px]">
                              <img src={date} alt="date" />
                              <h3 className="text-[12px] mr-[10px]">
                                {
                                  parseDateString(item.event.date_time)
                                    .dateComponent
                                }
                              </h3>
                            </div>
                            <div className="location flex mt-[10px]">
                              <img src={location} alt="location" />
                              <h3 className="text-[12px] mr-[10px] overflow-hidden hover:font-bold">
                                {item.event.location}
                              </h3>
                            </div>
                            <div className="time flex mt-[10px]">
                              <img src={time} alt="time" />
                              <h3 className="text-[12px] mr-[10px]">
                                {
                                  parseDateString(item.event.date_time)
                                    .timeComponent
                                }
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
          <div
            className="stand flex p-[20px] flex-col w-[99%] rounded-[16px] my-[20px] "
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="head text-[20px] font-bold text-[#041461] text-center">
              <h3>ستاند اب</h3>
            </div>
            <div
              className="boxes flex items-start overflow-auto ssc mt-[20px] overflow-y-hidden"
              style={{
                width: "100%",
                maxHeight: "calc(92vh - 270px)",
                overflowX: "auto",
              }}
            >
              <div className="boxes-inner flex ">
                {searchResults
                  .filter(
                    (item) =>
                      item.event.category_event_id === 3 && // Update category_event_id to 3 for "حفلات فان داى"
                      new Date(item.event.date_time) < currentDate // Filter events happening today
                  )
                  .sort(
                    (a, b) =>
                      new Date(a.event.date_time) - new Date(b.event.date_time)
                  ) // Sort events by date
                  .map((item) => (
                    <Link
                      to={`/ShowNewEventDetails/${item.event.id}`}
                      key={item.event.id}
                      className="box w-[280px] h-[280px] rounded-[16px] border border-[2px] mr-[20px]"
                    >
                      <div className="w-full">
                        <img
                          src={`https://api.whiteeagles.net/public/storage/${item.event.banner}`}
                          alt="party"
                          className="w-full h-[125px] rounded-tr-[16px]  rounded-tl-[16px]"
                        />
                        <div className="grid grid-cols-1  gap-4">
                          <div className="content">
                            <div className="title flex justify-center mt-[10px] text-center">
                              <h3 className="text-[#041461] text-[16px] font-bold">
                                {item.event.title}
                              </h3>
                            </div>
                          </div>
                          <div className="info pr-[8px] mt-auto">
                            <div className="date flex mt-[10px]">
                              <img src={date} alt="date" />
                              <h3 className="text-[12px] mr-[10px]">
                                {
                                  parseDateString(item.event.date_time)
                                    .dateComponent
                                }
                              </h3>
                            </div>
                            <div className="location flex mt-[10px]">
                              <img src={location} alt="location" />
                              <h3 className="text-[12px] mr-[10px] overflow-hidden hover:font-bold">
                                {item.event.location}
                              </h3>
                            </div>
                            <div className="time flex mt-[10px]">
                              <img src={time} alt="time" />
                              <h3 className="text-[12px] mr-[10px]">
                                {
                                  parseDateString(item.event.date_time)
                                    .timeComponent
                                }
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
          <div
            className="Graduation flex p-[20px] flex-col w-[99%] rounded-[16px] my-[20px] "
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="head text-[20px] font-bold text-[#041461] text-center">
              <h3>حفلات تخرج</h3>
            </div>
            <div
              className="boxes flex items-start overflow-auto ssc mt-[20px] overflow-y-hidden"
              style={{
                width: "100%",
                maxHeight: "calc(92vh - 270px)",
                overflowX: "auto",
              }}
            >
              <div className="boxes-inner flex ">
                {searchResults
                  .filter(
                    (item) =>
                      item.event.category_event_id === 2 && // Update category_event_id to 3 for "حفلات فان داى"
                      new Date(item.event.date_time) < currentDate // Filter events happening today
                  )
                  .sort(
                    (a, b) =>
                      new Date(a.event.date_time) - new Date(b.event.date_time)
                  ) // Sort events by date
                  .map((item) => (
                    <Link
                      to={`/ShowNewEventDetails/${item.event.id}`}
                      key={item.event.id}
                      className="box w-[280px] h-[280px] rounded-[16px] border border-[2px] mr-[20px]"
                    >
                      <div className="w-full">
                        <img
                          src={`https://api.whiteeagles.net/public/storage/${item.event.banner}`}
                          alt="party"
                          className="w-full h-[125px] rounded-tr-[16px]  rounded-tl-[16px]"
                        />
                        <div className="grid grid-cols-1  gap-4">
                          <div className="content">
                            <div className="title flex justify-center mt-[10px] text-center">
                              <h3 className="text-[#041461] text-[16px] font-bold">
                                {item.event.title}
                              </h3>
                            </div>
                          </div>
                          <div className="info pr-[8px] mt-auto">
                            <div className="date flex mt-[10px]">
                              <img src={date} alt="date" />
                              <h3 className="text-[12px] mr-[10px]">
                                {
                                  parseDateString(item.event.date_time)
                                    .dateComponent
                                }
                              </h3>
                            </div>
                            <div className="location flex mt-[10px]">
                              <img src={location} alt="location" />
                              <h3 className="text-[12px] mr-[10px] overflow-hidden hover:font-bold">
                                {item.event.location}
                              </h3>
                            </div>
                            <div className="time flex mt-[10px]">
                              <img src={time} alt="time" />
                              <h3 className="text-[12px] mr-[10px]">
                                {
                                  parseDateString(item.event.date_time)
                                    .timeComponent
                                }
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
          <div
            className="Singing flex p-[20px] flex-col w-[99%] rounded-[16px] my-[20px] "
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="head text-[20px] font-bold text-[#041461] text-center">
              <h3>حفلات غناء</h3>
            </div>
            <div
              className="boxes flex items-start overflow-auto ssc mt-[20px]"
              style={{
                width: "100%",
                maxHeight: "calc(92vh - 270px)",
                overflowX: "auto",
              }}
            >
              <div className="boxes-inner flex ">
                {searchResults
                  .filter(
                    (item) =>
                      item.event.category_event_id === 1 && // Update category_event_id to 3 for "حفلات فان داى"
                      new Date(item.event.date_time) < currentDate // Filter events happening today
                  )
                  .sort(
                    (a, b) =>
                      new Date(a.event.date_time) - new Date(b.event.date_time)
                  ) // Sort events by date
                  .map((item) => (
                    <Link
                      to={`/ShowNewEventDetails/${item.event.id}`}
                      key={item.event.id}
                      className="box w-[280px] h-[280px] rounded-[16px] border border-[2px] mr-[20px]"
                    >
                      <div className="w-full">
                        <img
                          src={`https://api.whiteeagles.net/public/storage/${item.event.banner}`}
                          alt="party"
                          className="w-full h-[125px] rounded-tr-[16px]  rounded-tl-[16px]"
                        />
                        <div className="grid grid-cols-1  gap-4">
                          <div className="content">
                            <div className="title flex justify-center mt-[10px] text-center">
                              <h3 className="text-[#041461] text-[16px] font-bold">
                                {item.event.title}
                              </h3>
                            </div>
                          </div>
                          <div className="info pr-[8px] mt-auto">
                            <div className="date flex mt-[10px]">
                              <img src={date} alt="date" />
                              <h3 className="text-[12px] mr-[10px]">
                                {
                                  parseDateString(item.event.date_time)
                                    .dateComponent
                                }
                              </h3>
                            </div>
                            <div className="location flex mt-[10px]">
                              <img src={location} alt="location" />
                              <h3 className="text-[12px] mr-[10px] overflow-hidden hover:font-bold">
                                {item.event.location}
                              </h3>
                            </div>
                            <div className="time flex mt-[10px]">
                              <img src={time} alt="time" />
                              <h3 className="text-[12px] mr-[10px]">
                                {
                                  parseDateString(item.event.date_time)
                                    .timeComponent
                                }
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
          <div
            className="conferences flex p-[20px] flex-col w-[99%] rounded-[16px] my-[20px] "
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="head text-[20px] font-bold text-[#041461] text-center">
              <h3>مؤتمرات</h3>
            </div>
            <div
              className="boxes flex items-start overflow-auto ssc mt-[20px] "
              style={{
                width: "100%",
                maxHeight: "calc(92vh - 270px)",
                overflowX: "auto",
              }}
            >
              <div className="boxes-inner flex ">
                {searchResults
                  .filter(
                    (item) =>
                      item.event.category_event_id === 4 && // Update category_event_id to 3 for "حفلات فان داى"
                      new Date(item.event.date_time) < currentDate // Filter events happening today
                  )
                  .sort(
                    (a, b) =>
                      new Date(a.event.date_time) - new Date(b.event.date_time)
                  ) // Sort events by date
                  .map((item) => (
                    <Link
                      to={`/ShowNewEventDetails/${item.event.id}`}
                      key={item.event.id}
                      className="box w-[280px] h-[280px] rounded-[16px] border border-[2px] mr-[20px]"
                    >
                      <div className="w-full">
                        <img
                          src={`https://api.whiteeagles.net/public/storage/${item.event.banner}`}
                          alt="party"
                          className="w-full h-[125px] rounded-tr-[16px]  rounded-tl-[16px]"
                        />
                        <div className="grid grid-cols-1  gap-4">
                          <div className="content">
                            <div className="title flex justify-center mt-[10px] text-center">
                              <h3 className="text-[#041461] text-[16px] font-bold">
                                {item.event.title}
                              </h3>
                            </div>
                          </div>
                          <div className="info pr-[8px] mt-auto">
                            <div className="date flex mt-[10px]">
                              <img src={date} alt="date" />
                              <h3 className="text-[12px] mr-[10px]">
                                {
                                  parseDateString(item.event.date_time)
                                    .dateComponent
                                }
                              </h3>
                            </div>
                            <div className="location flex mt-[10px]">
                              <img src={location} alt="location" />
                              <h3 className="text-[12px] mr-[10px] overflow-hidden hover:font-bold">
                                {item.event.location}
                              </h3>
                            </div>
                            <div className="time flex mt-[10px]">
                              <img src={time} alt="time" />
                              <h3 className="text-[12px] mr-[10px]">
                                {
                                  parseDateString(item.event.date_time)
                                    .timeComponent
                                }
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndedEvents;
