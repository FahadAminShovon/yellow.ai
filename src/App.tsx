import React, { Suspense, useState } from 'react';
import './App.css';
// import Loader from './components/Loader/Loader';
import TopNavigation from './components/TopNavigation/TopNavigation';
import { LoaderContext } from './context/LoaderContext';
import { StateContext } from './context/StateContext';
import IssuePage from './pages/IssuePage';
import { StatusType } from './utils/GenericTypes';
import { Spin } from 'antd';

function App() {
  const [issueState, setIssueState] = useState<StatusType>('open');
  const [showLoader, setShowLoader] = useState(false);
  return (
    <Suspense fallback={<Spin />}>
      <StateContext.Provider
        value={{
          issueState,
          setIssueState,
        }}>
        <LoaderContext.Provider value={{ showLoader, setShowLoader }}>
          <Spin size="large" spinning={showLoader}>
            <TopNavigation />
            <IssuePage />
          </Spin>
        </LoaderContext.Provider>
      </StateContext.Provider>
    </Suspense>
  );
}

export default App;
