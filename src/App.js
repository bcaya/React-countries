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


const App = () => (
  <div>
    <Switch>
      <Route exact path ="/" component={Home} />
    </Switch>
  </div>
)

export default App;
