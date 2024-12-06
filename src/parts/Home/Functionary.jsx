import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { staff } from "../../dummy/staff"; // Import data dummy

const Functionary = ({ id }) => {
  const [functionary, setFunctionary] = useState([]);

  useEffect(() => {
    // Menggunakan data dummy langsung
    if (staff && staff.length > 0) {
      setFunctionary(staff);
    }
  }, []);

  return (
    <div id={id} className="mt-16 w-11/12 mx-auto text-brown-primary">
      <SectionTitle
        color="bg-added-green"
        position="mr-auto"
        text="Perangkat Desa Padang Baru"
        textColor="text-added-brown"
        textPosition="text-left"
      />

      <p className="text-2xl mt-5 text-justify">
        Desa Padang Baru memiliki susunan organisasi perangkat desa yang
        bertanggung jawab untuk mengatur jalannya roda pemerintahan desa.
      </p>

      <div className="pb-10 lg:grid lg:mt-0 mt-10 lg:grid-cols-4 block w-full gap-x-6 mx-auto">
        {functionary.length === 0 ? (
          <p>Loading...</p>
        ) : (
          functionary.map((data, key) => (
            <div
              key={key}
              className="mt-5 w-10/12 rounded-xl mx-auto bg-white hover:shadow-md transition duration-300 cursor-pointer shadow-xl"
            >
              <img
                className="w-[350px] h-[280px] lg:w-[400px] lg:h-[380px] rounded-t-xl object-cover"
                src={data.picture}
                alt={data.name}
              />

              <div className="block py-5 mx-4">
                <p className="text-2xl font-semibold">{data.name}</p>
                <p className="text-lg w-full">{data.title}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Functionary;
