// src/components/Auth/Register.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (password !== confirm) {
      setError('Las contraseñas no coinciden');
      return;
    }
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.email === email)) {
      setError('El usuario ya existe');
      return;
    }
    const user = { email, password, role: 'Estudiante' };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    navigate('/login');
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-md font-montserrat">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Registrarse</h2>
      {error && <div className="text-red-600 text-sm mb-4">{error}</div>}
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="tu@correo.com"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Contraseña</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            placeholder="********"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Confirmar contraseña</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            type="password"
            value={confirm}
            onChange={e => setConfirm(e.target.value)}
            required
            placeholder="********"
          />
        </div>
        <button className="w-full bg-[#E60023] text-white py-2 rounded-md font-semibold hover:brightness-90 transition" type="submit">
          Registrarse
        </button>
      </form>
      <div className="flex justify-center space-x-6 mt-6 text-[#E60023] font-semibold">
        <Link to="/login">Iniciar Sesión</Link>
      </div>
    </div>
  );
}