/* @flow */
import React, { PureComponent } from "react";
import { Container } from "reactstrap";

import "./post.scss";

type Props = {
  location: any
};
type State = {};
export default class Content extends PureComponent<Props, State> {
  render() {
    const { state } = this.props.location;

    return (
      <Container>
        <div dangerouslySetInnerHTML={{ __html: state.postContent }} className="post dark-theme" />
      </Container>
    );
  }
}
