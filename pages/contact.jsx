import React from "react";
import emailjs from "emailjs-com";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";

const Contact = () => {
  // Initialize EmailJS
  emailjs.init("user_yourEmailJSUserID");

  const sendEmail = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const number = e.target.number.value;
    const email = e.target.email.value;
    const text = e.target.text.value;
    const message = e.target.message.value;

    try {
      const response = await emailjs.send(
        "service_sfczkln",
        "template_jfn64xl",
        {
          name: name,
          number: number,
          email: email,
          text: text,
          message: message,
        },
        "bgF-y94qH6tAch-To"
      );

      console.log("SUCCESS!", response.status, response.text);
      alert("Email sent successfully.");
    } catch (error) {
      console.error("Error:", error);
    }

    e.target.reset();
  };

  return (
    <Layout extraClass={"pt-160"}>
      <PageBanner pageTitle={"Contact Us"} />

      {/* Info Section */}
      <section className="contact-info-section pt-100 pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              {/*=== Section Title ===*/}
              <div className="section-title text-center mb-45 wow fadeInDown">
                <span className="sub-title">Contact Us</span>
                <h2>
                  Ready to Get Our Best Services! Feel Free to Contact With Us
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Contact Info Item ===*/}
              <div className="contact-info-item text-center mb-40 wow fadeInUp">
                <div className="icon">
                  <img src="assets/images/icon/icon-1.png" alt="icon" />
                </div>
                <div className="info">
                  <span className="title">Office Location</span>
                  <p>Coming soon!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Contact Info Item ===*/}
              <div className="contact-info-item text-center mb-40 wow fadeInDown">
                <div className="icon">
                  <img src="assets/images/icon/icon-2.png" alt="icon" />
                </div>
                <div className="info">
                  <span className="title">Email Address</span>
                  <p>
                    <a href="mailto:royalbushsafariske@gmail.com">
                      royalbushsafariske@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Contact Info Item ===*/}
              <div className="contact-info-item text-center mb-40 wow fadeInUp">
                <div className="icon">
                  <img src="assets/images/icon/icon-3.png" alt="icon" />
                </div>
                <div className="info">
                  <span className="title">Hotline</span>
                  <p>
                    <a href="tel:+254115880418">+254115880418</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">Get In Touch</span>
                <h2>Send Us a Message</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="contact-area wow fadeInUp">
                <form className="contact-form" onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          placeholder="Name"
                          className="form_control"
                          name="name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="number"
                          placeholder="Phone Number"
                          className="form_control"
                          name="number"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="email"
                          placeholder="Email Address"
                          className="form_control"
                          name="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group text-center">
                        {/* Add a package select field */}
                        <div className="form_group">
                          <select className="form_control" name="text">
                            <option value="Nairobi National Park and Giraffe Center">
                              Nairobi National Park and Giraffe Center
                            </option>
                            <option value="Kereita Ziplining Adventure">
                              Kereita Ziplining Adventure
                            </option>
                            <option value="Nkasiri Adventure Park">
                              Nkasiri Adventure Park
                            </option>
                            <option value="2 Days Masai Mara">
                              2 Days Masai Mara
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <textarea
                          name="message"
                          placeholder="Write Message"
                          className="form_control"
                          rows={6}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group text-center">
                        <button className="main-btn primary-btn" type="submit">
                          Send Us Message
                          <i className="fas fa-paper-plane" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
