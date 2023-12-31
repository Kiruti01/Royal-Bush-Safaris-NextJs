import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import emailjs from 'emailjs-com';
emailjs.init('Royalbushsafariske@gmail.com'); // Replace 'YOUR_USER_ID' with your actual EmailJS user ID


const Tour = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const accommodations = [
    { id: 1, name: 'Emara ole Sereni (Coming soon)' },
    { id: 2, name: 'Sarova stanely (Coming soon)' },
    { id: 3, name: 'Panari Hotel (Coming soon)' },
    // Add more hotels as needed
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_sfczkln', 'template_4iy642f', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
      }, (error) => {
        console.error('Error sending email:', error.text);
      });
  }


 
  return (
    <Layout extraClass={"pt-160"}>
      <PageBanner pageTitle={"Explore with us"} />
      {/*====== Start Booking Section ======*/}
      <section className="booking-form-section pb-100">
        <div className="container-fluid">
          <div className="booking-form-wrapper p-r z-2">
            <form className="booking-form-two" onSubmit={handleSubmit}>
              <div className="form_group">
                <span>Check In</span>
                <label>
                  <i className="far fa-calendar-alt" />
                </label>
                <DatePicker
                  selected={checkInDate}
                  onChange={(date) => setCheckInDate(date)}
                  className="form_control datepicker"
                  placeholderText="Check In"
                />
              </div>
              <div className="form_group">
                <span>Check Out</span>
                <label>
                  <i className="far fa-calendar-alt" />
                </label>
                <DatePicker
                  selected={checkOutDate}
                  onChange={(date) => setCheckOutDate(date)}
                  className="form_control datepicker"
                  placeholderText="Check Out"
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
              <select className="wide">
                <option data-display="Accommodations">Accommodations</option>
                {accommodations.map((accommodation, index) => (
                  <option key={index} value={accommodation.id}>
                    {accommodation.name}
                  </option>
                ))}
              </select>

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
      {/*====== Start Places Section ======*/}
      <section className="places-section pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6 col-sm-12 places-column">
              {/*=== Single Place Item ===*/}
              <div className="single-place-item mb-60 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="https://www.xplorekenya.com/uploads/images/202301/image_870x_63b747fbde17b.jpg"
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <div className="info">
                    <h4 className="title">
                      <Link legacyBehavior href="/Kereita">
                        <a>Kereita Ziplining Adventure</a>
                      </Link>
                    </h4>
                    <p className="location">
                      <i className="far fa-map-marker-alt" />
                      Aberdare National Park
                    </p>
                    <p className="price">
                      <i className="fas fa-usd-circle" />
                      Price <span className="currency"> ksh </span>4500/=
                    </p>
                    <div className="meta">
                      <span>
                        <Link legacyBehavior href="/Kereita">
                          <a>
                            Book Now
                            <i className="far fa-long-arrow-right" />
                          </a>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12 places-column">
              {/*=== Single Place Item ===*/}
              <div className="single-place-item mb-60 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="https://discoverdiscomfort.com/wp-content/uploads/2019/08/Feeling-of-Safari-in-Maasai-Mara-Kenya-28-many-animals-together-warthog-antelope-zebras-wildebeest-ngiri-swala-pala-punda-milia-nyumbu.jpg"
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <div className="info">
                    <h4 className="title">
                      <Link legacyBehavior href="/Mara">
                        <a>2 days Masai Mara </a>
                      </Link>
                    </h4>
                    <p className="location">
                      <i className="far fa-map-marker-alt" />
                      Maasai Mara
                    </p>
                    <p className="price">
                      <i className="fas fa-usd-circle" />
                      Price <span className="currency"> ksh </span>10500/=
                    </p>
                    <div className="meta">
                      <span>
                        <Link legacyBehavior href="/Mara">
                          <a>
                            Book Now
                            <i className="far fa-long-arrow-right" />
                          </a>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12 places-column">
              {/*=== Single Place Item ===*/}
              <div className="single-place-item mb-60 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="https://www.tripsavvy.com/thmb/vvubWyi6WDlApf1O9c3NpShXsGk=/2125x1411/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-581001645-5bcd85f8c9e77c005172f741.jpg"
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <div className="info">
                    <h4 className="title">
                      <Link legacyBehavior href="/nairobi-park">
                        <a>Nairobi National Park & Giraffe center</a>
                      </Link>
                    </h4>
                    <p className="location">
                      <i className="far fa-map-marker-alt" />
                      Nairobi, Kenya
                    </p>
                    <p className="price">
                      <i className="fas fa-usd-circle" />
                      Price <span className="currency"> ksh </span> 3800/=
                    </p>
                    <div className="meta">
                      <span>
                        <Link legacyBehavior href="/nairobi-park">
                          <a>
                            Book Now
                            <i className="far fa-long-arrow-right" />
                          </a>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12 places-column">
              {/*=== Single Place Item ===*/}
              <div className="single-place-item mb-60 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="https://q-xx.bstatic.com/xdata/images/hotel/max500/357654228.jpg?k=9a7d32e38652ba8e142003e3767176da55b6c9fc504c80514689fbad687085b7&o="
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <div className="info">
                    <h4 className="title">
                      <Link legacyBehavior href="/nkasiri">
                        <a>Nkasiri Adventure Park</a>
                      </Link>
                    </h4>
                    <p className="location">
                      <i className="far fa-map-marker-alt" />
                      Kitengela, Nairobi
                    </p>
                    <p className="price">
                      <i className="fas fa-usd-circle" />
                      Price <span className="currency"> ksh </span> 4700/=
                    </p>
                    <div className="meta">
                      <span>
                        <Link legacyBehavior href="/nkasiri">
                          <a>
                            Book Now
                            <i className="far fa-long-arrow-right" />
                          </a>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12 places-column">
              {/*=== Single Place Item ===*/}
              <div className="single-place-item mb-60 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="https://media-cdn.tripadvisor.com/media/photo-s/11/ca/22/17/prideinn-hotel-mombasa.jpg"
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <div className="info">
                    <h4 className="title">
                      <Link legacyBehavior href="/tour-details">
                        <a>3 DAYS 2 NIGHTS PRIDEINN HOTELS EDITION</a>
                      </Link>
                    </h4>
                    <p className="location">
                      <i className="far fa-map-marker-alt" />
                      Mombasa, Kenya
                    </p>
                    <p className="price">
                      <i className="fas fa-usd-circle" />
                      Prices from <span className="currency"> ksh </span>{" "}
                      14,100/=
                    </p>
                    <div className="meta">
                      <span>
                        <Link legacyBehavior href="/prideinn">
                          <a>
                            Book Now
                            <i className="far fa-long-arrow-right" />
                          </a>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12 places-column">
              {/*=== Single Place Item ===*/}
              <div className="single-place-item mb-60 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="assets/images/place/place-6.jpg"
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <div className="info">
                    <h4 className="title">
                      <Link legacyBehavior href="/tour-details">
                        3 DAYS NEPTUNE MARA RIANTA FLYING PACKAGE
                      </Link>
                    </h4>
                    <p className="location">
                      <i className="far fa-map-marker-alt" />
                      Mara
                    </p>
                    <p className="price">
                      <i className="fas fa-usd-circle" />
                      Prices from <span className="currency"> ksh </span>
                    </p>
                    <div className="meta">
                      <span>
                        <Link legacyBehavior href="/tour-details">
                          <a>
                            Details
                            <i className="far fa-long-arrow-right" />
                          </a>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/*=== Single Place Item ===*/}
              <div className="single-place-item mb-60 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="https://www.kenyawildlifetours.com/wp-content/uploads/2022/06/Ngare_ndare_forest_reserve.jpg"
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <div className="info">
                    <h4 className="title">
                      <Link legacyBehavior href="/Ngare">
                        <a>Ngare Ndare Day Trip</a>
                      </Link>
                    </h4>
                    <p className="location">
                      <i className="far fa-map-marker-alt" />
                      Mt.Kenya
                    </p>
                    <p className="price">
                      <i className="fas fa-usd-circle" />
                      Price <span className="currency"> ksh </span> 4500/=
                    </p>
                    <div className="meta">
                      <span>
                        <Link legacyBehavior href="/Ngare">
                          <a>
                            Book Now
                            <i className="far fa-long-arrow-right" />
                          </a>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12 places-column">
              {/*=== Single Place Item ===*/}
              {/* <div className="single-place-item mb-60 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="assets/images/place/place-7.jpg"
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <div className="info">
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <a href="#">(4.9)</a>
                      </li>
                    </ul>
                    <h4 className="title">
                      <Link legacyBehavior href="/tour-details">
                        Man and Woman Walks on Dock
                      </Link>
                    </h4>
                    <p className="location">
                      <i className="far fa-map-marker-alt" />
                      Maldives
                    </p>
                    <p className="price">
                      <i className="fas fa-usd-circle" />
                      Price<span className="currency">$</span>93.65
                    </p>
                    <div className="meta">
                      <span>
                        <i className="far fa-clock" />
                        05 Days
                      </span>
                      <span>
                        <i className="far fa-user" />
                        25
                      </span>
                      <span>
                        <Link legacyBehavior href="/tour-details">
                          <a>
                            Details
                            <i className="far fa-long-arrow-right" />
                          </a>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12 places-column">
              {/*=== Single Place Item ===*/}
              {/* <div className="single-place-item mb-60 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="assets/images/place/place-8.jpg"
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <div className="info">
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <a href="#">(4.9)</a>
                      </li>
                    </ul>
                    <h4 className="title">
                      <Link legacyBehavior href="/tour-details">
                        Trees Under White Clouds during Daytime
                      </Link>
                    </h4>
                    <p className="location">
                      <i className="far fa-map-marker-alt" />
                      Vaitāpē, French Polynesia
                    </p>
                    <p className="price">
                      <i className="fas fa-usd-circle" />
                      Price<span className="currency">$</span>93.65
                    </p>
                    <div className="meta">
                      <span>
                        <i className="far fa-clock" />
                        05 Days
                      </span>
                      <span>
                        <i className="far fa-user" />
                        25
                      </span>
                      <span>
                        <Link legacyBehavior href="/tour-details">
                          <a>
                            Details
                            <i className="far fa-long-arrow-right" />
                          </a>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12 places-column">
              {/*=== Single Place Item ===*/}
              {/* <div className="single-place-item mb-60 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="assets/images/place/place-9.jpg"
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <div className="info">
                    
                    <h4 className="title">
                      <Link legacyBehavior href="/tour-details">
                        Body of Water Near Mountain
                      </Link>
                    </h4>
                    <p className="location">
                      <i className="far fa-map-marker-alt" />
                      Bali, Indonesia
                    </p>
                    <p className="price">
                      <i className="fas fa-usd-circle" />
                      Price<span className="currency">$</span>93.65
                    </p>
                    <div className="meta">
                      <span>
                        <i className="far fa-clock" />
                        05 Days
                      </span>
                      <span>
                        <i className="far fa-user" />
                        25
                      </span>
                      <span>
                        <Link legacyBehavior href="/tour-details">
                          <a>
                            Details
                            <i className="far fa-long-arrow-right" />
                          </a>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/*=== Gowilds Pagination ===*/}
              <ul className="gowilds-pagination wow fadeInUp text-center">
                <li>
                  <a href="#">
                    <i className="far fa-arrow-left" />
                  </a>
                </li>
                <li>
                  <a href="#" className="active">
                    01
                  </a>
                </li>
                <li>
                  <a href="#">02</a>
                </li>
                <li>
                  <a href="#">03</a>
                </li>
                <li>
                  <a href="#">04</a>
                </li>
                <li>
                  <a href="#">
                    <i className="far fa-arrow-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Places Section ======*/}
      {/*====== Start Gallery Section ======*/}

      {/*====== End Gallery Section ======*/}
    </Layout>
  );
};
export default Tour;
