import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import { sliderActive3Item, sliderActive3ItemDot } from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const DestinationDetails = () => {
  return (
    <Layout extraClass={"pt-160"}>
      <PageBanner pageTitle={"Mamba Vilage"} />
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
                Mamba Village in Nairobi, Kenya, stands as an intriguing
                destination for nature enthusiasts and curious minds alike.
                Boasting one of Africa's largest crocodile farms, it provides a
                unique opportunity to witness these remarkable reptiles up close
                while learning about their biology and conservation. Beyond
                crocodile encounters, the village offers a diverse range of
                activities, including camel and horse riding, creating cherished
                memories for families and adventure-seekers. Its landscaped
                gardens provide a serene backdrop for relaxation, complemented
                by cultural events that offer a taste of Kenyan traditions. With
                a restaurant serving local and international cuisine, as well as
                opportunities for shopping and photography, Mamba Village
                presents a comprehensive experience that not only entertains but
                also supports vital conservation efforts.
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
                <strong>*Morning:*</strong>  <br/>
                1. *Arrival at Mamba Village:* - Aim to arrive in the
                morning when the park opens to make the most of your visit.
                <br/>
                
                2.*Crocodile Feeding:* - Watch the exciting crocodile feeding
                session. It's a thrilling experience! 
                <br/>
               
                3. *Crocodile Farm Tour:* - Take a guided tour of the crocodile farm to learn about these
                fascinating reptiles. <br/>
                <strong> *Midday:*</strong> <br/>
                 4. *Lunch:* - Enjoy a meal at the on-site restaurant. They often serve a variety of dishes,
                including local and international cuisine. <br/>
                <strong>*Afternoon:*</strong> <br/>
                 5.*Animal Viewing:* - Explore the park and see other animals like
                tortoises, birds, and monitor lizards.  <br/>
               <strong> *Late Afternoon:*</strong> <br/>
                7. *Shopping and Souvenirs:* - Browse the gift shops for souvenirs or
                mementos of your visit. <br/>
                8. *Wrap Up:* - Spend your final moments
                at Mamba Village, taking in the surroundings and perhaps
                capturing some photos.
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
