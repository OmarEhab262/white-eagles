import React from "react";
import justLogo from "../assists/imgs/justLogo.png";
import tittleLogo from "../assists/imgs/tittleLogo.png";
import TittleLogo2 from "../assists/imgs/TittleLogo2.png";
import bgLogoSide from "../assists/imgs/bgLogoSide.png";

function LogoSide() {
  const logoSideStyle = {
    backgroundImage: `url(${bgLogoSide})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "107%",
    height: "100%",
  };

  return (
    <div
      className="col-span-1 flex justify-center items-center flex-col h-screen "
      style={logoSideStyle}
    >
      <div className="w-[50%] flex justify-center items-center flex-col h-screen mr-[-40px]">
        <img src={justLogo} alt="Logo" />
        <img src={tittleLogo} alt="tittleLogo" />
        <img className="mt-[5px] w-[70%]" src={TittleLogo2} alt="TittleLogo2" />
      </div>
    </div>
  );
}

export default LogoSide;
