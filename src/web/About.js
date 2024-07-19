import React, { useEffect, useState } from "react";
import "./style.css";
import ggggg from "../assists/imgs/ggggg.png";
import about from "../assists/imgs/aboutt.png";
import about2 from "../assists/imgs/about2.png";
import about3 from "../assists/icon/about3.png";
import about4 from "../assists/icon/about4.png";
import about5 from "../assists/icon/about5.png";
import about6 from "../assists/icon/about6.png";
import about7 from "../assists/icon/about7.png";
import about8 from "../assists/icon/about8.png";
import whiteBg from "../assists/imgs/whiteBg.png";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import axios from "axios";
const About = () => {
  const [eventsCount, setEventsCount] = useState("");
  const [usersCount, setUsersCount] = useState("");
  const [ticketsCount, setTicketsCount] = useState("");
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedDate", "");
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.whiteeagles.net/public/api/events_count`,
          {
            headers: {
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        setEventsCount(response.data.count);
      } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.whiteeagles.net/public/api/users_count`,
          {
            headers: {
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        setUsersCount(response.data.count);
      } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.whiteeagles.net/public/api/tickets_count`,
          {
            headers: {
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        setTicketsCount(response.data.count);
      } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
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
        <div className="w-full m-4 mx-auto overflow-hidden">
          <div
            className="about  flex flex-col items-center relative  overflow-x-hidden  rounded-[24px] h-[90vh] "
            style={{
              backgroundImage: `url(${about})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="shade bg-black bg-opacity-50 absolute w-full h-full z-[1] rounded-[24px]"></div>
            <Navbar activeTab="about" />
            <div className="info h-[90%] z-10 flex justify-center items-center flex-col gap-10">
              <h3 className="text-[54px] font-[700] text-white z-20  flex justify-center items-center">
                من نحن
              </h3>
              <p className="text-center w-[90%] md:w-[700px] text-[16px] font-[500] text-[#E8E9F8]">
                نحن شركة وايت إيجل، رواد في مجال تنظيم المؤتمرات والمعارض نتميز
                بخبرة واسعة واحترافية عالية في تقديم خدماتنا نحن فريق متحمس يعمل
                بإبداع وتفانٍ لتحقيق أهداف عملائنا وجعل فعالياتهم لا تُنسى تتمثل
                رؤيتنا في تقديم أعلى مستويات الجودة والابتكار في كل ما نقدمه،
                مما يجعلنا خيارك الأمثل لتنظيم وتنفيذ فعاليتك بكل نجاح وتميز.
              </p>
            </div>
          </div>
          <div className="  grid lg:grid-cols-3 grid-cols-1 items-center justify-items-center text-[19px] text-white font-[600] gap-12 my-[100px] px-[40px] overflow-hidden">
            <div data-aos="fade-left" className="w-full ">
              <p>
                انطلقت شركة وايت ايجل من مدينة المنصورة لتعانق عنان السماء في
                مجال صناعة وتنظيم المؤتمرات والمعارض وتجهيز الملتقيات
                والمهرجانات والحفلات محليا واقليميا . وقد اعتمدت وايت ايجل
                لتحقيق تميزها على فريق من الخبرات والكفاءات الإدارية و الفنية
                المتخصصة في تنظيم أكبر المعارض والمؤتمرات للوزارات والهيئات
              </p>
            </div>
            <div data-aos="fade-left">
              <p>
                والأجهزة الحكومية و المؤسسية، وذلك من خال الالتزام بأرقى مستويات
                الجودة بالمعايير العالمية في توفير كافة الخدمات التنظيمية و
                الالتزام بالأسس الفنية و المبتكرة بدءاً من التجهيزات و تسويق
                برامج الرعاية واستقطاب المشتركين و خدمات التسويق و المبيعات
                وتهيئة مساحة العرض بما يلبي تطلعات الجهات المنظمة و
                المشاركة و الزوار.
              </p>
            </div>
            <div data-aos="fade-right">
              <img src={about2} alt="" />
            </div>
          </div>
          <div className="flex justify-around items-center flex-wrap   gap-10">
            <div
              data-aos="fade-left"
              className="box   text-white flex flex-col items-center justify-center gap-5 border border-white rounded-[60px]  py-[23px] w-[228px] "
            >
              <div className="img">
                <img src={about3} alt="" />
              </div>
              <div className="info text-[20px]">التذاكر المباعة</div>
              <div className="num text-[32px] font-[800]">+ {ticketsCount}</div>
            </div>
            <div
              data-aos="fade-up"
              className="box  text-white flex flex-col items-center justify-center gap-5 border border-white rounded-[60px] py-[23px] w-[228px]"
            >
              <div className="img">
                <img src={about4} alt="" />
              </div>
              <div className="info text-[20px]">المستخدمين</div>
              <div className="num text-[32px] font-[800]">+ {usersCount}</div>
            </div>
            <div
              data-aos="fade-right"
              className="box  text-white flex flex-col items-center justify-center gap-5 border border-white rounded-[60px]  py-[23px] w-[228px]"
            >
              <div className="img">
                <img src={about5} alt="" />
              </div>
              <div className="info text-[20px]">الحفلات</div>
              <div className="num text-[32px] font-[800]">+ {eventsCount}</div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="apps flex  flex-wrap justify-center gap-10 items-center justify-items-center overflow-x-hidden rounded-[24px] my-[70px]  p-[50px] "
            style={{
              backgroundImage: `url(${whiteBg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="box flex gap-5 bg-[#041461] rounded-[70px] items-center p-[30px] text-white   flex-col md:flex-row lg:h-[144px] lg:w-[45%] w-full">
              <div className="img rounded-full  overflow-hidden  lg:w-[140px] w-[90px]  ">
                <img
                  src={about6}
                  alt=""
                  className=" object-cover w-full h-full"
                />
              </div>
              <div className="info w-full md:text-start text-center lg:h-[90px] pb-[5px]">
                <h2 className="text-[20px] font-[700] my-[5px]">
                  أسعار تنافسية المقدمة
                </h2>
                <h3 className="text-[14px] font-[600]">
                  استمتع بتجربية الفعاليات التي لا تنسى بأسعرانا المناسبة استمتع
                  بالجودة والتنظيم مع كل فعالية
                </h3>
              </div>
            </div>
            <div className="box flex gap-5 bg-[#041461] rounded-[70px] items-center p-[30px] text-white flex-col md:flex-row lg:h-[144px] lg:w-[45%] w-full">
              <div className="img rounded-full  overflow-hidden  lg:w-[150px] w-[100px]  ">
                <img
                  src={about7}
                  alt=""
                  className=" object-cover p-[5px] w-full h-full"
                />
              </div>
              <div className="info w-full md:text-start text-center lg:h-[90px] pb-[5px]">
                <h2 className="text-[20px] font-[700] my-[5px]">فريق فني</h2>
                <h3 className="text-[14px] font-[600]">
                  شركة وايت ايجل تضم أفضل فريق عمل في المنطقة، مؤهل ومدرب
                  بمعايير إدارة المؤتمرات والمعارض، يتميز بالتنظيم الدقيق
                  والاحترافية.
                </h3>
              </div>
            </div>
            <div className="box flex gap-5 bg-[#041461] rounded-[70px] items-center p-[30px] text-white   flex-col md:flex-row lg:h-[144px] lg:w-[45%] w-full">
              <div className="img rounded-full  lg:w-[150px] w-[100px]  overflow-hidden">
                <img
                  src={about8}
                  alt=""
                  className=" object-cover p-[5px] w-full h-full"
                />
              </div>
              <div className="info  w-full md:text-start text-center lg:h-[90px] pb-[5px]">
                <h2 className="text-[20px] font-[700] my-[5px]">
                  التنظيم المميز
                </h2>
                <h3 className="text-[14px] font-[600]">
                  نسعى جاهدين لضمان تنظيم استثنائي و تقديم تجربة فريدة في كل
                  تفاصيل الحدث من التخطيط الدقيق إلى التنفيذ السلس .
                </h3>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
