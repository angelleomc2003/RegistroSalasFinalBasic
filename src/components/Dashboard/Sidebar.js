import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/rooms', label: 'Salas' },
  { to: '/users', label: 'Usuarios' },
  { to: '/computers', label: 'Computadores' },
  { to: '/attendance', label: 'Asistencias' },
];

export default function Sidebar() {
  const location = useLocation();
  return (
    <aside className="w-[250px] h-screen bg-[#0F0F0F] text-white flex flex-col py-8 shadow-lg">
      <div className="text-3xl font-bold px-8 mb-10 tracking-tight text-[#E60023]">RegistroSalas</div>
      <nav className="flex-1">
        {links.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={`block px-8 py-3 rounded-l-full mb-2 font-semibold transition ${
              location.pathname === link.to
                ? 'bg-[#E60023] text-white shadow'
                : 'hover:bg-[#FF637D] hover:text-white'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}