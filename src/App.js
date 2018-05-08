import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'; 
import axios from 'axios';
import {
  ButtonCircle,
  Card,
  Flex,
  Box,
  Heading,
  Container,
  Subhead,
  Textarea,
  Divider
} from 'rebass'; 
import Home from './Home'; 
import CountryView from './CountryView'; 


const App = () => (
  <div>
    <Switch>
      <Route exact path ="/" component={Home} />
      <Route exact path ="/country" component={CountryView}/>
    </Switch>
  </div>
)

export default App;
