import React from 'react';
import Summarycards from '../summarycards';
import Charts from '../charts';
import Insightspanel from '../insightspanel';
import Simulationpanel from '../simulationpanel';

const dash = () => {
  return (
    <div className="space-y-6 min-h-[] lg:min-h-screen">
      <Summarycards />
      <Charts />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Insightspanel />
        <Simulationpanel />
      </div>
    </div>
  );
};

export default dash;
