import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import rightArrow from "../assists/icon/rightArrow.png";
import rrr from "../assists/icon/rrr.png";
import gggg from "../assists/icon/gggg.png";
import eee from "../assists/icon/eee.png";
import ffff from "../assists/icon/ffff.png";
import one from "../assists/icon/one.png";
import two from "../assists/icon/two.png";
import three from "../assists/icon/three.png";
import four from "../assists/icon/four.png";
import five from "../assists/icon/five.png";
import uiwDate from "../assists/icon/uiw_date.png";
import mingcute from "../assists/icon/mingcute.png";
import x from "../assists/icon/x-10366.png";
import carbon_location from "../assists/icon/carbon_location.png";
import ion_mic from "../assists/icon/ion_mic-outline.png";
import llll from "../assists/icon/llll.png";
import apple from "../assists/imgs/apple.png";
import google from "../assists/imgs/google.png";
import gall from "../assists/imgs/gall.png";
import whiteBg from "../assists/imgs/whiteBg.png";
import ggggg from "../assists/imgs/ggggg.png";
import about from "../assists/imgs/about.jpeg";
import phones from "../assists/imgs/phones.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";
const Home = () => {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };
  const [party, setParty] = useState(0);
  const [data, setData] = useState();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    localStorage.setItem("selectedDate", "");
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.whiteeagles.net/public/api/past-events`,
          {
            headers: {
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        setData(response.data.events);
        // console.log(response.data.events);
      } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleNextParty = () => {
    if (data && data.length > 0) {
      setParty((party + 1) % data.length);
    }
  };

  const handleLastParty = () => {
    if (data && data.length > 0) {
      setParty((party - 1 + data.length) % data.length);
    }
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
      .replace("ص", "صباحًا")
      .replace("م", "مساءً");
    return {
      dateComponent: parsedDate.toLocaleDateString("ar", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      timeComponent: timeComponent,
    };
  }

  const { dateComponent, timeComponent } =
    data && data.length > 0 && data[party]
      ? parseDateString(data[party].date_time)
      : { dateComponent: "", timeComponent: "" };
  const videoRef = useRef(null);
  const handleClickOutside = (event) => {
    if (videoRef.current && !videoRef.current.contains(event.target)) {
      setShowVideo(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCloseVideo = () => {
    setShowVideo(false);
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
      <div className="div z-[80] video fixed w-full">
        {showVideo && data[party] && (
          <div className="vv relative w-fit mx-auto " ref={videoRef}>
            <video
              className="h-[600px] z-[90] mx-auto relative "
              controls
              autoPlay
            >
              <source
                src={`https://api.whiteeagles.net/public/storage/${data[party].video}`}
              />
            </video>
            <button
              className="close-button absolute top-4 right-4 z-[100]"
              onClick={handleCloseVideo}
            >
              <img src={x} className="w-[40px]" alt="" />
            </button>
          </div>
        )}
      </div>

      <div className="w-full flex justify-center absolute">
        <Navbar activeTab="home" />
      </div>
      <div className="w-[99%] p-1 mx-auto">
        <div
          className="home w-full m-4 mx-auto   flex flex-col items-center relative  lg:h-[90vh] justify-between lg:mt-[0px]  mt-[100px] rounded-[24px] "
          style={{
            backgroundImage:
              data && data.length > 0 && data[party] && data[party].banner
                ? `url(https://api.whiteeagles.net/public/storage/${data[party].banner})`
                : "",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="shade bg-black bg-opacity-50 absolute w-full h-full z-[1] rounded-[24px] "></div>
          <div
            onClick={handleNextParty}
            data-aos="fade-left"
            className="rArrow   border-white border-solid border-2 rounded-[8px] m-4 z-10 cursor-pointer md:w-[50px] md:h-[50px] w-[30px] h-[30px] flex justify-center items-center absolute right-0 top-[250px]"
          >
            <img src={rrr} alt="" className="md:w-[24px] w-[19px]" />
          </div>
          <div
            onClick={handleLastParty}
            data-aos="fade-right"
            className="lArrow  border-white border-solid border-2 rounded-[8px] m-4 cursor-pointer z-10 md:w-[50px] md:h-[50px] w-[30px] h-[30px]  flex justify-center items-center absolute left-0  top-[250px]"
          >
            <img src={llll} alt="" className=" md:w-[24px] w-[19px] " />
          </div>
          <div></div>
          <div></div>
          <div
            data-aos="fade-up"
            className="center w-full flex justify-center flex-col  z-[3] "
          >
            <div className="typography flex justify-center gap-[24px] lg:mt-[0px] mt-[50px] items-center flex-col text-[#E8E9F8] text-[37px] font-[600]  w-full text-center">
              <h3 className="sm:text-[37px] text-[27px] text-center w-[50%]">
                {dateComponent}
              </h3>
              <h2 className="md:text-[45px] text-[25px] text-center md:w-[50%] w-[70%]">
                {data && data.length > 0 && data[party].title}
              </h2>
              <div className="flex md:justify-between justify-center  items-center text-[16px] mt-[10px] my-3   flex-wrap ">
                {data && data[party] ? (
                  data[party].status === 1 ? (
                    <div
                      className="right flex justify-center items-center w-[150px] py-4  rounded-[16px] cursor-pointer text-center mx-4 "
                      style={{
                        backgroundImage: `url(${ggggg})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <img
                        src={rightArrow}
                        alt=""
                        className="bg-white ml-[16px] p-[5px] rounded-full "
                      />
                      <a
                        href="https://play.google.com/store/apps/details?id=com.whiteeagle.ev"
                        target="_blank"
                        rel="noreferrer"
                      >
                        احجز اﻷن
                      </a>
                    </div>
                  ) : (
                    ""
                  )
                ) : (
                  <h3>Loading...</h3> // Optional: Provide a fallback in case data is not yet loaded
                )}
                {data && party !== undefined && data[party]?.video && (
                  <div
                    className="left flex justify-center items-center w-[150px] border-white border-solid border-2 py-4 rounded-[16px] cursor-pointer text-center mx-4"
                    onClick={toggleVideo}
                  >
                    <h3>شاهد الفيديو</h3>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className={`foot grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 items-start w-[95%] mb-[20px] py-[13px] px-[32px] rounded-[16px] z-[3]  gap-7 lg:justify-items-start`}
            style={{ backgroundImage: `url(${ggggg})` }}
          >
            <div className=" flex items-center gap-3 flex-col lg:flex-row justify-center">
              <img src={uiwDate} alt="" className="w-[40px] h-[40px]" />
              <div className="info flex flex-col  justify-center lg:items-start   items-center">
                <h3 className="text-[16px] font-[600] text-white">التاريخ</h3>
                <h3 className="text-[#838389] text-[14px] lg:text-start text-center ">
                  {dateComponent}
                </h3>
              </div>
            </div>
            <div className=" flex items-center gap-3 flex-col lg:flex-row justify-center">
              <img src={mingcute} alt="" className="w-[40px] h-[40px]" />
              <div className="info flex flex-col  justify-center lg:items-start   items-center">
                <h3 className="text-[16px] font-[600] text-white">الميعاد</h3>
                <h3 className="text-[#838389] text-[14px] lg:text-start text-center ">
                  {timeComponent}
                </h3>
              </div>
            </div>
            <div className=" flex items-center gap-3 flex-col lg:flex-row justify-center">
              <img src={carbon_location} alt="" className="w-[40px] h-[40px]" />
              <div className="info flex flex-col  justify-center lg:items-start   items-center">
                <h3 className="text-[16px] font-[600] text-white">المكان</h3>
                <h3 className="text-[#838389] text-[14px] lg:text-start text-center ">
                  {data && data.length > 0 && data[party].location}
                </h3>
              </div>
            </div>
            <div className=" flex items-center gap-3 flex-col   lg:flex-row justify-center">
              <img src={ion_mic} alt="" className="w-[40px] h-[40px]" />
              <div className="info flex flex-col  justify-center lg:items-start   items-center">
                <h3 className="text-[16px] font-[600] text-white">الراعي</h3>
                <h3 className="text-[#838389] text-[14px] lg:text-start text-center ">
                  {data && data.length > 0 && data[party].band}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="about grid lg:grid-cols-2 grid-cols-1 items-center  justify-items-center  gap-5 my-[90px] overflow-hidden">
          <div
            data-aos="fade-left"
            className="img h-[284px] w-full lg:w-[457px]  flex justify-center
          items-center relative rounded-[16px] "
            style={{
              backgroundImage: `url(${about})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="shade bg-black bg-opacity-50 absolute w-full h-full z-[1] rounded-[16px]"></div>
            <div className=" border-white border-[4px] rounded-[16px] p-[20px] z-[2] w-[90%] h-[90%] flex justify-center items-center">
              <h3 className="text-[21px] font-[700] text-white">نبذة عنا</h3>
            </div>
          </div>

          <div
            data-aos="fade-right"
            className="info text-[16px] font-[600] text-white  "
          >
            <div className="text flex justify-center lg:items-start items-center flex-col p-4 lg:w-[85%] w-full max-sm:text-center ">
              <h3 className="leading-7">
                شركة وايت إيجل لتنظيم المؤتمرات والمعارض هي إحدى الشركات الرائدة
                في مجال تنظيم الفعاليات والمؤتمرات والمعارض . تأسست الشركة بهدف
                تقديم خدمات متخصصة ومبتكرة في مجال تنظيم الفعاليات، سواء كانت
                مؤتمرات ، أو معارض تجارية، أو فعاليات ثقافية وفنية أو حفلات
                تخرج. تتميز شركة وايت إيجل بفريق عمل محترف ومتخصص يتمتع بخبرة
                واسعة في تنظيم الفعاليات، بالإضافة إلى استخدامها لأحدث التقنيات
                والمنصات الرقمية في تنظيم الفعاليات وتسهيل تجربة الحضور
                والمشاركين. وتقدم الشركة مجموعة شاملة من الخدمات التي تشمل تخطيط
                وتنظيم الفعاليات، وتصميم الديكور والمسرحيات، وإدارة الضيافة
                والإقامة، وتسويق الفعاليات، وتوفير حلول التقنية والصوتية
                والضوئية، وغيرها من الخدمات التي تضمن تنظيم فعاليات ناجحة
                ومميزة، تعتبر شركة وايت إيجل شريكاً استراتيجياً لعملائها، حيث
                تسعى دائماً لتحقيق رؤى العملاء وتلبية توقعاتهم بأعلى مستويات
                الجودة والاحترافية.
              </h3>
              <Link
                to={"/about"}
                className="btn mt-[28px] flex justify-center items-center  border-white border-solid border-2 px-[30px] py-[16px]  rounded-[16px] cursor-pointer w-[170px]"
              >
                <h3>اعرف المزيد</h3>
              </Link>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="we flex flex-col items-center justify-center rounded-[24px] py-[80px]"
          style={{
            backgroundImage: `url(${whiteBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="header">
            <h2 className="text-[#041461] text-[32px] font-[700] w-fit mx-auto mb-[70px]">
              لماذا نحن؟!
            </h2>
            <div className="boxes grid grid-cols-1 md:grid-cols-3  justify-items-center gap-5">
              <div className="box">
                <div className="top flex flex-col justify-center items-center gap-3">
                  <div className="img bg-[#041461] rounded-full p-[20px]">
                    <img src={eee} alt="eee" />
                  </div>
                  <h3 className="text-[20px] font-[700] text-[#041461]">
                    رؤيتنا
                  </h3>
                </div>
                <div className="text w-[70%] text-center mx-auto text-[#838389] text-[16px] font-[700] mt-[16px]">
                  <h3>
                    أن تكون الأكثر تميزاً وابداعا وريادة فى ادارة وتنظيم
                    المؤتمرات والمعارض على المستوي المحلى عبر خدمات مبتكرة
                    ومتجددة ومهارة عالية
                  </h3>
                </div>
              </div>
              <div className="box">
                <div className="top flex flex-col justify-center items-center gap-3">
                  <div className="img bg-[#041461] rounded-full p-[20px]">
                    <img src={gggg} alt="eee" />
                  </div>
                  <h3 className="text-[20px] font-[700] text-[#041461]">
                    قيمنا
                  </h3>
                </div>
                <div className="text w-[70%] text-center mx-auto text-[#838389] text-[16px] font-[700] mt-[16px]">
                  <h3>الجودة ا الابداع ا التميز ا الابتكار ا رضا العملاء</h3>
                </div>
              </div>
              <div className="box">
                <div className="top flex flex-col justify-center items-center gap-3">
                  <div className="img bg-[#041461] rounded-full p-[20px]">
                    <img src={ffff} alt="eee" />
                  </div>
                  <h3 className="text-[20px] font-[700] text-[#041461]">
                    مهمتنا
                  </h3>
                </div>
                <div className="text w-[70%] text-center mx-auto text-[#838389] text-[16px] font-[700] mt-[16px]">
                  <h3>
                    انشاء وتطوير وتنفيذ الفعاليات بأعلى مستويات الجودة والإبداع،
                    وتوفير تجارب مميزة للمشاركين، وبناء علاقات قوية ومستدامة مع
                    الشركاء والمجتمع.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="services flex justify-center items-center flex-col overflow-hidden">
          <h1
            data-aos="fade-down"
            className="text-[32px] font-[700] text-white my-[80px]"
          >
            خدماتنا المقدمة
          </h1>
          <div className="boxes flex justify-center items-center flex-wrap text-[20px] text-white gap-16">
            <div
              data-aos="fade-left"
              className="box w-[330px] flex flex-col items-center justify-center rounded-[24px] gap-4  border-white border-[3px] py-[24px]"
            >
              <img src={one} alt="" />
              <h2 className="">تنظيم المؤتمرات و المعارض</h2>
            </div>
            <div
              data-aos="fade-down"
              className="box w-[330px] flex flex-col items-center justify-center rounded-[24px] gap-4  border-white border-[3px] py-[24px]"
            >
              <img src={two} alt="" />
              <h2 className="">تنظيم حفلات التخرج</h2>
            </div>
            <div
              data-aos="fade-right"
              className="box w-[330px] flex flex-col items-center justify-center rounded-[24px] gap-4  border-white border-[3px] py-[24px]"
            >
              <img src={three} alt="" />
              <h2 className="">تنظيم وإدارة الحفلات</h2>
            </div>
            <div
              data-aos="fade-left"
              className="box w-[330px] flex flex-col items-center justify-center rounded-[24px] gap-4  border-white border-[3px] py-[24px]"
            >
              <img src={four} alt="" />
              <h2 className="">تنظيم وادارة ورش العمل المتخصصة</h2>
            </div>
            <div
              data-aos="fade-right"
              className="box w-[330px] flex flex-col items-center justify-center rounded-[24px] gap-4  border-white border-[3px] py-[24px]"
            >
              <img src={five} alt="" />
              <h2 className="">اﻹدارة التسويقية</h2>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="apps flex justify-center items-center flex-col overflow-hidden rounded-[24px]  my-[70px]"
          style={{
            backgroundImage: `url(${whiteBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h1 className="text-[32px] font-[700] text-[#041461] my-[80px]">
            حمل التطبيق الخاص بنا
          </h1>
          <div className="icons flex gap-10 flex-wrap justify-center">
            <img src={apple} alt="" />

            <a
              href="https://play.google.com/store/apps/details?id=com.whiteeagle.ev"
              target="_blank"
              rel="noreferrer"
            >
              <img src={google} alt="" />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.whiteeagle.ev"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={gall}
                alt=""
                className="bg-[#1F1F23] rounded-[23px] w-[200px]"
              />
            </a>
          </div>
          <div className="mt-[80px]">
            <img src={phones} alt="" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
