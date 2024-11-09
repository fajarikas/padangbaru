import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { fetchData } from "../../helpers/fetch";

const Functionary = ({ id }) => {
  const [functionary, setFunctionary] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchData("/functionaries");
        setFunctionary(response.data);
        return functionary;
      } catch (e) {
        console.error("Failed to fetch functionary", e);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  //   console.log("Perangkat desa", functionary);

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

      <div className="pb-10 grid grid-cols-4 w-full gap-x-6 mx-auto">
        {functionary.map((data, key) => (
          <div
            key={key}
            className="mt-5 w-10/12 rounded-xl bg-white hover:shadow-md transition duration-300 cursor-pointer shadow-xl  "
          >
            <img
              className=" h-[380px] rounded-t-xl object-cover"
              src={`${import.meta.env.VITE_API_BASE_URL}/storage/${
                data.picture
              }`}
              alt=""
            />

            <div className="block py-5 mx-4 ">
              <p className="text-2xl font-semibold">{data.name}</p>
              <p className="text-lg w-full">{data.title.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Functionary;
