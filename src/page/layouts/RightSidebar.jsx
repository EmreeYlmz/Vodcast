import React, { useState } from 'react';
import { X, Menu } from 'lucide-react';
import ContinueWatchingCard from '../../components/ContinueWatchingCard';
import anasayfafoto from "../../assets/images/anasayfaicerik.jpg";
import anasayfafoto1 from "../../assets/images/anasayfaicerik1.jpg";
import anasayfafoto2 from "../../assets/images/anasayfaicerik2.jpg";
import anasayfafoto3 from "../../assets/images/anasayfaicerik3.jpg";

function RightSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const watchItems = [
    {
      title: "Amazon: Dünyanın Nefesi",
      type: "Belgesel",
      image: anasayfafoto,
      creator: "Doğa Kuşağı",
      stats: "60 B Görüntülenme | 2 ay önce",
      progress: 75
    },
    {
      title: "Amazon: Dünyanın Nefesi",
      type: "Belgesel",
      image: anasayfafoto1,
      creator: "Doğa Kuşağı",
      stats: "60 B Görüntülenme | 2 ay önce",
      progress: 45
    },
    {
      title: "Amazon: Dünyanın Nefesi",
      type: "Belgesel",
      image: anasayfafoto2,
      creator: "Doğa Kuşağı",
      stats: "60 B Görüntülenme | 2 ay önce",
      progress: 30
    },
    {
      title: "Amazon: Dünyanın Nefesi",
      type: "Belgesel",
      image: anasayfafoto3,
      creator: "Doğa Kuşağı",
      stats: "60 B Görüntülenme | 2 ay önce",
      progress: 65
    }
  ];

  return (
    <>
      {/* Toggle Button for Mobile */}
      <div className="lg:hidden p-4 bg-backg1 flex justify-between items-center">
        <h2 className="text-lg font-bold text-white">İzlemeye Devam Et</h2>
        <button onClick={toggleSidebar} className="text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Overlay for Mobile */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-40 transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={toggleSidebar}
      />

      {/* Sidebar Panel */}
      <aside
        className={`fixed z-50 top-0 right-0 h-full w-60 bg-backg1 shadow-lg transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0 lg:static lg:shadow-none`}
      >
        <div className="p-4">
          <h2 className="font-medium mb-4 text-lg text-white hidden lg:block">İzlemeye Devam Et</h2>
          <div className="space-y-4">
            {watchItems.map((item, index) => (
              <ContinueWatchingCard
                key={index}
                title={item.title}
                type={item.type}
                image={item.image}
                creator={item.creator}
                stats={item.stats}
                progress={item.progress}
              />
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}

export default RightSidebar;
