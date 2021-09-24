import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import Home from './components/Home';
import BeersList from './components/BeersList';
import BeerDetail from './components/BeerDetail';
import BeerRandom from './components/BeerRandom';
import BeerCreate from './components/BeerCreate';

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/beers" component={BeersList}/>
        <Route exact path="/beers/:id" component={BeerDetail}/>
        <Route exact path="/random-beer" component={BeerRandom}/>
        <Route exact path="/new-beer" component={BeerCreate}/>
      </Switch>
    </div>
  );
}

export default App;
