/* @flow */
import React, { Component } from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Page/main";
import About from "../Page/about";
import AboutSite from "../Page/about-this-site";
import Footer from "../Footer/Footer";
import Blog from "./blog";
import Post from "../Post/Post";

type Props = {};
export default class Home extends Component<Props> {
  _renderHandle = (component: any) => (props: any) => {
    return component;
  };

  _renderPostHandle = (props: any) => <Post {...props} />;

  shouldComponentUpdate(nextProps: any, nextState: any) {
    return false;
  }

  render() {
    return (
      <BrowserRouter>
        <div className="h-100">
          <Header />

          <Route exact path="/" render={this._renderHandle(<Main />)} />
          <Route exact path="/about" render={this._renderHandle(<About />)} />
          <Route exact path="/about-site" render={this._renderHandle(<AboutSite />)} />
          <Route exact path="/blog" render={this._renderHandle(<Blog />)} />
          <Route path="/blog/post/:slug" render={this._renderPostHandle} />

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
