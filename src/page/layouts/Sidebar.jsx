import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Music, Tv, Radio, Crown, LogOut, Menu, X } from 'lucide-react';
import SidebarItem from '../../components/SidebarItem';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  
  function ProfileIcon() {
    return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" /></svg>;
  }

  return (
    <>
      {/* Toggle Button for Mobile */}
      <div className="lg:hidden p-4 bg-backg1 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">MediaApp</h1>
        <button onClick={toggleSidebar} className="text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Overlay for Mobile */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-40 transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={toggleSidebar}
      />

      {/* Sidebar Panel */}
      <aside
        className={`fixed z-50 top-0 left-0 h-full w-60 bg-backg1 shadow-lg transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 lg:static lg:shadow-none`}
      >
        <div className="p-4">
          <h1 className="text-2xl font-bold text-white hidden lg:block">MediaApp</h1>
        </div>

        <nav className="flex-1">
          <ul>
            <SidebarItem icon={<Tv size={20} />} text="Trendler" to="/" active />
            <SidebarItem icon={<Radio size={20} />} text="Canlı Yayın" to="/live" />
            <SidebarItem icon={<Radio size={20} />} text="Vodcast" to="/vodcast" />
            <SidebarItem icon={<Music size={20} />} text="Müzik" to="/music" />
            <SidebarItem icon={<Crown size={20} />} text="Premium" to="/premium" />
          </ul>
        </nav>
        <div className="mt-4 p-4">
        <h3 className="text-gray-400 text-sm mb-4">Abonelikler</h3>
        <SidebarItem icon={<ProfileIcon />} text="Kültür Kafası" active={false} />
        <SidebarItem icon={<ProfileIcon />} text="Kültür Kafası" active={false} />
        <SidebarItem icon={<ProfileIcon />} text="Kültür Kafası" active={false} />
      </div>

    

        <div className="p-4 mt-auto">
          <Link to="/auth/login" className="flex items-center text-gray-400 hover:text-white">
            <LogOut size={20} className="mr-2" />
            <span>Çıkış Yap</span>
          </Link>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;



