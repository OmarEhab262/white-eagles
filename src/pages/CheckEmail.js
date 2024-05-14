import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoSide from "../components/LogoSide";
import leftarrow from "../assists/icon/leftarrow.png";
import axios from "axios";

const CheckEmail = () => {
  const [enteredCode, setEnteredCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [incorrectNum, setIncorrectNum] = useState(false);
  const [incorrectNewPassword, setIncorrectNewPassword] = useState(false);
  const [incorrectConfirmPassword, setIncorrectConfirmPassword] =
    useState(false);

  const handleNumChange = (e) => {
    const enteredNum = e.target.value;
    setEnteredCode(enteredNum);
    setIncorrectNum(false);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
    setIncorrectNewPassword(false); // Reset incorrect state when typing
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setIncorrectConfirmPassword(false); // Reset incorrect state when typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if num is a 6-digit number
    if (!/^\d{6}$/.test(enteredCode)) {
      setIncorrectNum(true);
      return;
    }

    // Check if newPassword is at least 6 characters long
    if (newPassword.length < 6) {
      setIncorrectNewPassword(true);
      return;
    }

    // Check if confirmPassword matches newPassword
    if (confirmPassword !== newPassword || confirmPassword === "") {
      setIncorrectConfirmPassword(true);
      return;
    }

    try {
      // Retrieve the email from localStorage
      const email = localStorage.getItem("email");
      if (!email) {
        console.error("Email not found in localStorage");
        return;
      }

      //   console.log("Data to be sent:", { email, code: enteredCode });
      const token = localStorage.getItem("token");
      //   console.log(token);

      // Send a POST request to verify PIN API
      await axios.post(
        "https://api.whiteeagles.net/public/api/verify/pin",
        { email, token: enteredCode },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      //   console.log("Response from verify PIN API:", pinResponse.data);

      // Check if PIN verification was successful

      // Send a POST request to reset password API
      await axios.post(
        "https://api.whiteeagles.net/public/api/reset-password",
        {
          email,
          password: newPassword,
          password_confirmation: confirmPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      //   console.log("Response from reset password API:", resetResponse.data);

      // Placeholder functionality to demonstrate submission
      //   console.log("Form submitted:", { email, num: enteredCode });
      window.location.href = "/white-eagles/SuccessfulPassword";
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  const handleResendPIN = async () => {
    try {
      // Retrieve the email and token from localStorage
      const email = localStorage.getItem("email");
      const token = localStorage.getItem("token");

      if (!email) {
        console.error("Email not found in localStorage");
        return;
      }

      await axios.post(
        "https://api.whiteeagles.net/public/api/password/resend-pin",
        { email },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      //   console.log("Response from resend PIN code:", resetCode.data);

      // Placeholder functionality to demonstrate successful resend
      //   console.log("PIN code resent successfully");
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  return (
    <div className="grid grid-cols-3  h-screen">
      <LogoSide />
      <div className="col-span-2 bg-gray-200 rounded-br-[20px] rounded-tr-[20px] flex justify-center items-center">
        <div className="form w-[570px]">
          <div className="title">
            <p className="text-[32px] font-[700] text-[#041461] my-7">
              تفقد اﻹيميل الخاص بك
            </p>
            <span className="my-7 text-[17px]">
              برجاء إدخال الرمز المكون من 6 ارقام. ثم قم بإنشاء و تأكيد كلمة
              المرور الجديدة الخاصة بك.
            </span>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <div className="flex justify-between items-center ">
                  <label htmlFor="num " style={{ display: "none" }}></label>
                  <input
                    className={` w-[60%] p-[10px] rounded-[8px] border-solid border-[1px] ${
                      incorrectNum ? "border-red-500" : "border-gray-400"
                    } my-[13px] outline-none`}
                    placeholder="الرمز المكون من 6 ارقام"
                    type="text" // Change type to text
                    id="num"
                    name="num"
                    value={enteredCode}
                    onChange={handleNumChange}
                    onKeyPress={(e) => {
                      // Allow only numeric characters
                      const isValid = /^\d*$/.test(e.key);
                      if (!isValid) {
                        e.preventDefault();
                      }
                    }}
                  />
                  <div
                    onClick={handleResendPIN}
                    className="cursor-pointer text-[#041461] text-[14px] font-bold"
                  >
                    لم يصلك الرمز بعد؟!
                  </div>
                </div>
                <p
                  className={`text-red-600  ${
                    incorrectNum ? "block" : "hidden"
                  }`}
                >
                  {incorrectNum ? "الرمز الذى ادخلته غير صحيح" : ""}
                </p>
              </div>
              <div>
                <label htmlFor="newPassword"></label>
                <input
                  className={` w-[100%] p-[10px] rounded-[8px] border-solid border-[1px] ${
                    incorrectNewPassword ? "border-red-500" : "border-gray-400"
                  } my-[13px] outline-none`}
                  placeholder="كلمة المرور الجديدة"
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                />
                <p
                  className={`text-red-600  ${
                    incorrectNewPassword ? "block" : "hidden"
                  }`}
                >
                  برجاء ادخال كلمة مرور صالحة
                </p>
              </div>
              <div>
                <label htmlFor="confirmPassword"></label>
                <input
                  className={` w-[100%] p-[10px] rounded-[8px] border-solid border-[1px] ${
                    incorrectConfirmPassword
                      ? "border-red-500"
                      : "border-gray-400"
                  } my-[13px] outline-none`}
                  placeholder="تأكيد كلمة المرور"
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
                <p
                  className={`text-red-600 mb-[20px] ${
                    incorrectConfirmPassword ? "block" : "hidden"
                  }`}
                >
                  برجاء ادخال كلمة مرور متطابقه
                </p>
              </div>
              <div className="flex justify-between items-center font-[700] ">
                <button
                  className="w-[220px] bg-[#041461] hover:bg-[#041361db] py-[10px]  text-gray-50 rounded-[40px] ease-in duration-300 mt-[13px]"
                  type="submit"
                >
                  إعادة تعيين كلمة المرور
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
};

export default CheckEmail;
