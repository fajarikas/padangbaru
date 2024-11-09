import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const NewsCard = ({ id, document, title, summary, type }) => {
  console.log("NewsCard type:", type);
  const linkPath =
    type === 1 ? `/news/announcements/${id}` : `/news/news/${id}`;
  return (
    <Link to={linkPath} key={id} className=" rounded-xl ">
      <img
        className="w-full rounded-xl h-1/2 object-cover object-center"
        src={`${import.meta.env.VITE_API_BASE_URL}/storage/${document}`}
        alt={title}
      />
      <div className="mt-3">
        <h1 className="text-xl font-semibold text-added-brown">{title}</h1>
        <div
          className="mt-2 text-justify"
          dangerouslySetInnerHTML={{
            __html:
              summary.length > 200
                ? `${summary.substring(0, 200)}...`
                : summary,
          }}
        />
        <div className="mt-3">
          <Link
            to={linkPath}
            className="text-added-green transition duration-150 hover:border-b-2 hover:border-added-green border-b-transparent w-fit flex items-center"
          >
            Selengkapnya <IoMdArrowDropright />
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
