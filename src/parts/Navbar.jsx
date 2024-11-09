import React, { useEffect, useState, useRef } from "react";
import { BiMenu } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [information, setInformation] = useState(false);
  const [infrastructure, setInfrastructure] = useState(false);
  const [mobileNavbar, setMobileNavbar] = useState(false);

  const infoRef = useRef(null);
  const infraRef = useRef(null);

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

  const handleInfoButton = () => {
    setInformation(!information);
    setInfrastructure(false);
  };

  const handleInfraButton = () => {
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (infoRef.current && !infoRef.current.contains(event.target)) {
        setInformation(false);
      }
      if (infraRef.current && !infraRef.current.contains(event.target)) {
        setInfrastructure(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div
        className={`hidden lg:inline z-50 fixed top-0 py-5 text-white-primary w-full transition-all duration-300 ${
          isScrolled ? "bg-black bg-opacity-90" : "bg-transparent"
        }`}
      >
        <div className="w-11/12 mx-auto flex items-center justify-between">
          <Link className="flex gap-x-2 items-center" exact to="/">
            <img
              className="w-1/12"
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

            <div ref={infoRef} className="relative">
              <button
                className="flex items-center space-x-1"
                onClick={handleInfoButton}
              >
                Informasi Desa <IoMdArrowDropdown />
              </button>
              {information && (
                <div className="absolute mt-2 py-2 px-4 bg-black bg-opacity-80 rounded shadow-lg">
                  <ul>
                    <li className="hover:border-b-2 hover:border-white transition-all duration-150">
                      <Link to="/news/news">Kabar Desa</Link>
                    </li>
                    <li className="hover:border-b-2 hover:border-white transition-all duration-150">
                      <Link to="/news/announcements">Pengumuman</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div ref={infraRef} className="relative">
              <button
                className="flex items-center space-x-1"
                onClick={handleInfraButton}
              >
                Infrastruktur Desa <IoMdArrowDropdown />
              </button>
              {infrastructure && (
                <div className="absolute mt-2 py-2 px-4 bg-black bg-opacity-80 rounded shadow-lg">
                  <ul>
                    <li className="hover:border-b-2 hover:border-white transition-all duration-150">
                      <Link to="/news/2">Perpustakaan</Link>
                    </li>
                    <li className="hover:border-b-2 hover:border-white transition-all duration-150">
                      <Link to="/news/announcements">Bumdes</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className=" inline lg:hidden z-50 fixed top-0 py-2 text-white-primary w-screen  transition-all duration-300 bg-black bg-opacity-90">
        <div className="w-3/4 flex mx-auto items-center justify-between">
          <div className="flex items-center gap-x-4">
            <img
              className="w-[24px]"
              src="/images/content/Lambang_Kabupaten_Bangka_Tengah.png"
              alt=""
            />
            <p className="text-xs">
              Desa <br /> Padang Baru
            </p>
          </div>
          <div>
            <button onClick={handleMobileNavbar}>
              <BiMenu />
            </button>

            {mobileNavbar && (
              <div className="bg-black bg-opacity-80 ">
                <button onClick={() => scrollToSection("header")}>Home</button>
                <button onClick={() => scrollToSection("history")}>
                  Tentang Desa
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
