import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/main/main';
import Events from './pages/events/events';
import Survey from './pages/survey/survey';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/events" component={Events} />
        <Route path="/survey/:surveyUserId" component={Survey} />
        <Route exact path="/" component={Main} />
      </Router>
    </div>
  );
}

export default App;
