import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import Header from "../../parts/Information/Header";
import { fetchData } from "../../helpers/fetch";
import NewsCard from "../../parts/Information/NewsCard";
import Search from "../../components/Search/Search";
import Pagination from "../../components/Pagination";

const Announcement = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const loadData = async (page = 1) => {
    setLoading(true);
    try {
      const response = await fetchData(
        `/news?filter[news_type_id]=1&page=${page}`
      );
      setNews(response.data);
      setCurrentPage(response.meta.current_page);
      setLastPage(response.meta.last_page);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadData(currentPage);
  }, [currentPage]);

  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="text-brown-primary">
      <Header
        color="bg-added-yellow"
        position="mr-auto"
        text="Pengumuman Desa Padang Baru"
        textColor="text-white-primary"
        textPosition="text-left"
        list={[{ url: "/", name: "Home" }, { name: "Pengumuman" }]}
      />
      <div className="w-11/12 mx-auto mt-10 mb-5">
        <SectionTitle
          color="bg-added-green"
          position="mr-auto"
          text="Pengumuman Terbaru Desa Padang Baru"
          textColor="text-added-brown"
        />
        <Search
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Cari pengumuman..."
          value={searchTerm}
        />
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8 mt-10">
          {filteredNews.map((item) => (
            <NewsCard
              document={item.document}
              id={item.id}
              summary={item.summary}
              title={item.title}
              key={item.id}
              type={item.news_type_id}
            />
          ))}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        lastPage={lastPage}
        onPrevious={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        onNext={() => setCurrentPage((prev) => Math.min(prev + 1, lastPage))}
      />
    </div>
  );
};

export default Announcement;