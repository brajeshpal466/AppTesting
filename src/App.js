
import './App.css';
import TestAnalyticsTestId from './Components/TestAnalyticsTestId';
import TestIdTabs  from './Components/TestIdTabs';
import {BrowserRouter as Router} from 'react-router-dom'  
import TestAnalyticTitle from './Components/TestAnalyticTitle';
function App() {
  return (
    <>
    <Router>
      <TestAnalyticTitle></TestAnalyticTitle>
    <TestAnalyticsTestId></TestAnalyticsTestId>
    <TestIdTabs></TestIdTabs>
    </Router>
    </>
  );
}

export default App;
