import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import date from "../assists/icon/date.png";
import location from "../assists/icon/location.png";
import time from "../assists/icon/time.png";
import arrow from "../assists/icon/arrow.png";
import party from "../assists/imgs/party.png";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
const ShowNewEventDetails = () => {
  const goBack = () => {
    window.history.back();
  };
  const { id } = useParams();
  localStorage.setItem("id", id);
  const [party, setParty] = useState(null);
  const [imgs, setImgs] = useState(null);
  const token = localStorage.getItem("token");
  //   console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.whiteeagles.net/public/api/event-show/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        setParty(response.data.event); // Set party to response.data instead of response.data.events
        setImgs(response.data.images); // Set party to response.data instead of response.data.events
        // console.log(response.data.images); // Set party to response.data instead of response.data.events
        // console.log(response.data.event); // Logging the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id, token]);

  if (!party) {
    return (
      <div className="flex justify-center items-center w-full h-[100vh]">
        <div className="spinner flex justify-center items-center h-full">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="w-4 h-4 bg-black rounded-full mx-1 animate-bounce"
            ></div>
          ))}
        </div>
      </div>
    ); // Display a loading message while party data is being fetched
  }
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
      hourCycle: "h23", // Use 24-hour cycle to avoid AM/PM indicator
    };
    let time = new Date(dateTimeString).toLocaleTimeString("ar", timeOptions);

    // Replace ص with صباحًا and م with مساءً
    time = time.replace("ص", "صباحًا").replace("م", "مساءً");

    return `${date}، ${time}`;
  }

  const { dateComponent, timeComponent } = parseDateString(party.date_time);
  return (
    <div className="grid grid-cols-5  h-screen ">
      <SideBar />
      <div className="col-span-4 bg-[#f9f9ff] rounded-[20px] flex mb-[20px] mt-[30px] ml-[40px] p-[25px] flex-col items-start h-[92vh] overflow-hidden">
        <div className="header flex justify-between w-[100%] h-[35px] mt-[5px] mb-[5px]">
          <div className="flex items-center">
            <button onClick={goBack} className="ml-[10px]">
              <img src={arrow} alt="arrow" className="w-[23px] h-[23px]" />
            </button>
            <h3 className="text-[24px] font-bold text-[#041461]">
              لوحة المعلومات/ <span className="text-[20px]">{party.title}</span>
            </h3>
          </div>
          <div className=" flex justify-end ">
            <Link
              to="/EditEventDetail"
              className="cursor-pointer w-[155px] h-[50px] rounded-[16px] bg-[#041461] text-white font-bold text-[16px] flex justify-center items-center ml-[30px]"
            >
              <h3>تعديل حفلة</h3>
            </Link>
          </div>
        </div>
        <div className="info flex py-[20px]  w-full h-auto overflow-hidden ">
          <div className="img h-[231px] w-[30%] overflow-hidden rounded-[16px]">
            <img
              src={`https://api.whiteeagles.net/public/storage/${party.banner}`}
              alt="party"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="content w-[70%] px-[32px] mb-[50px]">
            <div className="header mb-[36px] ">
              <div className="top mb-[10px]">
                <h3 className="text-[32px] font-[700] text-[#041461]">
                  {party.title}
                </h3>
              </div>
              <div className="bot text-[16px] flex ml-[32px] w-full gap-[30px]">
                <div className="date flex mt-[5px] mx-[12px] items-center">
                  <img src={date} alt="date" className="w-[16px] h-[16px]" />
                  <h3 className="text-[15px] mr-[10px]">{dateComponent}</h3>
                </div>
                <div className="time flex mt-[5px] mx-[12px] items-center">
                  <div className="h-[150%] w-[2px] bg-gray-400  ml-[10px]"></div>
                  <img src={date} alt="date" className="w-[16px] h-[16px]" />
                  <h3 className="text-[15px] mr-[10px]">{timeComponent}</h3>
                </div>
                <div className="location flex mt-[5px] mx-[32px] items-center">
                  <div className="h-[150%] w-[2px] bg-gray-400  ml-[10px]"></div>
                  <img
                    src={location}
                    alt="location"
                    className="w-[12px] h-[16px]"
                  />
                  <a
                    target="blank"
                    href={party.location}
                    className="text-[15px] mr-[10px] hover:font-bold"
                  >
                    {party.location}
                  </a>
                </div>
              </div>
            </div>
            <div className="footer">
              <div className="headerFooter mb-[10px]">
                <h3 className="text-[24px] font-[500][">الوصف</h3>
              </div>
              <div className="botFooter w-[580px] h-[62px] overflow-auto ssc">
                <p className="text-[13px]">{party.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[50vh] overflow-auto w-full ssc">
          {(!imgs || imgs.length === 0) && (
            <div>
              <h3 className="text-[24px] font-bold">الصور</h3>
              <div className="box border-dashed border-2 w-[503px] h-[24px] py-[55px] px-[13px] flex justify-center items-center border-[#041461] rounded-[10px] mx-auto mt-[20px] mb-[72px]">
                <h3 className="text-[20px]">لا يوجد صور</h3>
              </div>
            </div>
          )}
          {imgs && imgs.length > 0 && (
            <div className="img mt-[40px] h-[200px]">
              <h3 className="text-[24px] font-bold">الصور</h3>
              <div className="containerImgs w-full flex overflow-x-auto ssc mt-[20px] pb-[10px]">
                {imgs.map((img) => (
                  <img
                    key={img.id} // Ensure each image has a unique key
                    src={`https://api.whiteeagles.net/public/storage/${img.image}`} // Access the 'image' property of each image object
                    alt="party"
                    className="w-[224px] h-[144px] object-cover ml-[18px] block"
                  />
                ))}
              </div>
            </div>
          )}
          {party.video ? (
            <div className="video mt-[40px] h-[200px] w-full overflow-hidden">
              <h3 className="text-[24px] font-bold">الفيديو</h3>
              <div className="containerImgs w-full flex overflow-x-auto ssc mt-[20px] pb-[10px]">
                <video
                  src={`https://api.whiteeagles.net/public/storage/${party.video}`}
                  alt="party"
                  className="w-[224px] h-[144px] object-cover ml-[18px] block"
                  controls
                />
              </div>
            </div>
          ) : (
            <div className="video  w-full overflow-hidden my-[70px]">
              <h3 className="text-[24px] font-bold">الفيديو</h3>
              <div className="containerImgs w-full flex overflow-x-auto ssc mt-[20px] pb-[10px]">
                <div className="box border-dashed border-2 w-[503px] h-[24px] py-[55px] px-[13px] flex justify-center items-center border-[#041461] rounded-[10px] mx-auto mt-[20px] mb-[72px]">
                  <h3 className="text-[20px]">لا يوجد فيديو</h3>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowNewEventDetails;
