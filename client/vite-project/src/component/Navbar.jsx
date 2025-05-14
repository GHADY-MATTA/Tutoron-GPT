import { useState, useEffect, useRef } from 'react';
import { FaBell, FaChevronDown, FaPlus, FaUser, FaCog, FaSignOutAlt, FaTimes } from 'react-icons/fa';
import logoIcon from '../assets/tutoron-gpt-logo.png';
import API from '../api/api';
import { useNavigate } from 'react-router-dom';

function Navbar({ onToggleSidebar }) {
  const [username, setUsername] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

 const handleLogout = async () => {
  try {
    await API.post('/logout'); // Now this will include the token
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/login');
  } catch (error) {
    console.error('Logout failed:', error);
  }
};


  return (
    <header className="backdrop-blur-md bg-white/90 border-b border-gray-200 shadow-sm sticky top-0 z-50 w-full">
      <div className="max-w-[95%] w-full mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Left Section */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-3">
              <img src={logoIcon} alt="Tutoron-GPT" className="h-9 w-9 object-contain" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#1f7a8c] to-[#1f7a8c] bg-clip-text text-transparent">
                Tutoron-GPT
              </span>
            </div>
            

            <nav className="hidden md:flex ml-12 space-x-8">
              <a href="#" className="text-gray-700 font-medium hover:text-[#1f7a8c]">About US</a>
              <a href="#" className="text-gray-700 font-medium hover:text-[#1f7a8c]">AI Tools</a>
            </nav>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4 relative" ref={dropdownRef}>
            {/* Notification */}
            <button className="relative p-1.5 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors">
              <FaBell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                3
              </span>
            </button>

            {/* Profile +  Toggle */}
            <div className="hidden md:flex items-center space-x-2 cursor-pointer group relative" onClick={() => setShowDropdown(!showDropdown)}>
              
              {/* <span className="text-sm font-medium text-gray-700">{username || 'User'}</span> */}
              <FaChevronDown className="text-gray-400 text-xs" />
            </div>

            {/* Dropdown menu */}
            {showDropdown && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <div className="px-4 py-2 border-b text-sm text-gray-600 flex justify-between items-center">
                  Menu
                  <button onClick={() => setShowDropdown(false)}>
                    <FaTimes className="text-gray-400 hover:text-red-500" />
                  </button>
                </div>
                <button className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                  <FaUser className="mr-2" /> Profile
                </button>
                <button className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                  <FaCog className="mr-2" /> Settings
                </button>
                <button
                  className="w-full flex items-center px-4 py-2 text-red-600 hover:bg-red-50"
                  onClick={handleLogout}
                >
                  <FaSignOutAlt className="mr-2" /> Logout
                </button>
              </div>
            )}

            {/* New Note Button */}
            <button className="hidden md:flex items-center px-4 py-2 bg-[#1f7a8c] text-white rounded-md shadow-sm hover:bg-[#3a9fb3] transition">
              <FaPlus className="mr-2" />
              New Note
            </button>

            {/* Hamburger for sidebar */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              onClick={onToggleSidebar}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
