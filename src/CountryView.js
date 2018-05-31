import React from 'react';
import { 
  Heading,
  Container,
  Column,
  Row,
  Card,
  Text
    } from 'rebass';
import Navbar from './Navbar'; 

  const fakeCountryData = {
  singleCountry: {
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
}

class CountryView extends React.Component {
  
  // componentDidMount(){
  //   setTimeout(() => {
  //     this.setState({countryData: fakeCountryData});
  //   })
  // }
  render(){
    return(
      <div>
        <Navbar />
          <Container mt="40px" bg="lightBlue">
            <Row>
              <Column width="1/3">
                <Card>
                  <Heading children="Names" />
                  <Row>
                    <Column width="1/4">
                      <Text textAlign='left' fontWeight='bold' children='Common' />
                    </Column>
                    <Column>
                      <Text textAlign='left'  children='Mexico' />
                    </Column>
                  </Row>
                  <Row>
                    <Column>
                      <Text textAlign='left' fontWeight='bold' children='Official' />
                    </Column>
                    <Column>
                      <Text textAlign='left'  children='United Mexican States' />
                    </Column>
                  </Row>
                  <Row>
                    <Column>
                      <Text textAlign='left' fontWeight='bold' children='Common (Native)' />
                    </Column>
                    <Column>
                      <Text textAlign='left'  children='México' />
                    </Column>
                  </Row>
                  <Row>
                    <Column>
                      <Text textAlign='left' fontWeight='bold' children='Official (Native)' />
                    </Column>
                    <Column>
                      <Text textAlign='left'  children='Estados Unidos Mexicanos' />
                    </Column>
                  </Row>
                  <Row>
                    <Column>
                      <Text textAlign='left' fontWeight='bold' children='Alternative spellings' />
                    </Column>
                    <Column>
                      <Text textAlign='left'  children='MX, Mexicanos, United Mexican States, Estados Unidos Mexicanos' />
                    </Column>
                  </Row>
                </Card>
              </Column>
              <Column width="1/3">
                <Card>
                  <Heading children="Language" />
                  <Row>
                    <Column>
                      <Text textAlign='left' fontWeight='bold' children="Native Language" />
                    </Column>
                    <Column>
                      <Text textAlign='left' children="Mexico"/>
                    </Column>
                  </Row>
                  <Row>
                    <Column>
                      <Text textAlign='center' fontWeight='bold' children="Languages" />
                    </Column>
                  </Row>
                  <Row>
                    <Column>
                      <Text textAlign='left' fontWeight='bold' children="spa" />
                    </Column>
                    <Column>
                      <Text textAlign='left' children="Spanish" />
                    </Column>
                  </Row>
                </Card>
              </Column>
            </Row>
            <Row>
              <Column width="1/3" >
                <Card>
                  <Heading children="Codes" />
                  <Row>
                    <Column>
                      <Text textAlign='left' fontWeight='bold' children="ISO 3166-1 alpha-2" />
                    </Column>
                     <Column>
                      <Text textAlign='left'  children="MX" />
                    </Column>
                  </Row>
                  <Row>
                    <Column>
                      <Text textAlign='left' fontWeight='bold' children="ISO 3166-1 alpha-2" />
                    </Column>
                     <Column>
                      <Text textAlign='left'  children="MX" />
                    </Column>
                  </Row>
                  <Row>
                    <Column>
                      <Text textAlign='left' fontWeight='bold' children="ISO 3166-1 numeric" />
                    </Column>
                    <Column>
                      <Text textAlign='left' children="484"/>
                    </Column>
                  </Row>
                  <Row>
                    <Column>
                      <Text textAlign='left' fontWeight='bold' children="International calling code" />
                    </Column>
                    <Column>
                      <Text textAlign='left' children='52' />
                    </Column>
                  </Row>
                  <Row>
                    <Column>
                      <Text textAlign='left' fontWeight='bold' children='ISO 4217 currency code' />
                    </Column>
                    <Column>
                      <Text textAlign='left' children='MXN' />
                    </Column>
                  </Row>
                  <Row>
                    <Column>
                      <Text textAlign='left' fontWeight='bold' children='Top level domain'/>
                    </Column>
                    <Column>
                      <Text textAlign='left' children='.mx' />
                    </Column>
                  </Row>
                </Card>
              </Column>
              <Column width="1/3" >
                <Card>
                  <Heading children="Geography" />
                  <Row>
                    <Column>
                      <Text textAlign='left' fontWeight='bold' children="Region" />
                    </Column>
                     <Column>
                      <Text textAlign='left'  children="Americas" />
                    </Column>
                  </Row>
                  <Row>
                    <Column>
                      <Text textAlign='left' fontWeight='bold' children="Subregion" />
                    </Column>
                     <Column>
                      <Text textAlign='left'  children="Central America" />
                    </Column>
                  </Row>
                  <Row>
                    <Column>
                      <Text textAlign='left' fontWeight='bold' children="Capital" />
                    </Column>
                    <Column>
                      <Text textAlign='left' children="Mexico City"/>
                    </Column>
                  </Row>
                  <Row>
                    <Column>
                      <Text textAlign='left' fontWeight='bold' children="Demonym" />
                    </Column>
                    <Column>
                      <Text textAlign='left' children='Mexican' />
                    </Column>
                  </Row>
                  <Row>
                    <Column>
                      <Text textAlign='left' fontWeight='bold' children='Lat/Lng' />
                    </Column>
                    <Column>
                      <Text textAlign='left' as='a' children='23, -102' />
                    </Column>
                  </Row>
                  <Row>
                    <Column>
                      <Text textAlign='left' fontWeight='bold' children='Area'/>
                    </Column>
                    <Column>
                      <Text textAlign='left' children='1964375km²' />
                    </Column>
                  </Row>
                </Card>
              </Column>
            </Row>  
          </Container>
      </div>
    )
  }
}

export default CountryView;