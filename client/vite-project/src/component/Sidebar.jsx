import React from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';

function Sidebar() {
  return (
    <aside className="w-full md:w-64 bg-white border-r border-gray-200 shadow-sm min-h-screen">
      <div className="p-4">
        {/* Search Bar */}
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

        {/* My Notes Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg text-gray-800">My Notes</h2>
          <button className="text-[#1f7a8c] hover:text-[#3a9fb3] transition-colors p-1 rounded-full hover:bg-[#3a9fb3]/20">
            <FaPlus />
          </button>
        </div>

        {/* Filters */}
        <div className="flex space-x-2 overflow-x-auto pb-2 mb-4">
          <button className="px-3 py-1 text-sm bg-[#1f7a8c] text-white rounded-full font-medium">All</button>
          <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors">Work</button>
          <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors">Personal</button>
          <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors">Research</button>
        </div>

        {/* Notes List */}
        <ul className="space-y-2 max-h-[calc(100vh-250px)] overflow-y-auto pr-2">
          {/* Note Item - Active */}
          <li className="p-3 rounded-lg cursor-pointer transition bg-[#3a9fb3]/20 border border-[#3a9fb3]/40 hover:border-[#3a9fb3]/60">
            <div className="flex justify-between items-start">
              <h3 className="font-medium text-gray-800">Meeting Notes</h3>
              <span className="text-xs text-gray-500">Today</span>
            </div>
            <p className="text-sm text-gray-500 truncate mt-1">
              Project timeline discussion with design team
            </p>
            <div className="flex mt-2 gap-1 flex-wrap">
              <span className="text-xs bg-[#3a9fb3]/40 text-[#1f7a8c] px-2 py-1 rounded-full">work</span>
              <span className="text-xs bg-[#3a9fb3]/40 text-[#1f7a8c] px-2 py-1 rounded-full">meeting</span>
              <span className="text-xs bg-[#3a9fb3]/40 text-[#1f7a8c] px-2 py-1 rounded-full">urgent</span>
            </div>
          </li>

          {/* Note Item */}
          <li className="p-3 rounded-lg cursor-pointer transition hover:bg-gray-50 border border-transparent hover:border-gray-200">
            <div className="flex justify-between items-start">
              <h3 className="font-medium text-gray-800">Research Findings</h3>
              <span className="text-xs text-gray-500">2 days ago</span>
            </div>
            <p className="text-sm text-gray-500 truncate mt-1">
              2023 AI progress review and future predictions
            </p>
            <div className="flex mt-2 gap-1 flex-wrap">
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">research</span>
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">AI</span>
            </div>
          </li>

          {/* Note Item */}
          <li className="p-3 rounded-lg cursor-pointer transition hover:bg-gray-50 border border-transparent hover:border-gray-200">
            <div className="flex justify-between items-start">
              <h3 className="font-medium text-gray-800">Shopping List</h3>
              <span className="text-xs text-gray-500">1 week ago</span>
            </div>
            <p className="text-sm text-gray-500 truncate mt-1">
              Groceries for the week and household items
            </p>
            <div className="flex mt-2 gap-1 flex-wrap">
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">personal</span>
            </div>
          </li>

          {/* Note Item */}
          <li className="p-3 rounded-lg cursor-pointer transition hover:bg-gray-50 border border-transparent hover:border-gray-200">
            <div className="flex justify-between items-start">
              <h3 className="font-medium text-gray-800">Book Recommendations</h3>
              <span className="text-xs text-gray-500">2 weeks ago</span>
            </div>
            <p className="text-sm text-gray-500 truncate mt-1">
              List of books to read this summer
            </p>
            <div className="flex mt-2 gap-1 flex-wrap">
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">personal</span>
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">reading</span>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
