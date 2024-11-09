import React from "react";
import SectionTitle from "../../components/SectionTitle/index";

const History = ({ id }) => {
  return (
    <div id={id} className="w-11/12 mx-auto h-screen mt-10 text-brown-primary">
      <div className="flex gap-12 items-center">
        <div className="w-2/3">
          <SectionTitle
            textColor="text-brown-primary"
            color="bg-added-green"
            position="left"
            text="Desa Padang Baru"
          />
          <p className="text-justify text-2xl mt-5">
            Pada tahun 1983, Desa Padang Baru menjadi bagian dari Desa Dul di
            kecamatan Pangkalan Baru. Kemudian berubah menjadi Desa Persiapan
            pada tahun 1999 dan akhirnya diresmikan sebagai Desa Devinitif pada
            tahun 2001. Nama awal Desa Padang Baru berasal dari hamparan padang
            pasir yang luas yang berasal dari penambangan timah.
          </p>
        </div>
        <div className="w-1/3">
          <img src="/images/content/history.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default History;
