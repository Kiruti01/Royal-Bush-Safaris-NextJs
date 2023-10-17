import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import { sliderActive3Item, sliderActive3ItemDot } from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const DestinationDetails = () => {
  return (
    <Layout extraClass={"pt-160"}>
      <PageBanner pageTitle={"𝐍𝐠𝐚𝐫𝐞 𝐍𝐝𝐚𝐫𝐞 𝐃𝐚𝐲 𝐓𝐫𝐢𝐩"} />
      {/*====== Start Destination Details Section ======*/}
      <section className="destination-details-section pt-100 pb-70">
        <div className="container">
          <div className="destination-details-wrapper">
            <div className="destination-info wow fadeInUp">
              <h3 className="title">𝐍𝐠𝐚𝐫𝐞 𝐍𝐝𝐚𝐫𝐞 𝐃𝐚𝐲 𝐓𝐫𝐢𝐩</h3>
              <div className="meta">
                <span className="location">
                  <i className="fas fa-map-marker-alt" />
                  Nairobi, Kenya
                </span>
              </div>
              <p>
                Ngare Ndare forest is a lush indigenous forest at the northern
                foothills of Mt. Kenya. Azure pools glisten at the bottom of
                waterfalls and 200 years old trees stretch into the canopy
                supporting a rich variety of bird and animal life. The forest is
                a vital corridor that links the Lewa Wildlife Conservancy to
                Mount Kenya forest reserve, and one which elephants have been
                using for centuries
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
                <strong>*Morning:*</strong>
                <br/>
                 1. *Early Departure:* - Start your day early from
                Nairobi or your location of stay to make the most of your time
                at Ngare Ndare Forest.
                <br/>
                <br/>
                 2. *Arrival at Ngare Ndare:* - Arrive at
                the Ngare Ndare Forest gate, where you'll pay the entrance fee
                and receive any necessary permits or guides. 
                <br/>
                <br/>
                3. *Nature Walk:* -
                Begin your adventure with a guided nature walk through the
                forest. The forest is known for its pristine streams,
                waterfalls, and diverse flora and fauna. - Along the way, you'll
                have opportunities to spot wildlife such as elephants,
                buffaloes, and various bird species.
                <br/>
                <br/>
                <strong> *Midday:</strong>
                 <br/>
                 
                  4. *Picnic
                Lunch:* - Take a break for a picnic lunch amidst the natural
                beauty of the forest. Most visitors bring their own packed
                lunch. *Afternoon:*
                <br/>
                <br/>
                 5. *Swimming and Waterfalls:* - Continue
                your exploration of the forest, making your way to the Ngare
                Ndare River. - Enjoy a refreshing swim in the crystal-clear blue
                pools of the river, or simply relax by the waterfalls and take
                in the scenery. 
                <br/>
                <br/>
                6. *Canopy Walk:* - One of the highlights of
                Ngare
                <br/>
                <br/>
                <h3>Charges; Ksh. 4,500 per person </h3>
                <strong>What to carry</strong>
                <br />
                ~ Swimming Costumes <br />
                ~ Snacks
                <br />
                ~ ID/Passport
                <br />
                ~ Backpack to carry your personal items
                <br />
                ~ Reusable water bottles
                <br />
                ~ Reusable water bottles
                <br />
                <br />
                For Bookings & inquiries call / whatssapp; +254115880418
                <br />
                <br />
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
                    <i class="fas fa-badge-check"></i>Entry fees to Ngare Ndare
                    forest
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-badge-check"></i>Professional tour guides
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-badge-check"></i>Nature Walk at Ngare Ndare
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-badge-check"></i>Canopy walk
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-badge-check"></i>Swimming at the natural
                    pool
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
