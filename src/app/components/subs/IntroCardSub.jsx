/* @flow */
import React, { Component } from "react";

type Props = {
  children: any,
  className?: string
};
export default class IntroCardSub extends Component<Props> {
  render() {
    const additionalClass = this.props.className || "";

    return <div className={`row intro-sub ${additionalClass}`}>{this.props.children}</div>;
  }
}
