/* @flow */
import React, { PureComponent } from "react";

type Props = {
  containerHeight?: number,
  statHeight?: number,
  additional?: Array<String>,
  statClass: string,
  label: string
};
type State = {
  isMounted: boolean
};
export default class Stats extends PureComponent<Props, State> {
  static defaultProps = {
    containerHeight: 60,
    statHeight: 15
  };

  constructor(props: any) {
    super(props);

    this.state = { isMounted: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isMounted: true });
    }, 250);
  }

  render() {
    const statClass = (this.state.isMounted && this.props.statClass) || "";

    return (
      <div className={"border border-warning bw-3"} style={{ minHeight: this.props.containerHeight }}>
        <div>
          <p className={"m-1 p-1"}>{this.props.label}</p>
          <div className={"m-1"}>
            <div className={"w-100 bg-lightgray full-stat"} style={{ height: this.props.statHeight }}>
              <div className={`bg-primary nested-stat border-right bw-4 border-warning ${statClass}`} style={{ height: this.props.statHeight }} />
            </div>
          </div>
          {this.props.additional ? (
            <small>
              <p className={"text-muted m-1"}>{this.props.additional.join(", ")}</p>
            </small>
          ) : null}
        </div>
      </div>
    );
  }
}
