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

class Filter extends Component { 
    render() {
      return (
        <Textarea
          rows={1}
          placeholder="Start typing a country!"
          onKeyUp={ event => 
            this.props.onTextChange(event.target.value)}
        />
      )
    }
  }

class App extends Component {
  state = {filterString:'', countries: []}
  render() {
  let countryToRender =  this.state.countries.filter(country => 
        country.name.toLowerCase().includes(
          this.state.filterString.toLowerCase()))

    return ( 
   <Container>
      <Heading textAlign="center">Around the World</Heading>
        <Subhead textAlign="center">Learn about our neighbors around the world!</Subhead>
        <Divider/>
        <Filter onTextChange={text => {
                this.setState({filterString: text})
              }}/>
      <Flex flexWrap='wrap' width={1}flexDirection="row" mx={-2}>
       <ListCountries/>
    </Flex>
   </Container>
    );
  }
}

export default App;
