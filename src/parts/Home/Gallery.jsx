import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { gallery } from "../../dummy/gallery";
import SectionTitle from "../../components/SectionTitle";

export default function GallerySlider({ id }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (gallery && gallery.length > 0) {
      setImages(gallery);
    }
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
      <div className="mt-96 lg:mt-64 w-1/2 mx-auto">
        <SectionTitle
          textColor="text-brown-primary"
          color="bg-added-green"
          position="mx-auto"
          textPosition="text-center"
          text="Padang Baru Betunas"
        />
        <div className="mt-10">
          {images.length === 0 ? (
            <p>Loading...</p>
          ) : (
            <Slider {...settings}>
              {images?.map((image) => (
                <div key={image.id}>
                  <img
                    src={image.picture}
                    alt={image.alt}
                    className="h-[320px] lg:h-[417px] lg:w-[919px] object-cover object-center shadow-md"
                  />
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
      <p className="text-justify w-11/12 mx-auto text-2xl text-brown-primary mt-10">
        Padang Baru Betunas menjadi slogan Desa Padang Baru. Betunas sendiri
        merupakan akronim dari “Bersih, Tertib, Utuh, Nasionalis”. Lokasi dari
        Desa Padang Baru yang terletak berdekatan dengan area perkantoran
        Provinsi Kepulauan Bangka Belitung menjadikan Desa Padang Baru sebagai
        wilayah strategis penyanggah Provinsi.
      </p>
    </div>
  );
}
