import React, { useState } from 'react';
import './App.scss';
import Filters from './components/filters/Filters';
import LaunchList from './components/launch-list/LaunchList';

const App = () => {
  const [filters, setFilters] = useState({});
  const handleFilterChange = (context, data) => {
    setFilters({...filters, [context]: data});
  };

  return (
    <div className="App">
      <h1>SpaceX Launch Programs</h1>
      <div className="launch-details">
        <Filters onChange={handleFilterChange} />
        <LaunchList filters={filters} />
      </div>
    </div>
  );
}

export default App;
