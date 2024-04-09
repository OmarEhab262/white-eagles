import React, { useState } from "react";
import contactUs from "../assists/imgs/ContactUs.jpeg";
import mass from "../assists/icon/mass.png";
import phone from "../assists/icon/phone.png";
import loc from "../assists/icon/loc.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import whiteBg from "../assists/imgs/whiteBg.png";
import ggggg from "../assists/imgs/ggggg.png";
import axios from "axios";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const fetchData = async () => {
    if (!validateEmail(email)) {
      setEmailError("Invalid email address");
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("name", name);
      formData.append("description", description);
      const response = await axios.post(
        "https://sterling-owl-profound.ngrok-free.app/api/contacts",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      //   console.log("Data sent successfully:", response.data);
      toast.success("Message sent successfully");
      setEmail("");
      setName("");
      setDescription("");
    } catch (error) {
      console.error("Error creating event:", error.response.data);
      toast.error("Error sending message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && (
        <div className="flex justify-center items-center w-full h-[100vh] fixed bg-[#4b494974] z-[200]">
          <div className="spinner flex justify-center items-center h-full">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className="w-4 h-4 bg-black rounded-full mx-1 animate-bounce"
              ></div>
            ))}
          </div>
        </div>
      )}
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
          <div
            className="ContactUs  w-full m-4 mx-auto  flex flex-col items-center relative  overflow-hidden  rounded-[24px] h-[90vh] "
            style={{
              backgroundImage: `url(${contactUs})`,
              backgroundSize: "cover",
            }}
          >
            <div className="shade bg-black bg-opacity-50 absolute w-full h-full z-[1] rounded-[24px]"></div>
            <Navbar activeTab="contact" />
            <div className="info h-[90%] z-10 flex justify-center items-center flex-col gap-10">
              <h3 className="text-[54px] font-[700] text-white z-20  flex justify-center items-center">
                تواصل معنا
              </h3>
              <p className="text-center w-[90%] md:w-[700px] text-[16px] font-[500] text-[#E8E9F8]">
                نحن هنا للمساعدة! سواء كانت لديك أسئلة حول خدماتنا أو كنت بحاجة
                إلى مساعدة في التخطيط لحدثك، فإن فريقنا متاح لتقديم الدعم. تواصل
                معنا من خلال نموذج الاتصال الخاص بنا أو عبر البريد الإلكتروني
                على [عنوان بريدك الإلكتروني]، وسنقوم بالرد عليك في أقرب وقت
                ممكن. نحن ملتزمون بمساعدتك في التخطيط لحدث ناجح، ونتطلع إلى
                الاستماع إليك!
              </p>
            </div>
          </div>
          <div className="cont flex justify-around mx-auto items-center w-[90%] gap-20 text-white my-[50px] flex-wrap text-[20px]">
            <div className="gap-7 flex flex-col justify-center items-center">
              <div className="img bg-[#3e4774] rounded-full w-[100px] h-[100px]  flex justify-center items-center">
                <img src={mass} alt="" />
              </div>
              <a href="mailto:Info@whiteeagles.net">
                mailto:Info@whiteeagles.net
              </a>
            </div>
            <div className="gap-7 flex flex-col justify-center items-center">
              <div className="img bg-[#3e4774] rounded-full w-[100px] h-[100px] flex justify-center items-center">
                <img src={phone} alt="" />
              </div>
              <a href="https://wa.me/201022550799" target="_blank">
                01022550799
              </a>
            </div>
            <div className="gap-7 flex flex-col justify-center items-center">
              <div className="img bg-[#3e4774] rounded-full w-[100px] h-[100px]  flex justify-center items-center">
                <img src={loc} alt="" />
              </div>
              <a
                href="https://maps.app.goo.gl/X9uJ3nyoy6SMWTbV8?g_st=ic"
                target="_blank"
              >
                Mansouraa Elgalaaaa
              </a>
            </div>
          </div>
          <div className="text-white flex flex-col  justify-center p-[40px]">
            <h2 className="md:text-[46px] text-[28px] font-bold">
              تواصل معنا الآن !
            </h2>
            <h3 className="md:text-[24px] text-[19px] font-medium my-[15px]">
              نحن هنا لنساعدك في أي استفسار أو استشارة، لذا لا تتردد في الاتصال
              بنا الآن وسنكون سعداء بخدمتك...
            </h3>
          </div>
          <div className="form p-[40px] border border-white border-[3px] rounded-[40px] text-white mb-[50px]">
            <input
              type="text"
              placeholder="الإسم"
              className="bg-[#e8e9f84d] border border-white outline-none rounded-[50px] w-full md:text-[24px] text-[19px] font-medium md:p-[20px] p-[5px] px-[15px] placeholder:text-white my-[15px]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="البريد الإالكتروني"
              className={`bg-[#e8e9f84d] border border-white outline-none rounded-[50px] w-full md:text-[24px] text-[19px] font-medium md:p-[20px] p-[5px] px-[15px] placeholder:text-white my-[15px] ${
                emailError ? "border-red-500" : ""
              }`}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
            />
            {emailError && <p className="text-red-500">{emailError}</p>}
            <textarea
              style={{ resize: "none" }}
              placeholder="الرسالة ..."
              className="bg-[#e8e9f84d] border border-white outline-none md:rounded-[50px] rounded-[24px] w-full md:text-[24px] text-[19px] font-medium p-[20px] placeholder:text-white my-[15px] md:h-[400px] h-[300px]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div
              className="btn rounded-full mx-auto flex justify-center items-center md:p-[20px] p-[10px] w-[60%] md:w-[400px] cursor-pointer"
              style={{
                backgroundImage: `url(${whiteBg}) `,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              onClick={fetchData}
            >
              <h3 className="md:text-[30px] text-[24px] font-bold text-[#041461]">
                إرسال
              </h3>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
