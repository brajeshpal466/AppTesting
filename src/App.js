
import SearchBar from './GlobalComponents/SearchBar';
import './App.css';
import {BrowserRouter  as Router,NavLink,Route,Switch}  from 'react-router-dom'

import Notifiacation from './Component/Notifiacation'
function App() {
  return (
    <Router>
<Notifiacation></Notifiacation>      
    </Router>
   
  );
}

export default App;
