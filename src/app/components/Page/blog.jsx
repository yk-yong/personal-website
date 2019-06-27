/* @flow */
import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import update from "immutability-helper";
import ContentLoader from "react-content-loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NAVBAR_HEIGHT, FOOTER_HEIGHT } from "../SharedValue";
import Posts from "../../action/posts";
import BlogPosts from "../Post/BlogPosts";

const { innerHeight, innerWidth } = window;

const marginHorizontal: number = 20;
let placeholderWidth: number = innerWidth - marginHorizontal;

// md: 768, lg: 992
// 0.8 - the width of container is 80% of browser full width
if (innerWidth >= 768 && innerWidth < 992) {
  placeholderWidth = Math.floor((innerWidth * 0.8 - marginHorizontal) / 2);
} else if (innerWidth >= 992) {
  placeholderWidth = Math.floor((innerWidth * 0.6 - marginHorizontal) / 3);
}

type Props = {};
type State = {
  posts: Array<any>,
  isReady: boolean,
  isLoadMore: boolean
};
export default class Blog extends Component<Props, State> {
  PER_PAGE: number = 6;

  currentPage: number = 1;
  constructor() {
    super();

    this.state = {
      posts: Array(6).fill({}),
      isReady: false,
      isLoadMore: false
    };
  }

  async componentDidMount() {
    this._fetchBlogPosts();
  }

  _fetchBlogPosts = async () => {
    try {
      const response = await Posts.fetchPosts(this.currentPage, this.PER_PAGE);
      if (response && response.data) {
        console.log(response.data);

        const extractedData = this._extractDataFrom(response.data);

        this.setState(
          update(this.state, {
            posts: { $set: extractedData },
            isReady: { $set: true }
          })
        );
      }
    } catch (error) {}
  };

  _extractDataFrom = (originalData: Array<any>): Array<any> => {
    return originalData.map((post, index) => {
      const { id, title, excerpt, date, _embedded, slug, content } = post;
      return {
        id,
        date,
        slug,
        title: title.rendered,
        excerpt: excerpt.rendered.match(/^<p>.*<\/p>$/gm)[0],
        content: content.rendered,
        featureImage: _embedded["wp:featuredmedia"][0].source_url
      };
    });
  };

  _renderBlogPosts = (): Array<any> => {
    const { posts } = this.state;

    return posts.map((post, index) => (
      <BlogPosts post={post} key={`${post.id}-${index}`} />
    ));
  };

  _renderContentPlaceholders = (): Array<any> => {
    const { posts } = this.state;

    return posts.map((emptyPost, index) => (
      <ContentPlaceholder key={`placeholder-${index}`} />
    ));
  };

  _onClickLoadMore = (event: any) => {
    this.currentPage++;

    this.setState({ isLoadMore: true }, async () => {
      try {
        const response = await Posts.fetchPosts(
          this.currentPage,
          this.PER_PAGE
        );

        if (response.status === 200) {
          const extractedData = this._extractDataFrom(response.data);
          this.setState(
            update(this.state, {
              posts: { $push: extractedData },
              isLoadMore: { $set: false }
            })
          );
        }
      } catch (error) {
        this.setState({ isLoadMore: false });
      }
    });
  };

  render() {
    const { isReady, isLoadMore, posts } = this.state;

    return (
      <Container
        className="my-5"
        style={{ minHeight: innerHeight - NAVBAR_HEIGHT - FOOTER_HEIGHT }}
      >
        <div className="row">
          <div className="col">
            <p className="lead-2x">
              <u>Blog</u>
            </p>
          </div>
        </div>

        <div className="row">
          {(isReady &&
            posts.map((post, index) => (
              <BlogPosts post={post} key={`${post.id}-${index}`} />
            ))) ||
            this._renderContentPlaceholders()}
        </div>
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-center my-3">
              {(isLoadMore && (
                <FontAwesomeIcon
                  icon={"spinner"}
                  color={"#a577ff"}
                  size="2x"
                  spin
                />
              )) || (
                <LoadMore
                  onClickLoadMoreHandler={this._onClickLoadMore}
                  disabled={!this.state.isReady}
                />
              )}
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

const ContentPlaceholder = props => (
  <div className="col-12 col-md-6 col-lg-4 text-center">
    <ContentLoader
      style={{
        height: 400,
        width: placeholderWidth,
        paddingLeft: 15,
        paddingRight: 15
      }}
      height={400}
      width={placeholderWidth}
      speed={2}
      primaryColor="#d4d4d4"
      secondaryColor="#ecebeb"
      {...props}
    >
      <rect x="11.7" y="8.67" rx="0" ry="0" width="420" height="29.04" />
      <rect x="247.7" y="47.67" rx="0" ry="0" width="155" height="14" />
      <rect x="11.7" y="18.67" rx="0" ry="0" width="0" height="0" />
      <rect x="11.7" y="79.67" rx="0" ry="0" width="420" height="118.67" />
      <rect x="11.7" y="246.67" rx="0" ry="0" width="420" height="61" />
    </ContentLoader>
  </div>
);

const LoadMore = props => (
  <div>
    <Button
      color={"primary"}
      onClick={props.onClickLoadMoreHandler}
      disabled={props.disabled}
    >
      More
    </Button>
  </div>
);
