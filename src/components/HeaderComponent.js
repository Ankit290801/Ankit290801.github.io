import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';

class Header extends Component{

  constructor(props){
    super(props);
    this.state = {
      isNavOpen: false
    }
    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav(){
    this.setState({
      isNavOpen: !this.state.isNavOpen
    })
  }
    render(){
        return(
            <>
              <Navbar light expand="md">
                <div className="container ">
                  <NavbarToggler onClick={this.toggleNav} />
                  <NavbarBrand  href="/">Ankit Banerjee</NavbarBrand>
                  <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                      <NavItem>
                        <NavLink href="/">Home</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/ankit290801.github.io/about">About</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/ankit290801.github.io/projects">Projects</NavLink>
                      </NavItem>
                    </Nav>
                  </Collapse>
                </div>
              </Navbar>
             {/*  </Navbar>
                <Navbar expand="md" className="navbar-light">
                  <NavbarBrand href="/">Ankit Banerjee</NavbarBrand>
                  <NavbarToggler onClick />
                  <Collapse isOpen navbar>
                    <Nav className="mr-auto" navbar>
                      
                      <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                          Options
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem>
                            Option 1
                          </DropdownItem>
                          <DropdownItem>
                            Option 2
                          </DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>
                            Reset
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </Nav>
                  </Collapse>
                </Navbar> */}
            </>
        )
    }
}

export default Header;