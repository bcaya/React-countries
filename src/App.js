import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'; 
import Home from './Home'; 
import CountryView from './CountryView'; 


const App = () => (
  <div>
    <Switch>
      <Route exact path ="/" component={Home} />
      <Route exact path ="/country:id" component={CountryView}/>
    </Switch>
  </div>
)

export default App;
