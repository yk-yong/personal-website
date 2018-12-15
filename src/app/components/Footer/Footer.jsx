/* @flow */
import React, { PureComponent } from "react";

import config from "../../config";

import styles from "./footer.module.css";
import { NavLink } from "react-router-dom";

type Props = {};
export default class Footer extends PureComponent<Props, void> {
  render() {
    return (
      <footer>
        <div className={`${styles.footer} bg-dark font-italic text-white row justify-content-between`}>
          <div className="col-6 col-md-3">
            <p className={"mx-2 my-0"}>&copy; {`${config.currentYear}`} Yik Kok</p>
          </div>
          <div className="col-6 col-md-3 text-right">
            <NavLink exact to={"/about-site"} className={"mx-2"} role={"button"} style={{ color: "white", textDecorationLine: "underline" }}>
              @bout site
            </NavLink>
          </div>
        </div>
      </footer>
    );
  }
}
