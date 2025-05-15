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
{mobileMenuOpen && (
  <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
    <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium text-[#022b3a] hover:text-[#1f7a8c]">Features</Link>
    {/* Additional links */}
  </div>
)}
<details className="mt-8 group">
  <summary className="cursor-pointer text-blue-600 hover:text-blue-700 font-medium flex items-center">
    <span className="mr-2">📦</span> View Raw JSON Data
  </summary>
  <pre className="mt-4 bg-gray-50 p-4 rounded-lg text-sm overflow-x-auto border border-gray-200">
    {JSON.stringify(summary, null, 2)}
  </pre>
</details>
<div className="bg-gradient-to-br from-[#1f7a8c] to-[#022b3a] text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    {/* Hero section content */}
  </div>
</div>
<a href="#" className="bg-[#1f7a8c] hover:bg-[#3a9fb3] px-8 py-3 rounded-md text-lg font-semibold transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md">Get Started Free</a>
<a href="#" className="bg-white text-[#022b3a] px-8 py-3 rounded-md text-lg font-semibold hover:bg-opacity-90 transition">See How It Works</a>
<div className="text-center mb-16">
  <h2 className="text-3xl font-bold text-[#022b3a] mb-4">Powerful Learning Features</h2>
  <p className="text-lg text-gray-600 max-w-2xl mx-auto">Tutoron-GPT adapts to your learning style and pace...</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
  {/* Feature cards will be added here */}
</div>
<div className="bg-white p-8 rounded-lg shadow-md transition duration-300 hover:translate-y-[-5px] hover:shadow-lg">
  <div className="w-14 h-14 bg-[#bfdbf7] rounded-full flex items-center justify-center mb-6">
    {/* Icon for feature */}
  </div>
  <h3 className="text-xl font-semibold mb-3">Smart Explanations</h3>
  <p className="text-gray-600">Get concepts broken down in multiple ways...</p>
</div>
<div className="bg-white p-8 rounded-lg shadow-md transition duration-300 hover:translate-y-[-5px] hover:shadow-lg">
  <div className="w-14 h-14 bg-[#bfdbf7] rounded-full flex items-center justify-center mb-6">
    {/* Icon for feature */}
  </div>
  <h3 className="text-xl font-semibold mb-3">Personalized Learning</h3>
  <p className="text-gray-600">Our AI adapts to your knowledge level...</p>
</div>
