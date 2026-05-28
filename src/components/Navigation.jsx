import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Navigation() {
  const navItems = [
    { name: " + ", active: false },
    { name: "Senin için", active: true },
    { name: "Takip", active: false },
    { name: "Öne Çıkanlar", active: false },
    { name: "Tasarım", active: false },
    { name: "Yazılım Geliştirme", active: false },
    { name: "Bilim", active: false }
  ];

  return (
    <nav className="flex items-center border-b border-gray-700 pb-2 mb-6 overflow-x-auto">
      {navItems.map((item, index) => (
        <button
          key={index}
          className={`px-3 py-2 mr-4 whitespace-nowrap ${item.active ? "text-blue-400 border-b-2 border-blue-400" : "text-gray-400"
            }`}
        >
          {item.name}
        </button>
      ))}
      <button className="text-gray-400 p-2">
        <ChevronRight size={20} />
      </button>
    </nav>
  );
}