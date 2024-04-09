import React, { useEffect, useState } from "react";
import bgLogoSide from "../assists/imgs/bgLogoSide.png";
import welcom from "../assists/imgs/welcom.png";
import logo from "../assists/imgs/logo.png";
const Welcome = () => {
  const [showWelcom, setShowWelcom] = useState(false);
  useEffect(() => {
    // Display welcome image after 3 seconds
    const firstTimer = setTimeout(() => {
      setShowWelcom(true);
    }, 2000);

    // Redirect after an additional 3 seconds
    const redirectTimer = setTimeout(() => {
      window.location.href = "/Dashboard/#/MainPage";
    }, 2000);

    return () => {
      clearTimeout(firstTimer);
      clearTimeout(redirectTimer);
    };
  }, []);
  const body = {
    backgroundImage: `url(${bgLogoSide})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100vh",
  };
  return (
    <div className="flex justify-center items-center" style={body}>
      <div className="bg-white w-[90%] flex justify-center items-center h-[90%] rounded-[24px] flex-col">
        <img
          src={logo}
          alt="logo"
          className="w-[100px] self-end ml-[30px] mt-[-30px] fixed top-[100px]"
        />
        <img src={welcom} alt="welcom" className="w-[50%] mt-[-50px]" />
      </div>
    </div>
  );
};

export default Welcome;
