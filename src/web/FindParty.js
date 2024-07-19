import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import services from "../assists/imgs/Services.jpeg";
import ggggg from "../assists/imgs/ggggg.png";
import whiteBg from "../assists/imgs/whiteBg.png";

const FindParty = () => {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const savedInputValue = localStorage.getItem("searchInputValue");

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.whiteeagles.net/public/api/events"
        );
        setEvents(response.data.events);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const newFilteredEvents = events.filter((event) =>
      event.event.title.toLowerCase().includes(savedInputValue.toLowerCase())
    );
    setFilteredEvents(newFilteredEvents);
  }, [events, savedInputValue]);

  function formatDateTime(dateTimeString) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
      hourCycle: "h23",
      locale: "ar",
    };

    let time = new Date(dateTimeString).toLocaleTimeString("ar", options);
    time = time.replace("ص", "صباحًا").replace("م", "مساءً");

    return `${time}`;
  }

  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${ggggg})`,
        backgroundPosition: "center",
      }}
    >
      <div className="w-[99%] p-1 mx-auto ">
        <div className="w-full m-4 mx-auto ">
          <div
            className="ShowServices  flex flex-col items-center relative  overflow-hidden  rounded-[24px] h-[90vh] "
            style={{
              backgroundImage: `url(${services})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="shade bg-black bg-opacity-50 absolute w-full h-full z-[1] rounded-[24px]"></div>
            <Navbar activeTab="services" />
            <div className="info h-[90%] z-10 flex justify-center items-center flex-col gap-10">
              <h3 className="text-[54px] font-[700] text-white z-20  flex justify-center items-center">
                خدماتنا
              </h3>
              <p className="text-center w-[90%] md:w-[700px] text-[16px] font-[500] text-[#E8E9F8]">
                يقدم الموقع الخاص بنا مجموعة شاملة من الخدمات لمساعدتك في تخطيط
                الحدث الخاص بك والترويج له وإدارته. بدءًا من صفحات الأحداث
                القابلة للتخصيص والتسجيل السهل وحتى أدوات التسويق وتسجيل الوصول
                في الموقع، لدينا كل ما تحتاجه لإنجاح الحدث الخاص بك. دعنا نعتني
                بالتفاصيل حتى تتمكن من التركيز على خلق تجربة لا تُنسى للحاضرين.
              </p>
            </div>
          </div>
          <div className="content flex justify-center items-center flex-col my-[50px]">
            <div className="boxes flex justify-center items-center flex-col w-full my-[50px]">
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
                <>
                  {!filteredEvents || filteredEvents.length === 0 ? (
                    <div className="box border-dashed border-2 w-[60%] py-[55px] px-[13px] flex justify-center items-center border-white rounded-[10px] mx-auto mt-[20px] mb-[72px]">
                      <h3 className="text-[30px] font-bold text-white text-center">
                        لا توجد حفلة بهذا الاسم
                      </h3>
                    </div>
                  ) : (
                    filteredEvents.map((event) => (
                      <div
                        data-aos="fade-up"
                        className="box border border-white w-[90%] lg:h-[320px] h-full p-[20px] rounded-[24px] flex items-center my-[30px] gap-20 flex-wrap flex-row"
                        key={event.event.id}
                      >
                        <div className="right lg:w-[35%] w-full h-full">
                          <img
                            src={`https://api.whiteeagles.net/public/storage/${event.event.banner}`}
                            alt=""
                            className="rounded-[16px] w-full h-full"
                          />
                        </div>
                        <div className="left lg:w-[55%] w-full">
                          <div className="title overflow-hidden">
                            <h2 className="text-[32px] font-bold text-white">
                              {event.event.title}
                            </h2>
                          </div>
                          <div className="bot text-[16px] flex ml-[32px] w-full gap-[30px] text-[#838389] text-start mt-[15px] flex-wrap">
                            <div className="date flex mt-[5px] items-center">
                              <h3 className="text-[15px] mr-[10px]">
                                {formatDateTime(event.event.date_time)}
                              </h3>
                            </div>
                            <div className="location flex mt-[5px] items-center overflow-hidden">
                              <a
                                href={event.event.location}
                                title={event.event.location}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {event.event.location}
                              </a>
                            </div>
                          </div>
                          <div className="description mt-[15px]">
                            <h2 className="text-[24px] font-[500] text-white">
                              الوصف
                            </h2>
                            <p className="lg:w-[80%] w-full text-[#838389]">
                              {event.event.description}
                            </p>
                          </div>
                          {event.event.status ? (
                            <div
                              style={{
                                backgroundImage: `url(${whiteBg}) `,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                              }}
                              className="btn  cursor-pointer hover:font-bold ease-out duration-300 text-[#041461] text-[24px] font-[600] flex justify-center items-center w-[60%] py-[10px] rounded-[24px] my-[15px]"
                            >
                              <h3>احجز الآن</h3>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    ))
                  )}
                </>
              )}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default FindParty;
