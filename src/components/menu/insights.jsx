import React, { useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';
import { useStore } from '../../store/userstore';

const Insights = () => {
  const sleep = useStore((state) => state.sleep);
  const work = useStore((state) => state.work);
  const calories = useStore((state) => state.calories);

  // Textual insights
  const insights = useMemo(() => {
    const temp = [];
    if (sleep < 6) temp.push('Your energy drops due to low sleep');
    if (work > 10) temp.push('You may be at risk of burnout');
    if (calories > 3000) temp.push('You consume most calories at night');
    if (!temp.length) temp.push('Your habits look balanced today!');
    return temp;
  }, [sleep, work, calories]);

  // Recommendations chart data
  const recommendationsData = useMemo(
    () => [
      { label: 'Sleep', count: Math.max(0, 10 - sleep) },
      { label: 'Work', count: Math.max(0, work - 8) },
      { label: 'Calories', count: Math.max(0, calories - 2500) },
    ],
    [sleep, work, calories],
  );

  // Energy over time chart data (static example)
  const summaryData = useMemo(
    () => [
      { time: 'Morning', energy: Math.max(0, sleep * 10 - work * 2 + 2) },
      { time: 'Afternoon', energy: Math.max(0, sleep * 8 - work * 1.5 + 2) },
      { time: 'Evening', energy: Math.max(0, sleep * 6 - work + 1) },
    ],
    [sleep, work],
  );

  return (
    <div className="flex flex-col gap-8 p-4">
      {/* Textual Insights */}
      <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700">
        <h2 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">
          Insights
        </h2>
        <div className="space-y-3">
          {insights.map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Summary Over Time (Line Chart) */}
      <div className="w-full h-[250px] bg-white/80 dark:bg-slate-900/80 rounded-xl p-4 shadow">
        <h2 className="text-lg font-semibold mb-2">Summary Over Time</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={summaryData}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="energy"
              stroke="#4f46e5"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recommendations (Bar Chart) */}
      <div className="w-full h-[250px] bg-white/80 dark:bg-slate-900/80 rounded-xl p-4 shadow">
        <h2 className="text-lg font-semibold mb-2">Recommendations</h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={recommendationsData}>
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#f59e0b" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Insights;
