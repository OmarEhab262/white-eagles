import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import arrow from "../assists/icon/arrow.png";
import ticket from "../assists/imgs/pdf.png";

const ShowTicket = () => {
  const [bookingId, setBookingId] = useState("");
  const [eventCategoryEventId, setEventCategoryEventId] = useState("");
  const [ticketsNumber, setTicketsNumber] = useState("");
  const [nameEN, setNameEN] = useState("");
  const [email, setEmail] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    const bookingId = localStorage.getItem("bookingId");
    const eventCategoryEventId = localStorage.getItem("eventCategoryEventId");
    const ticketsNumber = localStorage.getItem("ticketsNumber");
    const nameEN = localStorage.getItem("nameEN");
    const email = localStorage.getItem("email");
    const img = localStorage.getItem("img");
    // console.log("Booking ID:", bookingId);
    // console.log("Category Event ID:", eventCategoryEventId);
    // console.log("img:", img);
    setBookingId(bookingId);
    setEventCategoryEventId(eventCategoryEventId);
    setTicketsNumber(ticketsNumber);
    setNameEN(nameEN);
    setEmail(email);
    setImg(img);
  }, []);

  const goBack = () => {
    window.history.back();
  };

  const ticketUrl = `https://sterling-owl-profound.ngrok-free.app/api/generate-pdf/${eventCategoryEventId}/${bookingId}`;

  return (
    <div className="grid grid-cols-5 h-screen">
      <SideBar />
      <div className="col-span-4 bg-[#f9f9ff] rounded-[20px] flex mb-[20px] mt-[30px] ml-[40px] p-[25px] flex-col items-start h-[92vh] overflow-hidden">
        <div className="header flex justify-between w-[100%] h-[35px] mt-[5px] mb-[5px]">
          <div className="flex items-center">
            <div className="flex items-center">
              <button onClick={goBack} className="ml-[10px]">
                <img src={arrow} alt="arrow" className="w-[23px] h-[23px]" />
              </button>
              <h3 className="text-[24px] font-bold text-[#041461]">
                لوحة المعلومات /
                <span className="text-[20px]">الحجوزات/التذاكر</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="content border-2 w-full h-[538px] my-auto rounded-[16px] p-[36px]">
          <div className="head flex  items-center">
            <div className="right flex items-center ml-[356px]">
              <div className="img w-[63px] h-[63px] rounded-full ml-[14px]">
                <img
                  src={`https://sterling-owl-profound.ngrok-free.app/storage/${img}`}
                  alt="user"
                  className="rounded-full"
                />
              </div>
              <div>
                <h3 className="text-[15px] font-[700] text-[#041461]">
                  {nameEN}
                </h3>
                <h3>{email}</h3>
              </div>
            </div>
            <div className="left text-[15px] font-[700] text-[#041461] flex flex-col items-center justify-center ">
              <h3 className="mb-[5px]">عدد المرافقين</h3>
              <h3>{ticketsNumber}</h3>
            </div>
          </div>
          {/* Tickets Section with Scroll */}
          <div className="tickets mt-[80px] h-[340px] flex  w-full overflow-auto ssc overflow-y-hidden">
            <div className="ticket  h-[330px] flex">
              <a
                target="blank"
                href={ticketUrl}
                download
                className=" w-[300px] h-[300px]"
              >
                <img
                  src={ticket}
                  alt="ticket"
                  className="   w-[300px] h-[300px] cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowTicket;
