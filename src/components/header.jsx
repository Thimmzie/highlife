import React from 'react';
import { useUserStore } from '../store/userstore';
import { Menu } from 'lucide-react';
import { Search } from 'lucide-react';
import { Filter } from 'lucide-react';
import { Plus } from 'lucide-react';
import { Sun } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

const header = ({ sideBarCollapsed, onToggleSidebar }) => {
  const user = useUserStore((state) => state.user);

  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 ">
          <button
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            onClick={onToggleSidebar}
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="hidden lg:block">
            <h1 className="font-dmsans text-2xl font-black text-slate-800 dark:text-white">
              Dashboard
            </h1>
            <p className="font-dmsans text-white">
              Welcome back, {user?.displayName?.split(' ')[0]}! here's what's
              happening today
            </p>
          </div>
        </div>

        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="w-4 h-4 text-white absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 font-dmsans pr-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all "
            />
            {/* <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
              <Filter />
            </button> */}
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {/* <button className="hidden lg:flex items-center space-x-2 py-2 px-4 bg-gradient-to-r from-[#5e35a1] to-[#2f0474] text-white rounded-xl hover:shadow-lg transition-all">
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium font-dmsans ">New</span>
          </button> */}
          {/* <button className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Sun className="w-5 h-5 " />
          </button> */}
          {/* you can have notification here and settings */}
          {/* user profile, you can move to a different component that will be under menu later on */}
          <div className="flex items-center space-x-3 pl-3 border-l border-slate-200 dark:border-slate-700">
            <img
              src={user?.photoURL}
              alt={user?.displayName}
              className="w-8 h-8 font-dmsans rounded-full ring-2 ring-[#5e35a1]"
            />
            <div className="hidden md:block">
              <p className="font-dmsans text-sm font-medium text-slate-500 dark:text-slate-400">
                {user?.displayName}
              </p>
            </div>
            {/* <ChevronDown className="w-4 h-4 text-slate-400" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
