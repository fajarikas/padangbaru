import React, { useEffect, useState, useRef } from "react";
import { BiMenu } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [information, setInformation] = useState(false);
  const [infrastructure, setInfrastructure] = useState(false);
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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

  const handleInfoButtonMobile = () => {
    setInformation(!information);
    setInfrastructure(false);
  };

  const handleInfraButtonMobile = () => {
    setInfrastructure(!infrastructure);
    setInformation(false);
  };

  useEffect(() => {
    const handleScrolled = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScrolled);
    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  }, []);

  const handleMobileNavbar = () => {
    setMobileNavbar(!mobileNavbar);
  };

  const handleCloseNavbar = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setMobileNavbar(false);
    }, 500);
  };

  return (
    <div>
      {/* Desktop Navbar */}
      <div
        className={`hidden lg:flex z-50 fixed top-0 py-5 text-white w-full transition-all duration-300 ${
          isScrolled ? "bg-black bg-opacity-90" : "bg-transparent"
        }`}
      >
        <div className="w-11/12 mx-auto flex items-center justify-between">
          <Link className="flex gap-x-2 items-center" to="/">
            <img
              className="w-8"
              src="/images/content/Lambang_Kabupaten_Bangka_Tengah.png"
              alt="Logo"
            />
            Desa Padang Baru
          </Link>

          <div className="flex space-x-5 text-sm">
            <button onClick={() => scrollToSection("header")}>Home</button>
            <button onClick={() => scrollToSection("history")}>
              Tentang Desa
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`lg:hidden z-50 fixed top-0 py-4 text-white w-full transition-all duration-300 ${
          isScrolled ? "bg-black" : "bg-transparent"
        }`}
      >
        <div className="w-3/4 flex mx-auto items-center justify-between">
          <div className="flex items-center gap-x-4">
            <img
              className="w-8"
              src="/images/content/Lambang_Kabupaten_Bangka_Tengah.png"
              alt="Logo"
            />
            <p className="text-sm">
              Desa <br /> Padang Baru
            </p>
          </div>
          <button onClick={handleMobileNavbar}>
            <BiMenu className="text-2xl" />
          </button>
        </div>

        {mobileNavbar && (
          <div
            className={`fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center transition-transform duration-500 ${
              isClosing ? "animate-slideUp" : "animate-slideDown"
            }`}
          >
            <button
              onClick={handleCloseNavbar}
              className="absolute top-10 left-10 text-xl text-white"
            >
              <MdOutlineClose />
            </button>
            <ul className="text-white text-lg space-y-6 text-center">
              <li>
                <button onClick={() => scrollToSection("header")}>Home</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("history")}>
                  Tentang Desa
                </button>
              </li>

              <li className="relative">
                <button
                  className="flex items-center space-x-1"
                  onClick={handleInfoButtonMobile}
                >
                  Informasi Desa <IoMdArrowDropdown />
                </button>
                <div
                  className={`dropdown-content ${
                    information ? "active" : ""
                  } absolute left-0 mt-2 py-2 px-4 bg-black bg-opacity-80 rounded shadow-lg w-48 transition-all duration-300 ease-in-out`}
                  style={{ marginBottom: information ? "20px" : "0px" }}
                >
                  {information && (
                    <ul>
                      <li className="hover:border-b-2 hover:border-white transition-all duration-150">
                        <Link to="/news/news">Kabar Desa</Link>
                      </li>
                      <li className="hover:border-b-2 hover:border-white transition-all duration-150">
                        <Link to="/news/announcements">Pengumuman</Link>
                      </li>
                    </ul>
                  )}
                </div>
              </li>

              <li className="relative">
                <button
                  className="flex items-center space-x-1"
                  onClick={handleInfraButtonMobile}
                >
                  Infrastruktur Desa <IoMdArrowDropdown />
                </button>
                <div
                  className={`dropdown-content ${
                    infrastructure ? "active" : ""
                  } absolute left-0 mt-2 py-2 px-4 bg-black bg-opacity-80 rounded shadow-lg w-48 transition-all duration-300 ease-in-out`}
                  style={{ marginBottom: infrastructure ? "20px" : "0px" }}
                >
                  {infrastructure && (
                    <ul>
                      <li className="hover:border-b-2 hover:border-white transition-all duration-150">
                        <Link to="/infrastructure/library">Perpustakaan</Link>
                      </li>
                      <li className="hover:border-b-2 hover:border-white transition-all duration-150">
                        <Link to="/infrastructure/bumdesa">Bumdesa</Link>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
