import React from 'react';

import { Nav,NavItem, NavLink } from 'reactstrap'
import './styles.css'

function Header(){
    return(
        <React.Fragment>
        <div className='header'>
        <Nav>
            <NavItem>
                <h3><NavLink href="/" style={{color:'silver'}} >Flight Booking</NavLink></h3>
            </NavItem>
            <NavItem>
                <NavLink href='/book-flight' style={{color:'silver'}}>Book Flight</NavLink>
            </NavItem>
            <NavItem><NavLink href='/view-detail' style={{color:'silver'}}>View Details</NavLink></NavItem>
        </Nav>
        </div>
        </React.Fragment>
    )
}
export default Header;