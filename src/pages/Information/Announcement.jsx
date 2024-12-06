import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import Header from "../../parts/Information/Header";
import NewsCard from "../../parts/Information/NewsCard";
import Search from "../../components/Search/Search";
import Pagination from "../../components/Pagination";
import NotFound from "../../parts/Information/NotFound";
import { news as newsData } from "../../dummy/news";

const News = () => {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;

  useEffect(() => {
    const filteredNewsData = newsData.filter((item) => item.news_type_id === 1);
    setNews(filteredNewsData);
  }, []);

  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const lastPage = Math.ceil(filteredNews.length / itemsPerPage);

  const currentNews = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="text-brown-primary">
      <Header
        color="bg-added-yellow"
        position="mr-auto"
        text="Kabar Desa Padang Baru"
        textColor="text-white-primary"
        textPosition="text-left"
        list={[{ url: "/", name: "Home" }, { name: "Kabar Desa" }]}
      />

      <div className="w-11/12 mx-auto mt-10 mb-5">
        <SectionTitle
          color="bg-added-green"
          position="mr-auto"
          text="Berita Paling Baru Seputar Padang Baru"
          textColor="text-added-brown"
        />
        <Search
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reset ke halaman 1 saat pencarian
          }}
          placeholder="Cari berita..."
          value={searchTerm}
        />
      </div>

      <div className="w-11/12 mx-auto mt-10">
        {currentNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentNews.map((item) => (
              <NewsCard
                key={item.id}
                document={item.document}
                id={item.id}
                summary={item.summary}
                title={item.title}
                type={item.news_type_id}
              />
            ))}
          </div>
        ) : (
          <div className="flex justify-center">
            <NotFound />
          </div>
        )}
      </div>

      {filteredNews.length > itemsPerPage && (
        <div className="mt-5 flex justify-center">
          <Pagination
            currentPage={currentPage}
            lastPage={lastPage}
            onPrevious={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            onNext={() =>
              setCurrentPage((prev) => Math.min(prev + 1, lastPage))
            }
          />
        </div>
      )}
    </div>
  );
};

export default News;
