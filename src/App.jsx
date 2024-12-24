import React from 'react';
import Router from './routes';
import { FavoritesProvider } from './components/saved/FavoritesContext';
import { DarkModeProvider } from './components/dark/DarkModeProvider';
import Snowfall from 'react-snowfall';

const App = () => {
  return (
    <DarkModeProvider>
      <FavoritesProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
          <Router />
        </div>
      </FavoritesProvider>
      <Snowfall />
    </DarkModeProvider>
  );
};

export default App;
