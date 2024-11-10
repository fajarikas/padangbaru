import React, { useEffect, useState } from "react";
import Header from "../../../parts/Information/Header";
import { useLocation } from "react-router-dom";
import { fetchData } from "../../../helpers/fetch";
import ReadNews from "../../../parts/Information/ReadNews";

const NewsDetail = () => {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation().pathname;
  const id = location.split("/").pop();

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetchData(`news/${id}`);
        setNews(response.data);
      } catch (e) {
        console.error("Failed to fetch data", e);
        setError("Failed to load news data.");
      } finally {
        setLoading(false);
      }
    };
    loadData();
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
          <div className="w-full mx-auto flex flex-wrap gap-x-10">
            {news && (
              <ReadNews
                textTitle={news.title}
                newsDocument={news.document}
                newsTitle={news.title}
                newsDetail={news.detail}
                newsCreatedAt={news.created_at}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsDetail;
