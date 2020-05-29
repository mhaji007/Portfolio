import React, {useState} from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';

import Link from 'next/link';

const BsNavBrand = () => 
    <Link href="/"> 
        <a className = "navbar-brand port-navbar-brand">Mehdi Haijkhani</a>
    </Link>



const BsNavLink = props => {
    const { route, title } = props;
    return (
      <Link href={route}>
        <a className="nav-link port-navbar-link">{title}</a>
      </Link>
    )
  }

const Header = () =>  {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)

        return (
            <div>
                <Navbar className="port-navbar port-default absolute"
                    color="transparent"
                    dark
                    expand="md">
                    <BsNavBrand/>
                    <NavbarToggler onClick={toggle}/>
                    <Collapse isOpen={isOpen} navbar="navbar">
                        <Nav className="ml-auto" navbar="navbar">
                            <NavItem className = "port-navbar-item">
                                <BsNavLink route="/" title="Home"/>
                            </NavItem>
                            <NavItem className = "port-navbar-item">
                                <BsNavLink route="/about" title="About"/>
                            </NavItem>
                            <NavItem className = "port-navbar-item">
                                <BsNavLink route="/portfolios" title="Portfolios"/>
                            </NavItem>
                            <NavItem className = "port-navbar-item">
                                <BsNavLink route="/blogs" title="Blogs"/>
                            </NavItem>
                            <NavItem className = "port-navbar-item">
                                <BsNavLink route="/cv" title="Cv"/>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );

}

export default Header;