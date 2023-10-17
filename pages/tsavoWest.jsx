import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import { sliderActive3Item, sliderActive3ItemDot } from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const DestinationDetails = () => {
  return (
    <Layout extraClass={"pt-160"}>
      <PageBanner pageTitle={"3 Days 2 Nights Tsavo West National Park"} />
      {/*====== Start Destination Details Section ======*/}
      <section className="destination-details-section pt-100 pb-70">
        <div className="container">
          <div className="destination-details-wrapper">
            <div className="destination-info wow fadeInUp">
              <h3 className="title">
                {" "}
                3 Days 2 Nights Tsavo West National Park{" "}
              </h3>
              <div className="meta">
                <span className="location">
                  <i className="fas fa-map-marker-alt" />
                  Narok, Kenya
                </span>
              </div>
              <p>
                Tsavo West National Park offers diverse landscapes and unique
                geological features, so make sure to take in the scenic beauty
                along with the wildlife. Don't forget to carry essential items
                such as sunscreen, a hat, and binoculars for a more enjoyable
                experience.
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
              <h3>Itenerary</h3>
              <p>
                Day 1: - Morning: Arrive at Tsavo West National Park and
                check-in at your chosen accommodation. - Afternoon: Enjoy a game
                drive in the park. Tsavo West is known for its diverse wildlife,
                including elephants, lions, leopards, and numerous bird species.
                Visit attractions like Mzima Springs, where you can see hippos
                and crocodiles from an underwater observatory. - Evening: Return
                to your lodge or camp for dinner and relaxation.
                <br />
                <br />
                Day 2: - Morning: Embark on an early morning game drive to catch
                sight of animals during their most active hours. - Mid-morning:
                Return to your accommodation for breakfast and some leisure
                time. - Afternoon: Explore other areas of the park, such as the
                Shetani Lava Flows, Chaimu Crater, or Roaring Rocks. - Evening:
                Another game drive or enjoy a sundowner with a scenic view.
                <br />
                <br />
                Day 3: - Morning: Depart for a nature walk guided by a park
                ranger to get a closer look at the flora and fauna. -
                Mid-morning: Return to your lodge for breakfast and check-out. -
                You can choose to continue exploring the park or start your
                journey back to your next destination.
                <br />
                <br />
                <h3>Payment</h3>
                <p>
                  {/* (Payable in installments) & Non Refundable if you CANCEL 6
                  days to the Safari Day (Swapping or replacing someone to
                  travel on your behalf is allowed) */}
                </p>
                <p class="price">
                  <i class="fas fa-usd-circle"></i> Price{" "}
                  <span class="currency"> KSH</span> 10,500 per person sharing
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
                    <i class="fas fa-badge-check"></i> Meals on full board
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
