import { useState } from 'react';

function Tutoron() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return <div>Tutoron UI</div>;
}

export default Tutoron;
return (
  <div className="min-h-screen bg-[var(--color-bg)] font-inter text-[var(--color-text)]">
    {/* Layout wrapper */}
  </div>
);
<header className="bg-[var(--color-secondary)] shadow-sm sticky top-0 z-10">
  <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
    {/* Navbar content */}
  </div>
</header>
import logoIcon from '../assets/tutoron-gpt-logo.png';
<div className="flex items-center space-x-2">
  <img src={logoIcon} alt="Tutoron-GPT Logo" className="h-8 w-8" />
  <span className="text-xl font-bold text-[var(--color-primary)]">Tutoron-GPT</span>
</div>
import { FaUser, FaCog } from 'react-icons/fa';

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
<div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex gap-6">
  {/* Sidebar and main layout */}
</div>
<aside className="w-full md:w-1/4 bg-[var(--color-primary)] p-4 rounded-lg shadow">
</aside>
<div className="relative mb-6">
  <input
    type="text"
    placeholder="Search notes..."
    className="search-input w-full px-4 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
  />
</div>
import { FaSearch } from 'react-icons/fa';

<FaSearch className="absolute right-3 top-3 text-[var(--color-text-light)]" />
import { FaPlus } from 'react-icons/fa';

<div className="flex justify-between items-center mb-4">
  <h2 className="font-semibold text-lg text-[var(--color-secondary)]">My Notes</h2>
  <button className="text-[var(--color-accent)] hover:text-[var(--color-accent-light)]">
    <FaPlus />
  </button>
</div>
<div className="flex space-x-2 overflow-x-auto pb-2 mb-4">
  <button className="px-3 py-1 text-sm bg-[var(--color-accent)] text-[var(--color-primary)] rounded-full">All</button>
  <button className="px-3 py-1 text-sm bg-[var(--color-border)] text-[var(--color-secondary)] rounded-full">Work</button>
  <button className="px-3 py-1 text-sm bg-[var(--color-border)] text-[var(--color-secondary)] rounded-full">Personal</button>
  <button className="px-3 py-1 text-sm bg-[var(--color-border)] text-[var(--color-secondary)] rounded-full">Research</button>
</div>
<ul className="space-y-2 max-h-[calc(100vh-250px)] overflow-y-auto">
  <li className="note-item active p-3 rounded cursor-pointer transition">
    <div className="flex justify-between items-start">
      <h3 className="font-medium text-[var(--color-secondary)]">Meeting Notes</h3>
      <span className="text-xs text-[var(--color-text-light)]">Today</span>
    </div>
    <p className="text-sm text-[var(--color-text-light)] truncate">Project timeline discussion with design team</p>
  </li>
</ul>
<div className="flex mt-2 gap-1 flex-wrap">
  <span className="text-xs tag px-2 py-1 rounded-full">work</span>
  <span className="text-xs tag px-2 py-1 rounded-full">meeting</span>
  <span className="text-xs tag px-2 py-1 rounded-full">urgent</span>
</div>
