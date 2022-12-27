import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import NavbarStyles from './NavbarStyles'
import logo from '../../images/TG-logo.png'

const NavbarTG = () => {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
    <NavbarStyles>
      <Navbar color="faded" light>
        <img src={logo} alt="togetherly logo" className="mx-3" />
        <NavbarBrand href="/" className="me-auto">
          <h3 className="pt-2">Togetherly</h3>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/meeting">Meeting</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/planner">Project Planner</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/explore">Explore</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/messages">Messages</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/profile">Profile</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </NavbarStyles>
  )
}

export default NavbarTG
