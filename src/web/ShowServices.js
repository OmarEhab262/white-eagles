import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import services from "../assists/imgs/Services.jpeg";
import ggggg from "../assists/imgs/ggggg.png";
import Navbar from "../components/Navbar";
import whiteBg from "../assists/imgs/whiteBg.png";
import axios from "axios";
import AOS from "aos";
const ShowServices = () => {
  const category = localStorage.getItem("nameCategory");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.whiteeagles.net/public/api/category_events?category=${category}`,
          {
            headers: {
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [category]);
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

  function formatDateTime(dateTimeString) {
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

    return `${time}`;
  }
  function formatDateDate(dateTimeString) {
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

    return `${date}`;
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
            <div className="header">
              <h2 className="text-[48px] font-bold text-white">{category}</h2>
            </div>
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
                  {!data || data.length === 0 ? (
                    <div className="box border-dashed border-2 w-[60%] py-[55px] px-[13px] flex justify-center items-center border-white rounded-[10px] mx-auto mt-[20px] mb-[72px]">
                      <h3 className="text-[30px] font-bold text-white text-center">
                        لا توجد حفلة بعد
                      </h3>
                    </div>
                  ) : (
                    data.map((event) => (
                      <div
                        data-aos="fade-up"
                        className="box border border-white w-[90%] md:h-[320px] h-full p-[20px] rounded-[24px] flex items-center my-[30px] gap-20 flex-wrap flex-row"
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
                                {formatDateDate(event.event.date_time)}
                              </h3>
                            </div>
                            <div className="time flex mt-[5px] items-center">
                              <div className="h-[120%] w-[2px] bg-gray-400 ml-[10px]"></div>
                              <h3 className="text-[15px] mr-[10px]">
                                {formatDateTime(event.event.date_time)}
                              </h3>
                            </div>
                            <div className="location flex mt-[5px] items-center overflow-hidden">
                              <div className="h-[120%] w-[2px] bg-gray-400 ml-[10px]"></div>
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
                          <div
                            style={{
                              backgroundImage: `url(${whiteBg}) `,
                              backgroundPosition: "center",
                              backgroundSize: "cover",
                            }}
                            className="btn cursor-pointer hover:font-bold ease-out duration-300 text-[#041461] text-[24px] font-[600] flex justify-center items-center w-[60%] py-[10px] rounded-[24px] my-[15px]"
                          >
                            <h3>احجز الآن</h3>
                          </div>
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

export default ShowServices;
