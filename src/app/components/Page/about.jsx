/* @flow */
import React, { PureComponent } from "react";
import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NAVBAR_HEIGHT, FOOTER_HEIGHT } from "../SharedValue";

type Props = {};
type State = {};
export default class About extends PureComponent<Props, State> {
  render() {
    const { innerHeight } = window;
    return (
      <Container style={{ minHeight: innerHeight - NAVBAR_HEIGHT - FOOTER_HEIGHT }}>
        <div className="row">
          <div className="col">
            <p className="lead-2x">
              <u>About Me</u>
            </p>
            <p>
              A React and React Native developer. Tech enthusiast. <br />
              Hiking, reading, playing chess, watching anime in my free time.
            </p>
            <p>
              <FontAwesomeIcon icon={"heart"} color={"#FF77D0"} /> Linux, open source and web technology.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p className="lead">
              <u>Familiar Tools and Frameworks</u>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ul>
              <li>Visual Studio Code</li>
              <li>Git</li>
              <li>NPM/Yarn</li>
              <li>Bootstrap 3/4</li>
              <li>Laravel</li>
              <li>React/React Native</li>
            </ul>
          </div>
        </div>
      </Container>
    );
  }
}
