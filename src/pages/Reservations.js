import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reservations = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status
  const navigate = useNavigate(); // Using useNavigate hook
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.whiteeagles.net/public/api/categories",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        setData(response.data.data);
        setLoading(false); // Set loading to false after fetching data
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };
    fetchData();
  }, [token]); // Include 'token' in the dependency array

  const navigateToParty = (item) => {
    navigate("/ShowParties", {
      replace: true,
      state: { name: item.name, id: item.id },
    });
  };

  return (
    <div className="grid grid-cols-5 h-screen">
      <SideBar />
      <div className="col-span-4 bg-[#f9f9ff] rounded-[20px] flex mb-[20px] mt-[30px] ml-[40px] p-[25px] flex-col items-start h-[92vh]  ">
        <div className="header flex justify-between w-[100%] h-[35px] mt-[5px] mb-[15px]">
          <h3 className="text-[24px] font-bold text-[#041461]">
            لوحة المعلومات/ <span className="text-[20px]">الحجوزات</span>
          </h3>
        </div>
        {loading ? ( // Render spinner while loading is true
          <div className="flex justify-center items-center w-full h-full">
            <div className="spinner flex justify-center items-center h-full">
              {[...Array(10)].map((_, index) => (
                <div
                  key={index}
                  className="w-4 h-4 bg-black rounded-full mx-1 animate-bounce"
                ></div>
              ))}
            </div>
          </div>
        ) : (
          <div className="ssc w-full  grid justify-items-center my-auto overflow-auto">
            <div className="grid grid-cols-3 grid-rows-2  gap-[55px] mt-[20px]">
              {data &&
                data.map((item) => (
                  <div
                    key={item.id}
                    className="box h-[300px] w-[206px] flex flex-col justify-between items-center cursor-pointer mb-[10px]"
                    onClick={() => navigateToParty(item)}
                  >
                    <div
                      className="head h-[54px] rounded-[10px] flex justify-center items-center w-full my-[10px] border border-[#0413616b]"
                      style={{
                        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.26)",
                      }}
                    >
                      <h3 className="text-[#041461] text-[18px] font-[500] ">
                        {item.name}
                      </h3>
                    </div>
                    <div className="mid w-[200px] h-[200px] border border-[#041461] rounded-[10px] flex justify-center items-center my-[10px]">
                      <img
                        src={`https://api.whiteeagles.net/public/storage/${item.image}`}
                        alt={item.name}
                        className="w-full h-[200px]"
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reservations;
