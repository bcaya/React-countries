import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {
  ButtonCircle,
  Card,
  Flex,
  Box
} from 'rebass'; 
import ListCountries from './Countries'; 


class App extends Component {

  render() {
    return ( 
    <div className="App">
      <Flex mx={-2}>
        <Box width={1/2} px={2}>
          <ButtonCircle>test</ButtonCircle>
          <ListCountries/>
        </Box>
      </Flex>
    </div>
    );
  }
}

export default App;
