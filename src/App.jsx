import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./parts/Navbar";
import Footer from "./parts/Footer";
import Home from "./Pages/Home";
import News from "./pages/Information/News";
import NewsDetail from "./pages/Information/NewsDetail/NewsDetail";
import Announcements from "./pages/Information/Announcement";
import AnnouncementsDetail from "./pages/Information/AnnouncementsDetail/AnnouncementsDetail";

function App() {
  return (
    <>
      <Router>
        <div className="w-full bg-[#FBFBFB] font-sodo-sans">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/news/news/:id" element={<NewsDetail />} />
            <Route
              path="/news/announcements/:id"
              element={<AnnouncementsDetail />}
            />
            <Route path="/news/news" element={<News />} />
            <Route path="/news/announcements" element={<Announcements />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
