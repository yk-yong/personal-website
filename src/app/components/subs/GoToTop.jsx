/* @flow */
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
export default class GoToTop extends Component<Props> {
  _onClickHandle = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div
        className={"go-to-top d-flex justify-content-center align-items-center"}
        onClick={this._onClickHandle}
      >
        <FontAwesomeIcon icon={"chevron-up"} size={"2x"} color={"rgba(165, 119, 255, 0.7)"} />
      </div>
    );
  }
}
