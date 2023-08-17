import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import { sliderActive3Item, sliderActive3ItemDot } from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const DestinationDetails = () => {
  return (
    <Layout extraClass={"pt-160"}>
      <PageBanner pageTitle={"Nkasiri Adventure Park"} />
      {/*====== Start Destination Details Section ======*/}
      <section className="destination-details-section pt-100 pb-70">
        <div className="container">
          <div className="destination-details-wrapper">
            <div className="destination-info wow fadeInUp">
              <h3 className="title">Nkasiri Adventure Park</h3>
              <div className="meta">
                <span className="location">
                  <i className="fas fa-map-marker-alt" />
                  Nairobi, Kenya
                </span>
              </div>
              <p>
                Nkasiri Adventure Park is one of Kenya’s most popular outdoor
                recreation destinations. The park is a one-of-a-kind venue for
                team building, extreme sports, and social gatherings. It is a
                popular location for high-ropes courses, cycling, and corporate
                team building. Aside from outdoor activities, the park offers
                one-of-a-kind lodging in the form of A-Frames camping pods.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <img
                    src="https://comewithmeonabudgettravel.files.wordpress.com/2021/03/20210313_164633.jpg"
                    className="rounded mb-40"
                    alt="Features Image"
                  />
                </div>
                <div className="col-lg-6">
                  <img
                    src="https://www.nkasiri.co.ke/wp-content/uploads/2022/06/Nkasiri_High_Ropes_2.jpg"
                    className="rounded mb-40"
                    alt="Features Image"
                  />
                </div>
              </div>
              <h3>Why Choose Nkasiri Adventure Park</h3>
              <p>
                Ziplining: Do you want to experience a heart-pounding aerial
                adventure? Then buckle up for an adrenaline-fueled ride that
                packs the perfect punch to get your pulse racing. The zip lines
                have a carrying capacity of a maximum of 115 kilograms and are
                operated under European Union safety regulations. The park also
                provides you with certified protective gear that will allow you
                to comfortably enjoy this fun and adrenaline-filled activity.
                <br />
                <br />
                High ropes: The High Ropes and Obstacles challenge is one of the
                best ways to put your adrenaline to the test, and there are no
                better High Ropes and Obstacles challenges in Kenya than at
                Nkasiri Adventure Park. The incredible High Ropes and Obstacles
                Challenge Course, features 6 exciting obstacles. Take on each
                challenge head-on, whether with friends, family, colleagues, or
                just by yourself, tackling the Burma Loop, Horizontal Net, Burma
                Bridge, Swinging Bridge, Vertical Net Crossing, and Wooden
                Obstacles.
                <br />
                <br />
                Pool table: This is an indoor game that you can play while
                watching a football game or sipping a drink. You might meet
                other visitors who want to play with you if you’re lucky. Don’t
                worry if you can’t find any; the staff is very friendly and will
                gladly play with you if any are available.
                <br />
                <br />
                Table Tennis: The table tennis table in the lounge area provides
                an indoor game to play while you wait for your meal or drink.
                <br />
                <br />
                Swimming: The swimming pool is large enough and very suitable
                for water sports.
                <br />
                <br />
                In addition, Nkasiri Adventure Park has mind games including;
                Board games Cards Monopoly Jenga Ludo Snakes and Ladder Bad
                Minton
                <br />
                <br />
                <br />
                <h3>Payment</h3>
                <p>
                  Booking / deposit of Ksh. 2,000 to confirm a slot. LIPA POLE
                  POLE is available. Non-refundable if you cancel 5
                  days to the event.
                </p>
                <p class="price">
                  <i class="fas fa-usd-circle"></i> Price{" "}
                  <span class="currency"> KSH</span> 4700 per person
                </p>
                <Link legacyBehavior href="contact">
                  <a className="main-btn primary-btn">
                    Book Now
                    <i className="far fa-paper-plane" />
                  </a>
                </Link>
              </p>
              <h3>Package includes</h3>
              <br />
              <ul class="features-list mb-40">
                <li>
                  <span>
                    <i class="fas fa-badge-check"></i>Round trip transport
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-badge-check"></i>High Ropes challenge level
                    1
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-badge-check"></i>Photography
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-badge-check"></i>Drinking water
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-badge-check"></i>Car & Driver fees
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-badge-check"></i>Guide fees
                  </span>
                </li>
              </ul>
              <ul class="features-list mb-40">
                <li>
                  <span>
                    <i class="fas fa-do-not-enter"></i> Tips and gratuity
                  </span>
                </li>

                <li>
                  <span>
                    <i class="fas fa-do-not-enter"></i>Refreshments / Snacks /
                    Lunch
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-do-not-enter"></i>Anything
                    not mentioned above
                  </span>
                </li>
              </ul>
            </div>
            <div className="gallery-area wow fadeInUp">
              <Slider {...sliderActive3Item} className="slider-active-3-item">
                {/*=== Single Gallery Item ===*/}
                <div className="single-gallery-item mb-30">
                  <div className="gallery-img">
                    <img
                      src="https://media-cdn.tripadvisor.com/media/photo-s/1c/a9/93/0d/nkasiri-adventure-park.jpg"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="https://media-cdn.tripadvisor.com/media/photo-s/1c/a9/93/0d/nkasiri-adventure-park.jpg"
                        className="icon-btn img-popup"
                      >
                        <i className="far fa-plus" />
                      </a>
                    </div>
                  </div>
                </div>
                {/*=== Single Gallery Item ===*/}
                <div className="single-gallery-item mb-30">
                  <div className="gallery-img">
                    <img
                      src="https://comewithmeonabudgettravel.files.wordpress.com/2021/03/20210314_130227.jpg"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="https://comewithmeonabudgettravel.files.wordpress.com/2021/03/20210314_130227.jpg"
                        className="icon-btn img-popup"
                      >
                        <i className="far fa-plus" />
                      </a>
                    </div>
                  </div>
                </div>
                {/*=== Single Gallery Item ===*/}
                <div className="single-gallery-item mb-30">
                  <div className="gallery-img">
                    <img
                      src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/49/ac/d5/nkasiri-adventure-park.jpg?w=700&h=-1&s=1"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/49/ac/d5/nkasiri-adventure-park.jpg?w=700&h=-1&s=1"
                        className="icon-btn img-popup"
                      >
                        <i className="far fa-plus" />
                      </a>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Destination Details Section ======*/}
      {/*====== Start CTA Section ======*/}
      <section
        className="cta-bg overlay bg_cover pt-150 pb-150"
        style={{ backgroundImage: "url(assets/images/bg/cta-bg2.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-8">
              {/*=== CTA Content Box ===*/}
              <div className="cta-content-box text-white wow fadeInLeft">
                <h2 className="mb-35">
                  Ready to Travel With Real Adventure and Enjoy Natural
                </h2>
                <Link legacyBehavior href="contact">
                  <a className="main-btn primary-btn">
                    Check Availability
                    <i className="far fa-paper-plane" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-5 col-lg-4">{/*=== Play Box ===*/}</div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}
    </Layout>
  );
};
export default DestinationDetails;
