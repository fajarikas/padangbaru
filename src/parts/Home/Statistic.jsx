import React, { useState } from "react";
import { statistic } from "../../dummy/statistic";
import SectionTitle from "../../components/SectionTitle";

const Statistic = ({ id }) => {
  return (
    <div id={id} className="mt-16 mx-auto">
      <div className="absolute">
        <img
          className="w-screen"
          src="/images/content/statisticbg.png"
          alt=""
        />
      </div>
      <div className="relative  mx-auto">
        <div className="pt-16">
          <SectionTitle
            color="bg-added-yellow"
            position="mx-auto"
            text="Desa Padang Baru dalam Angka"
            textColor="text-white-primary"
            textPosition="text-center"
          />
          <div className="flex justify-center gap-x-14 mt-14">
            {statistic.map((data, key) => (
              <div
                key={key}
                className="  flex items-center justify-center flex-col -gap-x-24"
              >
                <div className="flex gap-3 items-center">
                  <data.icon className="text-7xl text-added-yellow" />
                  <div className="block">
                    <p className="text-3xl text-white-primary font-semibold ">
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
    </div>
  );
};

export default Statistic;
