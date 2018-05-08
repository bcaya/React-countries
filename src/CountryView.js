import React,{Component} from 'react';
import { 
  Flex,
  Box,
  Heading,
  Panel,
  PanelHeader,
  PanelFooter,
  Container,
  Column,
  Row,
  Border
    } from 'rebass';
import Navbar from './Navbar'; 

const fakeCountryData = {
  name: 'Mexico',
  commonName: 'Mexico',
  official: 'México',
  officialNative:'Estados Unidos Mexicanos',
  alternativeSpellings: 'MXMexicanosUnited Mexican StatesEstados Unidos Mexicanos',
  translations:{
    deu: 'Mexiko',
    fra: 'Mexique',
    hrv: 'Meksiko',
    ita: 'Messico',
    jpn: 'メキシコ',
    nld: 'Mexico',
    rus: 'Мексика',
    spa: 'México',
  },
  isoAlpha_2: 'MX',
  isoAlpha: 'MEX',
  isoNum: 484,
  intCallCode: 52,
  isoCurrencyCode: 'MXN',
  topLevelDomain: '.mx',
  nativeLanguage: 'Spanish',
  otherLanguages: 'Spanish',
  region: 'Americas',
  subregion: 'Central America',
  capital: 'Mexico City',
  demonym: 'Mexican',
  latLng: [23, -102],
  area: "1964375km²",
  landBorders: 'BLZ, GTM, USA',
  flag: 'http://countries.petethompson.net/data/flags/mex.svg'
}

class CountryView extends Component{
  render(){
    return(
      <div>
        <Navbar />
        <Container mt="40px">
          <Row>
            <Column width="1/3">Test</Column>
            <Column width="1/3">Test</Column>
            <Column width="1/3">Test</Column>
          </Row>
        </Container>
      </div>
    )
  }
}

export default CountryView;