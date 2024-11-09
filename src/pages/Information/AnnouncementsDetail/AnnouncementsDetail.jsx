import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../../parts/Information/Header";
import { fetchData } from "../../../helpers/fetch";
import SectionTitle from "../../../components/SectionTitle";

const AnnouncementsDetail = () => {
  const [announcement, setAnnouncement] = useState();
  const [loading, setLoading] = useState(true); // Set loading default true

  const location = useLocation().pathname;
  const id = location.split("/").pop();

  // Fungsi untuk memformat tanggal
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const response = await fetchData(`news/${id}`);
        setAnnouncement(response.data);
      } catch (e) {
        console.error("Failed to fetch data", e);
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
        text="Pengumuman Padang Baru"
        textColor="text-white-primary"
        textPosition="text-left"
        list={[
          { url: "/", name: "Home" },
          { url: "/news/announcements", name: "Pengumuman" },
          {
            // url: `news/announcement/${id}`,
            name: announcement?.title || "Loading...",
          },
        ]}
      />

      <div className="w-11/12 mx-auto mt-10 flex flex-col items-center">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="w-full max-w-5xl mx-auto">
            {announcement && (
              <div>
                <SectionTitle
                  color="bg-added-green"
                  position="mr-auto"
                  text={announcement.title}
                  textColor="text-added-brown"
                />

                <div className="relative mt-10">
                  <img
                    className="w-full rounded-xl object-cover"
                    src={`${import.meta.env.VITE_API_BASE_URL}/storage/${
                      announcement.document
                    }`}
                    alt={announcement.title}
                  />
                  <div className="absolute bottom-2 right-2 text-brown-primary font-light text-sm bg-white bg-opacity-75 px-2 py-1 rounded">
                    {formatDate(announcement.created_at)}
                  </div>
                </div>

                <div
                  className="mt-5 text-justify text-xl"
                  dangerouslySetInnerHTML={{
                    __html: announcement.detail,
                  }}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnnouncementsDetail;
