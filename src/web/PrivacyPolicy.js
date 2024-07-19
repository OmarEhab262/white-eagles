import React, { useEffect } from "react";
import Footer from "../components/Footer";
import services from "../assists/imgs/Services.jpeg";
import ggggg from "../assists/imgs/ggggg.png";
import Navbar from "../components/Navbar";
import AOS from "aos";
const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
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
            <Navbar />
            <div className="info h-[90%] z-10 flex justify-center items-center flex-col gap-10 mt-[40px]">
              <h3 className="text-[40px] font-[700] text-white z-20  flex justify-center items-center text-center">
                سياسة الخصوصية
              </h3>
              <p className="text-center w-[90%] md:w-[700px] text-[16px] font-[500] text-[#E8E9F8]">
                شكرًا لاهتمامك بسياسة الخصوصية لشركة وايت إيجل. تعتبر الخصوصية
                مهمة بالنسبة لنا، ونحن نلتزم بحماية معلوماتك الشخصية بأقصى درجات
                الجدية. يرجى قراءة سياسة الخصوصية هذه بعناية لفهم كيفية جمع
                واستخدام وحماية معلوماتك عند استخدام موقعنا وخدماتنا.
              </p>
            </div>
          </div>
          <div className="content flex justify-center  flex-col my-[50px]">
            <div className=" text-white p-[20px] w-[90%] md:w-[70%]">
              <h1 className="text-[28px]">1. جمع المعلومات :</h1>
              <p>
                عندما تقوم بالتسجيل في خدماتنا أو تقديم طلب للانضمام إلى فعالية
                معينة، قد نقوم بجمع معلومات شخصية منك، مثل الاسم وعنوان البريد
                الإلكتروني ورقم الهاتف والعنوان.
              </p>
            </div>
            <div className=" text-white p-[20px] w-[90%] md:w-[70%]">
              <h1 className="text-[28px]">2. استخدام المعلومات :</h1>
              <p>
                نستخدم المعلومات التي نجمعها لتقديم خدماتنا وتحسينها، وتخصيص
                تجربة المستخدم، والتواصل معك بشأن الفعاليات والعروض المستقبلية،
                والرد على استفساراتك.
              </p>
            </div>
            <div className=" text-white p-[20px] w-[90%] md:w-[70%]">
              <h1 className="text-[28px]">3. حماية المعلومات :</h1>
              <p>
                نحن نحمي معلوماتك الشخصية باستخدام إجراءات أمنية تقنية وإدارية.
                ونحن نقوم بتقديم الوصول إلى هذه المعلومات فقط للموظفين الذين
                يحتاجون إلى الوصول إليها لأداء مهامهم.
              </p>
            </div>
            <div className=" text-white p-[20px] w-[90%] md:w-[70%]">
              <h1 className="text-[28px]">4. مشاركة المعلومات :</h1>
              <p>
                لا نشارك معلوماتك الشخصية مع أطراف ثالثة دون موافقتك الصريحة،
                باستثناء الحالات التي يكون فيها ذلك ضروريًا لتقديم الخدمة
                المطلوبة.
              </p>
            </div>
            <div className=" text-white p-[20px] w-[90%] md:w-[70%]">
              <h1 className="text-[28px]">5. حق الوصول والتصحيح :</h1>
              <p>
                يحق لك الوصول إلى معلوماتك الشخصية وتصحيحها إذا كانت غير دقيقة
                أو غير محدثة.
              </p>
            </div>

            <div className=" text-white p-[20px] w-[90%] md:w-[70%]">
              <h1 className="text-[28px]">6. التعديلات على السياسة :</h1>
              <p>
                نحتفظ بالحق في تحديث أو تعديل سياسة الخصوصية هذه في أي وقت،
                وسيتم نشر التغييرات على موقعنا.
              </p>
            </div>
            <div className=" text-white p-[20px] w-[90%] md:w-[70%]">
              <h1 className="text-[28px]">7. الامتثال للتشريعات :</h1>
              <p>
                نلتزم بالامتثال لجميع التشريعات واللوائح المتعلقة بحماية
                البيانات الشخصية والخصوصية. نرجو منكم الاتصال بنا إذا كان لديكم
                أي أسئلة حول سياسة الخصوصية الخاصة بنا.
              </p>
            </div>
            <div className=" text-white p-[20px] w-[90%] md:w-[70%]">
              <h1 className="text-[28px]">8. تحديثات على السياسة :</h1>
              <p>
                نحتفظ بالحق في تحديث هذه السياسة من حين لآخر، وسنقوم بإشعارك بأي
                تغييرات كبيرة.
              </p>
            </div>
            <div className=" text-white p-[20px] w-[90%] md:w-[70%]">
              <p>
                للاتصال بنا أو طرح أي استفسارات حول سياسة الخصوصية، يرجى الاتصال
                بفريق الدعم الخاص بنا عبر <span></span>
                <a href="mailto:info@whiteeagls.net" className="text-gray-400">
                  info@whiteeagls.net
                </a>
                <br />
                تاريخ النشر: 1 مارس 2024
              </p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
