/* @flow */
import React, { Component } from "react";
import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScollToComponent from "react-scroll-to-component";
import ScrollAnimation from "react-animate-on-scroll";
import { NavLink } from "react-router-dom";

import IntroCard from "../subs/IntroCard";
import IntroCardSub from "../subs/IntroCardSub";
import config from "../../config";
import GoToTop from "../subs/GoToTop";
import { NAVBAR_HEIGHT } from "../SharedValue";

const { innerHeight } = window;

type Props = {};
export default class main extends Component<Props> {
  ABOUT_ME: any;

  _onClickChevronHandle = (event: any) => {
    ScollToComponent(this.ABOUT_ME, { offset: -NAVBAR_HEIGHT, align: "top" });
  };

  render() {
    return (
      <Container fluid className={"px-0"}>
        <div
          className={
            "d-flex flex-column justify-content-around introduction-container-bg"
          }
          style={{ minHeight: innerHeight - NAVBAR_HEIGHT }}
        >
          <IntroCard />
          <div className={"d-flex justify-content-center"}>
            <div
              className={"d-inline-block"}
              onClick={this._onClickChevronHandle}
            >
              <FontAwesomeIcon
                icon={"chevron-down"}
                size={"2x"}
                className={"scroll-down-icon"}
              />
            </div>
          </div>
        </div>

        <Container>
          <div ref={ref => (this.ABOUT_ME = ref)}>
            <IntroCardSub>
              <div className={"col mx-3"}>
                <ScrollAnimationWrapper
                  animateIn={"fadeInLeft"}
                  animateOnce={true}
                  style={{ height: "100%" }}
                >
                  <div className={"py-4"}>
                    <p className={"text-center font-weight-bold lead-2x"}>
                      About Me
                    </p>
                  </div>
                  <div className={"mt-2"}>
                    <p className={"font-weight-500"}>
                      Programming - from hobby, then web developer and now react
                      native mobile developer
                    </p>
                    <p className={"font-weight-500"}>
                      <FontAwesomeIcon icon={"heart"} color={"#FF77D0"} />{" "}
                      Linux, open source and web technology
                    </p>
                  </div>
                  <div className={"mt-4"}>
                    <NavLink
                      exact
                      className={"btn btn-primary"}
                      to={"/about"}
                      role={"button"}
                    >
                      Discover more
                    </NavLink>
                  </div>
                </ScrollAnimationWrapper>
              </div>
              <div className={"col mx-3 d-none d-md-block"}>
                <ScrollAnimationWrapper
                  animateIn={"fadeInRight"}
                  animateOnce={true}
                  style={{ height: "100%" }}
                >
                  <div className={"h-100 bg-img about-me-bg-img"} />
                </ScrollAnimationWrapper>
              </div>
            </IntroCardSub>
          </div>
        </Container>

        <div className={"bg-gray"}>
          <Container>
            <IntroCardSub>
              <div className={"col align-self-center"}>
                <ScrollAnimationWrapper animateIn={"fadeIn"} animateOnce={true}>
                  <div className={"py-4"}>
                    <p className={"text-center font-weight-bold lead-2x"}>
                      Contact
                    </p>
                  </div>
                  <div>
                    <p className={"text-center font-weight-500"}>
                      If there is anything I could help you, feel free drop me a
                      message
                    </p>
                    <p className={"text-center"}>
                      <FontAwesomeIcon icon={"envelope"} />
                      <a
                        href="mailto:hello@yikkok.com"
                        className={"text-dark font-weight-bold px-2"}
                      >
                        hello@yikkok.com
                      </a>
                    </p>
                  </div>
                </ScrollAnimationWrapper>
              </div>
            </IntroCardSub>
          </Container>
        </div>

        <Container>
          <div>
            <IntroCardSub>
              <div className={"col mx-3 d-none d-md-block"}>
                <ScrollAnimationWrapper
                  animateIn={"fadeInLeft"}
                  animateOnce={true}
                  style={{ height: "100%" }}
                >
                  <div className={"h-100 bg-img blog-img"} />
                </ScrollAnimationWrapper>
              </div>
              <div className={"col mx-3"}>
                <ScrollAnimationWrapper
                  animateIn={"fadeInRight"}
                  animateOnce={true}
                  style={{ height: "100%" }}
                >
                  <div className={"py-4"}>
                    <p className={"text-center font-weight-bold lead-2x"}>
                      Blog{" "}
                    </p>
                  </div>
                  <div className={"mt-2"}>
                    <p className={"font-weight-500"}>
                      Feel free to check out my blog, for programming tutorial,
                      technology information
                    </p>
                  </div>
                  <div className={"mt-4"}>
                    <a
                      href={config.blog_url}
                      className={"btn btn-primary"}
                      role={"button"}
                    >
                      Read More
                    </a>
                  </div>
                </ScrollAnimationWrapper>
              </div>
            </IntroCardSub>
          </div>
        </Container>
        <GoToTop />
      </Container>
    );
  }
}

const ANIMATE_OFFSET: number = 300;
const ANIMATE_DURATION: number = 1; // second
const ANIMATE_PRESCROLL: boolean = false;

const ScrollAnimationWrapper = props => (
  <ScrollAnimation
    animateIn={props.animateIn || "fadeIn"}
    offset={ANIMATE_OFFSET}
    duration={ANIMATE_DURATION}
    animatePreScroll={ANIMATE_PRESCROLL}
    style={props.style || {}}
    animateOnce={props.animateOnce || false}
  >
    {props.children}
  </ScrollAnimation>
);
