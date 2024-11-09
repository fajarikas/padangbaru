import React, { act, useState } from "react";
import SectionTitle from "../../components/SectionTitle/index";
import { visionmission } from "../../dummy/visionmission";

const VisionMission = ({ id }) => {
  const [menu, setMenu] = useState(false);
  const [activeVisionMission, setActiveVisionMission] = useState(
    visionmission[0]
  );

  const handleButtonClick = (service) => {
    setActiveVisionMission(service);
    setMenu(false);
  };

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div id={id} className="relative pt-10 z-20">
      <img
        className="absolute inset-0 w-full  object-cover -z-10 "
        src="/images/content/visimisi.jpg"
        alt=""
      />
      <div className="relative w-11/12 mx-auto">
        <div className="pt-10">
          <SectionTitle
            color="bg-added-yellow"
            position="ml-auto"
            text="Visi Misi Desa Padang Baru"
            textColor="text-white-primary"
            textPosition="text-right"
          />

          <div className="mt-5">
            {visionmission.map((data, key) => (
              <React.Fragment key={key}>
                <button
                  onClick={() => handleButtonClick(data)}
                  className={`mr-2 px-4 py-1    text-3xl text-added-yellow   ${
                    activeVisionMission?.id === data.id
                      ? "border-b-2 border-white "
                      : "hover:underline"
                  }`}
                >
                  {data.title}
                </button>

                {key < visionmission.length - 1 && (
                  <span className="text-white">|</span>
                )}
              </React.Fragment>
            ))}

            {activeVisionMission && (
              <div className="">
                <p className="mt-10 text-white-primary text-2xl">
                  {Array.isArray(activeVisionMission.content) ? (
                    <>
                      <ol className="">
                        {activeVisionMission.content.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ol>
                    </>
                  ) : (
                    <>
                      <p>{activeVisionMission.content}</p>
                    </>
                  )}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
