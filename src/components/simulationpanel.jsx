import { useStore } from '../store/userstore';

const Simulationpanel = () => {
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

  return (
    <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700">
      <h2 className="text-lg font-bold mb-4">Simulation</h2>

      <div className="space-y-4">
        {/* Sleep */}
        <div>
          <p className="text-sm">Sleep: {sleep} hrs</p>
          <input
            type="range"
            min="0"
            max="10"
            value={sleep}
            onChange={(e) => setSleep(Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Activity */}
        <div>
          <p className="text-sm">Activity: {activity}</p>
          <input
            type="range"
            min="0"
            max="10"
            value={activity}
            onChange={(e) => setActivity(Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Calories */}
        <div>
          <p className="text-sm">Calories: {calories}</p>
          <input
            type="range"
            min="1000"
            max="4000"
            value={calories}
            onChange={(e) => setCalories(Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Work */}
        <div>
          <p className="text-sm">Work: {work} hrs</p>
          <input
            type="range"
            min="0"
            max="12"
            value={work}
            onChange={(e) => setWork(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Simulationpanel;
