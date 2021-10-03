import React, { useState } from 'react';
import './App.css';
import TopNavigation from './components/TopNavigation/TopNavigation';
import { StateContext } from './context/StateContextProvider';
import IssuePage from './pages/IssuePage';
import { StatusType } from './utils/GenericTypes';

function App() {
  const [issueState, setIssueState] = useState<StatusType>('open');
  return (
    <StateContext.Provider
      value={{
        issueState,
        setIssueState,
      }}>
      <TopNavigation />
      <IssuePage />
    </StateContext.Provider>
  );
}

export default App;
