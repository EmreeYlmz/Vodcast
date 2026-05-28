import React from 'react';
import { Link } from 'react-router-dom';

function SidebarItem({ icon, text, to = "#", active = false }) {
  return (
    <li>
      <Link
        to={to}
        className={`flex items-center px-4 py-2 text-sm text-gray-300 transition 
          hover:bg-backg2 hover:text-white 
          ${active ? 'bg-backg2 text-white' : ''}`}
      >
        <span className="mr-3">{icon}</span>
        {text}
      </Link>
    </li>
  );
}

export default SidebarItem;