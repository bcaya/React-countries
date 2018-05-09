import React, {Fragment} from 'react'; 
import { Link } from 'react-router-dom';
import {
  NavLink,
  Heading,
  Subhead,
  Toolbar,
  Button
} from 'rebass'; 

const Navbar = () => (
    <Fragment>
       <Heading textAlign="center" children="Around the World" />
          <Subhead textAlign="center" children="Learn about our neighbors around the world!"/>
      <Toolbar bg="gold">
        <Link to="/">
          <Button is='a' children="Home" />
        </Link>
      </Toolbar>
    </Fragment>
)

export default Navbar; 
