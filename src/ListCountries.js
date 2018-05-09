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
  Input
} from 'rebass'; 
import axios from 'axios'; 


const Grid = (props) => (
  <Box {...props}
    display='inline-block'
    verticalAlign='top'
    px={2} />
)

class Filter extends React.Component{
   render() {
      return (
        <div>
          <Input type="text" onKeyUp={event => 
            this.props.onTextChange(event.target.value)}/>
        </div>
      )
    }
}

 
class ListCountries extends Component{
    state = { countries: [],
              filterString: ''  } 
    
  componentDidMount(){
    axios.get('https://restcountries.eu/rest/v2/all')
      .then( res => this.setState({ countries: res.data }) )
  }
   render(){
     let { countries }= this.state
    let countryToRender = 
      this.state.countries
    ? this.state.countries.filter(country => {
      let matchesCountry = country.name.toLowerCase().includes(
          this.state.filterString.toLowerCase())
      return matchesCountry
          })
    : []
     return(
      
 <Fragment>
    <Filter onTextChange={text => {
    this.setState({filterString: text})
  }}/>
    { countryToRender.map( country => 
             <Box width={1/5} float="left" >
             
               <Panel >
                <Image ratio={1/3} src={country.flag}/>
                  <Subhead bg="gold" fontSize={2}>
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
