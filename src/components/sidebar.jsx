import React from 'react';
import { useUserStore } from '../store/userstore';
import Logo from '../assets/images/full-logoo.png';
import DarkLogo from '../assets/images/black-logoo.png';
import { menuItems } from '../../constant/index';
import { Activity, Menu, X } from 'lucide-react';

const sidebar = ({ collapsed, onToggle, currentPage, onPageChange }) => {
  const user = useUserStore((state) => state.user);

  return (
    <div
      className={`
    ${collapsed ? 'w-20' : 'w-72'} 
    lg:transition-all lg:duration-300 lg:ease-in-out 
    bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl 
    border-r border-slate-200/50 dark:border-slate-700/50 
    flex flex-col z-10


    lg:relative

   
    fixed top-0 left-0 h-full z-30
    transform ${collapsed ? '-translate-x-full lg:translate-x-0' : 'translate-x-0'}
    transition-transform duration-300 ease-in-out
  `}
    >
      <div className="lg:hidden flex justify-end p-4">
        <button onClick={onToggle} className="p-2">
          <X className="w-6 h-6 text-slate-700 dark:text-white" />
        </button>
      </div>

      <img className="w-full object-contain dark:block" src={Logo} />
      <img className="w-full object-contain dark:hidden " src={DarkLogo} />

      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-[#5e35a1] to-[#2f0474] rounded-xl flex items-center justify-center shadow-lg">
            <Activity className="w-6 h-6 text-white" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="text-xl font-dmsans font-bold text-slate-800 dark:text-white">
                HighLife
              </h1>
              <p className="text-xs font-dmsans text-slate-500 dark:text-slate-400">
                Health Intelligence
              </p>
            </div>
          )}
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;

          return (
            <div
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl cursor-pointer  transition-all duration-300 ease-in-out
        ${
          isActive
            ? 'bg-gradient-to-r from-[#5e35a1] to-[#2f0474] text-white shadow-lg'
            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
        }`}
            >
              <Icon className="w-5 h-5" />
              {!collapsed && (
                <span className="font-dmsans text-sm font-medium">
                  {item.label}
                </span>
              )}
            </div>
          );
        })}
      </nav>

      {/* user profile */}
      {!collapsed && (
        <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
            <img
              src={user?.photoURL}
              alt={user?.displayName}
              className="w-10 h-10 font-dmsans rounded-full ring-blue-500"
            />
            <div className="flex-1 min-w-0">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-dmsans font-medium text-slate-800 dark:text-white truncate">
                  {user?.displayName}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default sidebar;
