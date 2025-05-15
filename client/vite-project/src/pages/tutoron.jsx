import { useState } from 'react';
import logoIcon from '../assets/tutoron-gpt-logo.png'; // Adjust if your logo path is different
import { FaRobot, FaUser, FaCog, FaSearch, FaPlus } from 'react-icons/fa';

const Tutoron = () => {
  // Component logic will be added here
};
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
<header className="bg-[var(--color-secondary)] shadow-sm sticky top-0 z-10">
  <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
    {/* Logo and Profile/Settings buttons */}
  </div>
</header>
<div className="flex items-center space-x-2">
  <img src={logoIcon} alt="Tutoron-GPT Logo" className="h-8 w-8" />
  <span className="text-xl font-bold text-[var(--color-primary)]">Tutoron-GPT</span>
</div>
<div className="flex items-center space-x-4">
  <button className="flex items-center space-x-2 px-4 py-2 btn-primary rounded-md">
    <FaUser />
    <span>Profile</span>
  </button>
  <button className="flex items-center space-x-2 px-4 py-2 btn-primary rounded-md">
    <FaCog />
    <span>Settings</span>
  </button>
</div>
