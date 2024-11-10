import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { fetchData } from "../../helpers/fetch";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import NotFound from "../Information/NotFound";

const Information = ({ id }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newsType, setNewsType] = useState(2);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchData("/news");
        setNews(response.data);
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
    .slice(0, 5);

  return (
    <div id={id} className="mt-16 lg:mt-36 w-11/12 mx-auto text-brown-primary">
      <SectionTitle
        color="bg-added-green"
        position="mx-auto"
        textPosition="text-center"
        text="Informasi Desa Padang Baru"
        textColor="text-brown-primary"
      />

      <p className="text-lg lg:text-2xl mt-5 text-justify">
        Informasi dan pengumuman seputar desa padang baru yang dapat Anda lihat
        dan pelajari.
      </p>

      <div className="mt-8 lg:mt-5">
        <div className="flex items-center justify-between">
          <div className="flex space-x-3 sm:space-x-5 text-base lg:text-xl">
            <button
              className={`border-b-2 hover:border-added-green ${
                newsType === 2 ? "border-added-green" : "border-transparent"
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
                  : "border-transparent"
              }`}
              onClick={() => handleFilter(1)}
            >
              Pengumuman
            </button>
          </div>

          <div>
            <Link
              className="flex hover:border-b-1 hover:border-added-green border-transparent gap-x-2 items-center text-sm lg:text-base"
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
            <div className="flex gap-4 sm:gap-6 lg:gap-12 mt-8 pb-10 px-5 overflow-x-auto">
              {filteredNews && filteredNews.length > 0 ? (
                filteredNews.map((data, key) => (
                  <Link
                    to={
                      data.news_type_id === 2
                        ? `/news/news/${data.id}`
                        : `/news/announcement/${data.id}`
                    }
                    className="bg-white pb-5 w-64 sm:w-72 lg:w-[423px] shadow-xl h-[450px] lg:h-[560px] rounded-xl hover:shadow-md transition-all duration-300 flex-shrink-0"
                    key={key}
                  >
                    <img
                      className="w-full h-40 sm:h-48 lg:h-[287px] object-cover rounded-t-xl"
                      src={`${import.meta.env.VITE_API_BASE_URL}/storage/${
                        data.document
                      }`}
                      alt="News Thumbnail"
                    />
                    <div className="mx-4 sm:mx-5">
                      <p className="font-semibold text-base sm:text-lg lg:text-xl mt-3">
                        {data.title}
                      </p>
                      <div
                        className="mt-2 text-justify text-sm lg:text-base"
                        dangerouslySetInnerHTML={{
                          __html:
                            data.summary.length > 150
                              ? `${data.summary.substring(0, 150)}...`
                              : data.summary,
                        }}
                      />
                    </div>
                    <div className="mx-4 sm:mx-5 mt-2 text-added-green font-semibold flex items-center gap-x-2">
                      Selengkapnya
                      <IoMdArrowDropright />
                    </div>
                  </Link>
                ))
              ) : (
                <NotFound />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Information;
