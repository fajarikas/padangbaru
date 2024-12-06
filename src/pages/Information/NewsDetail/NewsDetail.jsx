import React, { useEffect, useState } from "react";
import Header from "../../../parts/Information/Header";
import { useLocation } from "react-router-dom";
import ReadNews from "../../../parts/Information/ReadNews";
import { news as newsData } from "../../../dummy/news";

const NewsDetail = () => {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const id = parseInt(location.pathname.split("/").pop(), 10);

  useEffect(() => {
    console.log("News ID received:", id);
    const foundNews = newsData.find((item) => item.id === id);
    console.log("Found News:", foundNews);

    if (foundNews) {
      setNews(foundNews);
    } else {
      setError("Berita tidak ditemukan.");
    }

    setLoading(false);
  }, [id]);

  return (
    <div>
      <Header
        color="bg-added-yellow"
        position="mr-auto"
        text="Kabar Desa Padang Baru"
        textColor="text-white-primary"
        textPosition="text-left"
        list={[
          { url: "/", name: "Home" },
          { url: "/news/news", name: "Kabar Desa" },
          { url: `news/news/${id}`, name: news?.title || "Loading..." },
        ]}
      />

      <div className="w-11/12 mx-auto mt-5 flex flex-col items-center pb-10">
        {loading ? (
          <div className="text-center text-lg">Loading...</div>
        ) : error ? (
          <div className="text-red-500 text-lg">{error}</div>
        ) : (
          <ReadNews
            textTitle={news.title}
            newsDocument={news.document}
            newsTitle={news.title}
            newsDetail={news.content}
            newsCreatedAt={news.created_at}
          />
        )}
      </div>
    </div>
  );
};

export default NewsDetail;
