import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../layouts/Sidebar";
import NavigationTabs from "../../components/NavigationTabs";
import ListenNowSidebar from "./ListenNowSidebar";
import Player from "../../components/Player";
import ContentSection from "../../components/ContentSection";



export default function MusicPlatformPage() {
  const [currentTab, setCurrentTab] = useState("Tümü");
  const navigate = useNavigate();

  const handleClick = (songId) => {
    navigate(`/music/${songId}`); 
    console.log(`Navigating to song with ID: ${songId}`);
  };

  return (
    <div className="min-h-screen bg-background text-white flex flex-col">
      <div className="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 gap-4">

        {/* Sol Sidebar */}
        <aside className="w-full lg:w-1/4 flex-shrink-0">
          <Sidebar />
        </aside>

        {/* Ana içerik ve sağ sidebar */}
        <main className="flex-1 flex flex-col overflow-hidden">
          <section className="flex-1 flex flex-col lg:flex-row overflow-hidden">
            {/* Ana içerik */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
              <NavigationTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
              <ContentSection title="Yakın Zamanda Dinlediklerin" onSongClick={handleClick} />
              <ContentSection title="To get you started" onSongClick={handleClick} />
              <ContentSection title="Try something else" onSongClick={handleClick} />
              <ContentSection title="Bugünün Hitleri" onSongClick={handleClick} />
              <ContentSection title="Yeniler" withTimeStamp={true} onSongClick={handleClick} />
              
            </div>

            {/* Sağ Sidebar */}
            <aside className="w-full lg:w-1/4 flex-shrink-0">
              <ListenNowSidebar />
            </aside>
          </section>
        </main>
      </div>

      {/* Sticky Player */}
      <div className="sticky bottom-0 z-30 w-full">
        <Player />
      </div>
    </div>
  );
}

