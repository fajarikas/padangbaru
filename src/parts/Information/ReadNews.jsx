import React from "react";
import SectionTitle from "../../components/SectionTitle";

const ReadNews = ({
  textTitle,
  newsDocument,
  newsTitle,
  newsDetail,
  newsCreatedAt,
}) => {
  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="">
      <SectionTitle
        color="bg-added-green"
        position="mr-auto"
        text={textTitle}
        textColor="text-brown-primary"
        textPosition="text-left"
      />
      <div className="mt-10 flex flex-wrap lg:flex-nowrap gap-6">
        {/* Image Section */}
        <div className="flex-shrink-0 w-full lg:w-1/3 mb-4 lg:mb-0">
          <img
            className="w-full h-screen object-cover rounded-xl"
            src={`${import.meta.env.VITE_API_BASE_URL}/storage/${newsDocument}`}
            alt={newsTitle}
          />
        </div>

        {/* Text Section */}
        <div className="flex-grow w-11/12 lg:w-2/3 text-justify text-xl px-4 lg:px-6">
          <div
            className="mt-5 lg:h-screen lg:overflow-auto"
            dangerouslySetInnerHTML={{
              __html: newsDetail, // Remove the extra braces
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
