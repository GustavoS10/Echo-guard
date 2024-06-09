import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import { 
    BsFire,
    BsFillHouseFill,
    BsFillExclamationCircleFill,
    BsFillEnvelopeExclamationFill
} from "react-icons/bs";

import "./Navigation.css";

function Navigation() {

  return (
    <div>
      <Navbar>
        <NavbarBrand href="/">Echo Guard</NavbarBrand>
            <Nav>
                <NavItem>
                    <NavLink href="#"><BsFillHouseFill/>Casa</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"><BsFire />Queimadas</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"><BsFillExclamationCircleFill/>Sobre Nós</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"><BsFillEnvelopeExclamationFill/>Notícias</NavLink>
                </NavItem>
            </Nav>
      </Navbar>
    </div>
  );
}

export default Navigation;