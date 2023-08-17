import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import { sliderActive3Item, sliderActive3ItemDot } from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const DestinationDetails = () => {
  return (
    <Layout extraClass={"pt-160"}>
      <PageBanner pageTitle={"Masai Mara wildbeest Migration"} />
      {/*====== Start Destination Details Section ======*/}
      <section className="destination-details-section pt-100 pb-70">
        <div className="container">
          <div className="destination-details-wrapper">
            <div className="destination-info wow fadeInUp">
              <h3 className="title">2 Days Masai Mara </h3>
              <div className="meta">
                <span className="location">
                  <i className="fas fa-map-marker-alt" />
                  Narok, Kenya
                </span>
              </div>
              <p>
                Catch a Unique combination of a & Wildlife Safari at the Home of
                8th Wonder of the World - Maasai Mara. Mara offers wide variety
                of wildlife with over 450 species of animals having been
                recorded here. You will most likely see the Big Five - Not to
                mention numerous plain animals & wildebeest migration on a Lucky
                day
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <img
                    src="https://discoverdiscomfort.com/wp-content/uploads/2019/08/Feeling-of-Safari-in-Maasai-Mara-Kenya-28-many-animals-together-warthog-antelope-zebras-wildebeest-ngiri-swala-pala-punda-milia-nyumbu.jpg"
                    className="rounded mb-40"
                    alt="Features Image"
                  />
                </div>
                <div className="col-lg-6">
                  <img
                    src="https://ichef.bbci.co.uk/news/976/cpsprodpb/9812/production/_120803983_gettyimages-532180152.jpg"
                    className="rounded mb-40"
                    alt="Features Image"
                  />
                </div>
              </div>
              <h3>Why Choose Masai Mara wildbeest Migration</h3>
              <p>
                Day 1 Depart Nairobi at 6am, enjoy the scenic Great Rift Valley
                with a Stop Over at Narok (Supermarket ) then proceed to Mara
                arriving at the Tented Camp for Lunch & check in. Later in the
                afternoon enjoy an amazing afternoon/evening game drive till
                around 6pm Go back to the Tented Camp to relax & have Dinner
                Later enjoy the #royalbushsafariske evening fun games and
                stories around the bonfire
                <br />
                Day 2 ; Morning Breakfast at around 8.00AM to 9.00AM ,Check Out
                of the Tented Camp, head for another game drive as we later in
                the afternoon(till 12 noon) exit the National Reserve & head
                back to Nairobi after an amazing 2 days #royalbushsafariske
                experience.
                <br />
                <h3>Payment</h3>
                <p>
                  (Payable in installments) & Non Refundable if you CANCEL 6
                  days to the Safari Day (Swapping or replacing someone to
                  travel on your behalf is allowed)
                </p>
                <p class="price">
                  <i class="fas fa-usd-circle"></i> Price{" "}
                  <span class="currency"> KSH</span> 10,500 per person sharing
                </p>
                <a href="contact" class="btn-link">
                  Book now<i class="far fa-long-arrow-right"></i>
                </a>
              </p>
              <h3>Package includes</h3>
              <br />
              <ul class="features-list mb-40">
                <li>
                  <span>
                    <i class="fas fa-badge-check"></i>Return transport
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-badge-check"></i>1 night accommodation
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
                    <i class="fas fa-badge-check"></i> Meals on full board
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-badge-check"></i>Trip facilitation
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-badge-check"></i>Professional guide
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
                    <i class="fas fa-do-not-enter"></i>
                    Refreshments / Snacks / Lunch
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-do-not-enter"></i>
                    Anything not mentioned above
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-do-not-enter"></i>Park entry fees Ksh.
                    1,000
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-do-not-enter"></i>
                    Personal Items
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
                      src="https://seeafricatoday.com/wp-content/uploads/2021/07/Mara-tour-Kenya-Safari.jpg"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="https://seeafricatoday.com/wp-content/uploads/2021/07/Mara-tour-Kenya-Safari.jpg"
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
                      src="https://www.basecampexplorer.com/wp-content/uploads/2016/10/dramatic-wildebeest-crossing.jpg"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="https://www.basecampexplorer.com/wp-content/uploads/2016/10/dramatic-wildebeest-crossing.jpg"
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
                      src="https://images.theconversation.com/files/397588/original/file-20210428-13-h651gg.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="https://images.theconversation.com/files/397588/original/file-20210428-13-h651gg.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
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
