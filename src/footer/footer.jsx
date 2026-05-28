import React from 'react'
import { useLocation } from 'react-router-dom';

export default function Footer() {
  const { pathname } = useLocation();

  const disableFooterRoutes = [
    "/login",
    "/register",
    "/landing",
    "/music"
  ];

  // Eğer pathname, disableFooterRoutes içinde varsa veya /auth ile başlıyorsa footer gösterme
  const shouldHideFooter =
    disableFooterRoutes.includes(pathname) || pathname.startsWith("/auth");

  if (shouldHideFooter) return null;

  return (
    <footer className="bg-navbar text-white text-center py-4">
      <p>&copy; 2025 Vodcast. Tüm hakları saklıdır.</p>
    </footer>
  );
}