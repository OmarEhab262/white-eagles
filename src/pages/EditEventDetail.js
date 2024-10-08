import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import Progressbar from "../components/Progressbar";
import location2 from "../assists/icon/location2.png";
import arrow from "../assists/icon/arrow.png";
import x from "../assists/icon/x-10366.png";
import axios from "axios";

import { toast } from "react-toastify";
import cam from "../assists/icon/cam.png";
const EditEventDetail = () => {
  const [nameParty, setNameParty] = useState("");
  const [locationParty, setLocationParty] = useState("");
  const [timeDate, setTimeDate] = useState("");
  const [descriptionParty, setDescriptionParty] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [deletImg, setDeletImg] = useState("");
  const [removeClicked, setRemoveClicked] = useState(false);
  const [imgs, setImgs] = useState(null);
  const [video, setVideo] = useState(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("open");
  const [videoProgress, setVideoProgress] = useState(0);
  const [videoState, setVideoState] = useState(false);
  const [imgState, setImgState] = useState(false);
  const handleOptionChange = (value) => {
    setSelectedOption(value);
    setStatus(value === "open" ? 1 : 0);
  };
  // Function to handle file change for main image
  const handleMainImageChange = (event) => {
    const files = Array.from(event.target.files);

    // Set main image using the first selected file
    setMainImage(files[0]);
  };

  // Function to trigger file input click when camera icon is clicked
  const handleCameraClick = () => {
    document.getElementById("mainImageInput").click();
  };

  const handleVideoUpload = async (event) => {
    const file = event.target.files[0];
    setVideo(file);

    const formData = new FormData();
    formData.append("video", file);

    try {
      await axios.post(
        `https://api.whiteeagles.net/public/api/events/update/${storedId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
            "ngrok-skip-browser-warning": "69420",
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setVideoProgress(percentCompleted);
            setVideoState(true);
          },
        }
      );
      toast.success("Party has been changed successfully");
      window.location.reload(); // Reload the page after successful upload
      setVideoState(false);
    } catch (error) {
      console.error("Error uploading video:", error);
      toast.error("Failed to upload video. Please try again.");
    }
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
          `https://api.whiteeagles.net/public/api/event-show/${storedId}`,
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
  }, [token, storedId]); // Include 'token' and 'storedId' in the dependency array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.whiteeagles.net/public/api/event-show/${storedId}`,
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

  const [progress, setProgress] = useState(0);

  //   useEffect(() => {
  //     if (progress === 100) {
  //       toast.success("Party has been changed successfully");

  //     }
  //   }, [progress]);
  const handleImageChange = async (event) => {
    const files = Array.from(event.target.files);
    const formData = new FormData();
    files.forEach((image, index) => {
      formData.append(`image[${index}]`, image);
    });

    try {
      await axios.post(
        `https://api.whiteeagles.net/public/api/events/update/${storedId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
            "ngrok-skip-browser-warning": "69420",
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(percentCompleted);
            setImgState(true);
          },
        }
      );
      toast.success("Party has been changed successfully");
      setImgState(false);
      window.location.reload(); // Reload the page after successful upload
    } catch (error) {
      console.error("Error uploading images:", error);
      window.location.reload();
      //   toast.error("Failed to upload images. Please try again.");
    }
  };
  const handleSaveData = async () => {
    setLoading(true); // Step 2: Set loading to true

    try {
      const formData = new FormData();
      formData.append("title", nameParty);
      formData.append("location", locationParty);
      formData.append("description", descriptionParty);
      formData.append("date_time", timeDate);
      formData.append("video", video);
      formData.append("banner", mainImage);
      formData.append("status", status);

      //   // Append all images
      //   images.forEach((image, index) => {
      //     formData.append(`image[${index}]`, image);
      //   });

      await axios.post(
        `https://api.whiteeagles.net/public/api/events/update/${storedId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + token,
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );
      toast.success("Party has been changed successfully");
      setTimeout(function () {
        window.location.href = "/NewEvents";
      }, 1000); // 2000 milliseconds = 2 seconds
    } catch (error) {
      console.error("Error updating user data:", error);
      toast.error("Error changed a party");
      setTimeout(function () {
        window.location.reload();
      }, 1000);
    } finally {
      setLoading(false); // Step 3: Set loading back to false
    }
  };

  const handleDeleteImage = async (imageId) => {
    setDeletImg(imageId);
    await deleteimg();
  };

  const deleteimg = async () => {
    try {
      await axios.delete(
        `https://api.whiteeagles.net/public/api/images/${deletImg}`,
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
        `https://api.whiteeagles.net/public/api/events/delete_video/${storedId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      setVideoState(true);
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
                  src={`https://api.whiteeagles.net/public/storage/${mainImage}`}
                  alt="party"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="content  col-span-2  ">
              <div className="one flex  pr-[15px] mb-[24px]">
                <div className="w-[40%] nameParty">
                  <h3 className="text-[#29346c] text-[16px]">اسم الحفلة</h3>
                  <input
                    className="text-[#041461] text-[15px] font-bold w-full outline-0 border-b-2 py-[5px] bg-transparent "
                    value={nameParty}
                    onChange={handleNamePartyChange}
                  />
                </div>
                <div className="w-[57%] locationParty mr-[40px]">
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
              <div className="two flex  pr-[15px] mb-[24px] ">
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
                <div className="w-[57%] mr-[40px]">
                  <h3 className="text-[#29346c] text-[16px] ml-[24px] ">
                    الوصف
                  </h3>

                  <textarea
                    id="description"
                    name="description"
                    value={descriptionParty}
                    className="text-[#041461]  font-bold w-full outline-0 py-[5px] bg-transparent h-[37px] ssc text-[12px] pr-[5px] border-b-2"
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
                        src={`https://api.whiteeagles.net/public/storage/${img.image}`}
                        alt="party"
                        className={`w-[224px] h-[144px] `}
                      />
                      <img
                        onClick={
                          removeClicked
                            ? () => handleDeleteImage(img.id)
                            : undefined
                        }
                        src={x}
                        alt=""
                        className={`absolute top-1 right-1 w-6 h-6  cursor-pointer ${
                          removeClicked ? "block" : "hidden"
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
              {imgState && (
                <div className="Progressbar w-full mb-[50px]">
                  <div className="justify-center items-center text-[#041461] mx-auto w-[80%]">
                    <Progressbar filled={progress} className="z-10 w-[300px]" />
                  </div>
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
                    accept="image/png+jpeg"
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
              <div className="progress absolute top-[58%] w-[800px] right-[30%]"></div>
            </div>
            <div className="video  w-full overflow-hidden mb-[70px]">
              <h3 className="text-[24px] font-bold">الفيديو</h3>
              <div className="containerImgs w-full flex overflow-x-auto ssc mt-[20px] pb-[10px]">
                {video ? (
                  <video
                    src={`https://api.whiteeagles.net/public/storage/${video}`}
                    controls
                    className="w-[211px] h-[145px]"
                  ></video>
                ) : (
                  <div className="box border-dashed border-2 w-[503px] h-[24px] py-[55px] px-[13px] flex justify-center items-center border-[#041461] rounded-[10px] mx-auto mt-[20px] mb-[72px]">
                    <h3 className="text-[20px]">لا يوجد فيديو</h3>
                  </div>
                )}
              </div>
              {videoState && (
                <div className="Progressbar w-full mb-[50px]">
                  <div className="justify-center items-center text-[#041461] mx-auto w-[80%]">
                    <Progressbar
                      filled={videoProgress}
                      className="z-10 w-[300px]"
                    />
                  </div>
                </div>
              )}
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
      {loading && (
        <div
          className="fixed h-screen w-full top-0 left-0 flex justify-center items-center text-[#041461]"
          style={{ background: "#66666657" }}
        >
          <div className="w-[393px] h-[194px] bg-white rounded-[24px] flex justify-center items-center flex-col">
            <div className="flex justify-center items-center">
              <div className="spinner flex justify-center items-center h-full">
                {[...Array(10)].map((_, index) => (
                  <div
                    key={index}
                    className="w-4 h-4 bg-black rounded-full mx-1 animate-bounce"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* {progressBar && (
        <div
          className="fixed h-screen w-full top-0 left-0 flex justify-center items-center text-[#041461]"
          style={{ background: "#66666657" }}
        >
          <Progressbar filled={progress} className="z-10 w-[300px]" />
        </div>
      )} */}
      {/* {videoProgress > 0 && videoProgress < 100 && (
        <div
          className="fixed h-screen w-full top-0 left-0 flex justify-center items-center text-[#041461]"
          style={{ background: "#66666657" }}
        >
          <Progressbar filled={videoProgress} className="z-10 w-[300px]" />
        </div>
      )} */}
    </div>
  );
};

export default EditEventDetail;
