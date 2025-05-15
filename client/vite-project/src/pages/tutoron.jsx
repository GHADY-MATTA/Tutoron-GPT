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
<div className="flex md:hidden">
  <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="inline-flex items-center justify-center p-2 text-[#022b3a]">
    {/* Toggle button content */}
  </button>
</div>
{mobileMenuOpen && (
  <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
    <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium text-[#022b3a] hover:text-[#1f7a8c]">Features</Link>
    {/* Other mobile links */}
  </div>
)}
<div className="relative mb-6">
  <input
    type="text"
    placeholder="Search notes..."
    className="search-input w-full px-4 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
  />
  <FaSearch className="absolute right-3 top-3 text-[var(--color-text-light)]" />
</div>
Create search bar inside the sidebar<div className="flex space-x-2 overflow-x-auto pb-2 mb-4">
<button className="px-3 py-1 text-sm bg-[var(--color-accent)] text-[var(--color-primary)] rounded-full">All</button>
{/* Other categories */}
</div>
<ul className="space-y-2 max-h-[calc(100vh-250px)] overflow-y-auto">
  <li className="note-item active p-3 rounded cursor-pointer transition">
    <div className="flex justify-between items-start">
      <h3 className="font-medium text-[var(--color-secondary)]">Meeting Notes</h3>
      <span className="text-xs text-[var(--color-text-light)]">Today</span>
    </div>
    {/* Other note content */}
  </li>
</ul>
<li className="note-item active p-3 rounded cursor-pointer transition">
  <div className="flex justify-between items-start">
    <h3 className="font-medium text-[var(--color-secondary)]">Meeting Notes</h3>
    <span className="text-xs text-[var(--color-text-light)]">Today</span>
  </div>
  <p className="text-sm text-[var(--color-text-light)] truncate">Project timeline discussion with design team</p>
</li>
<div className="flex mt-2 gap-1 flex-wrap">
  <span className="text-xs tag px-2 py-1 rounded-full">work</span>
  {/* Other tags */}
</div>
<li className="note-item p-3 rounded cursor-pointer transition">
  <div className="flex justify-between items-start">
    <h3 className="font-medium text-[var(--color-secondary)]">Research Findings</h3>
    <span className="text-xs text-[var(--color-text-light)]">2 days ago</span>
  </div>
  <p className="text-sm text-[var(--color-text-light)] truncate">2023 AI progress review and future predictions</p>
</li>
<li className="note-item p-3 rounded cursor-pointer transition">
  <div className="flex justify-between items-start">
    <h3 className="font-medium text-[var(--color-secondary)]">Shopping List</h3>
    <span className="text-xs text-[var(--color-text-light)]">1 week ago</span>
  </div>
  <p className="text-sm text-[var(--color-text-light)] truncate">Groceries for the week and household items</p>
</li>
<li className="note-item p-3 rounded cursor-pointer transition">
  <div className="flex justify-between items-start">
    <h3 className="font-medium text-[var(--color-secondary)]">Book Recommendations</h3>
    <span className="text-xs text-[var(--color-text-light)]">2 weeks ago</span>
  </div>
  <p className="text-sm text-[var(--color-text-light)] truncate">List of books to read this summer</p>
</li>
<main className="w-full md:w-3/4 bg-transparent">
  {/* Empty for now */}
</main>
<style>
  :root {
    --color-bg: #f5f5f5;
    --color-text: #333333;
    --color-primary: #1f7a8c;
    --color-secondary: #022b3a;
    --color-accent: #3a9fb3;
    --color-border: #e1e5f2;
  }
</style>
<li className="note-item active p-3 rounded cursor-pointer transition">
  {/* Active state applied */}
</li>
<div className="w-full md:w-1/4 bg-[var(--color-primary)] p-4 rounded-lg shadow">
  {/* Sidebar */}
</div>
<input
  type="text"
  placeholder="Search notes..."
  className="search-input w-full px-4 py-2 border border-[var(--color-border)] rounded-md focus:outline-none"
/>
<button className="flex items-center space-x-2 px-4 py-2 btn-primary rounded-md hover:bg-[#1f7a8c]">
  <FaUser />
  <span>Profile</span>
</button>
