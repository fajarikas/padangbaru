import React, { useEffect, useState } from "react";
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
  const [isInfoDisplayed, setIsInfoDisplayed] = useState(false);
  const [isInfraDisplayed, setIsInfraDisplayed] = useState(false);

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
    closeAllDropdowns();
    handleCloseNavbar();
  };

  const closeAllDropdowns = () => {
    setIsInfoDisplayed(false);
    setIsInfraDisplayed(false);
    setInformation(false);
    setInfrastructure(false);
  };

  const handleInfoButton = () => {
    setIsInfoDisplayed((prev) => !prev);
    setIsInfraDisplayed(false);
  };

  const handleInfraButton = () => {
    setIsInfraDisplayed((prev) => !prev);
    setIsInfoDisplayed(false);
  };

  const handleInfoButtonMobile = () => {
    setInformation((prev) => !prev);
    setInfrastructure(false);
  };

  const handleInfraButtonMobile = () => {
    setInfrastructure((prev) => !prev);
    setInformation(false);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sectionId = params.get("section");
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleMobileNavbar = () => {
    setMobileNavbar((prev) => !prev);
    closeAllDropdowns();
  };

  const handleCloseNavbar = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setMobileNavbar(false);
      closeAllDropdowns();
    }, 500);
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

  return (
    <div>
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
            <div className="relative">
              <button
                className="flex items-center gap-x-1"
                onClick={handleInfoButton}
              >
                <p>Informasi Desa</p>
                <IoMdArrowDropdown />
              </button>
              {isInfoDisplayed && (
                <div className="absolute mt-2 py-2 px-4 bg-black bg-opacity-80 rounded shadow-lg">
                  <ul>
                    <li onClick={closeAllDropdowns}>
                      <Link to="/news/news">Kabar Desa</Link>
                    </li>
                    <li onClick={closeAllDropdowns}>
                      <Link to="/news/announcements">Pengumuman</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* <div className="relative">
            <button
              className="flex items-center gap-x-2"
              onClick={handleInfraButton}
            >
              <p>Infrastruktur Desa</p>
              <IoMdArrowDropdown />
            </button>
            {isInfraDisplayed && (
              <div className="absolute mt-2 py-2 px-4 bg-black bg-opacity-80 rounded shadow-lg">
                <ul>
                  <li onClick={closeAllDropdowns}>
                    <Link to="/infrastructure/library">
                      Perpustakaan Betunas
                    </Link>
                  </li>
                  <li onClick={closeAllDropdowns}>
                    <Link to="/infrastructure/bumdesa">Bumdesa</Link>
                  </li>
                </ul>
              </div>
            )}
          </div> */}
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden z-50 fixed top-0 py-4 text-white w-full transition-all duration-300 ${
          isScrolled ? "bg-black" : "bg-transparent"
        }`}
      >
        <div className="w-3/4 flex mx-auto items-center justify-between">
          <Link to="/" className="flex items-center gap-x-4">
            <img
              className="w-8"
              src="/images/content/Lambang_Kabupaten_Bangka_Tengah.png"
              alt="Logo"
            />
            <p className="text-sm">
              Desa <br /> Padang Baru
            </p>
          </Link>
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
            <ul className="text-white text-lg space-y-6 text-left">
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
                  } transition-all duration-300 ease-in-out`}
                >
                  {information && (
                    <ul className="mt-4">
                      <li onClick={handleCloseNavbar}>
                        <Link to="/news/news">Kabar Desa</Link>
                      </li>
                      <li onClick={handleCloseNavbar}>
                        <Link to="/news/announcements">Pengumuman</Link>
                      </li>
                    </ul>
                  )}
                </div>
              </li>

              {/* <li className="relative">
                <button
                  className="flex items-center space-x-1"
                  onClick={handleInfraButtonMobile}
                >
                  Infrastruktur Desa <IoMdArrowDropdown />
                </button>
                <div
                  className={`dropdown-content ${
                    infrastructure ? "active" : ""
                  } transition-all duration-300 ease-in-out`}
                >
                  {infrastructure && (
                    <ul className="mt-4">
                      <li onClick={handleCloseNavbar}>
                        <Link to="/infrastructure/library">Perpustakaan</Link>
                      </li>
                      <li onClick={handleCloseNavbar}>
                        <Link to="/infrastructure/bumdesa">Bumdesa</Link>
                      </li>
                    </ul>
                  )}
                </div>
              </li> */}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
