import Home3Slider from "@/src/components/sliders/Home3";
import Layout from "@/src/layout/Layout";
import {
  partnerSliderOne,
  sliderActive3Item,
  sliderActive3ItemDot,
} from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import Slider from "react-slick";
import ReactPlayer from 'react-player/youtube';

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});
const Index3 = () => {
  return (
    <Layout header={3} footerBG={"gray"}>
      {/*====== Start Hero Section ======*/}
      <Home3Slider />
      {/*====== End Hero Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-section pt-100 pb-50">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-xl-5">
              {/*=== Features Content Box ===*/}
              <div className="features-content-box pr-lg-70 mb-50">
                {/*=== Section Title ===*/}
                <div className="section-title mb-30">
                  <span className="sub-title">Availability</span>
                  <h2>Explore with us</h2>
                </div>
                <p className="mb-30">
               we have diffrent varieties of activites and places you can visit to make those perfect memories!
                </p>
                <a href="/about" className="main-btn filled-btn">
                  Learn More
                  <i className="far fa-paper-plane" />
                </a>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="features-item-area mb-20">
                <div className="row pl-lg-70">
                  <div className="col-md-6">
                    {/*=== Fancy Icon Box ===*/}
                    <div className="fancy-icon-box-two mb-30">
                      <div className="icon">
                        <i className="flaticon-camping" />
                      </div>
                      <div className="text">
                        <h3 className="title">Team Building Packages</h3>
                        {/* <p>
                          Sit amet consectetur integ tincidunt scelerie nodermen
                          malesuada sceleris massa
                        </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/*=== Fancy Icon Box ===*/}
                    <div className="fancy-icon-box-two mb-30">
                      <div className="icon">
                        <i className="flaticon-biking-mountain" />
                      </div>
                      <div className="text">
                        <h3 className="title">Group Joining Events</h3>
                        {/* <p>
                          Sit amet consectetur integ tincidunt scelerie nodermen
                          malesuada sceleris massa
                        </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/*=== Fancy Icon Box ===*/}
                    <div className="fancy-icon-box-two mb-30">
                      <div className="icon">
                        <i className="flaticon-fishing-2" />
                      </div>
                      <div className="text">
                        <h3 className="title">Boat &amp; rides</h3>
                        {/* <p>
                          Sit amet consectetur integ tincidunt scelerie nodermen
                          malesuada sceleris massa
                        </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/*=== Fancy Icon Box ===*/}
                    <div className="fancy-icon-box-two mb-30">
                      <div className="icon">
                        <i className="flaticon-caravan" />
                      </div>
                      <div className="text">
                        <h3 className="title">Bush Safaris &amp;  Game Drives</h3>
                        {/* <p>
                          Sit amet consectetur integ tincidunt scelerie nodermen
                          malesuada sceleris massa
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start About Section ======*/}
      <section
        className="about-section bg_cover pt-165 pb-210"
        style={{ backgroundImage: "url(assets/images/bg/about-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-lg-6">
              {/*=== About Image Box ===*/}
              <div className="about-image-box mb-50">
                <img
                  src="assets/images/about/about-2.jpg"
                  className="rounded-2"
                  alt="About Image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== About Content Box ===*/}
              <div className="about-content-box text-white pl-lg-40 mb-50">
                {/*=== Section Title ===*/}
                <div className="section-title mb-30">
                  <span className="sub-title">About Us</span>
                  <h2>We’re the Number 1 Tours and Travel Company in Kenya</h2>
                </div>
                <p className="mb-30">
                Book your long awaited Get-Away trip with us for an unforgettable Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Service Section ======*/}
      {/* <section className="service-section pt-100 pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7"> */}
              {/*=== Section Title ===*/}
              {/* <div className="section-title text-center mb-50">
                <span className="sub-title">Popular Services</span>
                <h2>Amazing Adventure Camping Services for Enjoyed</h2>
              </div>
            </div>
          </div>
          <Slider {...sliderActive3Item} className="slider-active-3-item"> */}
            {/*=== Service Item ===*/}
            {/* <div className="single-service-item-three mb-40">
              <div className="content">
                <h3 className="title">
                  <a href="#">Classic Tents</a>
                </h3>
                <p>
                  Sit amet consecteturauris natoque name pellentue augue mattis
                  faucibus
                </p>
                <img
                  src="assets/images/service/service-4.jpg"
                  alt="service image"
                />
                <a href="#" className="btn-link">
                  Read More
                  <i className="far fa-long-arrow-right" />
                </a>
                <div className="meta">
                  <span className="icon">
                    <i className="flaticon-blanket" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-cat" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-tent" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-fire" />
                  </span>
                  <span className="rate">
                    <i className="fas fa-star" />
                    4.9
                  </span>
                </div>
              </div>
            </div> */}
            {/*=== Service Item ===*/}
            {/* <div className="single-service-item-three mb-40">
              <div className="content">
                <h3 className="title">
                  <a href="#">Caravan Solar Tent</a>
                </h3>
                <p>
                  We denounce with righteous indignation and beguiled and
                  demoralized
                </p>
                <img
                  src="assets/images/service/service-5.jpg"
                  alt="service image"
                />
                <a href="#" className="btn-link">
                  Read More
                  <i className="far fa-long-arrow-right" />
                </a>
                <div className="meta">
                  <span className="icon">
                    <i className="flaticon-blanket" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-cat" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-tent" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-fire" />
                  </span>
                  <span className="rate">
                    <i className="fas fa-star" />
                    4.9
                  </span>
                </div>
              </div>
            </div> */}
            {/*=== Service Item ===*/}
            {/* <div className="single-service-item-three mb-40">
              <div className="content">
                <h3 className="title">
                  <Link legacyBehavior href="/tour-details">
                    <a>Small Cabin Wood</a>
                  </Link>
                </h3>
                <p>
                  To take trivial example which undertakes laborious physical
                  exercise chooses
                </p>
                <img
                  src="assets/images/service/service-6.jpg"
                  alt="service image"
                />
                <a href="#" className="btn-link">
                  Read More
                  <i className="far fa-long-arrow-right" />
                </a>
                <div className="meta">
                  <span className="icon">
                    <i className="flaticon-blanket" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-cat" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-tent" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-fire" />
                  </span>
                  <span className="rate">
                    <i className="fas fa-star" />
                    4.9
                  </span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section> */}
      {/*====== End Service Section ======*/}
      {/*====== Start CTA Section ======*/}
      <section
      className="cta-bg overlay bg_cover pt-150 pb-150"
      style={{ backgroundImage: "url(assets/images/bg/cta-bg2.jpg)" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-8">
            {/*=== CTA Content Box ===*/}
            <div className="cta-content-box text-white">
              <h2 className="mb-35">
                Ready to Travel With Real Adventure and Enjoy Natural
              </h2>
              <Link legacyBehavior href="/about">
                <a className="main-btn secondary-btn">
                  Check Availability
                  <i className="far fa-paper-plane" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-xl-5 col-lg-4">
            {/*=== Play Box with Background Video ===*/}
            <div className="play-box text-center">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=CP5k2gRabvc"
                playing
                loop
                muted
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: 0, left: 0 }}
              />
            
              
            </div>
          </div>
        </div>
      </div>
    </section>
      {/*====== End CTA Section ======*/}
      {/*====== Start What We Section ======*/}
      <section className="we-section pt-100 pb-50">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-xl-6 order-2 order-xl-1">
              {/*=== We Image Box ===*/}
              <div className="we-two_image-box mb-20">
                <div className="row align-items-end">
                  <div className="col-md-6">
                    {/*=== We Image ===*/}
                    <div className="we-image mb-30">
                      <img
                        src="assets/images/gallery/about001.jpg"
                        alt="we Image"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/*=== We Image ===*/}
                    <div className="we-image mb-30">
                      <img
                        src="assets/images/gallery/about-002.jpg"
                        alt="we Image"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    {/*=== We Image ===*/}
                    <div className="we-image mb-30 pr-lg-30 text-md-end">
                      <img
                        src="assets/images/gallery/about-003.jpg"
                        alt="we Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 order-1 order-xl-2">
              {/*=== We Content Box ===*/}
              <div className="we-content-box pl-lg-50 mb-10">
                {/*=== Section Title ===*/}
                <div className="section-title mb-30">
                  <span className="sub-title">Exploe with us</span>
                  <h2>An Awesome Opportunity For Tours &amp; Travels</h2>
                </div>
                {/*=== Features List ===*/}
                <div className="features-list_one">
                  {/*=== Single Features List ===*/}
                  <div className="single-features-list mb-40">
                    <div className="icon-inner d-flex align-items-center">
                      <div className="icon-check">
                        <i className="fas fa-badge-check" />
                      </div>
                      <div className="icon">
                        <i className="flaticon-helmet" />
                      </div>
                    </div>
                    <div className="content">
                      <h4>Safety is Always First </h4>
                      {/* <p>
                        Set perspiciatis unde omnis estenatus voluptatem
                        accusantium laudantium totarem aperiae
                      </p> */}
                    </div>
                  </div>
                  {/*=== Single Features List ===*/}
                  <div className="single-features-list mb-40">
                    <div className="icon-inner d-flex align-items-center">
                      <div className="icon-check">
                        <i className="fas fa-badge-check" />
                      </div>
                      <div className="icon">
                        <i className="flaticon-best-price" />
                      </div>
                    </div>
                    <div className="content">
                      <h4>Budget &amp; Friendly</h4>
                      {/* <p>
                        Quis autem vel eum iure reprehenderit voluptate velit
                        esse nihile molestiae consequatur.
                      </p> */}
                    </div>
                  </div>
                  {/*=== Single Features List ===*/}
                  <div className="single-features-list mb-40">
                    <div className="icon-inner d-flex align-items-center">
                      <div className="icon-check">
                        <i className="fas fa-badge-check" />
                      </div>
                      <div className="icon">
                        <i className="flaticon-travel" />
                      </div>
                    </div>
                    <div className="content">
                      <h4>We are Trusted Travel Guide</h4>
                      {/* <p>
                        At vero accusamus dignissimos ducimus blanditiis
                        praesentium voluptatum deleniti atque quos
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End What We Section ======*/}
    </Layout>
  );
};
export default Index3;
