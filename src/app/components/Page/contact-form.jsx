/* @flow */
import React, { PureComponent } from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BREAKPOINT_MD: number = 768; // bootstrap
const width = window.innerWidth;
const isMobileSize = (width < BREAKPOINT_MD && true) || false;

type Props = {};
type State = {
  isLoading: boolean
};
export default class ContactForm extends PureComponent<Props, State> {
  name: string;
  email: string;
  message: string;

  constructor(props: any) {
    super(props);

    this.state = {
      isLoading: false
    };
  }

  _onChangeNameHandle = (event: any) => {
    this.name = event && event.target && event.target.value;
  };

  _onChangeEmailHandle = (event: any) => {
    this.email = event && event.target && event.target.value;
  };

  _onChangeMessageHandle = (event: any) => {
    this.message = event && event.target && event.target.value;
  };

  _onClickHandle = (event: any) => {
    this.setState({
      isLoading: true
    });
  };

  render() {
    const formWidth = isMobileSize ? "w-100" : "w-50";
    return (
      <div className="row">
        <div className="col">
          <form className={`${formWidth} mx-auto`}>
            <div className={"form-group"}>
              <label htmlFor="name">Name</label>
              <div className={"input-group"}>
                <div className={"input-group-prepend"}>
                  <div className="input-group-text">
                    <FontAwesomeIcon icon={"user"} />
                  </div>
                </div>

                <input
                  type="text"
                  name="name"
                  id="name"
                  className={"form-control"}
                  placeholder={"Name"}
                  onChange={this._onChangeNameHandle}
                  disabled={this.state.isLoading}
                />
              </div>
            </div>
            <div className={"form-group"}>
              <label htmlFor="email">Email</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <FontAwesomeIcon icon={"envelope"} />
                  </div>
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={"form-control"}
                  placeholder={"john@example.com"}
                  onChange={this._onChangeEmailHandle}
                  disabled={this.state.isLoading}
                />
              </div>
            </div>
            <div className={"form-group"}>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                className={"form-control"}
                onChange={this._onChangeMessageHandle}
                disabled={this.state.isLoading}
              />
            </div>
            <div className={"m-4 text-center"}>
              <Button color={"primary"} onClick={this._onClickHandle}>
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
