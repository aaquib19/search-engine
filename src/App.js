import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Search from './components/Search/search';
class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
              <Route path='/' component={Search} />
          </Switch>
      </Router>
    );
  }
}

export default App;

