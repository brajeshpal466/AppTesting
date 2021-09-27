// @ts-nocheck
//import Subheader from './components/Subheader';
import { Flex } from '@chakra-ui/react';
import * as React from 'react';
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
  return (
    <div backgroundColor="white2">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <MainContainerWrapper>
        <Switch>
          <Route to="/">
            {/* <TestSession></TestSession> */}
            <TestNotification></TestNotification>
          </Route>
          <Route to="/testanalytics"></Route>

          {/*            
           <Route component={NotFoundPage} /> */}
        </Switch>
      </MainContainerWrapper>
    </div>
  );
}
