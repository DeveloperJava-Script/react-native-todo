import React from 'react';
import AppNavigation from './src/navigation';
import {AppProvider} from './src/context/AppContext';

const App = () => {
  return (
    <AppProvider>
      <AppNavigation />
    </AppProvider>
  );
};

export default App;
