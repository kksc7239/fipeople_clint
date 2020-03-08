import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/main/main';
import events from './pages/events/events';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/events" component={events} />
        <Route exact path="/" component={Main} />
      </Router>
    </div>
  );
}

export default App;
