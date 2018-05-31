import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {
  ButtonCircle,
  Card,
  BackgroundImage,
  Subhead,
  Box,
  Image,
  Text,
  Row,
  Column,
  Small, 
  Input,
  ButtonTransparent
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
          <Input type="text" placeholder='Search' onKeyUp={event => 
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
             <Box width={1/5} float="left" key={country.name} >
             
               <Card >
                {/* <Image ratio={1/3} src={country.flag}/> */}
                  <Subhead bg="gold" fontSize={2}>
                    <ButtonTransparent children={country.name} />
                      <br/>
                    <Small>({country.nativeName})</Small>
                  </Subhead>
                  <Text 
                    textAlign='left'
                    children={country.capital}>
                  <Text 
                    textAlign='left'
                    children={country.subregion}
                    />
                  <Text
                    textAlign='left'
                    children={country.topLevelDomain}
                    />
                  <Text
                    textAlign='left'
                    children={country.population}
                    />
                  <Text
                    textAlign='left'
                    children={country.callingCodes}
                    />
                </Text>
               </Card>
             </Box>
    )}
 </Fragment>

 
     )
   }
}

export default connect()(ListCountries); 
