import { useState } from 'react';
import logoIcon from '../assets/tutoron-gpt-logo.png'; // Make sure the path matches your actual logo location
import { Link } from 'react-router-dom';

const TutoronGPT = () => {
  // Component logic will be added here
};
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
<nav className="bg-white shadow-sm">
  {/* Navigation content */}
</nav>
<div className="flex items-center">
  <img src={logoIcon} alt="Tutoron-GPT Logo" className="h-8 w-8" />
  <span className="ml-2 text-xl font-bold text-[#022b3a]">Tutoron-GPT</span>
</div>
<div className="hidden md:flex items-center space-x-6">
  <Link to="#" className="text-sm font-medium text-[#022b3a] hover:text-[#1f7a8c]">Features</Link>
  {/* Additional links */}
</div>
