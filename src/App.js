import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Landing from './Pages/Landing';
import TeamPage from './Pages/Team/TeamPage';
import CaseStudy from './Pages/CaseStudy/CaseStudy';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ Landing } />
          <Route path="/team" component={ TeamPage } />
          <Route path="/case-study" component={ CaseStudy  } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
