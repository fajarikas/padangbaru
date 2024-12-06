import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { media } from "../../dummy/media"; // Import data dummy
import { Link } from "react-router-dom";

const Media = ({ id }) => {
  const [socialMedia, setSocialMedia] = useState([]);
  const [activeSocialMedia, setActiveSocialMedia] = useState(null);

  useEffect(() => {
    // Menggunakan data dummy
    if (media && media.length > 0) {
      setSocialMedia(media);
      setActiveSocialMedia(media[0]); // Set default media pertama
    }
  }, []);

  const handleActiveSocialMedia = (social) => {
    setActiveSocialMedia(social);
  };

  return (
    <div id={id} className="mt-10 h-screen bg-white-primary text-brown-primary">
      <div className="absolute">
        <img className="h-screen" src="/images/content/bgmedia.jpg" alt="" />
      </div>
      <div className="relative pt-20 w-11/12 mx-auto">
        <SectionTitle
          color="bg-added-yellow"
          position="mx-auto"
          text="Telusuri Desa Padang Baru"
          textColor="text-white-primary"
          textPosition="text-center"
        />

        <div className="bg-white-primary px-10 py-10 rounded-lg mt-5">
          <p className="text-lg font-medium">
            Jelajahi Desa Padang Baru di Sosial Media
          </p>
          <div className="flex space-x-4 mt-4">
            {socialMedia?.map((social) => (
              <button
                key={social.id}
                onClick={() => handleActiveSocialMedia(social)}
                className={`border-b-2 px-4 py-2 flex items-center font-semibold transition-colors duration-150 border-transparent`}
                style={{
                  borderColor:
                    activeSocialMedia && activeSocialMedia.id === social.id
                      ? social.color
                      : "transparent",
                  color: social.color,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = social.color)
                }
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    activeSocialMedia && activeSocialMedia.id === social.id
                      ? social.color
                      : "transparent";
                }}
              >
                <img
                  src={social.logo} // Menggunakan path ke folder dummy
                  alt={`${social.name} logo`}
                  className="mr-2 w-6 h-6 object-contain"
                />
                {social.name}
              </button>
            ))}
          </div>

          {activeSocialMedia && (
            <a
              href={`${activeSocialMedia.account}`}
              target="__blank"
              rel="noopener noreferrer"
              className="hover:shadow-lg transition-all duration-150 p-4 bg-white shadow-2xl justify-center w-10/12 mx-auto my-10 py-10 block lg:flex items-center lg:space-x-4 rounded-2xl"
            >
              <div className="flex lg:inline justify-center">
                <img
                  src={activeSocialMedia.logo} // Menggunakan path ke folder dummy
                  alt={`${activeSocialMedia.name} logo`}
                  className="w-[3rem] lg:w-[7rem] object-contain object-center"
                />
              </div>
              <p className="font-semibold text-lg mt-4 lg:mt-0 lg:text-3xl text-center">
                {activeSocialMedia.name} Desa Padang Baru
              </p>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Media;
