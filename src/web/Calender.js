import React, { useEffect, useState } from "react";
import AOS from "aos";
import calender from "../assists/imgs/calender.jpeg";
import date from "../assists/icon/calendar.svg";
import ggggg from "../assists/imgs/ggggg.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";
import { format } from "date-fns";
const Calender = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [data, setData] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [endEvents, setEndEvents] = useState([]);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const getArabicDayName = (dateString) => {
    const days = [
      "الأحد",
      "الإثنين",
      "الثلاثاء",
      "الأربعاء",
      "الخميس",
      "الجمعة",
      "السبت",
    ];
    const date = new Date(dateString);
    const dayIndex = date.getDay();
    return days[dayIndex];
  };
  const getDayNumber = (dateString) => {
    const date = new Date(dateString);
    return date.getDate();
  };
  const formatTimeOfDay = (dateString) => {
    const date = new Date(dateString);
    const hour = date.getHours();
    const formattedTime = format(date, "h:mm");

    // Check if the hour is before noon (12:00 PM)
    if (hour < 12) {
      return formattedTime + " صباحًا";
    } else {
      return formattedTime + " مساءًا";
    }
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const handleDivClick = () => {
    setSelectedDate("");
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("ar", options);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.whiteeagles.net/public/api/events",
          {
            headers: {
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        // Sort events by date_time before setting the data
        const sortedEvents = response.data.events.sort((a, b) => {
          return new Date(a.event.date_time) - new Date(b.event.date_time);
        });
        setData(sortedEvents);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const currentDate = new Date(); // Get the current date and time on the device
  const endDate = currentDate.toISOString().split("T")[0]; // Extract date part only
  //   console.log("date" + endDate);

  const filnoEvents = data.filter((event) => {
    return event.event.date_time.startsWith(selectedDate);
  });

  const filEndEvents = data.filter((event) => {
    return (
      event.event.date_time.startsWith(selectedDate) &&
      event.event.date_time < endDate
    );
  });

  const filCurrentEvents = data.filter((event) => {
    return (
      event.event.date_time.startsWith(selectedDate) &&
      new Date(event.event.date_time).toDateString() ===
        new Date().toDateString()
    );
  });
  const filWillEvents = data.filter((event) => {
    return (
      event.event.date_time.startsWith(selectedDate) &&
      event.event.date_time > endDate + 1
    );
  });
  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    const categoryMapping = {
      "حفلات غناء": 1,
      "حفلات التخرج": 2,
      "ستاند اب": 3,
      مؤتمرات: 4,
      بازار: 5,
      "حفلات فان داى": 6,
    };

    const categoryId = categoryMapping[value];

    if (categoryId !== undefined) {
      const filteredWillEvents = filWillEvents.filter(
        (event) => event.event.category_event_id === categoryId
      );
      setFilteredEvents(filteredWillEvents);

      const filteredCurrentEvents = filCurrentEvents.filter(
        (event) => event.event.category_event_id === categoryId
      );
      setCurrentEvents(filteredCurrentEvents);

      const filteredEndEvents = filEndEvents.filter(
        (event) => event.event.category_event_id === categoryId
      );
      setEndEvents(filteredEndEvents);
    } else {
      setFilteredEvents(filWillEvents);
      setCurrentEvents(filCurrentEvents);
      setEndEvents(filEndEvents);
    }
  };

  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${ggggg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-[99%] p-1 mx-auto ">
        <div className="w-full m-4 mx-auto  ">
          <div
            className="Services  flex flex-col items-center relative  overflow-hidden  rounded-[24px] h-[90vh] "
            style={{
              backgroundImage: `url(${calender})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="shade bg-black bg-opacity-50 absolute w-full h-full z-[1] rounded-[24px]"></div>
            <Navbar activeTab="calender" />

            <div className="info h-[90%] z-10 flex justify-center items-center flex-col gap-10">
              <h3 className="text-[54px] font-[700] text-white z-20  flex justify-center items-center">
                تقويمي
              </h3>
              <p className="text-center w-[90%] md:w-[700px] text-[16px] font-[500] text-[#E8E9F8]">
                يعمل الجدول الزمني لدينا على تبسيط تخطيط الأحداث من خلال نظرة
                عامة واضحة على الجلسات والأنشطة. يمكن للحاضرين بسهولة رؤية ما
                يحدث ومتى وأين، مما يزيد من تجربة الحدث الخاصة بهم. حقق أقصى
                استفادة من وقتك من خلال شاشة الجدول الزمني سهلة الاستخدام.
              </p>
            </div>
          </div>
          <div className="content my-[100px] p-[20px]  overflow-x-hidden">
            <div className="head flex justify-between flex-wrap gap-10">
              <div className="title flex md:text-[35px] text-[25px] font-bold text-white items-center gap-5  ">
                <div className="arrow ">
                  <div className="flex relative ">
                    <input
                      type="date"
                      className="rounded-[16px] text-transparent outline-none pr-[15px]   bg-white "
                      value={selectedDate}
                      onChange={handleDateChange}
                    />
                    <div className="d text-center ">
                      {" "}
                      {selectedDate ? (
                        <p className="absolute md:right-22 right-14  text-black bg-white rounded-[16px] h-full md:w-[280px] w-[190px] ">
                          {formatDate(selectedDate)}
                        </p>
                      ) : (
                        <p className="absolute md:right-22 right-14 text-black bg-white rounded-[16px] h-full md:w-[280px] w-[190px] text-center">
                          كل الحفلات
                        </p>
                      )}
                    </div>
                    <img
                      src={date}
                      alt=""
                      className="absolute w-[25px] top-2 right-4 md:hidden block  "
                    />
                  </div>
                </div>
              </div>
              <div className="sort flex items-center gap-10 flex-wrap">
                {/* <div className="search flex gap-3 border-b-2">
                  <img src={search2} alt="" />
                  <input
                    type="search"
                    placeholder="نوع الحفلة"
                    className="border-none outline-none bg-transparent text-left text-white placeholder:text-white"
                    onChange={handleChange}
                    value={inputValue}
                  />
                </div> */}
                <select
                  onChange={handleChange}
                  value={inputValue}
                  id="event-type"
                  className="bg-transparent cursor-pointer text-white text-[25px] px-4 outline-none border-white border-l-0 border-r-0 border border-t-0 ml-5"
                >
                  <option
                    value="نوع الحفلة"
                    selected
                    className="text-black cursor-pointer"
                  >
                    كل الحفلات
                  </option>
                  <option
                    className="text-black  cursor-pointer"
                    value="حفلات غناء"
                  >
                    حفلات غناء
                  </option>
                  <option
                    className="text-black cursor-pointer"
                    value="حفلات التخرج"
                  >
                    حفلات التخرج
                  </option>
                  <option
                    className="text-black cursor-pointer"
                    value="ستاند اب"
                  >
                    ستاند اب
                  </option>
                  <option className="text-black cursor-pointer" value="مؤتمرات">
                    مؤتمرات
                  </option>
                  <option className="text-black cursor-pointer" value="بازار">
                    بازار
                  </option>
                  <option
                    className="text-black cursor-pointer"
                    value="حفلات فان داى"
                  >
                    حفلات فان داى
                  </option>
                </select>

                {/* <div
                  onClick={handleDivClick}
                  className=" cursor-pointer md:text-[24px] text-[20px]  font-bold text-[#838389] border rounded-[16px] py-[5px]  px-[30px] flex justify-center items-center"
                >
                  <h3>كل الحفلات</h3>
                </div> */}
              </div>
            </div>
            <div className="cards my-[50px] grid  xl:grid-cols-7 lg:grid-cols-4 md:grid-cols-3 max-sm:grid-cols-2 gap-10 grid-cols-2 justify-items-center ">
              {filnoEvents.length === 0 && (
                <div className="cardNoParty h-[210px] w-[160px] bg-white">
                  <div className="head flex items-center justify-end gap-2 p-[5px] text-[10px] ">
                    <h4>{getArabicDayName(selectedDate)}</h4>
                    <span className="text-[#838389] text-[8px] w-[10px] h-[10px] text-center rounded-full bg-[#BFBFCE] flex items-center justify-center">
                      {getDayNumber(selectedDate)}
                    </span>
                  </div>

                  <div className="content text-center h-[140px] flex justify-center items-center flex-col text-[#041461] font-bold">
                    <h3>لا توجد حفلات اليوم</h3>
                    <h3>انتظرونا قريبًا</h3>
                    <div className="line w-[50%] h-[3px] bg-[#041461] mt-[3px] rounded-full"></div>
                  </div>
                </div>
              )}
              {inputValue === ""
                ? filEndEvents.map((event) => (
                    <div
                      className="cardEndParty h-[210px] w-[160px] bg-white"
                      key={event.id}
                    >
                      <div className="head flex items-center justify-end gap-2 p-[5px] text-[10px]">
                        <h4>
                          {((dateString) => {
                            const days = [
                              "الأحد",
                              "الإثنين",
                              "الثلاثاء",
                              "الأربعاء",
                              "الخميس",
                              "الجمعة",
                              "السبت",
                            ];
                            const date = new Date(dateString);
                            const dayIndex = date.getDay();
                            return days[dayIndex];
                          })(event.event.date_time)}
                        </h4>

                        <span className="text-[#838389] text-[8px] w-[10px] h-[10px] text-center rounded-full bg-[#BFBFCE] flex items-center justify-center">
                          {((dateString) => {
                            const date = new Date(dateString);
                            return date.getDate();
                          })(event.event.date_time)}
                        </span>
                      </div>
                      <div className="content flex-col mr-[14px] mt-[20px]">
                        <h3 className="text-[#041461] font-bold text-[10px]">
                          {event.event.title}
                        </h3>
                        <div className="line w-[40%] h-[2px] bg-[#041461] mt-[3px] rounded-full"></div>
                      </div>
                      <div className="info text-[8px] mr-[14px] font-bold">
                        <div className="time flex items-center gap-1 my-[5px]">
                          <h3 className="text-[#ABABB5]">الوقت:</h3>
                          <h3 className="text-[#838389]">
                            {formatTimeOfDay(event.event.date_time)}
                          </h3>
                        </div>
                        <div className="location overflow-hidden flex-wrap flex items-center gap-1 my-[5px]">
                          <h3 className="text-[#ABABB5]">المكان:</h3>
                          <a
                            href={event.event.location}
                            className="text-[#838389] text-[7px]"
                          >
                            {event.event.location}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))
                : endEvents.map((event) => (
                    <div
                      className="cardEndParty h-[210px] w-[160px] bg-white"
                      key={event.id}
                    >
                      <div className="head flex items-center justify-end gap-2 p-[5px] text-[10px]">
                        <h4>
                          {((dateString) => {
                            const days = [
                              "الأحد",
                              "الإثنين",
                              "الثلاثاء",
                              "الأربعاء",
                              "الخميس",
                              "الجمعة",
                              "السبت",
                            ];
                            const date = new Date(dateString);
                            const dayIndex = date.getDay();
                            return days[dayIndex];
                          })(event.event.date_time)}
                        </h4>

                        <span className="text-[#838389] text-[8px] w-[10px] h-[10px] text-center rounded-full bg-[#BFBFCE] flex items-center justify-center">
                          {((dateString) => {
                            const date = new Date(dateString);
                            return date.getDate();
                          })(event.event.date_time)}
                        </span>
                      </div>
                      <div className="content flex-col mr-[14px] mt-[20px]">
                        <h3 className="text-[#041461] font-bold text-[10px]">
                          {event.event.title}
                        </h3>
                        <div className="line w-[40%] h-[2px] bg-[#041461] mt-[3px] rounded-full"></div>
                      </div>
                      <div className="info text-[8px] mr-[14px] font-bold">
                        <div className="time flex items-center gap-1 my-[5px]">
                          <h3 className="text-[#ABABB5]">الوقت:</h3>
                          <h3 className="text-[#838389]">
                            {formatTimeOfDay(event.event.date_time)}
                          </h3>
                        </div>
                        <div className="location overflow-hidden flex-wrap flex items-center gap-1 my-[5px]">
                          <h3 className="text-[#ABABB5]">المكان:</h3>
                          <a
                            href={event.event.location}
                            className="text-[#838389] text-[7px]"
                          >
                            {event.event.location}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}

              {inputValue === ""
                ? filCurrentEvents.map((event) => (
                    <div
                      key={event.id}
                      className="cardCurrentParty h-[210px] w-[160px] bg-[#041461]"
                    >
                      <div className="head flex items-center justify-end gap-2 p-[5px] text-[10px] ">
                        <h4 className="text-white">
                          {((dateString) => {
                            const days = [
                              "الأحد",
                              "الإثنين",
                              "الثلاثاء",
                              "الأربعاء",
                              "الخميس",
                              "الجمعة",
                              "السبت",
                            ];
                            const date = new Date(dateString);
                            const dayIndex = date.getDay();
                            return days[dayIndex];
                          })(event.event.date_time)}
                        </h4>

                        <span className="text-[#838389] text-[8px] w-[10px] h-[10px] text-center rounded-full bg-[#BFBFCE] flex items-center justify-center">
                          {((dateString) => {
                            const date = new Date(dateString);
                            return date.getDate();
                          })(event.event.date_time)}
                        </span>
                      </div>
                      <div className="content   flex-col mx-[10px] mt-[20px]">
                        <h3 className=" text-white font-bold text-[10px]">
                          {event.event.title}
                        </h3>
                        <div className="line w-[40%] h-[2px] bg-white mt-[3px] rounded-full"></div>
                      </div>
                      <div className="info text-[8px] mx-[10px] font-bold">
                        <div className="time flex items-center gap-1 my-[5px]">
                          <h3 className="text-[#ABABB5]">الوقت:</h3>
                          <h3 className="text-[#838389]">
                            {" "}
                            {formatTimeOfDay(event.event.date_time)}
                          </h3>
                        </div>
                        <div className="date flex gap-1 my-[5px]">
                          <h3 className="text-[#ABABB5]">المكان:</h3>
                          <a
                            href={event.event.location}
                            className="text-[#838389] text-[7px] overflow-hidden"
                          >
                            {event.event.location}
                          </a>
                        </div>
                      </div>
                      <div className="tick border border-white w-[60%] mx-auto text-center text-white mt-[30px] text-[8px] py-[4px] rounded-[2px]">
                        <h3>اطلب تذكرتك</h3>
                      </div>
                    </div>
                  ))
                : currentEvents.map((event) => (
                    <div
                      key={event.id}
                      className="cardCurrentParty h-[210px] w-[160px] bg-[#041461]"
                    >
                      <div className="head flex items-center justify-end gap-2 p-[5px] text-[10px] ">
                        <h4 className="text-white">
                          {((dateString) => {
                            const days = [
                              "الأحد",
                              "الإثنين",
                              "الثلاثاء",
                              "الأربعاء",
                              "الخميس",
                              "الجمعة",
                              "السبت",
                            ];
                            const date = new Date(dateString);
                            const dayIndex = date.getDay();
                            return days[dayIndex];
                          })(event.event.date_time)}
                        </h4>

                        <span className="text-[#838389] text-[8px] w-[10px] h-[10px] text-center rounded-full bg-[#BFBFCE] flex items-center justify-center">
                          {((dateString) => {
                            const date = new Date(dateString);
                            return date.getDate();
                          })(event.event.date_time)}
                        </span>
                      </div>
                      <div className="content   flex-col mx-[10px] mt-[20px]">
                        <h3 className=" text-white font-bold text-[10px]">
                          {event.event.title}
                        </h3>
                        <div className="line w-[40%] h-[2px] bg-white mt-[3px] rounded-full"></div>
                      </div>
                      <div className="info text-[8px] mx-[10px] font-bold">
                        <div className="time flex items-center gap-1 my-[5px]">
                          <h3 className="text-[#ABABB5]">الوقت:</h3>
                          <h3 className="text-[#838389]">
                            {" "}
                            {formatTimeOfDay(event.event.date_time)}
                          </h3>
                        </div>
                        <div className="date flex gap-1 my-[5px]">
                          <h3 className="text-[#ABABB5]">المكان:</h3>
                          <a
                            href={event.event.location}
                            className="text-[#838389] text-[7px] overflow-hidden"
                          >
                            {event.event.location}
                          </a>
                        </div>
                      </div>
                      <div className="tick border border-white w-[60%] mx-auto text-center text-white mt-[30px] text-[8px] py-[4px] rounded-[2px]">
                        <h3>اطلب تذكرتك</h3>
                      </div>
                    </div>
                  ))}

              {inputValue === ""
                ? filWillEvents.map((event) => (
                    <div
                      className="cardWillCometParty h-[210px] w-[160px] bg-white"
                      key={event.id}
                    >
                      <div className="head flex items-center justify-end gap-2 p-[5px] text-[10px]">
                        <h4>
                          {((dateString) => {
                            const days = [
                              "الأحد",
                              "الإثنين",
                              "الثلاثاء",
                              "الأربعاء",
                              "الخميس",
                              "الجمعة",
                              "السبت",
                            ];
                            const date = new Date(dateString);
                            const dayIndex = date.getDay();
                            return days[dayIndex];
                          })(event.event.date_time)}
                        </h4>
                        <span className="text-[#838389] text-[8px] w-[10px] h-[10px] text-center rounded-full bg-[#BFBFCE] flex items-center justify-center">
                          {((dateString) => {
                            const date = new Date(dateString);
                            return date.getDate();
                          })(event.event.date_time)}
                        </span>
                      </div>
                      <div className="content flex-col mx-[10px] mt-[20px]">
                        <h3 className="text-[#041461] font-bold text-[10px]">
                          {event.event.title}
                        </h3>
                        <div className="line w-[40%] h-[2px] bg-[#041461] mt-[3px] rounded-full"></div>
                      </div>
                      <div className="info text-[8px] mx-[10px] font-bold">
                        <div className="time flex items-center gap-1 my-[5px]">
                          <h3 className="text-[#ABABB5]">الوقت:</h3>
                          <h3 className="text-[#838389]">
                            {formatTimeOfDay(event.event.date_time)}
                          </h3>
                        </div>
                        <div className="date flex gap-1 my-[5px]">
                          <h3 className="text-[#ABABB5]">المكان:</h3>
                          <a
                            href={event.event.location}
                            className="text-[#838389] text-[7px] overflow-hidden"
                          >
                            {event.event.location}
                          </a>
                        </div>
                      </div>
                      <div className="tick border border-[#041461] w-[60%] mx-auto text-center text-white bg-[#041461] py-[4px] rounded-[2px] mt-[30px] text-[8px]">
                        <h3>اطلب تذكرتك</h3>
                      </div>
                    </div>
                  ))
                : filteredEvents.map((event) => (
                    <div
                      className="cardWillCometParty h-[210px] w-[160px] bg-white"
                      key={event.id}
                    >
                      <div className="head flex items-center justify-end gap-2 p-[5px] text-[10px]">
                        <h4>
                          {((dateString) => {
                            const days = [
                              "الأحد",
                              "الإثنين",
                              "الثلاثاء",
                              "الأربعاء",
                              "الخميس",
                              "الجمعة",
                              "السبت",
                            ];
                            const date = new Date(dateString);
                            const dayIndex = date.getDay();
                            return days[dayIndex];
                          })(event.event.date_time)}
                        </h4>
                        <span className="text-[#838389] text-[8px] w-[10px] h-[10px] text-center rounded-full bg-[#BFBFCE] flex items-center justify-center">
                          {((dateString) => {
                            const date = new Date(dateString);
                            return date.getDate();
                          })(event.event.date_time)}
                        </span>
                      </div>
                      <div className="content flex-col mx-[10px] mt-[20px]">
                        <h3 className="text-[#041461] font-bold text-[10px]">
                          {event.event.title}
                        </h3>
                        <div className="line w-[40%] h-[2px] bg-[#041461] mt-[3px] rounded-full"></div>
                      </div>
                      <div className="info text-[8px] mx-[10px] font-bold">
                        <div className="time flex items-center gap-1 my-[5px]">
                          <h3 className="text-[#ABABB5]">الوقت:</h3>
                          <h3 className="text-[#838389]">
                            {formatTimeOfDay(event.event.date_time)}
                          </h3>
                        </div>
                        <div className="date flex gap-1 my-[5px]">
                          <h3 className="text-[#ABABB5]">المكان:</h3>
                          <a
                            href={event.event.location}
                            className="text-[#838389] text-[7px] overflow-hidden"
                          >
                            {event.event.location}
                          </a>
                        </div>
                      </div>
                      <div className="tick border border-[#041461] w-[60%] mx-auto text-center text-white bg-[#041461] py-[4px] rounded-[2px] mt-[30px] text-[8px]">
                        <h3>اطلب تذكرتك</h3>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Calender;
