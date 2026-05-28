import React from 'react';
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import RightSidebar from "./RightSidebar";

function MediaPlatform() {
  return (
    <div className="min-h-screen bg-background text-white">
      <div className="flex flex-col lg:flex-row max-w-screen-2xl mx-auto p-4 gap-4">

        {/* Sol Sidebar - artık mobilde de görünür */}
        <aside className="w-full lg:max-w-[200px]">
          <Sidebar />
        </aside>

        {/* Ana içerik */}
        <main className="flex-1">
          <section className="flex flex-col lg:flex-row overflow-hidden">
            <div className="flex-1 p-4">
              <MainContent />
            </div>

            {/* Sağ Sidebar - artık mobilde de görünür */}
            <aside className="w-full lg:max-w-[320px]">
              <RightSidebar />
            </aside>
          </section>
        </main>
      </div>
    </div>
  );
}

export default MediaPlatform;
