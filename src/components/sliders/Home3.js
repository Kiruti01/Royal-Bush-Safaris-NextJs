import { home3Slider } from "@/src/sliderProps";
import Link from "next/link";
import { Component } from "react";
import Slider from "react-slick";

export default class Home3Slider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    return (
      <section className="hero-section">
        <div className="hero-wrapper-three">
       
          <Slider
            {...home3Slider}
            ref={(c) => (this.slider = c)}
            className="hero-slider-three"
          >
            {/*=== Single Slider ===*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage:
                    "url(assets/images/hero/hero-three_img-1.jpg)",
                }}
              />
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-7">
                    {/*=== Hero Content ===*/}
                    <div className="hero-content text-white">
                      <span className="sub-title">Welcome to Royal Bush Safaris</span>
                      <h1 data-animation="fadeInDown" data-delay=".4s">
                        Tour &amp; Travel  
                      </h1>
                      <div
                        className="hero-button"
                        data-animation="fadeInRight"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/about">
                          <a className="main-btn primary-btn">
                            About Us
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link>
                        <Link legacyBehavior href="/destination">
                          <a className="main-btn secondary-btn">
                           Destinations
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Single Slider ===*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage:
                    "url(assets/images/hero/hero-three_img-2.jpg)",
                }}
              />
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-7">
                    {/*=== Hero Content ===*/}
                    <div className="hero-content text-white">
                      <span className="sub-title">Welcome to Royal Bush Safaris</span>
                      <h1 data-animation="fadeInDown" data-delay=".4s">
                        Tour  &amp; Travel
                      </h1>
                      <div
                        className="hero-button"
                        data-animation="fadeInRight"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/about">
                          <a className="main-btn primary-btn">
                            About Us
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link>
                        <Link legacyBehavior href="/destination">
                          <a className="main-btn secondary-btn">
                            Destinations
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Single Slider ===*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage:
                    "url(assets/images/hero/hero-three_img-3.jpg)",
                }}
              />
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-7">
                    {/*=== Hero Content ===*/}
                    <div className="hero-content text-white">
                      <span className="sub-title">Welcome to Royal Bush Safaris</span>
                      <h1 data-animation="fadeInDown" data-delay=".4s">
                        Tour  &amp; Travel
                      </h1>
                      <div
                        className="hero-button"
                        data-animation="fadeInRight"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/about">
                          <a className="main-btn primary-btn">
                            About Us
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link>
                        <Link legacyBehavior href="/destination">
                          <a className="main-btn secondary-btn">
                            Destinations
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}
