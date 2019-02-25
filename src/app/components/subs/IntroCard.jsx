/* @flow */
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import config from "../../config.js";

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
            <a href={config.github_url}>
              <FontAwesomeIcon icon={["fab", "github"]} size={"3x"} />
            </a>
          </div>
          <div className={"social-icon"}>
            <a href={config.linkedIn_url}>
              <FontAwesomeIcon icon={["fab", "linkedin"]} size={"3x"} />
            </a>
          </div>
          <div>
            <div className={"fiver-round d-flex justify-content-center align-items-center"}>
              <a href={config.fiver_url} target="_blank" rel="noopener noreferrer" className="fiver-name">
                fiver
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
