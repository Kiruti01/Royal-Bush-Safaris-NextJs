import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import { sliderActive3Item, sliderActive3ItemDot } from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const DestinationDetails = () => {
  return (
    <Layout extraClass={"pt-160"}>
      <PageBanner pageTitle={"3 DAYS 2 NIGHTS AMBOSELI NATIONAL PARK"} />
      {/*====== Start Destination Details Section ======*/}
      <section className="destination-details-section pt-100 pb-70">
        <div className="container">
          <div className="destination-details-wrapper">
            <div className="destination-info wow fadeInUp">
              <h3 className="title">Mamba Village</h3>
              <div className="meta">
                <span className="location">
                  <i className="fas fa-map-marker-alt" />
                  Nairobi, Kenya
                </span>
              </div>
              <p>
                The park is best known for its stunning views of Mount
                Kilimanjaro, Africa's highest peak, which rises majestically
                just across the border in Tanzania. This iconic backdrop,
                combined with the park's diverse wildlife and unique ecosystems,
                makes Amboseli a favorite destination for nature enthusiasts,
                photographers, and safari-goers. Amboseli is characterized by
                vast, open grasslands, swamps, and acacia woodlands, creating a
                diverse habitat for a wide array of wildlife. It's particularly
                famous for its large elephant herds, which are some of the most
                studied and photographed in the world. Other notable species
                that call Amboseli home include lions, cheetahs, buffalo,
                zebras, giraffes, and a variety of bird species.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <img
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/60/c5/fa/caption.jpg?w=1200&h=-1&s=1"
                    className="rounded mb-40"
                    alt="Features Image"
                  />
                </div>
                <div className="col-lg-6">
                  <img
                    src="https://www.kenyawildlifetours.com/wp-content/uploads/2022/06/Ngare_ndare_forest_reserve.jpg"
                    className="rounded mb-40"
                    alt="Features Image"
                  />
                </div>
              </div>
              <p>
                <h4>Itenerary</h4>
                <strong> *Day 1:</strong>
                <br />
                <strong>Arrival in Amboseli</strong>
                <br />
                <strong> Morning:</strong>
                <br />
                - Arrive at Amboseli National Park. <br />
                - Check-in at your chosen accommodation. <br />
                <strong>Afternoon: </strong>
                <br />
                -Enjoy your first game drive in Amboseli. <br />
                <strong>Evening</strong>
                <br />
                -Dinner at the lodge/camp.
                <br />
                <strong> *Day 2:</strong>
                <br />
                <strong>
                  {" "}
                  Day Safari <br />
                  Morning:
                </strong>{" "}
                <br />
                - Early morning game drive for wildlife viewing and photography.{" "}
                <br />
                -Breakfast at the lodge/camp. <br />
                <strong>Mid-morning:</strong> <br />
                Visit the Observation Hill for panoramic views. <br />- Lunch at
                the lodge/camp. Afternoon: Continue with another game drive.
                Evening: Dinner and relaxation. <br />
                <strong> *Day 3:</strong> <br />
                <strong>Departure* </strong>
                <br /> <strong>Morning: </strong>
                <br /> - Last game drive in Amboseli. <br /> - Return to the
                lodge/camp for breakfast. <br /> - Check out and departure from
                Amboseli.
              </p>
              <Link legacyBehavior href="contact">
                <a className="main-btn primary-btn">
                  Book Now
                  <i className="far fa-paper-plane" />
                </a>
              </Link>
              <br />
              <br />
              <h3>Package includes</h3>
              <br />
              <ul class="features-list mb-40">
                <li>
                  <span>
                    <i class="fas fa-badge-check"></i>Transport to and from
                    Nairobi
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-badge-check"></i>Oct babies Birthday Cake
                  </span>
                </li>

                <li>
                  <span>
                    <i class="fas fa-badge-check"></i>Professional tour guides
                  </span>
                </li>

                <li>
                  <span>
                    <i class="fas fa-badge-check"></i>Plunging at the water
                    falls
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-badge-check"></i>Unlimited professional
                    Photography
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-badge-check"></i>Sumptuous Lunch
                  </span>
                </li>
              </ul>
            </div>
            <div className="gallery-area wow fadeInUp">
              <Slider {...sliderActive3Item} className="slider-active-3-item">
                {/*=== Single Gallery Item ===*/}
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
