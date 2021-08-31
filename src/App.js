
import './App.css';
import Navbar from './Dashboard/Components/Navbar';
import Sidebar from './Dashboard/Components/Sidebar';
import TestAnalytics from './Dashboard/Components/Tabs/TestAnalytics';
import { BrowserRouter as Router, Route, Switch}  from 'react-router-dom' 
import AutomationTest from './Dashboard/Components/Tabs/AutomationTest';
import IntractTest from './Dashboard/Components/Tabs/IntractTest';
import DebugReport from './Dashboard/Components/Tabs/DebugReport';
import DeviceCloud from './Dashboard/Components/Tabs/DeviceCloud';
import Settings from './Dashboard/Components/Tabs/Settings';
function App() {
  return (
    <div >
      <Router>
  <Navbar></Navbar>
  <div className="mainContainer">
    <Sidebar></Sidebar>
    <Switch>
      <Route exact path='/'>
      <TestAnalytics></TestAnalytics>
      </Route>
      <Route exact path='/automationtest'>
      <AutomationTest></AutomationTest>
      </Route>
      <Route exact path='/intracttest'>
      <IntractTest></IntractTest>
      </Route>
      <Route exact path='/debugreport'>
      <DebugReport></DebugReport>
      </Route>
      <Route exact path='/devicecloud'>
      <DeviceCloud></DeviceCloud>
      </Route>
      <Route exact path='/settings'>
      <Settings></Settings>
      </Route>
    </Switch>

  </div>
  </Router>
    </div>
  );
}

export default App;
