// src/pages/Rooms.js
import React, { useState, useEffect } from 'react';
import { saveData, loadData } from '../utils/storage';

export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [name, setName] = useState('');
  const [editingRoom, setEditingRoom] = useState(null);

  useEffect(() => {
    setRooms(loadData('rooms'));
  }, []);

  const addRoom = () => {
    if (!name.trim()) return;

    if (editingRoom) {
      const updated = rooms.map(r =>
        r.id === editingRoom.id ? { ...r, name } : r
      );
      setRooms(updated);
      saveData('rooms', updated);
      setEditingRoom(null);
    } else {
      const newRoom = { id: Date.now(), name };
      const updated = [...rooms, newRoom];
      setRooms(updated);
      saveData('rooms', updated);
    }

    setName('');
  };

  const editRoom = (room) => {
    setEditingRoom(room);
    setName(room.name);
  };

  const deleteRoom = (id) => {
    const updated = rooms.filter(r => r.id !== id);
    setRooms(updated);
    saveData('rooms', updated);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-[#0F0F0F]">Salas</h2>

      <div className="flex mb-6">
        <input
          className="border border-[#CCCCCC] bg-white px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#E60023] flex-1"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Nombre de la sala"
        />
        <button
          className="bg-[#E60023] text-white px-6 py-3 rounded-r-lg font-semibold hover:brightness-90 hover:shadow transition"
          onClick={addRoom}
        >
          {editingRoom ? 'Actualizar' : 'Agregar'}
        </button>
      </div>

      <table className="w-full text-left rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-[#F7F2F2] text-[#0F0F0F]">
            <th className="py-2 px-4">Nombre</th>
            <th className="py-2 px-4 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map(room => (
            <tr key={room.id} className="hover:bg-[#FAFAFA] transition">
              <td className="py-2 px-4">{room.name}</td>
              <td className="py-2 px-4 text-center space-x-2">
                <button
                  onClick={() => editRoom(room)}
                  className="text-white bg-[#FF637D] hover:brightness-90 font-semibold px-4 py-1 rounded shadow"
                >
                  Editar
                </button>
                <button
                  onClick={() => deleteRoom(room.id)}
                  className="text-white bg-[#0F0F0F] hover:brightness-90 font-semibold px-4 py-1 rounded shadow"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
