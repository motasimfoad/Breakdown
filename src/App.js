import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Main from './pages/main/main.js';
import Auth from './pages/auth/auth.js';
import Dashboard from './pages/dashboard/dashboard.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path="/" component={Main} />
        <Route path="/auth" component={Auth} />
        <Route path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
