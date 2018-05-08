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
  Subhead,
  Textarea,
  Divider
} from 'rebass'; 
import ListCountries from './ListCountries';
import Navbar from './Navbar'; 

class Home extends React.Component{
    state = {filterString:'', countries: []}
  render() {
  let countryToRender =  this.state.countries.filter(country => 
        country.name.toLowerCase().includes(
          this.state.filterString.toLowerCase()))

    return ( 
   <Container>
      {/* <Heading textAlign="center">Around the World</Heading> */}
      <Navbar />
        {/* <Subhead textAlign="center">Learn about our neighbors around the world!</Subhead> */}
        <Divider/>

      <Flex flexWrap='wrap' width={1}flexDirection="row" mx={-2}>
       <ListCountries/>
       
    </Flex>
   </Container>
    );
  }
}

export default Home; 