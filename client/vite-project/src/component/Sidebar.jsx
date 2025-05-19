import React, { useState, useEffect } from 'react';
import { FaSearch, FaPlus, FaExpandAlt, FaCompressAlt } from 'react-icons/fa';
import API from '../api/api';

function Sidebar({ isOpen }) {
  const [notes, setNotes] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [newNote, setNewNote] = useState('');
  const [expandedNoteId, setExpandedNoteId] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user?.id;

  useEffect(() => {
    if (!userId) return;
    const fetchNotes = async () => {
      try {
        const res = await API.get(`/notes?user_id=${userId}`);
        setNotes(res.data.data);
      } catch (err) {
        console.error('Failed to fetch notes:', err);
      }
    };
    fetchNotes();
  }, [userId]);

  const handleAddNote = async () => {
    if (!newNote.trim()) return;
    try {
      const res = await API.post('/notes', { user_id: userId, content: newNote });
      setNotes(prev => [res.data.data, ...prev]);
      setNewNote('');
      setShowInput(false);
    } catch (err) {
      console.error('Failed to add note:', err);
    }
  };

  const toggleExpand = (id) => {
    setExpandedNoteId(expandedNoteId === id ? null : id);
  };

  const formatDateTime = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.toLocaleDateString()} - ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  };

  return (
    <aside
      className={`fixed md:static z-40 inset-y-0 left-0 bg-white border-r border-gray-200 shadow-sm transform transition-transform duration-300 ease-in-out w-72 min-h-screen ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
    >
      <div className="p-4">
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search notes..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1f7a8c] focus:border-[#1f7a8c] transition-all"
          />
        </div>

        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg text-gray-800">My Notes</h2>
          <button
            onClick={() => setShowInput(!showInput)}
            className="text-[#1f7a8c] hover:text-[#3a9fb3] transition-colors p-1 rounded-full hover:bg-[#3a9fb3]/20"
          >
            <FaPlus />
          </button>
        </div>

        {showInput && (
          <div className="mb-4">
            <textarea
              className="w-full border border-gray-300 rounded p-2 text-sm"
              placeholder="Write your note..."
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
            />
            <button
              onClick={handleAddNote}
              className="mt-2 bg-[#1f7a8c] text-white px-3 py-1 rounded hover:bg-[#186574]"
            >
              Add
            </button>
          </div>
        )}

        <ul className="space-y-2 max-h-[calc(100vh-250px)] overflow-y-auto pr-2">
          {notes.map((note) => (
            <li
              key={note.id}
              className="p-3 rounded-lg cursor-pointer transition hover:bg-gray-50 border border-transparent hover:border-gray-200"
              onClick={() => toggleExpand(note.id)}
            >
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-gray-800 truncate w-4/5">
                  {note.content.slice(0, 30)}...
                </h3>
                <span className="text-xs text-gray-500">
                  {formatDateTime(note.created_at)}
                </span>
              </div>
              <p className={`text-sm text-gray-600 mt-1 ${expandedNoteId === note.id ? '' : 'truncate'}`}>
                {note.content}
              </p>
              {expandedNoteId === note.id && (
                <div className="flex justify-end mt-2">
                  <button
                    className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-200"
                  >
                    <FaCompressAlt size={12} />
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
