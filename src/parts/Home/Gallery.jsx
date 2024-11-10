import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchData } from "../../helpers/fetch";
import SectionTitle from "../../components/SectionTitle";

export default function GallerySlider({ id }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const response = await fetchData("/galleries");
        setImages(response.data);
      } catch (e) {
        console.error("Failed to fetch images", e);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    autoplay: true,
    arrows: true,
  };

  return (
    <div id={id}>
      <div className="mt-96 lg:mt-64 w-1/2  mx-auto">
        <SectionTitle
          textColor="text-brown-primary"
          color="bg-added-green"
          position="mx-auto"
          textPosition="text-center"
          text="Padang Baru Betunas"
        />
        <div className="mt-10">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <Slider {...settings}>
              {images?.map((image) => (
                <div key={image.id}>
                  <img
                    src={`${import.meta.env.VITE_API_BASE_URL}/storage/${
                      image.picture
                    }`}
                    alt={image.alt}
                    className=" h-[320px] lg:h-[417px]  lg:w-[919px] object-cover object-center  shadow-md"
                  />
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
      <p className="text-justify w-11/12 mx-auto  text-2xl text-brown-primary mt-10 ">
        Padang Baru Betunas menjadi slogan Desa Padang Baru. Betunas sendiri
        merupakan akronim dari “Bersih, Tertib, Utuh, Nasionalis”. Lokasi dari
        Desa Padang Baru yang terletak berdekatan dengan area perkantoran
        Provinsi Kepulauan Bangka Belitung menjadikan Desa Padang Baru sebagai
        wilayah strategis penyanggah Provinsi.
      </p>
    </div>
  );
}
