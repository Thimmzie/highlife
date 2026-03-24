import React from 'react';
import { useUserStore, useStore } from '../../store/userstore';

const Profile = () => {
  const user = useUserStore((state) => state.user);
  const {
    sleep,
    activity,
    calories,
    work,
    energy,
    productivity,
    burnout,
    setSleep,
    setActivity,
    setCalories,
    setWork,
  } = useStore();

  const handleReset = () => {
    setSleep(6);
    setActivity(5);
    setCalories(2000);
    setWork(7);
  };

  return (
    <div className="p-6 space-y-6">
      {/* User Info */}
      <div className="flex items-center space-x-6">
        <img
          src={user?.photoURL || '/default-avatar.png'}
          alt={user?.displayName}
          className="w-24 h-24 rounded-full ring-2 ring-purple-600"
        />
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
            {user?.displayName || 'Guest User'}
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {user?.email || 'No email available'}
          </p>
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 space-y-4">
        <h2 className="text-lg font-bold text-slate-800 dark:text-white">
          Daily Summary
        </h2>
        <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li>Sleep: {sleep} hrs</li>
          <li>Activity: {activity}</li>
          <li>Calories: {calories}</li>
          <li>Work: {work} hrs</li>
          <li>Energy Score: {energy}%</li>
          <li>Productivity Score: {productivity}%</li>
          <li>Burnout Risk: {burnout}%</li>
        </ul>
        <button
          onClick={handleReset}
          className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl hover:shadow-lg transition-all"
        >
          Reset Dashboard
        </button>
      </div>
    </div>
  );
};

export default Profile;
