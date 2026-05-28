import { useState } from "react";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";
import EducationPlatform from "../../components/EducationPlatform";
import LiveNavigation from "../../components/LiveNavigation";
import { categories, subcategories } from "../../data/liveStream";

export default function EducationPlatformPage() {
  const [activeSubcategories, setActiveSubcategories] = useState([]);

  return (
    <div className="min-h-screen bg-background text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
         {/* Sol Sidebar (mobilde görünür) */}
         <aside className="w-full lg:max-w-[200px]">
          <Sidebar />
        </aside>
        
        {/* Ana içerik */}
        <main className="flex-1 lg:mr-4">
          <section className="flex flex-col flex-1 overflow-hidden">
            {/* Eğitim Platformu */}
            <div className="flex-1 p-4">
              <EducationPlatform /> {/* Eğitim içeriğini sağlayan ana bileşen */}
            </div>

            {/* Alt Kategoriler */}
            {activeSubcategories.length > 0 && (
              <div className="mt-4 px-4">
                <h2 className="text-xl font-semibold text-gray-300">Alt Kategoriler</h2>
                <ul>
                  {activeSubcategories.map((subcategory, index) => (
                    <li key={index} className="text-sm text-gray-400">
                      {subcategory}
                    </li>
                  ))}
                </ul>
              </div>
            )}
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