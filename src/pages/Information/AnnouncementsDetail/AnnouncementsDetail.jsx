import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../../parts/Information/Header";
import { fetchData } from "../../../helpers/fetch";
import SectionTitle from "../../../components/SectionTitle";
import ReadNews from "../../../parts/Information/ReadNews";

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

      <div className="w-11/12 mx-auto mt-5 flex flex-col items-center pb-10">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="w-full mx-auto flex flex-wrap gap-x-10">
            {announcement && (
              <ReadNews
                textTitle={announcement.title}
                newsDocument={announcement.document}
                newsTitle={announcement.title}
                newsDetail={announcement.detail}
                newsCreatedAt={announcement.created_at}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnnouncementsDetail;
