// src/pages/Computers.js
import React, { useState, useEffect } from 'react';
import { saveData, loadData } from '../utils/storage';

export default function Computers() {
  const [computers, setComputers] = useState([]);
  const [name, setName] = useState('');
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    setComputers(loadData('computers'));
  }, []);

  const addComputer = () => {
    if (!name.trim()) return;

    if (editing) {
      const updated = computers.map(c =>
        c.id === editing.id ? { ...c, name } : c
      );
      setComputers(updated);
      saveData('computers', updated);
      setEditing(null);
    } else {
      const newComputer = { id: Date.now(), name };
      const updated = [...computers, newComputer];
      setComputers(updated);
      saveData('computers', updated);
    }

    setName('');
  };

  const editComputer = (computer) => {
    setEditing(computer);
    setName(computer.name);
  };

  const deleteComputer = (id) => {
    const updated = computers.filter(c => c.id !== id);
    setComputers(updated);
    saveData('computers', updated);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-[#0F0F0F]">Computadores</h2>
      <div className="flex mb-6">
        <input
          className="border border-[#CCCCCC] bg-white px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#E60023] flex-1"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Nombre del computador"
        />
        <button
          className="bg-[#E60023] text-white px-6 py-3 rounded-r-lg font-semibold hover:brightness-90 hover:shadow transition"
          onClick={addComputer}
        >
          {editing ? 'Actualizar' : 'Agregar'}
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
          {computers.map(c => (
            <tr key={c.id} className="hover:bg-[#FAFAFA] transition">
              <td className="py-2 px-4">{c.name}</td>
              <td className="py-2 px-4 text-center space-x-2">
                <button
                  onClick={() => editComputer(c)}
                  className="text-white bg-[#FF637D] hover:brightness-90 font-semibold px-4 py-1 rounded shadow"
                >
                  Editar
                </button>
                <button
                  onClick={() => deleteComputer(c.id)}
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
