import React, { useMemo } from 'react';
import { useStore } from '../store/userstore';
import { Activity, Brain, Utensils, Flame } from 'lucide-react';

const Summarycards = () => {
  const sleep = useStore((state) => state.sleep);
  const work = useStore((state) => state.work);
  const activity = useStore((state) => state.activity);
  const calories = useStore((state) => state.calories);

  // Memoize computed scores
  const cards = useMemo(() => {
    const energy = Math.max(
      0,
      Math.min(100, sleep * 10 - work * 2 + activity * 2),
    );
    const productivity = Math.max(0, Math.min(100, work * 8 + sleep * 2));
    const nutrition = Math.max(0, Math.min(100, calories / 40));
    const burnout = Math.max(0, Math.min(100, work * 10 - sleep * 5));

    return [
      {
        title: 'Energy',
        value: `${energy}%`,
        icon: Activity,
        color: 'from-green-400 to-emerald-500',
      },
      {
        title: 'Productivity',
        value: `${productivity}%`,
        icon: Brain,
        color: 'from-blue-400 to-indigo-500',
      },
      {
        title: 'Nutrition',
        value: `${nutrition}%`,
        icon: Utensils,
        color: 'from-orange-400 to-yellow-500',
      },
      {
        title: 'Burnout Risk',
        value: `${burnout}%`,
        icon: Flame,
        color: 'from-red-400 to-pink-500',
      },
    ];
  }, [sleep, work, activity, calories]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <div
            key={index}
            className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 transform"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-dmsans text-slate-500">{card.title}</p>
              <div className={`p-2 rounded-lg bg-gradient-to-r ${card.color}`}>
                <Icon className="w-4 h-4 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-2">
              {card.value}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Summarycards;
