import React, { Component } from 'react';
import {
  ButtonCircle,
  Card,
  BackgroundImage,
  Subhead,
  Box,
  Image,
  Text
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
       <Box width={256} height={620}>
         <Card key={country.id} >
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
    )}
 </div>
     )
   }
}

export default ListCountries; 
