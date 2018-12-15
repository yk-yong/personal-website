/* @flow */
import React, { Component } from "react";
import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NAVBAR_HEIGHT, FOOTER_HEIGHT } from "../SharedValue";
import ContactForm from "./contact-form";

const { innerHeight } = window;
type Props = {};
export default class Contact extends Component<Props> {
  render() {
    return (
      <Container className={"pt-4"} style={{ minHeight: innerHeight - NAVBAR_HEIGHT - FOOTER_HEIGHT }}>
        <div className="row">
          <div className="col">
            <p className="lead-2x">
              <u>Contact Me</u>
            </p>
            <p>
              Drop me a message or say hi to me{" "}
              <span role="img" aria-label="smile">
                😁
              </span>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <FontAwesomeIcon icon="envelope" />{" "}
            <a href="mailto:hello@yikkok.com" className="text-dark font-weight-bold px-2">
              hello@yikkok.com
            </a>
          </div>
        </div>
        <ContactForm />
      </Container>
    );
  }
}
