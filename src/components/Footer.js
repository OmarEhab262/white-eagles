import React from "react";
import homeLogo from "../assists/imgs/homeLogo.png";
import google from "../assists/imgs/google2.png";
import apple from "../assists/imgs/apple2.png";
import gall from "../assists/imgs/gall.png";
import x from "../assists/icon/x.png";
import f from "../assists/icon/f.png";
import i from "../assists/icon/i.png";
import l from "../assists/icon/l.png";
import t from "../assists/icon/t.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="div ">
      <div className="footer grid md:grid-cols-9 grid-cols-1 justify-items-start gap-10 px-[35px] ">
        <div className="download text-[18px] font-[700] text-white w-full col-span-3 ">
          <div className="top mb-[10px]">
            <h3 className="text-[#838389] text-center">
              حمل التطبيق الخاص بنا
            </h3>
          </div>
          <div className="bot flex justify-center flex-wrap w-full gap-7 mt-[20px]">
            <a
              href="https://play.google.com/store/apps/details?id=com.whiteeagle.ev"
              target="_blank"
              rel="noreferrer"
            >
              <img src={google} alt="" className="w-[160px]" />
            </a>
            <img src={apple} alt="" className="w-[160px]" />

            <a
              href="https://appgallery.huawei.com/app/C111217315"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gall} alt="" className="w-[160px]" />
            </a>
          </div>
        </div>
        <div className="policy text-[18px] font-[700] text-white flex flex-col items-center col-span-3 w-full gap-3">
          <div className="top mb-[10px] ">
            <Link
              to="/PrivacyPolicy"
              className="text-[#838389]  hover:text-white  ease-in duration-150  "
            >
              سياسة الخصوصية
            </Link>
          </div>
        </div>
        <div className="connect text-[18px] font-[700] text-white flex flex-col items-center col-span-3 w-full gap-3">
          <div className="top ">
            <h3 className="text-[#838389]">تواصل معنا</h3>
          </div>
          <div className="mid ">
            <div className="grid grid-cols-1   justify-items-center gap-3">
              <a
                className="hover:opacity-60 ease-in duration-150"
                href="mailto:Info@whiteeagles.net"
              >
                Info@whiteeagles.net
              </a>
              <div class="flex gap-3">
                <a
                  href="https://wa.me/201022550799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-60 ease-in duration-150"
                >
                  01022550799
                </a>
                <h3>-</h3>
                <a
                  href="https://wa.me/201022550788"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-60 ease-in duration-150"
                >
                  01022550788
                </a>
              </div>
            </div>
          </div>
          <div className="flex gap-7 mt-[15px] items-center">
            <a
              href="https://m.facebook.com/whiteEagleEventCompany?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={f}
                alt=""
                className="hover:opacity-60 ease-in duration-150"
              />
            </a>
            <a
              href="https://www.tiktok.com/@whiteeagleevent?_t=8lDZLVLCod8&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={t}
                alt=""
                className="hover:opacity-60 ease-in duration-150"
              />
            </a>
            <a
              href="https://www.instagram.com/whiteeagle_event?igsh=NzI1d2Q5dnlqY20y&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={i}
                alt=""
                className="hover:opacity-60 ease-in duration-150"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/white-eagle-event-company/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={l}
                alt=""
                className="hover:opacity-60 ease-in duration-150"
              />
            </a>
            <a
              href="https://twitter.com/whiteeagleevent?s=21&t=h6GFVfWD2OLZQUUlF1QCEA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={x}
                alt=""
                className="hover:opacity-60 ease-in duration-150"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="rights flex w-full flex-col items-center justify-center gap-10 mt-[50px]">
        <div className="mx-auto">
          <img src={homeLogo} alt="" />
        </div>
        <div className=" mb-[20px]">
          <p className="text-[18px] font-[700] text-[#838389] text-center">
            © 2024 جميع الحقوق محفوظة لدى White Eagle Event
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
