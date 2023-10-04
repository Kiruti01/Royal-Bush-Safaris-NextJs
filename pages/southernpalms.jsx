import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import { sliderActive3Item, sliderActive3ItemDot } from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const DestinationDetails = () => {
  return (
    <Layout extraClass={"pt-160"}>
      <PageBanner pageTitle={"3 Days 2 Nights Southern Palms Beach Resort, Diani"} />
      {/*====== Start Destination Details Section ======*/}
      <section className="destination-details-section pt-100 pb-70">
        <div className="container">
          <div className="destination-details-wrapper">
            <div className="destination-info wow fadeInUp">
              <h3 className="title">3 Days 2 Nights Southern Palms Beach Resort</h3>
              <div className="meta">
                <span className="location">
                  <i className="fas fa-map-marker-alt" />
                  Mombasa, Kenya
                </span>
              </div>
              <p>
                Looking for a good beach resort in Diani to spend the time with
                loved ones. Southern Palms Beach Resort awaits to host you
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <img
                    src="https://southernpalmskenya.com/wp-content/uploads/2021/05/SPBR-Sept-2019-Hotel-0337-DJI_0231-1024x683.jpg"
                    className="rounded mb-40"
                    alt="Features Image"
                  />
                </div>
                <div className="col-lg-6">
                  <img
                    src="https://southernpalmskenya.com/wp-content/uploads/2021/05/spbr-4000-1536x951.jpg"
                    className="rounded mb-40"
                    alt="Features Image"
                  />
                </div>
              </div>
              <h3>Why Choose  Southern Palms Beach Resort</h3>
              <p>
                Southern Palms Beach Resort sits at the edge of the Indian Ocean
                on the gorgeous, renowned Diani Beach. Opened in 1992 and most
                recently renovated in 2019, it’s an oasis of calm just 35km
                south of Mombasa. Modern amenities complement the warm Swahili
                and Arabic décor throughout the property. The ideal getaway for
                friends and families who want to enjoy the white expanse of
                Diani Beach, savor a cocktail by the pool in the warmth of the
                African sun or be the envy of everyone at home with the perfect
                photo op of your camel ride on the beach{" "}
                <br/>
                <br/>
                <p class="price">
                  <i class="fas fa-usd-circle"></i> Price{" "}
                  <span class="currency"> Starting from Ksh.</span> 28,750 per person Sharing
                </p>
                <Link legacyBehavior href="contact">
                  <a className="main-btn primary-btn">
                    Book Now
                    <i className="far fa-paper-plane" />
                  </a>
                </Link>
              </p>
              <ul class="features-list mb-40">
                <li>
                  <span>
                    <i class="fas fa-badge-check"></i>️2 Nights Accommodation
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-badge-check"></i>️Return economy sgr tickets
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-badge-check"></i>️All inclusive meals
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-badge-check"></i>Photography
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-do-not-enter"></i> ️Return group joining coast transfers
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-do-not-enter"></i>
                    Anything not mentioned above
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
                      src="https://southernpalmskenya.com/wp-content/uploads/2021/05/41-scaled.jpg"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="https://southernpalmskenya.com/wp-content/uploads/2021/05/41-scaled.jpg"
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
                      src="https://southernpalmskenya.com/wp-content/uploads/2021/05/SPBR-Sept-2019-Hotel-0020-IMG_9414-1-scaled.jpg"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="https://southernpalmskenya.com/wp-content/uploads/2021/05/SPBR-Sept-2019-Hotel-0020-IMG_9414-1-scaled.jpg"
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
                      src="https://southernpalmskenya.com/wp-content/uploads/2021/05/30-1536x1024.jpg"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="https://southernpalmskenya.com/wp-content/uploads/2021/05/30-1536x1024.jpg"
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
