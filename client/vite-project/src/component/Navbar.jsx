import { useState, useEffect } from 'react'; // ✅ Import useState and useEffect
import { FaBell, FaChevronDown, FaPlus } from 'react-icons/fa';
import logoIcon from '../assets/tutoron-gpt-logo.png'; // Adjust your path

function Navbar() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <header className="backdrop-blur-md bg-white/90 border-b border-gray-200 shadow-sm sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left Section - Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-3">
              <div className="h-9 w-9 flex items-center justify-center rounded-lg">
                <img 
                  src={logoIcon} 
                  alt="Tutoron-GPT" 
                  className="h-9 w-9 object-contain" 
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#1f7a8c] to-[#1f7a8c] bg-clip-text text-transparent">
                Tutoron-GPT
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex ml-12 space-x-8">
              <a href="#" className="relative px-1 py-2 text-gray-700 font-medium hover:text-[#1f7a8c] transition-colors group">
                Templates
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#1f7a8c] origin-left transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </a>
              <a href="#" className="relative px-1 py-2 text-gray-700 font-medium hover:text-[#1f7a8c] transition-colors group">
                AI Tools
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#1f7a8c] origin-left transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </a>
            </nav>
          </div>

          {/* Right Section - Actions */}
          <div className="flex items-center space-x-4">
            {/* Notification */}
            <button className="relative p-1.5 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors">
              <FaBell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                3
              </span>
            </button>

            {/* Profile */}
            <div className="hidden md:flex items-center space-x-2 cursor-pointer group">
              <div className="relative">
                <img
                  className="h-8 w-8 rounded-full object-cover border-2 border-white shadow-sm"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt="Profile"
                />
                <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400"></span>
              </div>
              {/* Show Username instead of Alex Johnson */}
              <span className="text-sm font-medium text-gray-700 group-hover:text-[#1f7a8c] transition-colors">
                {username || 'User'} {/* Fallback if username not loaded yet */}
              </span>
              <FaChevronDown className="text-gray-400 text-xs group-hover:text-[#1f7a8c] transition-colors" />
            </div>

            {/* New Note Button */}
            <button className="hidden md:flex items-center px-4 py-2 bg-gradient-to-r from-[#1f7a8c] to-[#1f7a8c] text-white rounded-md shadow-sm hover:from-[#1f7a8c] hover:to-[#1f7a8c] transition-all transform hover:-translate-y-0.5 focus:ring-2 focus:ring-[#1f7a8c] focus:ring-offset-2">
              <FaPlus className="mr-2" /> 
              <span className="font-medium">New Note</span>
            </button>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none">
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
