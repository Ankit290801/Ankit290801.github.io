import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button
  } from 'reactstrap';
  import {Link} from 'react-router-dom'

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
              <Navbar light expand="md" >
                  <NavbarToggler onClick={this.toggleNav} />
                  <NavbarBrand  href="/" className="pl-4 pr-3">Ankit Banerjee</NavbarBrand>
                  <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar className="ml-auto ">
                      <NavItem className="pt-2">
                        <Link  to="/" className="link">Home</Link>
                      </NavItem>
                      <NavItem className="pt-2">
                        <Link  to="/about" className="link">About</Link>
                      </NavItem>
                      <NavItem className="pt-2">
                        <Link  to="/projects" className="link">Projects</Link>
                      </NavItem>
                      <NavItem>
                        <Button href="https://drive.google.com/file/d/1QX4sutUKBWaSu9ubGw8-D4KCZJCVbnEz/view?usp=sharing" className="cv-button pb-2">Download CV</Button>
                      </NavItem>
                    </Nav>
                  </Collapse>
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