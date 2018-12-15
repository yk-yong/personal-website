/* @flow */

import React, { Component } from "react";

import Posts from "../../action/posts";
import styles from "./post.module.css";

type Props = {};
export default class Content extends Component<Props, void> {
  componentDidMount() {}

  render() {
    return <div className={styles.content} />;
  }
}
