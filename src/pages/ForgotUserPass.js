import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoSide from "../components/LogoSide";
import leftarrow from "../assists/icon/leftarrow.png";
import axios from "axios";

function ForgotUserPass() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailExists, setEmailExists] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Reset emailExists state when the user starts typing a new email
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Retrieve token from localStorage
      //   const token = localStorage.getItem("token");
      //   //   console.log(token);
      //   if (!token) {
      //     console.error("Token not found in localStorage");
      //     // Handle case where token is not available
      //     return;
      //   }

      const response = await axios.post(
        "https://api.whiteeagles.net/public/api/forgot-password",
        { email },
        {
          headers: {
            "Content-Type": "application/json",
            // Authorization: "Bearer " + token,
          },
        }
      );
      localStorage.setItem("email", email);
      //   console.log("Response from server:", response.data);

      // Placeholder functionality to demonstrate submission
      //   console.log("Email submitted:", email);
      // Redirect to CheckEmail page
      window.location.href = "/white-eagles/#/CheckEmail";
    } catch (error) {
      console.error("Error:", error);
      if (error.response && error.response.status === 404) {
        // If email does not exist, set the emailExists state to false
        setEmailExists(false);
      } else {
        // For other errors, set a generic error message
        setErrorMessage(
          "Failed to send forgot password email. Please try again."
        );
        setEmailExists(false);
      }
    }
  };

  return (
    <div className="grid grid-cols-3  h-screen">
      <LogoSide />
      <div className="col-span-2 bg-gray-200 rounded-br-[20px] rounded-tr-[20px] flex justify-center items-center">
        <div className="form w-[570px]">
          <div className="title">
            <p className="text-[32px] font-[700] text-[#041461] my-7">
              نسيت اسم المستخدم او الباسورد؟!
            </p>
            <span className="my-7">
              برجاء إدخال البريد الإلكتروني لإعادة تعيين كلمة المرور الخاصة بك
            </span>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email"></label>
                <input
                  className={`my-7 w-[100%] p-[10px] rounded-[8px] border-solid mb-[20px] outline-none  ${
                    !emailExists
                      ? "border-[1px] border-red-600"
                      : "border-[1px] border-gray-400"
                  }`}
                  placeholder="البريد الإلكتروني"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <p
                  className={`text-red-600 mb-[20px] ${
                    !emailExists ? "block" : "hidden"
                  }`}
                >
                  برجاء إدخال بريد إلكتروني صحيح
                </p>
              </div>
              <div className="flex justify-between items-center font-[700]">
                <button
                  className="w-[220px] bg-[#041461] hover:bg-[#041361db] py-[10px] text-gray-50 rounded-[40px] ease-in duration-300"
                  type="submit"
                >
                  ارسال
                </button>
                <Link to="/" className="text-[#041461] text-[14px] ">
                  العودة لتسجيل الدخول
                  <img
                    src={leftarrow}
                    alt="leftarrow"
                    className="inline-block mr-3"
                  />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotUserPass;
