import React, { useEffect } from "react";
import homeLogo from "../assists/imgs/homeLogo.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  const handleShowClick = (name) => {
    localStorage.setItem("nameCategory", name);
    setTimeout(() => {
      window.location.reload();
    }, 1000); // 1000 milliseconds = 1 second
  };

  return (
    <div className="div ">
      <div className="footer grid md:grid-cols-3 grid-cols-1 justify-items-start gap-10 px-[35px] ">
        <div className="connect text-[18px] font-[700] text-white">
          <div className="top mb-[10px]">
            <h3 className="text-[#838389]">تواصل معنا</h3>
          </div>
          <div className="bot">
            <div className="grid grid-cols-1 gap-3">
              <a href="mailto:Info@whiteeagles.net">
                mailto:Info@whiteeagles.net
              </a>
              <div class="flex gap-3">
                <a href="https://wa.me/201022550799" target="_blank">
                  01022550799
                </a>
                <h3>-</h3>
                <a href="https://wa.me/201022550788" target="_blank">
                  01022550788
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ourPages text-[18px] font-[700] text-white">
          <div className="top mb-[10px]">
            <h3 className="text-[#838389]">صفحاتنا</h3>
          </div>
          <div className="bot">
            <div className="grid grid-cols-3 gap-3">
              <a
                href="https://m.facebook.com/whiteEagleEventCompany?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://www.tiktok.com/@whiteeagleevent?_t=8lDZLVLCod8&_r=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tiktok
              </a>
              <a
                href="https://www.instagram.com/whiteeagle_event?igsh=NzI1d2Q5dnlqY20y&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/white-eagle-event-company/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin
              </a>
              <a
                href="https://www.threads.net/@whiteeagle_event"
                target="_blank"
                rel="noopener noreferrer"
              >
                threads
              </a>
              <a
                href="https://twitter.com/whiteeagleevent?s=21&t=h6GFVfWD2OLZQUUlF1QCEA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="categories text-[18px] font-[700] text-white">
          <div className="top mb-[10px]">
            <h3 className="text-[#838389]">الفئات</h3>
          </div>
          <div className="bot">
            <div className="grid grid-cols-3 gap-3">
              <Link
                onClick={() => handleShowClick("مؤتمرات")}
                to={"/ShowServices"}
              >
                مؤتمرات
              </Link>
              <Link
                onClick={() => handleShowClick("ستاند اب")}
                to={"/ShowServices"}
              >
                ستاند اب
              </Link>
              <Link
                onClick={() => handleShowClick("بازار")}
                to={"/ShowServices"}
              >
                بازار
              </Link>
              <Link
                onClick={() => handleShowClick("حفلات غناء")}
                to={"/ShowServices"}
              >
                حفلات غناء
              </Link>
              <Link
                onClick={() => handleShowClick("حفلات التخرج")}
                to={"/ShowServices"}
              >
                حفلات تخرج
              </Link>
              <Link
                onClick={() => handleShowClick("حفلات فان داى")}
                to={"/ShowServices"}
              >
                حفلات فان داي
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="rights grid md:grid-cols-2 grid-cols-1 md:justify-items-center  justify-items-start items-center mt-[120px] gap-5 px-[15px] mb-[40px]">
        <div className="">
          <p className="text-[18px] font-[700] text-[#838389]">
            © 2024 جميع الحقوق محفوظة لدى White Eagle
          </p>
        </div>
        <div className="mx-auto">
          <img src={homeLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
