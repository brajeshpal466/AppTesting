/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { GlobalStyle } from 'styles/global-styles';

import { testNotification } from './pages/TestAnalytics/Loadable';
import { HomePage } from './pages/HomePage/Loadable';
import { TestSession } from './pages/TestSession/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { SummaryTable } from './pages/SummaryTable';
import Charts from './components/Charts';
import ChartLayout from './components/ChartLayout';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/testnotification" component={testNotification} />
        <Route exact path="/testsession"></Route>
        <Route exact path="/chartlayout" component={ChartLayout} /> */}
        {/* <Route component={NotFoundPage} /> */}
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
