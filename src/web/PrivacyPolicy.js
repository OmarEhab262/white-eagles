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
                سياسة الخصوصية لتطبيق وايت إيجل ايفنت
              </h3>
              <p className="text-center w-[90%] md:w-[700px] text-[16px] font-[500] text-[#E8E9F8]">
                نحن في شركة وايت إيجل إفنت ملتزمون بحماية خصوصية مستخدمي
                تطبيقنا. يهدف هذا المستند إلى توضيح كيفية جمع واستخدام ومشاركة
                البيانات الشخصية التي نتلقاها. يرجى قراءة هذه السياسة بعناية
                لفهم كيفية معاملة معلوماتك الشخصية.
              </p>
            </div>
          </div>
          <div className="content flex justify-center  flex-col my-[50px]">
            <div className=" text-white p-[20px] w-[90%] md:w-[70%]">
              <h1 className="text-[28px]">1. البيانات التي نجمعها:</h1>
              <p>
                نقوم بجمع بيانات شخصية محددة عند استخدامك لتطبيق وايت إيجل إفنت،
                وتشمل ذلك على سبيل المثال لا الحصر: - معلومات الحساب: يمكن أن
                تتضمن اسم المستخدم، البريد الإلكتروني، كلمة المرور، ومعلومات
                الدفع. - معلومات الحدث: تشمل معلومات عن الفعاليات التي تقوم
                بالتسجيل فيها أو تنظمها، مثل اسم الفعالية والتاريخ والموقع.
              </p>
            </div>
            <div className=" text-white p-[20px] w-[90%] md:w-[70%]">
              <h1 className="text-[28px]">2. كيف نستخدم البيانات:</h1>
              <p>
                نستخدم البيانات الشخصية التي نجمعها لأغراض محددة، بما في ذلك: -
                تقديم الخدمات التي تطلبها. - إدارة حسابك ومعالجة المعاملات
                الخاصة بك. - تحسين تجربتك في استخدام التطبيق. - إرسال إشعارات
                وتحديثات حول الفعاليات التي قد تهمك.
              </p>
            </div>
            <div className=" text-white p-[20px] w-[90%] md:w-[70%]">
              <h1 className="text-[28px]">3. مشاركة البيانات:</h1>
              <p>
                نحن لا نبيع أو نشارك بياناتك الشخصية مع أطراف خارجية دون
                موافقتك، باستثناء الحالات التي يكون فيها ذلك ضروريًا لتقديم
                الخدمات التي طلبتها.
              </p>
            </div>
            <div className=" text-white p-[20px] w-[90%] md:w-[70%]">
              <h1 className="text-[28px]">4. حقوق المستخدم:</h1>
              <p>
                لديك الحق في الوصول إلى بياناتك الشخصية وتصحيحها أو حذفها إذا
                كانت غير دقيقة أو غير مطلوبة بعد الآن.
              </p>
            </div>
            <div className=" text-white p-[20px] w-[90%] md:w-[70%]">
              <h1 className="text-[28px]">5. تحديثات على السياسة:</h1>
              <p>
                نحتفظ بالحق في تحديث هذه السياسة من حين لآخر، وسنقوم بإشعارك بأي
                تغييرات كبيرة.
              </p>
            </div>
            <div className=" text-white p-[20px] w-[90%] md:w-[70%]">
              <p>
                للاتصال بنا أو طرح أي استفسارات حول سياسة الخصوصية، يرجى الاتصال
                بفريق الدعم الخاص بنا عبر{" "}
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
