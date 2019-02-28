import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Movies } from './pages';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/movies" component={Movies}/>
        </Switch>
      </div>
    );
  }
}

export default App;
