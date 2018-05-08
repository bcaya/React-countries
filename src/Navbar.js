import React from 'react'; 
import { Link } from 'react-router-dom';
import {
  NavLink,
  Heading,
  Subhead
} from 'rebass'; 

const Navbar = () => (
  <nav>
     <Heading textAlign="center">Around the World</Heading>
        <Subhead textAlign="center">Learn about our neighbors around the world!</Subhead>
    <NavLink to="/">Home</NavLink>
  </nav>
)

export default Navbar; 
