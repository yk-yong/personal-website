/* @flow */
import React, { PureComponent } from "react";
import { Container } from "reactstrap";

const { innerHeight } = window;

type Props = {};
export default class AboutSite extends PureComponent<Props> {
  NAVBAR_HEIGHT: number = 70;
  FOOTER_HEIGHT: number = 60;

  render() {
    return (
      <Container style={{ minHeight: innerHeight - this.NAVBAR_HEIGHT - this.FOOTER_HEIGHT }}>
        <div className="row">
          <div className="col">
            <p className={"p-2 lead"}>This website is built by:</p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <ul>
              <li>
                <a href="https://reactjs.org/">ReactJS</a>
              </li>
              <li>
                <a href="http://getbootstrap.com/">Bootstrap 4.1</a>
              </li>
              <li>
                <a href="https://reacttraining.com/react-router/core/guides/philosophy">
                  React Router
                </a>
              </li>
              <li>
                <a href="https://fontawesome.com">FontAwesome</a>
              </li>
              <li>
                <a href="https://fonts.google.com/specimen/Raleway">Raleway font</a>
              </li>
              <li>
                <a href="https://www.npmjs.com/package/react-animate-on-scroll">
                  React Animation on Scroll
                </a>
              </li>
              <li>
                <a href="https://github.com/yikkok-yong/personal-site">
                  And here is the source code
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    );
  }
}
