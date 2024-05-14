import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ggggg from "../assists/imgs/ggggg.png";
import homeLogo from "../assists/imgs/homeLogo.svg";
import logo from "../assists/imgs/logo.png";

const Navbar = ({ activeTab }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [focus, setFocus] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        window.location.href = "/white-eagles/FindParty";
        window.location.reload();
      }
    };

    // Add event listener for key press
    document.addEventListener("keydown", handleKeyPress);

    // Cleanup: Remove event listener when component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [inputValue]);

  useEffect(() => {
    // Load saved value from localStorage when component mounts
    const savedInputValue = localStorage.getItem("searchInputValue");
    if (savedInputValue) {
      setInputValue(savedInputValue);
    }
  }, []);

  useEffect(() => {
    // Save inputValue to localStorage whenever it changes
    localStorage.setItem("searchInputValue", inputValue);
  }, [inputValue]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="z-50 w-[90%]">
      <div
        className="nav rounded-[40px] z-[3] flex items-center justify-between p-[8px] text-white text-center text-base lg:text-lg md:text-sm font-semibold mt-3 md:text-[12px] lg:text-[16px] lg:flex hidden gap-0"
        style={{ backgroundImage: `url(${ggggg})` }}
        data-aos="fade-down"
      >
        <Link to="/" className="cursor-pointer">
          <h3
            className={`p-[1rem] ${
              activeTab === "home"
                ? "active bg-[#E8E9F8] text-[#041461] rounded-[32px] px-[2rem] p-[1rem] font-bold"
                : ""
            }`}
          >
            الصفحة الرئيسية
          </h3>
        </Link>
        <Link
          to="/Calender"
          className={`cursor-pointerb   ${focus ? "hidden" : "block"}`}
        >
          <h3
            className={`p-[1rem] ${
              activeTab === "calender"
                ? "active bg-[#E8E9F8] text-[#041461] rounded-[32px] px-[2rem] p-[1rem] font-bold"
                : ""
            }`}
          >
            الفعاليات
          </h3>
        </Link>
        <Link to="/services" className="cursor-pointer">
          <h3
            className={`p-[1rem] ${
              activeTab === "services"
                ? "active bg-[#E8E9F8] text-[#041461] rounded-[32px] px-[2rem] p-[1rem] font-bold"
                : ""
            }`}
          >
            خدماتنا
          </h3>
        </Link>

        <div className="px-[39]">
          <Link to="/" className="cursor-pointer">
            <img src={homeLogo} alt="" />
          </Link>
        </div>
        <Link to="/about" className="cursor-pointer">
          <h3
            className={`p-[1rem] ${
              activeTab === "about"
                ? "active bg-[#E8E9F8] text-[#041461] rounded-[32px] px-[2rem] p-[1rem] font-bold"
                : ""
            }`}
          >
            من نحن
          </h3>
        </Link>

        <Link
          to="/ContactUs"
          className={`cursor-pointerb   ${focus ? "hidden" : "block"}`}
        >
          <h3
            className={`p-[1rem] ${
              activeTab === "contact"
                ? "active bg-[#E8E9F8] text-[#041461] rounded-[32px] px-[2rem] p-[1rem] font-bold"
                : ""
            }`}
          >
            تواصل معنا
          </h3>
        </Link>
        <input
          type="search"
          className={`cursor-pointer
          ${focus ? "w-[40%]" : "w-[10%]"}
          bg-transparent outline-none border-none transition-all duration-300 placeholder:text-white ${
            focus
              ? "focus:placeholder-[#041461] focus:bg-[#E8E9F8] focus:text-[#041461] focus:rounded-[32px] focus:px-[2rem] focus:p-[1rem]"
              : ""
          }`}
          placeholder="ابحث معنا"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={handleChange}
        />
      </div>
      {visible && (
        <div
          className={`mobile w-[100%] flex justify-between mt-[15px] p-[5px] flex-col flex lg:hidden fixed top-[-15px] right-0 transition ease-in-out duration-300 ${
            visible ? "block" : "hidden"
          }`}
          style={{
            backgroundImage: `url(${ggggg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            transform: visible ? "translateY(0)" : "translateY(-100%)",
          }}
        >
          <div className="mobile w-[100%] flex justify-between items-center mt-[15px] rounded-[16px] px-[15px] pb-[5px]">
            <button
              className="navbar-toggler h-[50px] px-2 rounded-md border border-white text-gray-400 hover:text-white hover:bg-[#041361a6] focus:outline-none focus:text-white focus:bg-[#0413616c] transition duration-150 ease-in-out"
              type="button"
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            <div className="log">
              <div className="w-[70px]">
                <img src={logo} alt="" />
              </div>
            </div>
          </div>
          {menuOpen && (
            <div className="text-white p-[10px] font-bold">
              <div className="gap-[30px] flex flex-col">
                <Link
                  to="/home"
                  className="cursor-pointer relative transition ease-in-out delay-150 hover:-translate-x-5  duration-150"
                >
                  <h3 className="">الصفحة الرئيسية</h3>
                  <div
                    className={`p-[1rem] absolute top-0 ${
                      activeTab === "home" ? " active border-b-2 w-[20%]" : ""
                    }`}
                  ></div>
                </Link>
                <Link
                  to="/Calender"
                  className="cursor-pointer relative  transition ease-in-out delay-150 hover:-translate-x-5  duration-150"
                >
                  <h3>الفعاليات</h3>
                  <div
                    className={`p-[1rem] absolute top-0 ${
                      activeTab === "calender"
                        ? " active border-b-2 w-[20%]"
                        : ""
                    }`}
                  ></div>
                </Link>

                <Link
                  to="/services"
                  className="cursor-pointer relative  transition ease-in-out delay-150 hover:-translate-x-5  duration-150"
                >
                  <h3>خدماتنا</h3>
                  <div
                    className={`p-[1rem] absolute top-0 ${
                      activeTab === "services"
                        ? " active border-b-2 w-[20%]"
                        : ""
                    }`}
                  ></div>
                </Link>
                <Link
                  to="/about"
                  className="cursor-pointer relative  transition ease-in-out delay-150 hover:-translate-x-5  duration-150"
                >
                  <h3>نبذة عنا</h3>
                  <div
                    className={`p-[1rem] absolute top-0 ${
                      activeTab === "about" ? " active border-b-2 w-[20%]" : ""
                    }`}
                  ></div>
                </Link>
                <Link
                  to="/ContactUs"
                  className="cursor-pointer relative  transition ease-in-out delay-150 hover:-translate-x-5  duration-150"
                >
                  <h3>تواصل معنا</h3>
                  <div
                    className={`p-[1rem] absolute top-0 ${
                      activeTab === "contact"
                        ? " active border-b-2 w-[20%]"
                        : ""
                    }`}
                  ></div>
                </Link>
                <input
                  className="cursor-pointer relative px-[5px] bg-transparent outline-none border-none focus:bg-white focus:text-[#041361a6] placeholder:text-white py-[5px] focus:placeholder:text-[#041361a6] rounded-[8px]"
                  placeholder="ابحث معنا"
                  onChange={handleChange}
                  type="search"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
