import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mx-auto py-16">
      <h2 className="text-xl font-semibold text-gray-700 text-center">
        Belum ada konten terbaru
      </h2>
      <img
        className="w-1/6 my-4"
        src="/images/content/file not found.png"
        alt="File not found"
      />
      <p className="mt-2 text-gray-500 text-center">
        Ingin menyampaikan konten terbaru? Segera kabarkan administrator kami!
      </p>
      <Link
        to="https://api.whatsapp.com/send/?phone=6285609012426&text=Halo%20kak%20saya%20mau%20nyampein%20update%20berita%20nih&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex items-center space-x-2 text-white px-4 py-2 rounded-lg bg-[#5E87E0] hover:text-[#5E87E0] border border-transparent hover:bg-transparent hover:border-[#5E87E0] shadow-lg hover:shadow-xl transition-all duration-300 ease-in"
      >
        <p>Kontak Administrator</p>
        <BsWhatsapp />
      </Link>
    </div>
  );
};

export default NotFound;
