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
import Marketing from "../assists/imgs/Marketing.jpg";
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
                تقدم الشركة مجموعة شاملة من الخدمات التى تساعدكم فى تنظيم
                الفعاليات الخاصة بكم والترويج لها وإدارة الفعاليات بمهنية عالية،
                وتوفير حلول لوجستية متكاملةونقدم خدمات تسويقية مبتكرة ومخصصة
                للفعاليات، بالإضافة إلى تقديم حلول تقنية وصوتية متطورة. باختصار،
                نحن نقدم كل ما تحتاجه لجعل فعاليتك لا تُنسى وناجحة.
              </p>
            </div>
          </div>
          <div className="parties my-[80px] grid grid-cols-1 lg:grid-cols-2   gap-10 ">
            <div className="head flex  justify-center col-span-1 lg:col-span-2 my-[50px] w-[270px] mx-auto ">
              <h2 className="md:text-[34px] text-[25px] font-[600] text-white relative  ">
                الخدمات الخاصة بنا
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
                  <p className="md:text-[24px] text-[18px] font-[600] text-[#041461] p-[18px]">
                    نقدم لك الخدمات التنظيمية التي تساهم في تبادل المعرفة وتعزيز
                    التعاون بين الأفراد والشركات من مختلف القطاعات وتلعب هذه
                    الفعاليات دوراً رئيسياً يتطلب تخطيطاً دقيقاً وتنسيقاً عالياً
                    لضمان تحقيق الأهداف المرجوة وتوفير تجربة مميزة للمشاركين
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
                    المؤتمرات والمعارض
                  </h2>
                </div>
              </div>
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
                  <p className="md:text-[24px] text-[18px] font-[600] text-[#041461] p-[18px]">
                    تقدم الشركة خدمات ورش العمل التي تتضمن التخطيط والتنظيم
                    والتنفيذ لأنشطة تعليمية أو تدريبية موجهة نحو تطوير مهارات
                    محددة للمشاركين في بيئة تفاعلية وعملية سواء داخل القطاع
                    الخاص او القطاع الحكومي 
                  </p>
                  <div className="w-full flex justify-center items-end cursor-pointer">
                    <Link
                      to="/ContactUs"
                      className="text-white bg-[#041461] w-[70%] text-center md:text-[32px] text-[18px] font-[500] rounded-[24px] py-[10px]"
                    >
                      عرض
                    </Link>
                  </div>
                </div>
                <div
                  className="w-full h-full flex justify-center items-end cursor-pointer ease-in-out duration-300 group-hover:translate-y-[370px]"
                  style={{
                    backgroundImage: `url(${services}) `,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <h2 className="text-[#041461] bg-white w-[70%] text-center md:text-[32px] text-[18px]  font-[600] rounded-[24px] py-[10px] my-[20px]">
                    تنظيم وادارة ورش العمل المتخصصة
                  </h2>
                </div>
              </div>
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
                  <p className="md:text-[24px] text-[18px] font-[600] text-[#041461] p-[18px]">
                    تركز على تطوير وتنفيذ استراتيجيات التسويق لتحقيق أهداف
                    الشركة داخل الفعاليات، بما في ذلك دراسة السوق، وتحليل
                    الجمهور المستهدف، وتطوير المنتجات، وترويجها، وتحليل الأداء
                    وتحسين العمليات التسويقية وتنفيذ استراتيجيات
                    التسويق للمشاركين 
                  </p>
                  <div className="w-full flex justify-center items-end cursor-pointer">
                    <Link
                      to="/ContactUs"
                      className="text-white bg-[#041461] w-[70%] text-center md:text-[32px] text-[18px] font-[500] rounded-[24px] py-[10px]"
                    >
                      عرض
                    </Link>
                  </div>
                </div>
                <div
                  className="w-full h-full flex justify-center items-end cursor-pointer ease-in-out duration-300 group-hover:translate-y-[370px]"
                  style={{
                    backgroundImage: `url(${Marketing}) `,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <h2 className="text-[#041461] bg-white w-[70%] text-center md:text-[32px] text-[18px]  font-[600] rounded-[24px] py-[10px] my-[20px]">
                    اﻹدارة التسويقية
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
                  <p className="md:text-[24px] text-[18px]  font-[600] text-[#041461] p-[18px]">
                    تقدم الشركة خدمات تنظيم حفلات التخرج والتي تشمل التخطيط
                    الكامل للاحتفال، بما في ذلك اختيار المكان، الديكورات،
                    الترفيه، والتصوير وتكريم الطلاب. تهدف هذه الخدمات إلى توفير
                    تجربة مميزة وممتعة للخريجين وأسرهم، مع ضمان التنظيم المميز
                    لي ذكريات لا تُنسى
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
                  <p className="md:text-[24px] text-[18px]  font-[600] text-[#041461] p-[18px]">
                    الحفلات الغنائية تجمع عشاق الموسيقى للاستمتاع بالأداء
                    المباشر للفنانين. تشمل خدمات تنظيمها اختيار المكان، توفير
                    الصوت والإضاءة، الأمن، والترويج لها وتهدف هذه الحفلات إلى
                    خلق تجربة ترفيهية فريدة للمشاركين وتعزيز
                    التواصل الثقافي والفني
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
                  <p className="md:text-[24px] text-[18px] font-[600] text-[#041461] p-[18px]">
                    هو يوم مخصص للافراد أوالشركات، يتضمن فعاليات ترفيهية، عروض
                    خاصة، ولقاءات والعاب مختلفة وفقرات غنائية. يهدف إلى تعزيز
                    الروابط بين الافراد أو الموظفين داخل الشركات لتقديم تجربة
                    تفاعلية وممتعة للجميع وتعزيز انتمائهم .
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
                  <p className="md:text-[24px] text-[18px] font-[600] text-[#041461] p-[18px]">
                    البازار هو حدث تجاري مفتوح يجمع بين مجموعة متنوعة من الباعة
                    والمنتجات، ويتميز بالأجواء الحيوية والتنوع الثقافي والتجربة
                    التسويقية الفريدة، حيث تقدم الشركة خدمات الادارة والتنظيم
                    والتسويق للمنتجات والبائعين المشاركين 
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
                  <p className="md:text-[24px] text-[18px]   font-[600] text-[#041461] p-[18px]">
                    تقوم الشركة بتقديم فعاليات Stand Up من ادارة وتنظيم وترويج
                    وهو نوع من العروض الفنية المسرحية التي يكون فيها الفنان
                    واقفاً أمام الجمهور ويقدم عروضاً كوميدية أو
                    ترفيهية بشكل فردي
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
                    Stand Up
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
