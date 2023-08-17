import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import { sliderActive3Item, sliderActive3ItemDot } from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const DestinationDetails = () => {
  return (
    <Layout extraClass={"pt-160"}>
      <PageBanner pageTitle={"Kereita Ziplining Adventure"} />
      {/*====== Start Destination Details Section ======*/}
      <section className="destination-details-section pt-100 pb-70">
        <div className="container">
          <div className="destination-details-wrapper">
            <div className="destination-info wow fadeInUp">
              <h3 className="title">Kereita Ziplining Adventure</h3>
              <div className="meta">
                <span className="location">
                  <i className="fas fa-map-marker-alt" />
                  Nairobi, Kenya
                </span>
              </div>
              <p>
                Kereita Ziplining Adventure is an outdoor adventure park located
                in Kereita Forest, near Nairobi, Kenya. It offers a range of
                thrilling activities and experiences for adventure enthusiasts
                of all ages
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <img
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/88/25/41/one-of-our-great-visits.jpg?w=1200&h=-1&s=1"
                    className="rounded mb-40"
                    alt="Features Image"
                  />
                </div>
                <div className="col-lg-6">
                  <img
                    src="https://saintbk.com/wp-content/uploads/2023/03/Ziplining-in-Nairobi.jpg"
                    className="rounded mb-40"
                    alt="Features Image"
                  />
                </div>
              </div>
              <h3>Why Choose Kereita Ziplining Adventures</h3>
              <p>
                Ziplining: The park is renowned for its zipline canopy tour,
                which allows you to soar through the forest canopy on a series
                of ziplines. Enjoy breathtaking views as you glide from one
                platform to another, experiencing an adrenaline rush like no
                other.
                <br />
                <br />
                Canopy Walk: Take a walk on the wild side with a canopy walkway
                adventure. Suspended high above the ground, the walkway provides
                an exciting and unique perspective of the forest, allowing you
                to observe the flora and fauna from a different vantage point.
                <br />
                <br />
                Archery: Test your aim and precision with archery sessions.
                Skilled instructors will guide you through the basics of
                archery, and you'll have the opportunity to practice your skills
                and compete with friends or family members.
                <br />
                <br />
                Mountain Biking: Kereita Zipling Adventure offers mountain
                biking trails suitable for all levels of experience. Rent a bike
                and explore the scenic forest trails, enjoying the thrill of
                off-road cycling amidst beautiful surroundings.
                <br />
                <br />
                Nature Walks and Hikes: Immerse yourself in the natural beauty
                of Kereita Forest through guided nature walks and hikes.
                Discover diverse plant and animal species, learn about the local
                ecosystem, and enjoy the tranquility of the forest environment.
                <br />
                <br />
                Team Building Activities: The park is an ideal destination for
                corporate team building events. Engage in team-building
                exercises, obstacle courses, and other group activities designed
                to promote teamwork, communication, and problem-solving skills.
                <br />
                <br />
                Camping: For those who want to extend their adventure, Kereita
                Zipling Adventure offers camping facilities. Spend a night under
                the stars, surrounded by the peaceful ambiance of the forest,
                and wake up to the sounds of nature.
                <h3>Itinerary</h3>
                <p>
                  Pickup point; International House at 7:00AM. Afterwards leave
                  Nairobi heading to the forest. We will have a stopover at the
                  Great Rift Valley View Point for photos & view of scenery & a
                  stopover at a supermarket for snacks. We shall proceed with
                  our journey, arrive at the forest where we will have warm ups
                  & introductions. From there the Kereita guides will lead us to
                  our zip lining adventure where they will show us how to
                  zipline.
                </p>
                <br />
                <p class="price">
                  <i class="fas fa-usd-circle"></i> Price{" "}
                  <span class="currency"> KSH</span> 3800 per person
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
                    <i class="fas fa-badge-check"></i>Zip lining adventure (2
                    lines)
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-badge-check"></i>KFS entry fees
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
                    <i class="fas fa-do-not-enter" ></i> Tips
                    and gratuity
                  </span>
                </li>

                <li>
                  <span>
                    <i class="fas fa-do-not-enter" ></i>
                    Refreshments / Snacks / Lunch
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-do-not-enter" ></i>
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
                      src="https://twendesasa.com/wp-content/uploads/2022/11/List-Of-Best-Paintball-Locations-In-Kenya-5.jpg"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="https://twendesasa.com/wp-content/uploads/2022/11/List-Of-Best-Paintball-Locations-In-Kenya-5.jpg"
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
                      src="https://victormatara.com/wp-content/uploads/2021/12/Kereita-Forest-Zip-Lining-Charges-1200x720.jpeg"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="https://victormatara.com/wp-content/uploads/2021/12/Kereita-Forest-Zip-Lining-Charges-1200x720.jpeg"
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
                      src="https://i.ytimg.com/vi/X0Ungf_NeYc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDQ9OxS0KWPzlTjcgOyNg3ngmctCg"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="https://i.ytimg.com/vi/X0Ungf_NeYc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDQ9OxS0KWPzlTjcgOyNg3ngmctCg"
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
