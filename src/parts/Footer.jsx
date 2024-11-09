import React from "react";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/?section=${sectionId}`);
    }
  };

  return (
    <div className="bg-black text-white mt-10 pt-12 pb-7">
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0">
          <div className="lg:w-1/3">
            <p className="font-bold text-2xl tracking-extraWide">
              DESA PADANG BARU
            </p>
            <div className="flex mt-5 items-center space-x-4">
              <img
                className="h-12 sm:h-16"
                src="/images/content/Logo_Kampus_Merdeka_Kemendikbud.png"
                alt=""
              />
              <img
                className="h-12 sm:h-16"
                src="/images/content/logo-uny.png"
                alt=""
              />
              <img
                className="h-12 sm:h-16"
                src="/images/content/LOGO KKN.png"
                alt=""
              />
            </div>

            <div className="text-2xl sm:text-3xl mt-5 flex items-center space-x-3">
              <FaYoutube />
              <FaFacebookSquare />
            </div>
          </div>

          <div className="lg:w-2/3 flex flex-col lg:flex-row lg:justify-end lg:space-x-32 space-y-10 lg:space-y-0">
            <div>
              <p className="tracking-extraWide text-lg lg:text-xl font-semibold">
                DESA
              </p>
              <ul className="space-y-2 mt-1">
                <li>
                  <button onClick={() => scrollToSection("history")}>
                    Sejarah
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("visionmission")}>
                    Visi Misi
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("gallery")}>
                    Gallery
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("statistic")}>
                    Statistik
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("information")}>
                    Informasi Desa
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("functionary")}>
                    Perangkat Desa
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("media")}>
                    Media Sosial Desa
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <p className="tracking-extraWide text-lg lg:text-xl font-semibold">
                INFORMASI
              </p>
              <ul className="space-y-2 mt-1">
                <li>
                  <Link to="/news/news">Kabar Desa</Link>
                </li>
                <li>
                  <Link to="/news/announcements">Pengumuman</Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="tracking-extraWide text-lg lg:text-xl font-semibold">
                INFRASTRUKTUR
              </p>
              <ul className="space-y-2 mt-1">
                <li>
                  <Link to="/infrastructure/land">Bumdesa</Link>
                </li>
                <li>
                  <Link to="/infrastructure/library">Perpustakaan</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10">
        <hr className="border-gray-700" />
        <p className="mt-5 w-10/12 mx-auto lg:w-full text-center text-sm lg:text-base">
          Made with ♡︎ by{" "}
          <a
            className="text-added-yellow hover:underline transition duration-300"
            target="__blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/kknuny.padangbaru/"
          >
            KKN UNY 2024 Desa Padang Baru
          </a>
          . All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
