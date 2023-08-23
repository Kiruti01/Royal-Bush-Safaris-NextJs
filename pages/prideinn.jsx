import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import { sliderActive3Item, sliderActive3ItemDot } from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const DestinationDetails = () => {
  return (
    <Layout extraClass={"pt-160"}>
      <PageBanner pageTitle={"3 DAYS 2 NIGHTS PRIDEINN HOTELS"} />
      {/*====== Start Destination Details Section ======*/}
      <section className="destination-details-section pt-100 pb-70">
        <div className="container">
          <div className="destination-details-wrapper">
            <div className="destination-info wow fadeInUp">
              <h3 className="title"> PrideInn Flamingo </h3>
              <div className="meta">
                <span className="location">
                  <i className="fas fa-map-marker-alt" />
                  Mombasa, Kenya
                </span>
              </div>
              <p>
                Welcome to PrideInn Flamingo, one of the best hotels in Mombasa,
                offering unparalleled luxury and a memorable stay in the
                enchanting city known for its stunning beaches, vibrant culture,
                and warm hospitality.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/426471015.jpg?k=5d195fb645eb11519454c614c64b33af4bd8c7501a7708d0a3bfb92fa59ac47f&o=&hp=1"
                    className="rounded mb-40"
                    alt="Features Image"
                  />
                </div>
                <div className="col-lg-6">
                  <img
                    src="https://ak-d.tripcdn.com/images/220d190000017b2eiC233_R_960_660_R5_D.jpg"
                    className="rounded mb-40"
                    alt="Features Image"
                  />
                </div>
              </div>
              <h3>Why Choose PrideInn Flamingo</h3>
              <p>
                <strong>
                  Prideinn Flamingo Beach Resort & Spa - All Inclusive Per
                  person
                </strong>
                <br />
                Per person in a double room Ksh. 26,400 
                <br/>
                 Per person in a single room Ksh.36,800 
                 <br/>
                 Per child sharing with adults Ksh. 14,100
                <br />
                <br />
                <strong>
                Prideinn Paradise Beach Resort & Spa - Half Board
                </strong>
                <br />
                Per person in a double room Ksh. 29,200
                <br />
                Per person in a single room Ksh. 38,350
                <br />             
                Per child sharing with adults Ksh. 15,350 
                <br />
                <br/>
                <strong>
                INCLUSIONS;
                </strong>
                <br />
                ▪ Return economy SGR tickets
                <br />
                ▪ 2 nights' accommodation
                <br />             
                ▪ Return coast transfers
                <br />
                <br />
                <strong>
                NOTE;
                </strong>
                <br />
                ▪ Rooms are subject to availability at the time of booking
                <br />
                ▪ Rates are per person
                <br />             
                ▪ All Inclusive (All meals, unlimited soft drinks & selected alcoholic drinks)
                <br />
                <br />
                For Bookings & inquiries call / whatssapp; +254115880418
               <br/>
               <br/>
                <Link legacyBehavior href="contact">
                  <a className="main-btn primary-btn">
                    Book Now
                    <i className="far fa-paper-plane" />
                  </a>
                </Link>
              </p>
             
            </div>
            <div className="gallery-area wow fadeInUp">
              <Slider {...sliderActive3Item} className="slider-active-3-item">
                {/*=== Single Gallery Item ===*/}
                <div className="single-gallery-item mb-30">
                  <div className="gallery-img">
                    <img
                      src="https://www.denhumholidays.com/wp-content/uploads/2020/03/prideInn-flamingo-beach-resort-spa-banner.jpg"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="https://www.denhumholidays.com/wp-content/uploads/2020/03/prideInn-flamingo-beach-resort-spa-banner.jpg"
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
                      src="https://images.trvl-media.com/lodging/6000000/5660000/5656800/5656751/b27c6137.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="https://images.trvl-media.com/lodging/6000000/5660000/5656800/5656751/b27c6137.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
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
                      src="https://limg.hostelsclub.com/pics/39693/filepict-1573555339.jpg"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="https://limg.hostelsclub.com/pics/39693/filepict-1573555339.jpg"
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
