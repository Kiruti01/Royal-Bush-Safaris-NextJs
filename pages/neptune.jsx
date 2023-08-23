import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import { sliderActive3Item, sliderActive3ItemDot } from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const DestinationDetails = () => {
  return (
    <Layout extraClass={"pt-160"}>
      <PageBanner pageTitle={"3 DAYS NEPTUNE MARA RIANTA"} />
      {/*====== Start Destination Details Section ======*/}
      <section className="destination-details-section pt-100 pb-70">
        <div className="container">
          <div className="destination-details-wrapper">
            <div className="destination-info wow fadeInUp">
              <h3 className="title"> Neptune Mara Rianta Flying Package </h3>
              <div className="meta">
                <span className="location">
                  <i className="fas fa-map-marker-alt" />
                  Masai Mara, Kenya
                </span>
              </div>
              <p>
                Fly your family / friends or spouse down to Neptune Mara Rianta.
                The perfect base for your exclusive Safari adventure is the
                Neptune Mara Rianta Luxury Tented Camp. Nestled in the heart of
                the Masai Mara. Immersed in the original bush among indigenous
                plantations and trees, the 20 luxury tents are directly
                overlooking the Mara River, which winds itself around the camp
                with gently flowing waters surrounded with wildlife and teeming
                with large groups of Hippos.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <img
                    src="https://www.kenyawildlifetours.com/wp-content/uploads/2022/01/1417159003_N_Mara_Rta_e1_mini.jpg"
                    className="rounded mb-40"
                    alt="Features Image"
                  />
                </div>
                <div className="col-lg-6">
                  <img
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/2a/f1/00/exploreans-mara-rianta.jpg?w=700&h=-1&s=1"
                    className="rounded mb-40"
                    alt="Features Image"
                  />
                </div>
              </div>
              <h3>Why Choose Neptune Mara Rianta</h3>
              <p>
                <strong>
                Validity; 1st Sept - 30th Sept
                </strong>
                <br />
                Per person in a double room Usd. 1,950         
                <br />
                <br />
                <strong>
                Validity; 1st Oct - 30th Nov
                 </strong>
                <br />
                Per person in a double room Usd. 1500
                <br />
                <br />
                <strong>
                Validity; 1st Dec - 15th Dec
                 </strong>
                <br />
                Per person in a double room Usd. 1200
                <br/>
                <br/>
                <strong>INCLUSIONS;</strong>
                <br />
                ▪️ Return economy flight tickets
                <br />
                ▪ 2 nights' accommodation
                <br />
                ▪️ Return transfers from Musiara airstrip
                <br/>
                ▪️ One hour guided nature walk
                <br/>
                ▪️ Welcome cocktail
                <br/>
                ▪️ Game drive
                <br />
                <br />
                <strong>NOTE;</strong>
                <br />
                ▪ Rooms are subject to availability at the time of booking
                <br />
                ▪️ Rates are subject to change
                <br />
                ▪️ Flights are subject to change at the time of booking
                <br />
                ▪️ Excludes anything not mentioned above
                <br />
                <br />
                For Bookings & inquiries call / whatssapp; +254115880418
                <br />
                <br />
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
                      src="https://theholidaydealers.com/wp-content/uploads/2023/03/Neptune-Mara-Rianta-Luxury-Camp-3-1-850x540.jpg"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="https://theholidaydealers.com/wp-content/uploads/2023/03/Neptune-Mara-Rianta-Luxury-Camp-3-1-850x540.jpg"
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
                      src="https://theholidaydealers.com/wp-content/uploads/2023/03/Neptune-Mara-Rianta-Luxury-Camp-3-850x540.jpg"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="https://theholidaydealers.com/wp-content/uploads/2023/03/Neptune-Mara-Rianta-Luxury-Camp-3-850x540.jpg"
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
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ91vdMFHvD01hHYBHpTT82P35NMBesUGlWQ&usqp=CAU"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ91vdMFHvD01hHYBHpTT82P35NMBesUGlWQ&usqp=CAU"
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
