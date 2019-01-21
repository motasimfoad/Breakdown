import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Main from './pages/main/main.js';
import Auth from './pages/auth/auth.js';
import Dashboard from './pages/dashboard/dashboard.js';
import Demo_main from './pages/demo_main/demo_main.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path="/" component={Main} />
        <Route path="/auth" component={Auth} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/dm" component={Demo_main} />
        </div>
      </Router>
    );
  }
}
export default App;
