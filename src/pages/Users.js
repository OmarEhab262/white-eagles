import React, { useState, useEffect } from "react";
import search from "../assists/icon/search.png";
import SideBar from "../components/SideBar";
import axios from "axios";

const Users = () => {
  const [searchInput, setSearchInput] = useState("");
  const [users, setUsers] = useState([]);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [loading, setLoading] = useState(false); // Track loading state
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      try {
        const response = await axios.get(
          "https://api.whiteeagles.net/public/api/users",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        let filteredUsers = response.data.data;
        if (searchInput) {
          filteredUsers = response.data.data.filter(
            (user) =>
              user.nameAR.startsWith(searchInput) ||
              user.nameEN.startsWith(searchInput) ||
              user.email.startsWith(searchInput) ||
              user.phone.startsWith(searchInput)
          );
        }
        setUsers(filteredUsers);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData();
  }, [searchInput, token]);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const deleteUser = async () => {
    try {
      await axios.delete(
        `https://api.whiteeagles.net/public/api/users/${userToDelete.id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      // Refresh the user list after deletion
      setShowDeleteConfirmation(false);
      setUserToDelete(null);
      setSearchInput(""); // Refresh the search input to show updated list
      window.location.reload();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="grid grid-cols-5 h-screen">
      <SideBar />
      <div className="col-span-4 bg-[#f9f9ff] rounded-[20px] flex mb-[20px] mt-[30px] ml-[40px] p-[25px] flex-col items-start h-[92vh] overflow-hidden">
        <div className="header flex justify-between w-[100%] h-[35px] mt-[5px] mb-[5px]">
          <h3 className="text-[24px] font-bold text-[#041461]">
            لوحة المعلومات/ <span className="text-[20px]">المستخدمين</span>{" "}
          </h3>
          <form className="flex bg-[#041461] items-center w-[40%] p-[20px] rounded-[16px] h-[50px]">
            <img
              src={search}
              alt="searchicon"
              className="w-[23px] h-[23px] ml-[20px] mb-[-5px] mr-[20px]"
            />
            <input
              type="text"
              value={searchInput}
              onChange={handleInputChange}
              className="text-[16px] font-bold text-white w-[80%] ml-[20px] bg-[#041461] outline-none placeholder-white"
              placeholder="ابحث عن المستخدمين"
            />
          </form>
        </div>
        <div
          className="countUsers w-[225px] h-[70px] rounded-[16px]  flex justify-center items-center my-[20px] py-[15px] border border-[#0413616b]"
          style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
        >
          <h3 className="font-bold text-[16px] text-[#041461]">
            عدد المستخدمين : <span>{users.length}</span>
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
          <div className="w-full h-[80vh] overflow-auto  ssc">
            <div className="headerInfo text-[18px] text-[#041461] font-bold flex justify-around items-center w-[90%] my-[10px] ">
              <h3 className="w-[50px] ">الصورة</h3>
              <h3 className="w-[170px]">الاسم باللغة العربية</h3>
              <h3 className="w-[190px]">الاسم باللغة بالإنجليزية</h3>
              <h3 className="w-[130px]">البريد الإلكتروني</h3>
              <h3 className="w-[150px]  text-center">رقم الموبايل</h3>
              <h3 className="w-[80px]  text-center">السن</h3>
            </div>
            <div className="">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="flex justify-between items-center w-full"
                >
                  <div className="info text-[15px] text-[#041461] font-bold flex items-center w-[90%] my-[10px]  bg-[#727db5ab] rounded-[24px]  justify-around py-[15px]">
                    <img
                      src={`https://api.whiteeagles.net/public/storage/${user.image}`}
                      alt="User"
                      className="w-[50px] h-[50px] rounded-full text-center"
                    />
                    <h3 className="w-[170px]  text-center">{user.nameAR}</h3>
                    <h3 className="w-[190px]  text-center">{user.nameEN}</h3>
                    <h3
                      className="w-[200px]  text-center overflow-x-auto  overflow-hidden userssss "
                      title={user.email}
                    >
                      {user.email}
                    </h3>
                    <h3 className="w-[150px]  text-start">{user.phone}</h3>
                    <h3
                      className="w-[80px]
  text-center"
                    >
                      {user.age}
                    </h3>
                  </div>
                  <div
                    className="w-[70px] h-[50px] flex justify-center items-center bg-[#041461] rounded-[10px] text-white mx-[10px] cursor-pointer"
                    onClick={() => {
                      setUserToDelete(user);
                      setShowDeleteConfirmation(true);
                    }}
                  >
                    حذف
                  </div>
                </div>
              ))}
            </div>

            {showDeleteConfirmation && (
              <div
                className="fixed h-screen w-full top-0 left-0 flex justify-center items-center text-[#041461]"
                style={{ background: "#66666657" }}
              >
                <div className="w-[393px] h-[194px] bg-white rounded-[24px] flex justify-center items-center  flex-col">
                  <h3 className="text-[24px] font-[700]">
                    هل تريد حذف المستخدم؟
                  </h3>
                  <div className="flex gap-5">
                    <div
                      className="cursor-pointer w-[68px] h-[52px] rounded-[10px] bg-[#041461] text-white flex justify-center items-center border border-[#041461] mt-[20px]"
                      onClick={deleteUser}
                    >
                      نعم
                    </div>
                    <div
                      className="cursor-pointer w-[68px] h-[52px] rounded-[10px] bg-white text-[#041461] flex justify-center items-center border border-[#041461] mt-[20px]"
                      onClick={() => setShowDeleteConfirmation(false)}
                    >
                      لا
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
