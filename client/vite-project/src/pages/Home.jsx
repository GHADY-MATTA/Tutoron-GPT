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
<Link to="/login" className="text-sm font-medium text-[#022b3a] hover:text-[#1f7a8c] ml-6">Log In</Link>
<Link to="/register" className="px-4 py-2 bg-[#1f7a8c] hover:bg-[#3a9fb3] text-white rounded-md text-sm font-medium transition ml-2">Sign Up</Link>
<div className="flex md:hidden">
  <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="inline-flex items-center justify-center p-2 text-[#022b3a]">
    {/* Button content */}
  </button>
</div>
