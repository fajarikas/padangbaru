import React from "react";
import SectionTitle from "../../components/SectionTitle";

const ReadNews = ({
  textTitle,
  newsDocument,
  newsTitle,
  newsDetail,
  newsCreatedAt,
}) => {
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch (error) {
      return "Tanggal tidak valid";
    }
  };

  return (
    <div className="read-news">
      <SectionTitle
        color="bg-added-green"
        position="mr-auto"
        text={textTitle}
        textColor="text-brown-primary"
        textPosition="text-left"
      />

      <div className="mt-10 flex flex-wrap lg:flex-nowrap gap-6">
        <div className="flex-shrink-0 w-full lg:w-1/3 mb-4 lg:mb-0">
          <img
            className="w-full h-auto object-cover rounded-xl"
            src={newsDocument}
            alt={newsTitle}
            onError={(e) => (e.target.src = "/placeholder-image.png")}
          />
        </div>

        <div className="flex-grow w-11/12 lg:w-2/3 text-justify text-xl px-4 lg:px-6">
          <div
            className="mt-5 lg:h-screen lg:overflow-auto"
            dangerouslySetInnerHTML={{
              __html: newsDetail || "<p>Detail berita tidak tersedia.</p>",
            }}
          />
          <div className="text-brown-primary font-light text-sm text-right mt-10">
            <p>Artikel ini dibuat pada {formatDate(newsCreatedAt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadNews;
