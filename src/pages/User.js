import React, { useEffect, useState } from "react";
import cam from "../assists/icon/cam.png";
import SideBar from "../components/SideBar";
import axios from "axios";

const User = () => {
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleRoleChange = (e) => setRole(e.target.value);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleCameraClick = () => {
    const imageInput = document.getElementById("imageInput");
    if (imageInput) {
      imageInput.click();
    }
  };

  const handleChange = () => {
    setChange(!change);
  };

  const [change, setChange] = useState("disabled");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("الادمن");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sterling-owl-profound.ngrok-free.app/api/profile",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        setUsername(response.data.nameEN);
        setFullName(response.data.nameAR);
        setEmail(response.data.email);
        setImage(response.data.image);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    fetchData();
  }, [token]);
  const handleSaveData = async () => {
    try {
      const formData = new FormData();
      formData.append("nameEN", username);
      formData.append("nameAR", fullName);
      formData.append("image", image);

      const response = await axios.post(
        "https://sterling-owl-profound.ngrok-free.app/api/profile/update",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + token,
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );
      //   console.log("User data updated:", response.data);
      window.location.reload();
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <div className="grid grid-cols-5  h-screen ">
      <SideBar />
      <div className="col-span-4 bg-[#f9f9ff] rounded-[20px] flex mb-[20px] mt-[30px] ml-[40px] p-[25px] flex-col items-start h-[92vh]">
        <div
          className={`header flex items-center w-[100%] h-[35px] mt-[5px] mb-[5px] `}
        >
          <h3 className="text-[24px] font-bold text-[#041461]">
            لوحة المعلومات/ <span className="text-[20px]">الملف الشخصى</span>
          </h3>
        </div>
        <div className="w-full overflow-auto ssc pl-[15px]">
          <div className="content mt-[17px] flex justify-between items-center w-full ">
            <div className="head flex items-center ">
              <div className="relative">
                <div className="img w-[140px] h-[140px] overflow-hidden rounded-full flex justify-center items-center">
                  <img
                    src={`https://sterling-owl-profound.ngrok-free.app/storage/${image}`}
                    alt="user"
                    className="rounded-full w-full h-full object-cover  object-center"
                  />
                  <div
                    className="change absolute bottom-2 left-2 bg-[#041461] w-[32px] h-[32px] flex justify-center items-center rounded-full cursor-pointer"
                    onClick={handleCameraClick}
                  >
                    <img src={cam} alt="" />
                  </div>
                </div>
                <input
                  disabled={change}
                  type="file"
                  id="imageInput"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
              </div>
              <div className="info mr-[18px]">
                <div className="name text-[24px] font-bold text-[#041461]">
                  <h3>{}</h3>
                </div>
                <div className="type text-[#041461B2] text-[24px]">
                  <h3>{role}</h3>
                </div>
              </div>
            </div>
            <div
              onClick={handleChange}
              className="title w-[154px] h-[64px] bg-[#041461D9] flex justify-center items-center rounded-[8px] text-white text-[20px] cursor-pointer"
            >
              <h3>تعديل بيانات</h3>
            </div>
          </div>
          <div className="information w-[70%] ">
            <div className="name mt-[24px]">
              <div className="title text-[#04146194] text-[20px]">
                <h3>اسم المستخدم</h3>
              </div>
              <input
                disabled={change}
                type="text"
                value={username}
                onChange={handleUsernameChange}
                className="w-full bg-transparent outline-0 border-b-2 text-[#041461D9] text-[17px] mt-[15px] font-bold"
              />
            </div>
            <div className="fullName mt-[24px]">
              <div className="title text-[#04146194] text-[20px]">
                <h3>الاسم ثلاثي</h3>
              </div>
              <input
                disabled={change}
                type="text"
                value={fullName}
                onChange={handleFullNameChange}
                className="w-full bg-transparent outline-0 border-b-2 text-[#041461D9] text-[17px] mt-[15px] font-bold"
              />
            </div>
            <div className="email mt-[24px]">
              <div className="title text-[#04146194] text-[20px]">
                <h3>البريد الالكترونى</h3>
              </div>
              <input
                disabled
                type="text"
                value={email}
                className="w-full bg-transparent outline-0 border-b-2 text-[#041461D9] text-[17px] mt-[15px] font-bold"
              />
            </div>

            <div className="role mt-[24px]">
              <div className="title text-[#04146194] text-[20px]">
                <h3>الدور</h3>
              </div>
              <input
                disabled={change}
                type="text"
                value={role}
                onChange={handleRoleChange}
                className="w-full bg-transparent outline-0 border-b-2 text-[#041461D9] text-[17px] mt-[15px] font-bold"
              />
            </div>
          </div>
          <div
            onClick={handleSaveData}
            className="save w-[244px] mx-auto mb-[20px] mt-[40px] bg-[#041461D9] h-[60px] flex justify-center items-center rounded-[8px] cursor-pointer"
          >
            <h3 className="text-white text-[20px] font-[500]">حفظ البيانات</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
