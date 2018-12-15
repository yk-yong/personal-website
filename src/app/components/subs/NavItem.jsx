/* @flow */
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  to: string,
  children: any
};
type State = {};
export default class NavItem extends Component<Props, State> {
  render() {
    return (
      <NavLink
        {...this.props}
        exact
        to={this.props.to}
        className="text-white font-weight-bold"
        activeClassName="active"
      >
        {this.props.children}
      </NavLink>
    );
  }
}
