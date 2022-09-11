import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  Bars,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/Synopsis' activeStyle>
            Synopsis
          </NavLink>
          <NavLink to='/Time' activeStyle>
            Time Sheets
          </NavLink>
          <NavLink to='/FourUp' activeStyle>
            4 ups
          </NavLink>
          <NavLink to='/Team' activeStyle>
            Team
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;