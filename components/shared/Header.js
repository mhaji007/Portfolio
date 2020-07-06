import React, {useState} from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import Link from 'next/link';
import {isAuthorized} from '@/utils/auth0';
import ReactResizeDetector from 'react-resize-detector';

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
// <span className="nav-link port-navbar-link clickable"> Logout</span>
<span >
    <a className="nav-link port-navbar-link clickable" href="/api/v1/logout">Logout</a>
</span>

const BsNavLink = props => {
    const {
        href,
        title,
        className = ''
    } = props;
    return (
        <Link href={href}>
            <a className={`nav-link port-navbar-link ${className}`}>{title}</a>
        </Link>
    )
}

const AdminMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Dropdown
            className="port-navbar-link port-dropdown-menu"
            nav
            isOpen={isOpen}
            toggle={() => setIsOpen(!isOpen)}>
            <DropdownToggle className="port-dropdown-toggle" nav caret>
                Admin
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem>
                    <BsNavLink
                        className="port-dropdown-item"
                        href="/portfolios/new"
                        title="Create Portfolio"/>
                </DropdownItem>
                <DropdownItem>
                    <BsNavLink
                        className="port-dropdown-item"
                        href="/blogs/editor"
                        title="Blog Editor"/>
                </DropdownItem>
                <DropdownItem>
                    <BsNavLink
                        className="port-dropdown-item"
                        href="/dashboard"
                        title="Dashboard"/>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

const Header = ({user, loading, className}) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)

    return (
        <ReactResizeDetector handleWidth>
      {({width}) =>
                <Navbar
                    className={`port-navbar port-default absolute ${className} ${width < 768 && isOpen ? 'is-open' : 'is-close'}`}
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
                            </NavItem> */
                            }
                        </Nav>
                        <Nav navbar className="ml-auto">
                            {
                                !loading && <> {
                                    user && <> {
                                        isAuthorized(user, 'admin') && <AdminMenu/>
                                    } < NavItem className = "port-navbar-item" > <LogoutLink/>
                                    </NavItem>
                                </>

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
                }
                </ReactResizeDetector>
    );

}

export default Header;