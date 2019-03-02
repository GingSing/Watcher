import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Movies, Home, Movie, Page } from './pages';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Page>
            <Route path="/movies" component={Movies}/>
            <Route path="/movie/:movieId" component={Movie} />
          </Page>
        </Switch>
      </div>
    );
  }
}

export default App;
