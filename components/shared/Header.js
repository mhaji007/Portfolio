import React, {useState} from 'react';

import {Collapse, Navbar, NavbarToggler, Nav, NavItem} from 'reactstrap';

import Link from 'next/link';

const BsNavBrand = () => <Link href="/">
    <a className="navbar-brand port-navbar-brand">Mehdi Hajikhani</a>
</Link>

// Navigates to /api/v1/login serverless funciton that deals with authentication
const LoginLink = () =>
//<BsNavLink href="/api/v1/login" title="login"/>
<span >
    <a className="nav-link port-navbar-link clickable" href="/api/v1/login">Login</a>
</span>
// Navigates to /api/v1/login serverless funciton that deals with authentication
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

const Header = ({user, loading, className}) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)

    return (
        <div>
            <Navbar
                className={`port-navbar port-default absolute ${className}`}
                dark
                expand="md">
                <BsNavBrand/>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
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
                        {/* <NavItem className="port-navbar-item">
                            <BsNavLink href="/secret" title="Secret"/>
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink href="/secretssr" title="SecretSSR"/>
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink href="/onlyAdmin" title="Admin"/>
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink href="/onlyAdminssr" title="AdminSSR"/>
                        </NavItem> */}
                    </Nav>
                    <Nav navbar className="ml-auto">
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