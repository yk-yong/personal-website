/* @flow */
import React, { Component } from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

type Props = {
  post: any
};
export default class BlogPosts extends Component<Props> {
  DATE_FORMAT: string = "YYYY MMM DD";
  shouldComponentUpdate(nextProps: any, nextState: any) {
    return false;
  }

  render() {
    return (
      <div className="col-12 col-md-6 col-lg-4">
        <div className="posts-container my-4 p-2">
          <NavLink
            to={{
              pathname: `/blog/post/${this.props.post.slug}`,
              state: {
                postContent: this.props.post.content,
                postTitle: this.props.post.title
              }
            }}
            className="posts-overlay"
          >
            <div className="d-flex justify-content-center align-items-center h-100 w-100">
              <FontAwesomeIcon icon={"search"} size="2x" color={"#000"} />
            </div>
          </NavLink>
          <div className="px-2">
            <p
              className="posts-title text-primary"
              dangerouslySetInnerHTML={{ __html: this.props.post.title }}
              style={{ wordBreak: "break-word" }}
            />
          </div>
          <div>
            <p className="posts-date text-right">
              {moment(this.props.post.date).format(this.DATE_FORMAT)}
            </p>
          </div>
          <div className="posts-feature-img">
            <img
              src={`${this.props.post.featureImage}`}
              alt="feature"
              className="img-fluid"
            />
          </div>
          <div
            className="mt-3"
            dangerouslySetInnerHTML={{ __html: this.props.post.excerpt }}
          />
        </div>
      </div>
    );
  }
}
