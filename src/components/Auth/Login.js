// src/components/Auth/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/rooms');
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F2F2] font-montserrat">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full bg-[#E60023] flex items-center justify-center text-white text-3xl font-bold mb-2 shadow-lg">
            <span>RS</span>
          </div>
          <h2 className="text-2xl font-bold text-[#0F0F0F] mb-1">Bienvenido a RegistroSalas</h2>
          <p className="text-[#FF637D] font-semibold">Inicia sesión para continuar</p>
        </div>
        {error && <div className="text-red-600 text-sm mb-4 text-center">{error}</div>}
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label className="block text-[#0F0F0F] mb-2 font-semibold">Email</label>
            <input
              className="w-full px-4 py-3 border border-[#CCCCCC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E60023] bg-white"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="tu@correo.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#0F0F0F] mb-2 font-semibold">Contraseña</label>
            <input
              className="w-full px-4 py-3 border border-[#CCCCCC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E60023] bg-white"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              placeholder="********"
            />
          </div>
          <button
            className="w-full bg-[#E60023] text-white py-3 rounded-lg font-bold text-lg shadow hover:brightness-90 hover:shadow-lg transition"
            type="submit"
          >
            Entrar
          </button>
        </form>
        <div className="flex justify-center mt-6">
          <Link to="/register" className="text-[#E60023] font-semibold hover:underline">
            ¿No tienes cuenta? Regístrate
          </Link>
        </div>
      </div>
    </div>
  );
}
