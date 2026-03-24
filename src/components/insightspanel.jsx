import React from 'react';
import { useStore } from '../store/userstore';

const Insightspanel = () => {
  // Get the raw state from the store
  const sleep = useStore((state) => state.sleep);
  const work = useStore((state) => state.work);
  const activity = useStore((state) => state.activity);
  const calories = useStore((state) => state.calories);

  // Compute insights based on current values
  const insights = [];
  if (sleep < 6) insights.push('Your energy drops due to low sleep');
  if (work > 10) insights.push('You may be at risk of burnout');
  if (calories > 3000) insights.push('You consume most calories at night');
  if (!insights.length) insights.push('Your habits look balanced today!');

  return (
    <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700">
      <h2 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
        Insights
      </h2>
      <div className="space-y-3">
        {insights.map((item, index) => (
          <div
            key={index}
            className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insightspanel;
