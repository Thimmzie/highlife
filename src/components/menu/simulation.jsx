import React, { useMemo } from 'react';
import { useStore } from '../../store/userstore';
import Summarycards from '../summarycards';
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from 'recharts';

const Simulation = () => {
  const {
    sleep,
    activity,
    calories,
    work,
    setSleep,
    setActivity,
    setCalories,
    setWork,
  } = useStore();

  // Derived data
  const energyData = useMemo(
    () => [
      {
        time: 'Morning',
        energy: Math.max(0, sleep * 10 - work * 2 + activity * 2),
      },
      {
        time: 'Afternoon',
        energy: Math.max(0, sleep * 8 - work * 1.5 + activity * 2),
      },
      { time: 'Evening', energy: Math.max(0, sleep * 6 - work + activity) },
    ],
    [sleep, work, activity],
  );

  const calorieData = useMemo(
    () => [
      { type: 'Intake', value: calories },
      { type: 'Burned', value: activity * 200 },
    ],
    [calories, activity],
  );

  const insights = useMemo(() => {
    const temp = [];
    if (sleep < 6) temp.push('Your energy drops due to low sleep');
    if (work > 10) temp.push('You may be at risk of burnout');
    if (calories > 3000) temp.push('You consume most calories at night');
    if (!temp.length) temp.push('Your habits look balanced today!');
    return temp;
  }, [sleep, work, calories]);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
          Simulation Panel
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Adjust your habits and see how your scores change in real time
        </p>
      </div>

      {/* Sliders */}
      <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 space-y-4">
        {[
          { label: 'Sleep', value: sleep, setter: setSleep, max: 10 },
          { label: 'Activity', value: activity, setter: setActivity, max: 10 },
          {
            label: 'Calories',
            value: calories,
            setter: setCalories,
            min: 1000,
            max: 4000,
          },
          { label: 'Work', value: work, setter: setWork, max: 12 },
        ].map((item) => (
          <div key={item.label}>
            <p className="text-sm mb-1">
              {item.label}: {item.value}
              {(item.label === 'Sleep' || item.label === 'Work') && ' hrs'}
            </p>
            <input
              type="range"
              min={item.min || 0}
              max={item.max}
              value={item.value}
              onChange={(e) => item.setter(Number(e.target.value))}
              className="w-full"
            />
          </div>
        ))}
      </div>

      
      <Summarycards />

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Energy */}
        <div className="h-64 p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700">
          <h2 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
            Energy Trend
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={energyData}>
              <XAxis dataKey="time" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="energy"
                stroke="#5e35a1"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Calories */}
        <div className="h-64 p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700">
          <h2 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
            Calories Overview
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={calorieData}>
              <XAxis dataKey="type" />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#f97316" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      
      <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700">
        <h2 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
          Recommendations
        </h2>
        <ul className="list-disc ml-6 text-sm text-slate-700 dark:text-slate-300 space-y-2">
          {insights.map((msg, idx) => {
            switch (msg) {
              case 'Your energy drops due to low sleep':
                return (
                  <li key={idx}>
                    Try to sleep at least 7 hours tonight to improve energy.
                  </li>
                );
              case 'You may be at risk of burnout':
                return (
                  <li key={idx}>
                    Consider taking breaks during work to reduce burnout risk.
                  </li>
                );
              case 'You consume most calories at night':
                return (
                  <li key={idx}>
                    Reduce late-night snacking to balance your nutrition.
                  </li>
                );
              case 'Your habits look balanced today!':
                return (
                  <li key={idx}>Your habits are balanced today! Keep it up.</li>
                );
              default:
                return <li key={idx}>{msg}</li>;
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default Simulation;
