import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import AllBeers from './components/AllBeers';
import BeersDetails from './components/BeersDetails';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import HomePage from './components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">
          <img src="./assets/home.png" alt="home.png" />
        </Link>
        <Route exact path="/" component={HomePage} />
        <Route path="/AllBeers" component={AllBeers} />
        <Route path="/beers/:id" component={BeersDetails} />
        <Route path="/RandomBeer" component={RandomBeer} />
        <Route path="/NewBeer" component={NewBeer} />
      </BrowserRouter>
    </div>
  );
}

export default App;
