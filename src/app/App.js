/* @flow */
import React, { Component } from "react";
import Route from "./components/Page/route";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown, faUser, faHeart, faEnvelope, faChevronUp, faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";

library.add(faGithub, faLinkedin, faChevronDown, faUser, faHeart, faEnvelope, faChevronUp, faSearch, faSpinner);

type Props = {};
class App extends Component<Props> {
  render() {
    return <Route />;
  }
}

export default App;
