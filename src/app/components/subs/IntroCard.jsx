/* @flow */
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};
export default class IntroCard extends Component<Props> {
  render() {
    return (
      <div className={"d-flex flex-column align-items-center"}>
        <div className={"intro-sec text-center"}>
          <p>
            Hi, I'm <u>Yik Kok</u>
          </p>
          <p>React Native developer and tech enthusiast</p>
        </div>
        <div className={"social-sec d-flex flex-row"}>
          <div className={"social-icon"}>
            <a href={"https://github.com/yikkok-yong"}>
              <FontAwesomeIcon icon={["fab", "github"]} size={"3x"} />
            </a>
          </div>
          <div className={"social-icon"}>
            <a href={"https://www.linkedin.com/in/yikkok-yong"}>
              <FontAwesomeIcon icon={["fab", "linkedin"]} size={"3x"} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
