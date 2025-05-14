import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Content from './Content';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-bg)] font-inter text-[var(--color-text)]">
      
      {/* Navbar with toggle handler */}
      <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex flex-1 overflow-hidden">
        
        {/* Sidebar, hidden on mobile until  */}
        <Sidebar isOpen={sidebarOpen} />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto px-2 md:px-4 xl:px-8 2xl:px-12 py-6">
          <Content />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
