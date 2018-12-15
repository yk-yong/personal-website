/* @flow */

import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem as NavItemB } from "reactstrap";

import NavItem from "../subs/NavItem";
import { NAVBAR_COLLAPSE_ZINDEX } from "../SharedValue";

type Props = {};

type State = {
  isCollapse: boolean
};

export default class Header extends Component<Props, State> {
  NAVBAR_HEIGHT: number = 70;

  constructor() {
    super();

    this.state = {
      isCollapse: false
    };
  }

  toggle = () => {
    this.setState({
      isCollapse: !this.state.isCollapse
    });
  };

  render() {
    return (
      <header>
        <Navbar color="primary" dark expand="md" style={{ height: this.NAVBAR_HEIGHT }}>
          <NavbarBrand href={"/"}>Yik Kok</NavbarBrand>
          <NavbarToggler onClick={this.toggle} className={"border"} />
          <Collapse isOpen={this.state.isCollapse} navbar className={"justify-content-end bg-primary"} style={{ zIndex: NAVBAR_COLLAPSE_ZINDEX }}>
            <Nav navbar>
              <NavItemB className={"mx-2"}>
                <NavItem to={"/"}>Home</NavItem>
              </NavItemB>
              <NavItemB className={"mx-2"}>
                <NavItem to={"/about"}>About</NavItem>
              </NavItemB>
              <NavItemB className={"mx-2"}>
                <NavItem to={"/blog"}>Blog</NavItem>
              </NavItemB>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
