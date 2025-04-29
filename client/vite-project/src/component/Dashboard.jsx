import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Content from './Content';

function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-bg)] font-inter text-[var(--color-text)]">
      
      {/* Navbar */}
      <Navbar />

      {/* Layout below Navbar */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Content />
        </main>

      </div>
    </div>
  );
}

export default Dashboard;
