import { useState } from "react";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";
import EducationPlatform from "../../components/EducationPlatform";
import LiveNavigation from "../../components/LiveNavigation";
import { categories, subcategories } from "../../data/liveStream";
import LiveStreamPlatform from "../../components/LiveStreamPlatform";

export default function LiveStreamPlatformPage() {
  const [activeSubcategories, setActiveSubcategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  const handleSubcategoryClick = (subcategory) => {
    setActiveSubcategories((prev) =>
      prev.includes(subcategory)
        ? prev.filter((item) => item !== subcategory)
        : [...prev, subcategory]
    );
  };

  return (
    <div className="min-h-screen bg-background text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4">
        {/* Sol Sidebar (mobilde görünür) */}
        <aside className="w-full lg:max-w-[200px]">
          <Sidebar />
        </aside>
        

        {/* Ana içerik */}
        <main className="flex-1 lg:mr-4">
          <section className="flex flex-col flex-1 overflow-hidden">
            <div className="flex-1 p-4 space-y-4">
              {/* Üst Navigasyon */}
              <LiveNavigation
                activeCategory={activeCategory}
                onCategoryClick={setActiveCategory}
                categories={categories}
                subcategories={subcategories}
                onSubcategoryClick={handleSubcategoryClick}
              />

              {/* Canlı Yayın Platformu */}
              <div className="flex-1 p-4 bg-background rounded-lg shadow-lg">
                <LiveStreamPlatform /> 
              </div>

              {/* Alt Kategoriler */}
              {activeSubcategories.length > 0 && (
                <div className="mt-4 px-4">
                  <h2 className="text-xl font-semibold text-gray-300">Alt Kategoriler</h2>
                  <ul className="space-y-2">
                    {activeSubcategories.map((subcategory, index) => (
                      <li key={index} className="text-sm text-gray-400">
                        {subcategory}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        </main>

        {/* Sağ Sidebar */}
         {/*(mobilde görünür) */}
            <aside className="w-full lg:max-w-[200px]">
               <RightSidebar/>
            </aside>
      </div>
    </div>
  );
}