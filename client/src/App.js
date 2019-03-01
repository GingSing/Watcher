import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Movies, Home } from './pages';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Movies}/>
        </Switch>
      </div>
    );
  }
}

export default App;
