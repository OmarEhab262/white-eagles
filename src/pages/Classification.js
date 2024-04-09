import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../components/SideBar";
import "../../src/index.css";

const Classification = () => {
  const [data, setData] = useState([]);
  const [image, setImage] = useState(null); // New state for selected image
  const token = localStorage.getItem("token");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://sterling-owl-profound.ngrok-free.app/api/categories",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [token]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file); // Update the image state
  };

  const handleFileChange = async (event, id) => {
    const formData = new FormData();
    formData.append("image", image); // Append the image blob

    try {
      const response = await axios.patch(
        `https://sterling-owl-profound.ngrok-free.app/api/categories/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + token,
          },
        }
      );

      //   console.log("Updated category data:", response.data.data);

      // Refresh data after image upload
      fetchData();
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="grid grid-cols-5 h-screen">
      <SideBar />
      <div className="col-span-4 bg-[#f9f9ff] rounded-[20px] flex mb-[20px] mt-[30px] ml-[40px] p-[25px] flex-col items-start h-[92vh] ">
        <div className="header flex justify-between w-[100%] h-[35px] mt-[5px] mb-[15px]">
          <h3 className="text-[24px] font-bold text-[#041461]">
            لوحة المعلومات/ <span className="text-[20px]">التصنيفات</span>
          </h3>
        </div>
        <div className="overflow-auto ssc w-full ">
          <div className="container flex justify-center mt-[15px]">
            <div className="grid grid-cols-3 grid-rows-2 gap-[55px]">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="box h-[358px] w-[206px] flex flex-col justify-between items-center"
                >
                  <div
                    className="head h-[54px] rounded-[10px] flex justify-center items-center w-full my-[10px] border border-[#0413616b]"
                    style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.26)" }}
                  >
                    <h3 className="text-[#041461] text-[18px] font-[500]">
                      {item.name}
                    </h3>
                  </div>
                  <div className="mid w-[200px] h-[200px] border border-[#041461] rounded-[10px] flex justify-center items-center my-[10px]">
                    {item.image ? (
                      <img
                        src={`https://sterling-owl-profound.ngrok-free.app/storage/${item.image}`}
                        alt={item.name}
                        className="w-full h-[200px]"
                      />
                    ) : (
                      <div className="w-full h-full flex justify-center items-center text-[#041461]">
                        Image Not Available
                      </div>
                    )}
                  </div>
                  <input
                    id={`fileInput-${item.id}`}
                    type="file"
                    style={{ display: "none" }}
                    onChange={(event) => handleFileChange(event, item.id)}
                  />
                  <label
                    htmlFor={`fileInput-${item.id}`}
                    className="edit w-[132px] h-[63px] bg-[#041461D9] rounded-[10px] flex justify-center items-center cursor-pointer my-[10px]"
                  >
                    <h3 className="text-[16px] font-[700] text-white">
                      تعديل الصورة
                    </h3>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classification;
