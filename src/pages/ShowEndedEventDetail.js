import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import arrow from "../assists/icon/arrow.png";
import date from "../assists/icon/date.png";
import location from "../assists/icon/location.png";
import time from "../assists/icon/time22.png";
import tick from "../assists/icon/tick.svg";
import mony from "../assists/icon/mony.svg";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ShowEndedEventDetail = () => {
  const goBack = () => {
    window.history.back();
  };

  const { id } = useParams();
  localStorage.setItem("id", id);
  const [ticketsCount, setTicketsCount] = useState(null);
  const [eventTotal, setEventTotal] = useState(null);
  const [party, setParty] = useState(null);
  const [imgs, setImgs] = useState(null);
  const token = localStorage.getItem("token");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const deleteEvent = async () => {
    try {
      await axios.delete(
        `https://api.whiteeagles.net/public/api/events/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      // Refresh the user list after deletion
      setShowDeleteConfirmation(false);
      window.location.href = "/MainPage";
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.whiteeagles.net/public/api/ticketsCountForEvent/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        // setImgs(response.data.images); // Set party to response.data instead of response.data.events
        setTicketsCount(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id, token]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.whiteeagles.net/public/api/eventTotalPayments/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        // setImgs(response.data.images); // Set party to response.data instead of response.data.events
        setEventTotal(response.data.data);
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

  const { dateComponent, timeComponent } = parseDateString(party.date_time);
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
            <div
              className="cursor-pointer w-[155px] h-[50px] rounded-[16px] bg-red-600 text-white font-bold text-[16px] flex justify-center items-center ml-[30px]"
              onClick={() => {
                setShowDeleteConfirmation(true);
              }}
            >
              <h3>حذف حفلة</h3>
            </div>
          </div>
        </div>
        <div className=" flex w-[100%] justify-around mt-[30px] mb-[20px]">
          <div
            className="flex items-center bg-white rounded-[16px] pr-[24px] py-[5px] w-[32%] h-[70px] border border-[#0413616b]"
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="flex justify-center items-center rounded-full w-[50px] h-[50px] text-white bg-[#041461] text-[14px]">
              <img src={tick} alt="count" className="w-[60%]" />
            </div>

            <div className=" mr-[20px]">
              <h3 className="text-[16px] font-bold text-[#041461]">
                عدد التذاكر المحجوزه
              </h3>
              <h3 className="text-[12px]">{ticketsCount} تذكرة</h3>
            </div>
          </div>
          <div
            className="flex items-center bg-white rounded-[16px] pr-[24px] py-[5px] w-[32%]  h-[70px] border border-[#0413616b]"
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="flex justify-center items-center rounded-full w-[50px] h-[50px] text-white bg-[#041461] text-[14px]">
              <img src={mony} alt="chair" className="w-[60%]" />
            </div>
            <div className=" mr-[20px]">
              <h3 className="text-[16px] font-bold text-[#041461]">
                اجمالي المدفوع للتذاكر
              </h3>
              <h3 className="text-[12px]">{eventTotal} المدفوع</h3>
            </div>
          </div>
        </div>
        <div className="info flex py-[20px]  w-full h-auto overflow-hidden">
          <div className="img h-[231px] w-[30%] rounded-[16px] overflow-hidden">
            <img
              src={`https://api.whiteeagles.net/public/storage/${party.banner}`}
              alt="party"
              className="h-full w-full object-cover rounded-[16px]"
            />
          </div>
          <div className="content w-[70%] px-[32px] pb-[150px]">
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
                <div className="time flex mt-[5px] mx-[12px] items-center border-r-4 border-gray-500 pr-[15px]">
                  <img src={time} alt="date" className="w-[16px] h-[16px]" />
                  <h3 className="text-[15px] mr-[10px]">{timeComponent}</h3>
                </div>
                <div className="location flex mt-[5px] mx-[32px] items-center w-[40%] border-r-4 border-gray-500 pr-[15px]">
                  <img
                    src={location}
                    alt="location"
                    className="w-[12px] h-[16px]"
                  />
                  <a
                    target="blank"
                    href={party.location}
                    className="text-[15px] mr-[10px] "
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
              <div className="botFooter w-[460px] h-[62px] overflow-auto ssc">
                <p className="text-[14px]">{party.description}</p>
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
      {showDeleteConfirmation && (
        <div
          className="fixed h-screen w-full top-0 left-0 flex justify-center items-center text-[#041461]"
          style={{ background: "#66666657" }}
        >
          <div className="w-[393px] h-[194px] bg-white rounded-[24px] flex justify-center items-center  flex-col">
            <h3 className="text-[24px] font-[700]">هل تريد حذف الحفلة؟</h3>
            <div className="flex gap-5">
              <div
                className="cursor-pointer w-[68px] h-[52px] rounded-[10px] bg-[#041461] text-white flex justify-center items-center border border-[#041461] mt-[20px]"
                onClick={deleteEvent}
              >
                نعم
              </div>
              <div
                className="cursor-pointer w-[68px] h-[52px] rounded-[10px] bg-white text-[#041461] flex justify-center items-center border border-[#041461] mt-[20px]"
                onClick={() => setShowDeleteConfirmation(false)}
              >
                لا
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowEndedEventDetail;
