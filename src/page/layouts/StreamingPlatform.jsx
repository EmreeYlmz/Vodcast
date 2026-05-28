import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";
import LiveStreamList from "../../components/LiveStreamList";
import { streams, subcategories, categories } from "../../data/liveStream";
import LiveNavigation from "../../components/LiveNavigation";

export default function StreamingPlatform() {
  const [activeCategory, setActiveCategory] = useState("all");
  const navigate = useNavigate();

  const handleSubcategoryClick = (subcategoryId) => {
    if (subcategoryId === "Yazılım Geliştirme") {
      navigate("/alt-kategori/Yazilim-Gelistirme");
    } else {
      navigate(`/subcategory/${subcategoryId}`);
    }
  };

  const filteredStreams =
    activeCategory === "all"
      ? streams
      : streams.filter((stream) => stream.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-white">
      <div className="flex flex-col lg:flex-row max-w-screen-2xl mx-auto p-4 gap-4">

        {/* Sol Sidebar (mobil uyumlu) */}
        <aside className="w-full lg:max-w-[250px]">
          <Sidebar />
        </aside>

        {/* Ana içerik ve sağ sidebar */}
        <main className="flex-1">
          <section className="flex flex-col lg:flex-row overflow-hidden">
            {/* Ana içerik */}
            <div className="flex-1 p-4 space-y-4">
              <LiveNavigation
                activeCategory={activeCategory}
                onCategoryClick={setActiveCategory}
                categories={categories}
                subcategories={subcategories}
                onSubcategoryClick={handleSubcategoryClick}
              />

              <LiveStreamList filteredStreams={filteredStreams} />
            </div>

            {/* Sağ Sidebar (mobil uyumlu) */}
            <aside className="w-full lg:max-w-[300px]">
              <RightSidebar />
            </aside>
          </section>
        </main>
      </div>
    </div>
  );
}
