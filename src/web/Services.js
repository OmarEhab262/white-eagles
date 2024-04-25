import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import services from "../assists/imgs/Services.jpeg";
import party11 from "../assists/imgs/party11.jpeg";
import party22 from "../assists/imgs/party22.jpeg";
import party33 from "../assists/imgs/party33.jpeg";
import party44 from "../assists/imgs/party44.jpeg";
import party55 from "../assists/imgs/party55.jpeg";
import party66 from "../assists/imgs/party66.jpeg";
import ggggg from "../assists/imgs/ggggg.png";
import homeLogo from "../assists/imgs/homeLogo.svg";
import whiteBg from "../assists/imgs/whiteBg.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Services = () => {
  useEffect(() => {
    localStorage.setItem("selectedDate", "");
    AOS.init({ duration: 1000 });
  }, []);
  const handleShowClick = (name) => {
    // Storing the value in local storage
    localStorage.setItem("nameCategory", name);
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
        <div className="w-full m-4 mx-auto ">
          <div
            className="Services  flex flex-col items-center relative  overflow-hidden  rounded-[24px] h-[90vh] "
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
          <div className="parties my-[80px] grid grid-cols-1 lg:grid-cols-2   gap-10 ">
            <div className="head flex  justify-center col-span-1 lg:col-span-2 my-[50px] w-[240px] mx-auto ">
              <h2 className="md:text-[34px] text-[25px] font-[600] text-white relative  ">
                الفئات الخاصة بنا
                <div className="line w-[50%] absolute bg-white h-[2px] rounded-[3px] right-0"></div>
              </h2>
            </div>
            <div className="h-[350px] overflow-hidden flex justify-center ">
              <div className="group relative h-[350px] rounded-[24px] w-[90%] overflow-hidden transition-transform ease-in-out duration-300 delay-150 transform-gpu">
                <div
                  className="absolute w-full h-full flex justify-around  items-center flex-col rounded-[24px] bottom-[-360px] transition-transform ease-in-out duration-300 transform-gpu group-hover:translate-y-[-370px]"
                  style={{
                    backgroundImage: `url(${whiteBg}) `,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <p className="text-[24px] font-[600] text-[#041461] p-[18px]">
                    استمتع بليالٍ مميزة مليئة بالإثارة والمرح مع حفلات الغناء
                    على موقعنا. انضم إلينا للاستماع إلى أجمل الأصوات والموسيقى
                    الرائعة، واستمتع بأجواء مليئة بالحماس والمرح
                  </p>
                  <div className="w-full flex justify-center items-end cursor-pointer">
                    <Link
                      to="/ShowServices"
                      className="text-white bg-[#041461] w-[70%] text-center md:text-[32px] text-[18px] font-[500] rounded-[24px] py-[10px]"
                      onClick={() => handleShowClick("مؤتمرات")}
                    >
                      عرض
                    </Link>
                  </div>
                </div>
                <div
                  className="w-full h-full flex justify-center items-end cursor-pointer ease-in-out duration-300 group-hover:translate-y-[370px]"
                  style={{
                    backgroundImage: `url(${party11}) `,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <h2 className="text-[#041461] bg-white w-[70%] text-center md:text-[32px] text-[18px]  font-[600] rounded-[24px] py-[10px] my-[20px]">
                    مؤتمرات
                  </h2>
                </div>
              </div>
            </div>
            <div className="h-[350px] overflow-hidden flex justify-center">
              <div className="group relative h-[350px] rounded-[24px] w-[90%] overflow-hidden transition-transform ease-in-out duration-300 delay-150 transform-gpu">
                <div
                  to="/ShowServices"
                  className="absolute w-full h-full flex justify-around  items-center flex-col rounded-[24px] bottom-[-360px] transition-transform ease-in-out duration-300 transform-gpu group-hover:translate-y-[-370px]"
                  style={{
                    backgroundImage: `url(${whiteBg}) `,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <p className="text-[24px]   font-[600] text-[#041461] p-[18px]">
                    استمتع بليالٍ مميزة مليئة بالإثارة والمرح مع حفلات الغناء
                    على موقعنا. انضم إلينا للاستماع إلى أجمل الأصوات والموسيقى
                    الرائعة، واستمتع بأجواء مليئة بالحماس والمرح
                  </p>
                  <div className="w-full flex justify-center items-end cursor-pointer">
                    <Link
                      to="/ShowServices"
                      className="text-white bg-[#041461] w-[70%] text-center md:text-[32px] text-[18px] font-[500] rounded-[24px] py-[10px]"
                      onClick={() => handleShowClick("حفلات التخرج")}
                    >
                      عرض
                    </Link>
                  </div>
                </div>
                <div
                  className="w-full h-full flex justify-center items-end cursor-pointer ease-in-out duration-300 group-hover:translate-y-[370px]"
                  style={{
                    backgroundImage: `url(${party22}) `,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <h2 className="text-[#041461] bg-white w-[70%] text-center md:text-[32px] text-[18px]  font-[600] rounded-[24px] py-[10px] my-[20px]">
                    حفلات تخرج
                  </h2>
                </div>
              </div>
            </div>
            <div className="h-[350px] overflow-hidden flex justify-center">
              <div className="group relative h-[350px] rounded-[24px] w-[90%] overflow-hidden transition-transform ease-in-out duration-300 delay-150 transform-gpu">
                <div
                  to="/ShowServices"
                  className="absolute w-full h-full flex justify-around  items-center flex-col rounded-[24px] bottom-[-360px] transition-transform ease-in-out duration-300 transform-gpu group-hover:translate-y-[-370px]"
                  style={{
                    backgroundImage: `url(${whiteBg}) `,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <p className="text-[24px]  font-[600] text-[#041461] p-[18px]">
                    استمتع بليالٍ مميزة مليئة بالإثارة والمرح مع حفلات الغناء
                    على موقعنا. انضم إلينا للاستماع إلى أجمل الأصوات والموسيقى
                    الرائعة، واستمتع بأجواء مليئة بالحماس والمرح
                  </p>
                  <div className="w-full flex justify-center items-end cursor-pointer">
                    <Link
                      to="/ShowServices"
                      className="text-white bg-[#041461] w-[70%] text-center md:text-[32px] text-[18px] font-[500] rounded-[24px] py-[10px]"
                      onClick={() => handleShowClick("حفلات غناء")}
                    >
                      عرض
                    </Link>
                  </div>
                </div>
                <div
                  className="w-full h-full flex justify-center items-end cursor-pointer ease-in-out duration-300 group-hover:translate-y-[370px]"
                  style={{
                    backgroundImage: `url(${party33}) `,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <h2 className="text-[#041461] bg-white w-[70%] text-center md:text-[32px] text-[18px]  font-[600] rounded-[24px] py-[10px] my-[20px]">
                    حفلات غناء
                  </h2>
                </div>
              </div>
            </div>
            <div className="h-[350px] overflow-hidden flex justify-center">
              <div className="group relative h-[350px] rounded-[24px] w-[90%] overflow-hidden transition-transform ease-in-out duration-300 delay-150 transform-gpu">
                <div
                  to="/ShowServices"
                  className="absolute w-full h-full flex justify-around  items-center flex-col rounded-[24px] bottom-[-360px] transition-transform ease-in-out duration-300 transform-gpu group-hover:translate-y-[-370px]"
                  style={{
                    backgroundImage: `url(${whiteBg}) `,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <p className="text-[24px]  font-[600] text-[#041461] p-[18px]">
                    استمتع بليالٍ مميزة مليئة بالإثارة والمرح مع حفلات الغناء
                    على موقعنا. انضم إلينا للاستماع إلى أجمل الأصوات والموسيقى
                    الرائعة، واستمتع بأجواء مليئة بالحماس والمرح
                  </p>
                  <div className="w-full flex justify-center items-end cursor-pointer">
                    <Link
                      to="/ShowServices"
                      className="text-white bg-[#041461] w-[70%] text-center md:text-[32px] text-[18px] font-[500] rounded-[24px] py-[10px]"
                      onClick={() => handleShowClick("حفلات فان داى")}
                    >
                      عرض
                    </Link>
                  </div>
                </div>
                <div
                  className="w-full h-full flex justify-center items-end cursor-pointer ease-in-out duration-300 group-hover:translate-y-[370px]"
                  style={{
                    backgroundImage: `url(${party44}) `,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <h2 className="text-[#041461] bg-white w-[70%] text-center md:text-[32px] text-[18px]  font-[600] rounded-[24px] py-[10px] my-[20px]">
                    فان داى
                  </h2>
                </div>
              </div>
            </div>
            <div className="h-[350px] overflow-hidden flex justify-center">
              <div className="group relative h-[350px] rounded-[24px] w-[90%] overflow-hidden transition-transform ease-in-out duration-300 delay-150 transform-gpu">
                <div
                  to="/ShowServices"
                  className="absolute w-full h-full flex justify-around items-center flex-col bottom-[-360px] transition-transform ease-in-out duration-300 transform-gpu group-hover:translate-y-[-370px]"
                  style={{
                    backgroundImage: `url(${whiteBg}) `,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <p className="text-[24px] font-[600] text-[#041461] p-[18px]">
                    استمتع بليالٍ مميزة مليئة بالإثارة والمرح مع حفلات الغناء
                    على موقعنا. انضم إلينا للاستماع إلى أجمل الأصوات والموسيقى
                    الرائعة، واستمتع بأجواء مليئة بالحماس والمرح
                  </p>
                  <div className="w-full flex justify-center items-end cursor-pointer">
                    <Link
                      to="/ShowServices"
                      className="text-white bg-[#041461] w-[70%] text-center md:text-[32px] text-[18px] font-[500] rounded-[24px] py-[10px]"
                      onClick={() => handleShowClick("بازار")}
                    >
                      عرض
                    </Link>
                  </div>
                </div>
                <div
                  className="w-full h-full flex justify-center items-end cursor-pointer ease-in-out duration-300 group-hover:translate-y-[370px]"
                  style={{
                    backgroundImage: `url(${party55}) `,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <h2 className="text-[#041461] bg-white w-[70%] text-center md:text-[32px] text-[18px]  font-[600] rounded-[24px] py-[10px] my-[20px]">
                    بازار
                  </h2>
                </div>
              </div>
            </div>
            <div className="h-[350px] overflow-hidden flex justify-center">
              <div className="group relative h-[350px] rounded-[24px] w-[90%] overflow-hidden transition-transform ease-in-out duration-300 delay-150 transform-gpu">
                <div
                  to="/ShowServices"
                  className="absolute w-full h-full flex justify-around  items-center flex-col rounded-[24px] bottom-[-360px] transition-transform ease-in-out duration-300 transform-gpu group-hover:translate-y-[-370px]"
                  style={{
                    backgroundImage: `url(${whiteBg}) `,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <p className="text-[24px]   font-[600] text-[#041461] p-[18px]">
                    استمتع بليالٍ مميزة مليئة بالإثارة والمرح مع حفلات الغناء
                    على موقعنا. انضم إلينا للاستماع إلى أجمل الأصوات والموسيقى
                    الرائعة، واستمتع بأجواء مليئة بالحماس والمرح
                  </p>
                  <div className="w-full flex justify-center items-end cursor-pointer">
                    <Link
                      to="/ShowServices"
                      className="text-white bg-[#041461] w-[70%] text-center md:text-[32px] text-[18px] font-[500] rounded-[24px] py-[10px]"
                      onClick={() => handleShowClick("ستاند اب")}
                    >
                      عرض
                    </Link>
                  </div>
                </div>
                <div
                  className="w-full h-full flex justify-center items-end cursor-pointer ease-in-out duration-300 group-hover:translate-y-[370px]"
                  style={{
                    backgroundImage: `url(${party66}) `,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <h2 className="text-[#041461] bg-white w-[70%] text-center md:text-[32px] text-[18px]  font-[600] rounded-[24px] py-[10px] my-[20px]">
                    ستاند اب
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default Services;
