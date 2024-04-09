import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import location2 from "../assists/icon/location2.png";
import arrow from "../assists/icon/arrow.png";
import axios from "axios";
import cam from "../assists/icon/cam.png";
const EditEventDetail = () => {
  const [nameParty, setNameParty] = useState("");
  const [locationParty, setLocationParty] = useState("");
  const [timeDate, setTimeDate] = useState("");
  const [descriptionParty, setDescriptionParty] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [deletImg, setDeletImg] = useState("");
  const [removeClicked, setRemoveClicked] = useState(false);
  const [images, setImages] = useState([]);
  const [imgs, setImgs] = useState(null);
  const [video, setVideo] = useState("");
  const [status, setStatus] = useState("");
  const [selectedOption, setSelectedOption] = useState("open");
  const handleOptionChange = (value) => {
    setSelectedOption(value);
    setStatus(value === "open" ? 1 : 0);
  };
  // Function to handle file change for main image
  const handleMainImageChange = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    setMainImage(file); // Set main image using data URL
  };

  // Function to trigger file input click when camera icon is clicked
  const handleCameraClick = () => {
    document.getElementById("mainImageInput").click();
  };

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    setVideo(file);
    // console.log(video);
  };
  const handleNamePartyChange = (event) => {
    setNameParty(event.target.value);
  };

  const handleLocationPartyChange = (event) => {
    setLocationParty(event.target.value);
  };

  const handleDatePartyChange = (event) => {
    setTimeDate(event.target.value);
  };

  const handleDescriptionPartyChange = (event) => {
    setDescriptionParty(event.target.value);
  };

  const goBack = () => {
    window.history.back();
  };

  const storedId = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://sterling-owl-profound.ngrok-free.app/api/event-show/${storedId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        setImgs(response.data.images);
        // console.log(storedId);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [token]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://sterling-owl-profound.ngrok-free.app/api/event-show/${storedId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        setNameParty(response.data.event.title);
        setLocationParty(response.data.event.location);
        setTimeDate(response.data.event.date_time);
        setDescriptionParty(response.data.event.description);
        setMainImage(response.data.event.banner);
        setVideo(response.data.event.video);
        setStatus(response.data.event.status);
        setSelectedOption(response.data.event.status === 1 ? "open" : "close");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [storedId, token]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleSaveData = async () => {
    try {
      const formData = new FormData();
      formData.append("title", nameParty);
      formData.append("location", locationParty);
      formData.append("description", descriptionParty);
      formData.append("date_time", timeDate);
      formData.append("video", video);
      formData.append("banner", mainImage);
      formData.append("status", status);

      // Append all images
      images.forEach((image, index) => {
        formData.append(`image[${index}]`, image);
      });

      const response = await axios.post(
        `https://sterling-owl-profound.ngrok-free.app/api/events/update/${storedId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + token,
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );
      window.location.reload();
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const handleDeleteImage = async (imageId) => {
    setDeletImg(imageId);
    await deleteimg();
  };

  const deleteimg = async () => {
    try {
      await axios.delete(
        `https://sterling-owl-profound.ngrok-free.app/api/images/${deletImg}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      window.location.reload();
    } catch (error) {
      console.error("Error deleting deleteimg:", error);
    }
  };
  const deletVideo = async () => {
    try {
      await axios.delete(
        `https://sterling-owl-profound.ngrok-free.app/api/events/delete_video/${storedId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      window.location.reload();
    } catch (error) {
      console.error("Error deleting deleteimg:", error);
    }
  };

  return (
    <div className="grid grid-cols-5  h-screen ">
      <SideBar />
      <div className="col-span-4 bg-[#f9f9ff] rounded-[20px] flex mb-[20px] mt-[30px] ml-[40px] p-[25px] flex-col items-start h-[92vh] ">
        <div className="header flex justify-between w-[100%] h-[35px] mt-[5px] mb-[5px]">
          <div className="flex items-center">
            <button onClick={goBack} className="ml-[10px]">
              <img src={arrow} alt="arrow" className="w-[23px] h-[23px]" />
            </button>
            <h3 className="text-[24px] font-bold text-[#041461]">
              لوحة المعلومات /
              <span className="text-[22px]"> فان داى كلية علوم</span>
            </h3>
          </div>
        </div>
        <div className=" overflow-auto ssc pl-[24px] mt-[20px] w-full">
          <div className="h-[250px] grid w-full grid-cols-3 gap-[30px]">
            <div className="img h-[231px] col-span-1 relative">
              <input
                type="file"
                id="mainImageInput"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleMainImageChange}
              />
              <div
                className="change absolute bottom-2 left-2 bg-[#041461] w-[32px] h-[32px] flex justify-center items-center rounded-full cursor-pointer"
                onClick={handleCameraClick} // Call handleCameraClick when camera icon is clicked
              >
                <img src={cam} alt="" />
              </div>
              <div className="img h-[231px]  overflow-hidden rounded-[16px]">
                <img
                  src={`https://sterling-owl-profound.ngrok-free.app/storage/${mainImage}`}
                  alt="party"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="content  col-span-2  ">
              <div className="one flex  pr-[15px] mb-[24px]">
                <div className="w-[261px] nameParty">
                  <h3 className="text-[#29346c] text-[16px]">اسم الحفلة</h3>
                  <input
                    className="text-[#041461] text-[15px] font-bold w-[261px] outline-0 border-b-2 py-[5px] bg-transparent "
                    value={nameParty}
                    onChange={handleNamePartyChange}
                  />
                </div>
                <div className="w-full locationParty mr-[40px]">
                  <h3 className="text-[#29346c] text-[16px] flex items-center">
                    مكان الحفلة
                  </h3>
                  <div className="flex items-center border-b-2 ">
                    <div className="ml-[5px]">
                      <img src={location2} alt="location" />{" "}
                    </div>
                    <input
                      className="text-[#041461] text-[15px] font-bold  w-full outline-0 py-[5px] bg-transparent "
                      value={locationParty}
                      onChange={handleLocationPartyChange}
                    />
                  </div>
                </div>
              </div>
              <div className="two flex  pr-[15px] mb-[24px] justify-between">
                <div className="w-[40%] dateParty">
                  <h3 className="text-[#29346c] text-[16px]">
                    {" "}
                    تاريخ و واقت الحفلة
                  </h3>
                  <div className="flex items-center border-b-2 ">
                    <input
                      type="datetime-local"
                      className="text-[#041461] text-[15px] font-bold w-[261px] outline-0 py-[5px] bg-transparent "
                      value={timeDate} // Update value with dateParty
                      onChange={handleDatePartyChange}
                    />
                  </div>
                </div>
                <div className="   w-[57%]">
                  <h3 className="text-[#29346c] text-[16px] ml-[24px] font-bold">
                    الوصف
                  </h3>

                  <textarea
                    id="description"
                    name="description"
                    value={descriptionParty}
                    className="text-[#041461]  font-bold w-[400px] outline-0 py-[5px] bg-transparent h-[80px] ssc text-[12px]"
                    style={{ resize: " none" }}
                    onChange={handleDescriptionPartyChange}
                  ></textarea>
                </div>
              </div>
              <div className="type col-span-2 flex w-full h-[80px] items-center mb-[20px] justify-between">
                <h3 className="text-[24px] font-[700] ml-[20px]">
                  حالة الحفلة
                </h3>
                <div className="w-[70%] h-[81px] bg-transparent rounded-[8px] text-[24px] flex justify-around items-center text-[#04146152] mx-auto">
                  <label className="flex items-center cursor-pointer">
                    <span
                      className="ml-[20px]"
                      style={{
                        color:
                          selectedOption === "open" ? "#041461" : "#04146152",
                      }}
                    >
                      فتح الحجز
                    </span>
                    <input
                      style={{ width: "15px", height: "15px" }}
                      type="radio"
                      value="open"
                      checked={selectedOption === "open"}
                      onChange={() => handleOptionChange("open")}
                    />
                  </label>
                  <label className="flex items-center ml-4 cursor-pointer">
                    <span
                      className="ml-[20px]"
                      style={{
                        color:
                          selectedOption === "close" ? "#041461" : "#04146152",
                      }}
                    >
                      قفل الحجز
                    </span>
                    <input
                      style={{ width: "15px", height: "15px" }}
                      type="radio"
                      value="close"
                      checked={selectedOption === "close"}
                      onChange={() => handleOptionChange("close")}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="img mt-[24px] w-full overflow-hidden">
              <h3 className="text-[24px] font-bold">الصور</h3>
              {imgs && imgs.length > 0 ? (
                <div className="containerImgs w-full flex overflow-x-auto ssc mt-20 pb-10 ">
                  {imgs.map((img) => (
                    <div className="flex-shrink-0 mr-4 relative" key={img.id}>
                      <img
                        onClick={
                          removeClicked
                            ? () => handleDeleteImage(img.id)
                            : undefined
                        }
                        src={`https://sterling-owl-profound.ngrok-free.app/storage/${img.image}`}
                        alt="party"
                        className={`w-[224px] h-[144px] cursor-pointer ${
                          removeClicked ? "hover:opacity-80" : ""
                        }`}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="box border-dashed border-2 w-[503px] h-[24px] py-[55px] px-[13px] flex justify-center items-center border-[#041461] rounded-[10px] mx-auto mt-[20px] mb-[72px]">
                  <h3 className="text-[20px]">لا يوجد صور</h3>
                </div>
              )}

              <div className="operationImgs flex justify-center items-center">
                <label
                  htmlFor="uploadImage"
                  className="add cursor-pointer border border-[#041461] h-[55px] m-[24px] py-[8px] px-[26px] text-white flex justify-center items-center gap-[10px] text-[20px] font-[500] bg-[#041461] rounded-[6px]"
                >
                  <h3>اضافة صورة</h3>
                  <input
                    type="file"
                    id="uploadImage"
                    accept="image/*"
                    style={{ display: "none" }}
                    multiple
                    onChange={handleImageChange}
                  />
                </label>
                <div
                  className="remove cursor-pointer border border-[#041461] h-[55px] m-[24px] py-[8px] px-[26px] text-[#041461] flex justify-center items-center gap-[10px] text-[20px] font-[500] bg-white rounded-[6px]"
                  onClick={() => setRemoveClicked(!removeClicked)}
                >
                  <h3>حذف صورة</h3>
                </div>
              </div>
            </div>
            <div className="video  w-full overflow-hidden mb-[70px]">
              <h3 className="text-[24px] font-bold">الفيديو</h3>
              <div className="containerImgs w-full flex overflow-x-auto ssc mt-[20px] pb-[10px]">
                {video ? (
                  <video
                    src={`https://sterling-owl-profound.ngrok-free.app/storage/${video}`}
                    controls
                    className="w-[211px] h-[145px]"
                  ></video>
                ) : (
                  <div className="box border-dashed border-2 w-[503px] h-[24px] py-[55px] px-[13px] flex justify-center items-center border-[#041461] rounded-[10px] mx-auto mt-[20px] mb-[72px]">
                    <h3 className="text-[20px]">لا يوجد فيديو</h3>
                  </div>
                )}
              </div>
              <div className="operationVideo flex justify-center items-center">
                <label
                  htmlFor="uploadVideo"
                  className="add cursor-pointer border border-[#041461] h-[55px] m-[24px] py-[8px] px-[26px] text-white flex justify-center items-center gap-[10px] text-[20px] font-[500] bg-[#041461] rounded-[6px]"
                >
                  <h3>اضافة فيديو</h3>
                  <input
                    type="file"
                    id="uploadVideo"
                    style={{ display: "none" }}
                    accept="video/*"
                    onChange={handleVideoUpload}
                  />
                </label>
                <div
                  onClick={() => deletVideo()}
                  className="remove cursor-pointer border border-[#041461] h-[55px] m-[24px] py-[8px] px-[26px] text-[#041461] flex justify-center items-center gap-[10px] text-[20px] font-[500] bg-white rounded-[6px]"
                >
                  <h3>حذف فيديو</h3>
                </div>
              </div>
            </div>
            <div className="footer mt-[5px] mb-[5px] fixed bottom-[5%] bg-[#f9f9ff] w-[71.5%]">
              <div className="flex justify-center items-center">
                <div className="operationVideo flex justify-center items-center">
                  <div
                    onClick={handleSaveData}
                    className="add w-[244px]  cursor-pointer border border-[#041461] h-[55px] m-[24px] py-[8px] px-[26px] text-white flex justify-center items-center gap-[10px] text-[20px] font-[500] bg-[#041461] rounded-[6px] hover:opacity-90"
                  >
                    <h3>حفظ</h3>
                  </div>
                  <div
                    onClick={goBack}
                    className="remove w-[244px] cursor-pointer border border-[#041461] h-[55px] m-[24px] py-[8px] px-[26px] text-[#041461] flex justify-center items-center gap-[10px] text-[20px] font-[500] bg-white rounded-[6px] hover:opacity-90"
                  >
                    <h3>الغاء</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEventDetail;
