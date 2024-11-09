import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from "../parts/Home/Header";
import History from "../parts/Home/History";
import Gallery from "../parts/Home/Gallery";
import VisionMission from "../parts/Home/VisionMission";
import Statistic from "../parts/Home/Statistic";
import Information from "../parts/Home/Information";
import Functionary from "../parts/Home/Functionary";
import Media from "../parts/Home/Media";
import Footer from "../parts/Footer";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("section");
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.search]);

  return (
    <div className="">
      <Header id="header" />
      <div className="relative">
        <History id="history" />
        <VisionMission id="visionmission" />
        <Gallery id="gallery" />
        <Statistic id="statistic" />
        <Information id="information" />
        <Functionary id="functionary" />
        <Media id="media" />
      </div>
    </div>
  );
};

export default Home;
