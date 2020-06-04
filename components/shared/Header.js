import React, {useState} from 'react';

import {Collapse, Navbar, NavbarToggler, Nav, NavItem} from 'reactstrap';

import Link from 'next/link';

const BsNavBrand = () => <Link href="/">
    <a className="navbar-brand port-navbar-brand">Mehdi Hajikhani</a>
</Link>

const LoginLink = () =>
//<BsNavLink href="/api/v1/login" title="login"/>
<span >
    <a className="nav-link port-navbar-link clickable" href="/api/v1/login">Login</a>
</span>

const LogoutLink = () =>
// <span className="nav-link port-navbar-link clickable"> //Logout</span>
<span >
    <a className="nav-link port-navbar-link clickable" href="/api/v1/logout">Logout</a>
</span>

const BsNavLink = props => {
    const {title, href} = props;
    return (
        <Link href={href}>
            <a className="nav-link port-navbar-link">{title}</a>
        </Link>
    )
}

const Header = ({user, loading}) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)

    return (
        <div>
            <Navbar
                className="port-navbar port-default absolute"
                color="transparent"
                dark="dark"
                expand="md">
                <BsNavBrand/>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar="navbar">
                    <Nav navbar="navbar">
                        <NavItem className="port-navbar-item">
                            <BsNavLink href="/" title="Home"/>
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink href="/about" title="About"/>
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink href="/portfolios" title="Portfolios"/>
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink href="/blogs" title="Blogs"/>
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink href="/cv" title="Cv"/>
                        </NavItem>
                    </Nav>
                    <Nav navbar="navbar" className="ml-auto">
                        {
                            !loading && <> {
                                user && <NavItem className="port-navbar-item">
                                        <LogoutLink/>
                                    </NavItem>

                            } {
                                !user && <NavItem className="port-navbar-item">
                                        <LoginLink/>
                                    </NavItem>

                            }
                            </>
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );

}

export default Header;