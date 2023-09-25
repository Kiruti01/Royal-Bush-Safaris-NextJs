import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import Head from "next/head";

const About = () => {
  return (
    <Layout extraClass={"pt-160"}>
      <Head>
        <title>About Us - Royal Bush Safaris</title>
        <meta
          name="description"
          content="Learn about Royal Bush Safaris, a Tours and Travel Company committed to delivering excellent quality service and creating unforgettable travel memories."
        />
        <meta
          name="keywords"
          content="Royal Bush Safaris, Who We Are, Travel Adventure, Quality Service"
        />
      </Head>
      <PageBanner pageTitle={"About Us"} />
      {/*====== Start Features Section ======*/}

      {/*====== Start We Section ======*/}
      <section className="who-we-section">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-lg-6 order-2 order-lg-1">
              {/*=== We Image Box ===*/}
              <div className="we-image-box text-center text-lg-left wow fadeInDown">
                <img
                  src="assets/images/gallery/we-1.jpg"
                  className="radius-top-left-right-288"
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              {/*=== We Content Box ===*/}
              <div className="we-one_content-box">
                <div className="section-title mb-30 wow fadeInUp">
                  <span className="sub-title">Who We Are</span>
                  <h2>Royal Bush Safaris</h2>
                </div>
                <p className="wow fadeInDown">
                  Our Mission is to perform and deliver excellent quality
                  service to our clients. Creating for them unforgettable travel
                  memories, with guaranteed services that exceed their
                  expectations. We provide an extraordinary service which is
                  saving your time and money while providing the best value for
                  your trip
                </p>
                <div className="skill-wrapper wow fadeInUp">
                  <div className="single-skill-circle text-center">
                    <div className="inner-circle">
                      <div className="line" />
                      <span className="number">60%</span>
                    </div>
                    <h5>Satisfied Clients</h5>
                  </div>
                  <div className="single-skill-circle text-center">
                    <div className="inner-circle">
                      <div className="line" />
                      <span className="number">93%</span>
                    </div>
                    <h5>Success Rate</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End We Section ======*/}
      {/*====== Start Team Section ======*/}
      <section className="team-section pt-100 pb-70 gray-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              {/*====== Section Title ======*/}
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">Team Member</span>
                <h2>We’ve Expert Team Members Meet With Team</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*====== Single Team Item ======*/}
              <div className="single-team-item mb-30 wow fadeInUp">
                <div className="member-img">
                  <img
                    src="https://pps.whatsapp.net/v/t61.24694-24/366754427_1040240457014728_8994561456857686225_n.jpg?ccb=11-4&oh=01_AdSD5KWFyB2FVUAbOKn6tLbRj8c_RIdZ2FvNcy7N4e2Cpg&oe=64EA448D"
                    alt="Harold Lehns - Director & Founder"
                  />
                </div>
                <div className="member-info">
                  <h4 className="title">Harold Lehns</h4>
                  <p className="position">Director &amp; Founder</p>
                  {/* <ul className="social-link">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*====== Single Team Item ======*/}
              <div className="single-team-item mb-30 wow fadeInUp">
                <div className="member-img">
                  <img src="assets/images/team/" alt="Team Image" />
                </div>
                <div className="member-info">
                  <h4 className="title">Rose Felix</h4>
                  <p className="position">Graphics designer</p>
                  {/* <ul className="social-link">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Team Section ======*/}
      {/*====== Start What We Section ======*/}
      <section className="we-section pt-100 pb-50">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-xl-6">
              <div className="we-content-box mb-10 wow fadeInLeft">
                <div className="section-title mb-30">
                  <span className="sub-title">Who We Are</span>
                  <h2>Great Opportunity For Adventure &amp; Travels</h2>
                </div>
                <div className="features-list_one">
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
                    </div>
                  </div>
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
                    </div>
                  </div>
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
                      <h4>We have Trusted and Professional Travel Guide</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="we-two_image-box mb-20">
                <div className="row align-items-end">
                  <div className="col-md-6">
                    <div className="we-image mb-30 wow fadeInLeft">
                      <img
                        src="https://royalbushsafaris.co.ke/assets/images/about/about001.jpg"
                        alt="we Image"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="we-image mb-30 wow fadeInRight">
                      <img
                        src="https://royalbushsafaris.co.ke/assets/images/about/about002.jpg"
                        alt="we Image"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="we-image mb-30 pr-lg-30 text-md-end wow fadeInDown">
                      <img
                        src="https://royalbushsafaris.co.ke/assets/images/about/about003.jpg"
                        alt="we Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End What We Section ======*/}
      {/*====== Start CTA Section ======*/}
      <section
        className="cta-bg overlay bg_cover pt-150 pb-150"
        style={{ backgroundImage: "url(assets/images/bg/cta-bg.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              {/*=== CTA Content Box ===*/}
              <div className="cta-content-box text-center text-white wow fadeInDown">
                <h2 className="mb-35">
                  Ready to Travel With Real Adventure and Enjoy Natural
                </h2>
                <Link legacyBehavior href="/contact">
                  <a className="main-btn primary-btn">
                    Check Availability
                    <i className="far fa-paper-plane" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}
      {/*====== Start Testimonial Section ======*/}

      {/*====== End Testimonial Section ======*/}

      {/*====== Start Gallery Section ======*/}
    </Layout>
  );
};
export default About;
