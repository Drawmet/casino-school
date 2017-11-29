import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, NavItem, NavDropdown,
            DropdownToggle, DropdownItem, DropdownMenu} from 'reactstrap';
import logo from '../assets/logo-schoolcasino.png';

export default class Navba extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isOpen: false,
          dropDownOpen: false,
          color: this.props.color,
          dark: this.props.dark,
          light: this.props.light
        };
      }

      toggleDropdown = () => {
        this.setState({
          dropDownOpen: !this.state.dropDownOpen,
        });
      }

      toggleCollapse = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      render() {
        const data = this.props.data;
        let switchLanguage = this.props.switchLanguage;
        
        return (
            <Navbar className="fix_navbar" color={this.state.color} dark={this.state.dark} light={this.state.light} expand="md">
              <NavbarBrand href="/"><img className="logo" src={logo} alt="Logo" width="100" height="100"/></NavbarBrand>
                <NavbarToggler onClick={this.toggleCollapse} />
                <Collapse isOpen={this.state.isOpen} navbar>
                <h3 className="text-white nav-header">Premier Academy Casino</h3>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#marketing">{data.home}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#faq">{data.faq}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">{data.contacts}</NavLink>
                        </NavItem>
                        <NavDropdown isOpen={this.state.dropDownOpen} toggle={this.toggleDropdown}>
                          <DropdownToggle nav caret>
                            {data.lang}
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem href="#" data-content="#" onClick={switchLanguage.bind(this,'en')}>English</DropdownItem>
                            <DropdownItem href="#" data-content="#" onClick={switchLanguage.bind(this,'ru')}>Русский</DropdownItem>
                          </DropdownMenu>
                        </NavDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        );
      }
}
