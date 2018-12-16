/* @flow */
import React, { Component } from "react";
import { Container } from "reactstrap";

import "./post.scss";

type Props = {
  location: any
};
type State = {};
export default class Content extends Component<Props, State> {
  render() {
    const { state } = this.props.location;

    return (
      <Container>
        <div className="my-5">
          <h1 className="lead-3x">
            <u>{state.postTitle}</u>
          </h1>
        </div>
        <div dangerouslySetInnerHTML={{ __html: state.postContent }} className="post dark-theme" />
      </Container>
    );
  }
}
