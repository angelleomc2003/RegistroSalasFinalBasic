// src/pages/Users.js
import React, { useState, useEffect } from 'react';
import { loadData } from '../utils/storage';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(loadData('users'));
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Usuarios</h2>
      <ul>
        {users.map((user, idx) => (
          <li key={idx} className="py-2 border-b">{user.email} - {user.role}</li>
        ))}
      </ul>
    </div>
  );
}