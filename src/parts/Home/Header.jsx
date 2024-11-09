import React from "react";

const Header = ({ id }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id={id} className="w-full h-screen relative">
      <img
        src="/images/content/hero.jpg"
        alt="Desa Padang Baru"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white-primary bg-black bg-opacity-50 px-4">
        <h1 className="lg:w-ful w-3/4 text-4xl lg:text-6xl font-bold">
          DESA PADANG BARU
        </h1>
        <p className="mt-8   lg:max-w-xl text-sm lg:text-lg font-light">
          Desa Padang Baru, tempat harmoni antara alam dan usaha warga, adalah
          desa dengan potensi peternakan yang kuat dan berkelanjutan. Dengan
          sumber daya alam yang melimpah dan semangat gotong royong yang tinggi,
          desa kami berkomitmen untuk memajukan peternakan dan sektor lainnya
          demi kesejahteraan bersama.
        </p>
        <button
          onClick={() => scrollToSection("history")}
          className="mt-8 lg:px-10 lg:py-3 px-7 py-2 lg:text-base text-sm border-transparent hover:bg-transparent hover:border-added-green hover:border transition-all duration-300 bg-added-green font-normal text-white-primary "
        >
          Lebih lanjut
        </button>
      </div>
    </div>
  );
};

export default Header;
