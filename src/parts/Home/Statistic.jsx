import React from "react";
import { statistic } from "../../dummy/statistic";
import SectionTitle from "../../components/SectionTitle";

const Statistic = ({ id }) => {
  return (
    <div id={id} className="mt-16 mx-auto relative">
      <div className="absolute inset-0">
        <img
          className="w-screen h-screen lg:h-auto object-cover"
          src="/images/content/statisticbg.png"
          alt=""
        />
      </div>
      <div className="relative lg:pt-12 flex flex-col justify-center items-center h-screen lg:h-auto z-10">
        <SectionTitle
          color="bg-added-yellow"
          position="mx-auto"
          text="Desa Padang Baru dalam Angka"
          textColor="text-white-primary"
          textPosition="text-center"
        />
        <div className="block lg:flex justify-center gap-x-14 mt-14">
          {statistic?.map((data, key) => (
            <div
              key={key}
              className="lg:mt-0 mt-12 flex items-center justify-center flex-col"
            >
              <div className="flex gap-3 items-center">
                <data.icon className="text-7xl text-added-yellow" />
                <div className="block text-center">
                  <p className="text-3xl text-white-primary font-semibold">
                    {data.count}
                  </p>
                  <p className="text-xl text-added-yellow">{data.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistic;
