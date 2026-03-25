import React, { useMemo } from 'react';
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
import { useStore } from '../store/userstore';

const Charts = () => {
  const { sleep, work, activity, calories } = useStore();

  // Energy trend data
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

  // Calories data
  const calorieData = useMemo(
    () => [
      { type: 'Intake', value: calories },
      { type: 'Burned', value: activity * 200 },
    ],
    [calories, activity],
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Energy Trend */}
      <div className="h-64 p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700">
        <h2 className="text-lg font-dmsans font-bold mb-4 text-slate-800 dark:text-white">
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

      {/* Calories Overview */}
      <div className="h-64 p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700">
        <h2 className="text-lg font-dmsans font-bold mb-4 text-slate-800 dark:text-white">
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
  );
};

export default Charts;
