import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import { sliderActive3Item, sliderActive3ItemDot } from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const DestinationDetails = () => {
  return (
    <Layout extraClass={"pt-160"}>
      <PageBanner pageTitle={"Nairobi National Park and Giraffe center"} />
      {/*====== Start Destination Details Section ======*/}
      <section className="destination-details-section pt-100 pb-70">
        <div className="container">
          <div className="destination-details-wrapper">
            <div className="destination-info wow fadeInUp">
              <h3 className="title">
                Nairobi National Park and Giraffe center
              </h3>
              <div className="meta">
                <span className="location">
                  <i className="fas fa-map-marker-alt" />
                  Nairobi, Kenya
                </span>
              </div>
              <p>
                Nairobi national park is the only Capital city with a park . It
                is home to the BIG FIVE animals. Giraffe Center is the home of
                the Rothschild’s giraffes.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <img
                    src="https://www.giraffecentre.org/wp-content/uploads/2016/11/Homepage-slide-1.jpg"
                    className="rounded mb-40"
                    alt="Features Image"
                  />
                </div>
                <div className="col-lg-6">
                  <img
                    src="https://www.susankmcconnell.com/wp-content/gallery/lion/00429624.jpg"
                    className="rounded mb-40"
                    alt="Features Image"
                  />
                </div>
              </div>
              <h3>Why Choose Nairobi National Park and Giraffe Center</h3>
              <p>
                Nairobi National Park is unique as the only protected area in
                the world with such a huge variety of animals and birds close to
                a capital city. It is a principal attraction for visitors to
                Nairobi and also serves many local residents. As a successful
                rhino sanctuary, the park has an excellent record for supporting
                the species and nurturing them until they are re-located to
                their former range and to other upcoming sanctuaries. Due to
                this success, it is one of the few parks where a visitor can be
                certain of seeing a black rhino in its natural environment. The
                Giraffe Centre in Nairobi, Kenya is a popular tourist attraction
                and a conservation center dedicated to the preservation and
                protection of the endangered Rothschild giraffe species. Here
                are some key details about the Giraffe Centre: Location: The
                Giraffe Centre is located in the Langata suburb of Nairobi,
                approximately 20 kilometers from the city center. Conservation
                Focus: The center's primary objective is to save the Rothschild
                giraffe, which is one of the most endangered giraffe subspecies.
                They work towards increasing the population of giraffes through
                breeding and reintroduction programs.
                <p class="price">
                  <i class="fas fa-usd-circle"></i> Price{" "}
                  <span class="currency"> KSH</span> 3800 per person
                </p>
                <a href="contact.html" class="btn-link">
                  Book now<i class="far fa-long-arrow-right"></i>
                </a>
              </p>
              <ul class="features-list mb-40">
                <li>
                  <span>
                    <i class="fas fa-badge-check"></i>Round trip transport in a
                    safari bus
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-badge-check"></i>Game drive
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-badge-check"></i>Visit to Giraffe center
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-badge-check"></i>Photography
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-do-not-enter"></i> Park
                    fees
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-do-not-enter" ></i>
                    Giraffe Centre entry fees
                  </span>
                </li>
                <li>
                  <span>
                    <i class="fas fa-do-not-enter" ></i>
                    Lunch/ refreshments
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
                      src="https://images.unsplash.com/photo-1635595358293-03620e36be48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpcm9iaSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="https://images.unsplash.com/photo-1635595358293-03620e36be48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpcm9iaSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
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
                      src="https://www.gorillasafaricompany.com/wp-content/uploads/2018/10/nairobi-national-park-rhinos.jpg"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="https://www.gorillasafaricompany.com/wp-content/uploads/2018/10/nairobi-national-park-rhinos.jpg"
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
                      src="https://www.photohound.co/images/1034901m.jpg"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="https://www.photohound.co/images/1034901m.jpg"
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
