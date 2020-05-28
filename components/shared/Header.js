import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

import Link from 'next/link';

const BsNavLink = props => {
    const { route, title } = props;
    return (
      <Link href={route}>
        <a className="nav-link">{title}</a>
      </Link>
    )
  }

export default class Header extends React.Component {

    state = {isOpen: false}
    toggle = () => this.setState({isOpen: !this.state.isOpen})

    render() {
        return (
            <div>
                <Navbar color="light" light="light" expand="md">
                    <NavbarBrand href="/">Mehdi Hajikhani</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.isOpen} navbar="navbar">
                        <Nav className="ml-auto" navbar="navbar">
                            <NavItem>
                                <BsNavLink route="/" title="Home"/>
                            </NavItem>
                            <NavItem>
                                <BsNavLink route="/about" title="About"/>
                            </NavItem>
                            <NavItem>
                                <BsNavLink route="/portfolios" title="Portfolios"/>
                            </NavItem>
                            <NavItem>
                                <BsNavLink route="/blogs" title="Blogs"/>
                            </NavItem>
                            <NavItem>
                                <BsNavLink route="/cv" title="Cv"/>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );

    }
}