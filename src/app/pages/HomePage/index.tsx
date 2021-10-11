// @ts-nocheck
//import Subheader from './components/Subheader';
import { Flex } from '@chakra-ui/react';
import * as React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContainerWrapper from 'app/components/MainContainerWrapper';
import Subheader from 'app/components/Subheader';
import { TestNotification } from '../TestAnalytics';
import { Route, Switch } from 'react-router';
import DisplaytableData from '../TestAnalytics/Features/DisplayTestData';
import { TestAnalytics } from '../TestAnalytics/components/Table';
import { NotFoundPage } from 'app/components/NotFoundPage';
import SubContainer from 'app/components/SubContainer';
import { TestSession } from '../TestSession';
export function HomePage() {
  const [sidebarToggle, setsidebarToggle] = useState(false);
  const [stateTab, setStateTab] = useState(true);
  const handleSidebar = () => {
    setsidebarToggle(!sidebarToggle);
    // const sidebarElement = document.getElementById('sidebarNav');
    // sidebarElement.classList.toggle('active');
  };
  const startActionHandler = () => {
    setStateTab(true);
  };
  const stopActionHandler = () => {
    setStateTab(false);
  };
  return (
    <div>
      <Navbar
        startActionHandler={startActionHandler}
        stopActionHandler={stopActionHandler}
      ></Navbar>
      <Sidebar
        handleSidebar={handleSidebar}
        sidebarToggle={sidebarToggle}
      ></Sidebar>
      <MainContainerWrapper
        sidebarToggle={sidebarToggle}
        handleSidebar={handleSidebar}
      >
        <Switch>
          <Route to="/">
            {!stateTab && <TestSession></TestSession>}
            {stateTab && <TestNotification></TestNotification>}
          </Route>
          <Route to="/testanalytics"></Route>

          {/*            
           <Route component={NotFoundPage} /> */}
        </Switch>
      </MainContainerWrapper>
    </div>
  );
}
