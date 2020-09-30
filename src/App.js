import React from 'react';
import './App.css';
import Home from './pages/Home';
import Error from './components/Error';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='*' component={Error} />
      </Switch>
    </div>
  );
}

export default App;
