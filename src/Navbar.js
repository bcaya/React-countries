import React from 'react'; 
import { Link } from 'react-router-dom';
import {
  NavLink,
  Heading,
  Subhead,
  Toolbar,
  Button
} from 'rebass'; 

const Navbar = () => (
  <nav>
     <Heading textAlign="center">Around the World</Heading>
        <Subhead textAlign="center">Learn about our neighbors around the world!</Subhead>
    <Toolbar bg="gold">
      <Link to="/">
        <Button is='a'>Home</Button>
      </Link>
    </Toolbar>
  </nav>
)

export default Navbar; 
