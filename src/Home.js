import React from 'react';
import './App.css';
import {
  Flex,
  Container,
  Divider
} from 'rebass'; 
import ListCountries from './ListCountries';
import Navbar from './Navbar'; 

class Home extends React.Component{
    state = { countries: []}
  render() {
    return ( 
   <Container>
      <Navbar />
        <Divider/>
        <Flex flexWrap='wrap' width={1}flexDirection="row" mx={-2}>
       <ListCountries/>
    </Flex>
   </Container>
    );
  }
}

export default Home; 