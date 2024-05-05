import React, { useEffect } from "react";
import bgLogoSide from "../assists/imgs/bgLogoSide.png";
import Successful from "../assists/imgs/Successful-password.png";
import logo from "../assists/imgs/logo.png";

const SuccessfulPassword = () => {
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.href = "/white-eagles/#/MainPage";
    }, 2000);

    return () => {
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
        <img src={Successful} alt="Successful" className="w-[50%] mt-[-50px]" />
      </div>
    </div>
  );
};

export default SuccessfulPassword;
