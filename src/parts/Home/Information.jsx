import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { fetchData } from "../../helpers/fetch";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";

const Information = ({ id }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newsType, setNewsType] = useState(2);

  const handleClickMenu = () => {
    // console.log("clicked");
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchData("/news");
        setNews(response.data);
        return news;
      } catch (e) {
        console.error("Failed to fetch news", e);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleFilter = (type) => {
    setNewsType(type);
  };

  const filteredNews = news
    .filter((item) => item.news_type_id === newsType)
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 3);
  // console.log("data", news);

  return (
    <div id={id} className="mt-36 w-11/12 mx-auto text-brown-primary">
      <SectionTitle
        color="bg-added-green"
        position="mx-auto"
        textPosition="text-center"
        text="Informasi Desa Padang Baru"
        textColor="text-brown-primary"
      />

      <p className="text-2xl mt-5">
        Informasi dan pengumuman seputar desa padang baru yang dapat anda lihat
        dan pelajari.
      </p>

      <div className="mt-5">
        <div className="flex items-center justify-between">
          <div className="flex space-x-5 text-xl">
            <button
              className={`border-b-2 hover:border-added-green ${
                newsType === 2 ? "border-added-green" : "border-none"
              }`}
              onClick={() => handleFilter(2)}
            >
              Berita Desa
            </button>
            <p> | </p>
            <button
              className={`border-b-2 ${
                newsType === 1
                  ? "border-added-green hover:border-added-green"
                  : "border-none"
              }`}
              onClick={() => handleFilter(1)}
            >
              Pengumuman
            </button>
          </div>

          <div>
            <Link
              className="flex gap-x-2 items-center"
              to={newsType === 2 ? "/news/news" : "/news/announcements"}
            >
              Lebih banyak
              <IoMdArrowDropright />
            </Link>
          </div>
        </div>

        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="flex gap-12 mt-8 pb-5">
              {filteredNews.map((data, key) => (
                <Link
                  to={
                    data.news_type_id === 2
                      ? `/news/news/${data.id} `
                      : `/news/announcement/${data.id}`
                  }
                  className="bg-white pb-5 w-[423px] shadow-xl h-[560px] rounded-xl hover:shadow-md transition-all duration-300"
                  key={key}
                >
                  <img
                    className="w-[423px] h-[287px] object-cover rounded-t-xl"
                    src={`${import.meta.env.VITE_API_BASE_URL}/storage/${
                      data.document
                    }`}
                  />
                  <div className="mx-5">
                    <p className="font-semibold text-xl mt-2 ">{data.title}</p>
                    <div
                      className="mt-2 text-justify"
                      dangerouslySetInnerHTML={{
                        __html:
                          data.summary.length > 200
                            ? `${data.summary.substring(0, 200)}...`
                            : data.summary,
                      }}
                    />
                  </div>

                  <div className="mx-5 mt-2 text-added-green font-semibold flex  items-center gap-x-2">
                    Selengkapnya
                    <IoMdArrowDropright />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Information;
