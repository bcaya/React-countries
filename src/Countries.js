import React, { Component } from 'react';
import {
  ButtonCircle,
  Card,
  BackgroundImage,
  Subhead,
  Box,
  Image,
  Text,
  Flex, 
} from 'rebass'; 
import axios from 'axios'; 

class ListCountries extends Component{
    state = { countries: [] } 

  componentDidMount(){
    axios.get('https://restcountries.eu/rest/v2/all')
      .then( res => this.setState({ countries: res.data }) )
  }
   render(){
     let { countries }= this.state
     return(
      
 <div>
    { countries.map( country => 
       <Box width={256} key={country.alpha2Code}>
         <Flex mx={-2}>
           <Box width={1} px={2}>
             <Card  >
              <Image ratio={1/3} src={country.flag}/>
                <Subhead p={1}>
                  {country.name}
                    <br/>
                  {country.nativeName}
                </Subhead>
              <Text 
                textAlign='center'
                fontWeight='bold'
              >
                {country.capital}
                {country.topLevelDomain}
                {country.otherNames}
    
              </Text>
             </Card>
           </Box>
         </Flex>
       </Box>
    )}
 </div>
     )
   }
}

export default ListCountries; 
