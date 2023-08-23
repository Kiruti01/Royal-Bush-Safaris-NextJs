import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
const Destination = () => {
  return (
    <Layout extraClass={"pt-160"}>
      <PageBanner pageTitle={"Destinations"} />
      {/*====== Start Booking Section ======*/}
      <section className="booking-form-section pb-100">
        <div className="container-fluid">
          <div className="booking-form-wrapper p-r z-2">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="booking-form-two"
            >
              <div className="form_group">
                <span>Check In</span>
                <label>
                  <i className="far fa-calendar-alt" />
                </label>
                <input
                  type="text"
                  className="form_control datepicker"
                  placeholder="Check In"
                />
              </div>
              <div className="form_group">
                <span>Check Out</span>
                <label>
                  <i className="far fa-calendar-alt" />
                </label>
                <input
                  type="text"
                  className="form_control datepicker"
                  placeholder="Check Out"
                />
              </div>
              <div className="form_group">
                <span>Guest</span>
                <label>
                  <i className="far fa-user-alt" />
                </label>
                <input
                  type="text"
                  className="form_control"
                  placeholder="Guest"
                  name="text"
                />
              </div>
              <div className="form_group">
                <span>Accommodations</span>
                <select className="wide">
                  <option data-display="Accommodations">Accommodations</option>
                  <option value={1}>Classic Tent</option>
                  <option value={1}>Forest Camping</option>
                  <option value={1}>Small Trailer</option>
                  <option value={1}>Tree House Tent</option>
                  <option value={1}>Tent Camping</option>
                  <option value={1}>Couple Tent</option>
                </select>
              </div>
              <div className="form_group">
                <button className="booking-btn">
                  Check Availability <i className="far fa-angle-double-right" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/*====== End Booking Section ======*/}
      {/*====== Start Destination Section ======*/}
      <section className="destination-section pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="single-place-item-two mb-30 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="https://cdn-cmaef.nitrocdn.com/jRrqUCcBXKJwaLsDAONdssgqlBCcrZDS/assets/images/optimized/rev-1931450/www.naturaltoursandsafaris.com/wp-content/webp-express/webp-images/uploads/2019/08/67899563_1127201957472806_417877908533458110_n.jpg.webp"
                    alt="Place Image"
                  />
                  <span className="tour-count">New</span>
                  <div className="place-content">
                    <div className="info text-white">
                      <h3 className="title mb-10">Nairobi National Park</h3>
                      <p className="price">
                        <span className="currency">ksh </span> 3800/=
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="single-place-item-two mb-30 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="https://www.kenyageographic.com/wp-content/uploads/2019/01/kereita-forest-zip-lining-2.jpg"
                    alt="Place Image"
                  />
                  <span className="tour-count">New</span>
                  <div className="place-content">
                    <div className="info text-white">
                      <h3 className="title mb-10">Kereita Ziplining Adventure</h3>
                      <p className="price">
                        <span className="currency"> ksh </span> 4550/=
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="single-place-item-two mb-30 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="https://www.micato.com/wp-content/uploads/2019/01/neptune-mara-rianta-luxury-camp-bedroom.jpg"
                    alt="Place Image"
                  />
                  <span className="tour-count">New</span>
                  <div className="place-content">
                    <div className="info text-white">
                      <h3 className="title mb-10">MARA RIANTA FLYING PACKAGE</h3>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
              <div className="single-place-item-two mb-30">
                <div className="place-img">
                  <img
                    src="https://cdn-az.allevents.in/events10/banners/d7cb479ebc93482c6f05abfd42d280fe57e6d4127c2b883fbf3690a44728784d-rimg-w526-h526-gmir.jpg?v=1645039901"
                    alt="Place Image"
                  />
                  <span className="tour-count">New</span>
                  <div className="place-content">
                    <div className="info text-white">
                      <h3 className="title mb-10">Nkasiri Adventure Park</h3>
                      <p className="price">
                        <span className="currency"> ksh </span> 4700/=
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
              <div className="single-place-item-two mb-30">
                <div className="place-img">
                  <img
                    src="https://www.exploring-africa.com/sites/default/files/styles/square/public/uploads/article/231/cover/maasaimara-savannah-savanna-kenya-exploringafrica-safari-africa-afrika-afrique-safariadv-zebre.jpg?itok=wnTWdnLK"
                    alt="Place Image"
                  />
                  <span className="tour-count">New </span>
                  <div className="place-content">
                    <div className="info text-white">
                      <h3 className="title mb-10"> 2 Days Masai Mara</h3>
                      <p className="price">
                        <span className="currency"> ksh </span> 10500/=
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
              <div className="single-place-item-two mb-30">
                <div className="place-img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSpcdh9BK70PkgYHwFmCJ5kfKZztIVEtPnKTlswOtGN2cq87qVpuoSAmwc5yohtj8mvo&usqp=CAU"
                    alt="Place Image"
                  />
                  <span className="tour-count">New</span>
                  <div className="place-content">
                    <div className="info text-white">
                      <h3 className="title mb-10">3 DAYS 2 NIGHTS PRIDEINN HOTELS</h3>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
             
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
           
            </div>
            <div className="col-lg-6 col-md-12">
            
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
     
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
           
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="gowilds-pagination wow fadeInUp text-center mt-30">
                <li className="me-2">
                  <a href="#">
                    <i className="far fa-arrow-left" />
                  </a>
                </li>
                <li className="me-2">
                  <a href="#" className="active">
                    01
                  </a>
                </li>
                <li className="me-2">
                  <a href="#">02</a>
                </li>
                <li className="me-2">
                  <a href="#">03</a>
                </li>
                <li className="me-2">
                  <a href="#">04</a>
                </li>
                <li className="me-2">
                  <a href="#">
                    <i className="far fa-arrow-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Destination Section ======*/}
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
                  Ready to Travel With Us!
                </h2>
                <Link legacyBehavior href="/contact">
                  <a className="main-btn secondary-btn">
                    Check Availability
                    <i className="far fa-paper-plane" />
                  </a>
                </Link>
              </div>
            </div>
     
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}
    
    </Layout>
  );
};
export default Destination;
