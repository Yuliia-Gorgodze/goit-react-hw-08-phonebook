
import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'

const AuthNav  = () => {
    return (
        <Nav>
      <Nav.Link href="#deets"><NavLink to='/login'>login</NavLink></Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
      <NavLink to='/registrazion'>registrazion</NavLink>
      </Nav.Link>
    </Nav> 
    )
}

 export default AuthNav;