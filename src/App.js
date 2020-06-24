import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/main/main';
import Events from './pages/events/events';
import Survey from './pages/survey/survey';
import BuyTicket from './pages/buyTicket/buyTicket';
import Admin from './pages/admin/admin';
import Information from './pages/information/information'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/events" component={Events} />
        <Route path="/survey/:surveyUserId" component={Survey} />
        <Route exact path="/" component={Main} />
        <Route path="/ticket/:redirectUrl" exact component={BuyTicket} />
        <Route path="/ticket/complete/:redirectUrl" exact component={BuyTicket} />
        <Route path="/information" component={Information} />
        <Route exact path="/admin" component={Admin} />
      </Router>
    </div>
  );
}

export default App;
