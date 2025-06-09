// src/pages/Attendance.js
import React, { useState, useEffect } from 'react';
import { saveData, loadData } from '../utils/storage';

export default function Attendance() {
  const [records, setRecords] = useState([]);
  const [name, setName] = useState('');
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    setRecords(loadData('attendance'));
  }, []);

  const addRecord = () => {
    if (!name.trim()) return;

    if (editing) {
      const updated = records.map(r =>
        r.id === editing.id ? { ...r, name } : r
      );
      setRecords(updated);
      saveData('attendance', updated);
      setEditing(null);
    } else {
      const newRecord = { id: Date.now(), name };
      const updated = [...records, newRecord];
      setRecords(updated);
      saveData('attendance', updated);
    }

    setName('');
  };

  const editRecord = (record) => {
    setEditing(record);
    setName(record.name);
  };

  const deleteRecord = (id) => {
    const updated = records.filter(r => r.id !== id);
    setRecords(updated);
    saveData('attendance', updated);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-[#0F0F0F]">Asistencias</h2>
      <div className="flex mb-6">
        <input
          className="border border-[#CCCCCC] bg-white px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#E60023] flex-1"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Nombre del asistente"
        />
        <button
          className="bg-[#E60023] text-white px-6 py-3 rounded-r-lg font-semibold hover:brightness-90 hover:shadow transition"
          onClick={addRecord}
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
          {records.map(r => (
            <tr key={r.id} className="hover:bg-[#FAFAFA] transition">
              <td className="py-2 px-4">{r.name}</td>
              <td className="py-2 px-4 text-center space-x-2">
                <button
                  onClick={() => editRecord(r)}
                  className="text-white bg-[#FF637D] hover:brightness-90 font-semibold px-4 py-1 rounded shadow"
                >
                  Editar
                </button>
                <button
                  onClick={() => deleteRecord(r.id)}
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
