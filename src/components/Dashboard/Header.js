// src/components/Dashboard/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <header className="h-[60px] bg-[#F7F2F2] flex items-center justify-end px-10 shadow font-montserrat">
      <span className="mr-4 text-[#0F0F0F] font-semibold">{user.email || 'Invitado'}</span>
      <div className="w-10 h-10 rounded-full bg-[#FF637D] flex items-center justify-center text-white font-bold shadow mr-4">
        {user.email ? user.email[0].toUpperCase() : 'I'}
      </div>
      <button
        onClick={handleLogout}
        className="text-[#E60023] font-semibold hover:underline"
      >
        Cerrar sesión
      </button>
    </header>
  );
}
