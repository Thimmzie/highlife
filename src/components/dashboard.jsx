import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import Header from './header';
import Dash from './menu/dash';
import Insights from './menu/insights';
import Profile from './menu/profile';
import Simulation from './menu/simulation';

const dashboard = () => {
  const [sideBarCollapsed, setSideBarCollapse] = useState(true);
  const [currentPage, setCurrentPage] = useState('dashboard');

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setSideBarCollapse(false);
    } else {
      setSideBarCollapse(true);
    }
  }, []);

  return (
    <div className="min-h-[200vh] lg:min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:t0-slate-900 transition-all duration-500 ">
      <div className="lg:flex h-screen lg:overflow-hidden">
        <Sidebar
          collapsed={sideBarCollapsed}
          onToggle={() => setSideBarCollapse(!sideBarCollapsed)}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
        {!sideBarCollapsed && (
          <div
            className="fixed inset-0 bg-black/30 z-20 lg:hidden"
            onClick={() => setSideBarCollapse(true)}
          />
        )}
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header
            sideBarCollapsed={sideBarCollapsed}
            onToggleSidebar={() => setSideBarCollapse(!sideBarCollapsed)}
          />
          <main className="flex-1 overflow-y-auto bg-transparent">
            <div className="p-6 space-y-6">
              {currentPage === 'dashboard' && <Dash />}
              {currentPage === 'insights' && <Insights />}
              {currentPage === 'simulation' && <Simulation />}
              {currentPage === 'profile' && <Profile />}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
