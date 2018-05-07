import React, { Component, Fragment } from 'react';
import {
  ButtonCircle,
  Panel,
  BackgroundImage,
  Subhead,
  Box,
  Image,
  Text,
  Row,
  Column,
  Small, 
} from 'rebass'; 
import axios from 'axios'; 


const Grid = (props) => (
  <Box {...props}
    display='inline-block'
    verticalAlign='top'
    px={2} />
)

 
class ListCountries extends Component{
    state = { countries: [] } 
    
  componentDidMount(){
    axios.get('https://restcountries.eu/rest/v2/all')
      .then( res => this.setState({ countries: res.data }) )
  }
   render(){
     let { countries }= this.state
     return(
      
 <Fragment>

    { countries.map( country => 
             <Box width={1/5} float="left" >
               <Panel >
                <Image ratio={1/3} src={country.flag}/>
                  <Subhead bg="yellow" fontSize={2}>
                    {country.name}
                      <br/>
                    <Small>({country.nativeName})</Small>
                  </Subhead>
                <Text 
                  textAlign='left'>
                    {country.capital}
                    {country.subregion}
                  {country.topLevelDomain}
                  {country.population}
                  {country.callingCodes}
                </Text>
               </Panel>
             </Box>
    )}
 </Fragment>

 
     )
   }
}

export default ListCountries; 
