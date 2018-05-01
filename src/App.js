import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {
  ButtonCircle,
  Card,
  Flex,
  Box,
  Heading,
  Container,
  Subhead
} from 'rebass'; 
import ListCountries from './Countries'; 


class App extends Component {

  render() {
    return ( 
   <Container>
      <Heading textAlign="center">Around the World</Heading>
        <Subhead textAlign="center">Learn about our neighbors around the world!</Subhead>
        <Flex mx={-2}>
          <Box width={1/2} px={2}>
            <ListCountries/>
          </Box>
        </Flex>
   </Container>
    );
  }
}

export default App;
