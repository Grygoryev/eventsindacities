import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Event from './components/Event'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:event_id" component={Event} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
