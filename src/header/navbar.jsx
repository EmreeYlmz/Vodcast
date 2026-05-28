import React, { useState } from 'react';
import { FaMicrophone, FaBell, FaCog, FaUser, FaFileAlt, FaBars, FaTimes } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import navbarico from '../assets/images/navbarico.svg';

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const disableFooterRoutes = [
    "/login",
    "/register",
    "/",
  ];

  // Eğer pathname, disableFooterRoutes içinde varsa veya /auth ile başlıyorsa footer gösterme
  const shouldHideFooter =
    disableFooterRoutes.includes(pathname) || pathname.startsWith("/auth");

  if (shouldHideFooter) return null;

  const handleLogoClick = () => {
    navigate('/home');
  };


  return (
    <header className="bg-navbar text-white fixed top-0 w-full z-50 shadow-md">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        {/* 🔹 Sol: navbarico */}
        <img
          src={navbarico}
          alt="navbarico"
          className="w-6 h-6 cursor-pointer mr-4 sm:mr-60"
          onClick={handleLogoClick}
        />

        {/* 🔹 Orta: Logo + Search */}
        <div className="flex items-center flex-1">
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-10 sm:w-14 sm:h-12 cursor-pointer mr-2"
            onClick={handleLogoClick}
          />

          {/* Mobil Search */}
          <div className="flex md:hidden items-center bg-gray-800 rounded-md px-2 py-1 w-[140px] ml-2">
            <input
              type="text"
              placeholder="Ara..."
              className="bg-transparent outline-none text-white flex-1 placeholder-gray-400 text-sm"
            />
            <FaMicrophone className="text-gray-400 text-sm ml-1 cursor-pointer" />
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center bg-gray-800 rounded-md px-3 py-1 w-60 ml-2">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-white flex-1 placeholder-gray-400"
            />
            <FaMicrophone className="text-gray-400 cursor-pointer ml-2" />
          </div>
        </div>

        {/* 🔹 Sağ Menü */}
        <div className="hidden md:flex items-center space-x-6 pr-[75px]">
          <FaFileAlt
            className="cursor-pointer text-gray-200 hover:text-white"
            onClick={() => navigate('/blog')}
          />
          <FaBell
            className="cursor-pointer text-gray-200 hover:text-white"
            onClick={() => navigate('/blogs')}
          />
          <FaCog
            className="cursor-pointer text-gray-200 hover:text-white"
            onClick={() => navigate('/createlive')}
          />
          <FaUser
            className="cursor-pointer text-gray-200 hover:text-white"
            onClick={() => navigate('/profile')}
          />
        </div>

        {/* 🔹 Mobil Menü Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* 🔹 Mobil Açılır Menü */}
      {menuOpen && (
        <div className="md:hidden bg-navbar text-white px-6 pb-4 space-y-4">
          <div className="flex flex-col space-y-2">
            <button onClick={() => navigate('/blog')} className="text-left">Belgeler</button>
            <button onClick={() => navigate('/blogs')} className="text-left">Bildirimler</button>
            <button onClick={() => navigate('/createlive')} className="text-left">Ayarlar</button>
            <button onClick={() => navigate('/profile')} className="text-left">Profil</button>
          </div>
        </div>
      )}
    </header>
  );
}
