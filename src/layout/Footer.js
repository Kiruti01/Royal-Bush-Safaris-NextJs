import WhatsAppButton from "../../pages/Whatsapp/WhatsappButton";
const Footer = ({ bg }) => {
  return (
    <footer
      className={`main-footer ${bg ? bg : "black"}-bg `}
    >
      <div className="container">
        <div className="footer-widget-area pt-5 pb-10">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              {/*=== Footer Widget ===*/}
              <div className="footer-widget about-company-widget mb-40">
                <h4 className="widget-title">Royal Bush Safaris</h4>
                <div className="footer-content">
                  <a href="#" className="footer-logo">
                    <img
                      src={
                        bg === "gray"
                          ? "assets/images/logo/logo-black.png"
                          : "assets/images/logo/logo-white.png"
                      }
                      alt="Site Logo"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              {/*=== Footer Widget ===*/}
              <div className="footer-widget service-nav-widget mb-30 pl-lg-30">
                <h4 className="widget-title">QUICK LINKS</h4>
                <div className="footer-content">
                  <ul className="footer-widget-nav">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="destination">Destinations</a>
                    </li>
                    <li>
                      <a href="tours">Tours</a>
                    </li>
                  </ul>
                </div>
              </div>
          
              <WhatsAppButton />
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="footer-widget footer-social-widget mb-30 pl-lg-100">
                <h4 className="widget-title">FOLLOW WITH US</h4>
                <div className="footer-content">
                  <p>Join the thousands of other followers on our social platforms and get our latest offers</p>
                  <ul
                    className="social-icons"
                    style={{ listStyle: "none", padding: 0, margin: 0 }}
                  >
                    <li
                      style={{ display: "inline-block", marginRight: "10px" }}
                    >
                      <a
                        href="https://www.facebook.com/royalbushsafariske/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i
                          className="fab fa-facebook"
                          style={{
                            fontSize: "24px",
                            color: "#F7921E",
                            textDecoration: "none",
                          }}
                        ></i>
                      </a>
                    </li>
                    <li
                      style={{ display: "inline-block", marginRight: "10px" }}
                    >
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i
                          className="fab fa-twitter"
                          style={{
                            fontSize: "24px",
                            color: "#F7921E",
                            textDecoration: "none",
                          }}
                        ></i>
                      </a>
                    </li>
                    <li
                      style={{ display: "inline-block", marginRight: "10px" }}
                    >
                      <a
                        href="https://www.instagram.com/royalbushsafaris/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i
                          className="fab fa-instagram"
                          style={{
                            fontSize: "24px",
                            color: "#F7921E",
                            textDecoration: "none",
                          }}
                        ></i>
                      </a>
                    </li>
                    {/* Add more social icons as needed */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*=== Footer Copyright ===*/}
        <div className="footer-copyright">
          <div className="row">
            <div className="col-lg-6">
              {/*=== Footer Text ===*/}
              <div className="footer-text">
                <p>
                  Copyright @ 2023{" "}
                  <span style={{ color: "#F7921E" }}>Royal Bush Safaris</span>,
                  All Right Reserved
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Footer Nav ===*/}
              <div className="footer-nav float-lg-end"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
