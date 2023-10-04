import Home3Slider from "@/src/components/sliders/Home3";
import Layout from "@/src/layout/Layout";
import dynamic from "next/dynamic";
import Link from "next/link";
import ReactPlayer from "react-player/youtube";
import Head from "next/head";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});
const Index3 = () => {
  return (
    <Layout header={5} footerBG={"gray"}>
      {/*====== Start Hero Section ======*/}
      <Head>
        <title>Royal Bush Safaris - Tours and Travel Company</title>
        <meta
          name="description"
          content="Explore Kenya with Royal Bush Safaris, the number 1 Tours and Travel Company. Book your adventure now!"
        />
        <meta
          name="keywords"
          content="Royal Bush Safaris, Tours and Travel, Kenya Tours, Travel Company"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
        {
          "@context": "http://schema.org",
          "@type": "LocalBusiness",
          "name": "Royal Bush Safaris",
          "description": "Tours and Travel Company in Kenya",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Gandhi Ave, Nairobi",
            "addressLocality": "Nairobi",
            "addressRegion": "Nairobi",
            "postalCode": "00100",
            "addressCountry": "Kenya"
          },
          "telephone": "+254115880418",
          "url": "https://royalbushsafaris.co.ke/",
          "sameAs": ["https://www.facebook.com/RoyalBushSafaris/", "https://twitter.com/RoyalBushSafaris"]
        }
      `,
          }}
        />
      </Head>
      <Home3Slider />
      {/*====== End Hero Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-section pt-100 pb-50">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-xl-5">
              {/*=== Features Content Box ===*/}
              <div className="features-content-box pr-lg-70 mb-50">
                {/*=== Section Title ===*/}
                <div className="section-title mb-30">
                  <span className="sub-title">Availability</span>
                  <h2>Explore with us</h2>
                </div>
                <p className="mb-30">
                  we have diffrent varieties of activites and places you can
                  visit to make those perfect memories!
                </p>
                <a href="./about" className="main-btn filled-btn">
                  Learn More
                  <i className="far fa-paper-plane" />
                </a>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="features-item-area mb-20">
                <div className="row pl-lg-70">
                  <div className="col-md-6">
                    {/*=== Fancy Icon Box ===*/}
                    <div className="fancy-icon-box-two mb-30">
                      <div className="icon">
                        <i className="flaticon-camping" />
                      </div>
                      <div className="text">
                        <h3 className="title">Team Building Packages</h3>
                        {/* <p>
                          Sit amet consectetur integ tincidunt scelerie nodermen
                          malesuada sceleris massa
                        </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/*=== Fancy Icon Box ===*/}
                    <div className="fancy-icon-box-two mb-30">
                      <div className="icon">
                        <i className="flaticon-biking-mountain" />
                      </div>
                      <div className="text">
                        <h3 className="title">Group Joining Events</h3>
                        {/* <p>
                          Sit amet consectetur integ tincidunt scelerie nodermen
                          malesuada sceleris massa
                        </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/*=== Fancy Icon Box ===*/}
                    <div className="fancy-icon-box-two mb-30">
                      <div className="icon">
                        <i className="flaticon-fishing-2" />
                      </div>
                      <div className="text">
                        <h3 className="title">Boat &amp; rides</h3>
                        {/* <p>
                          Sit amet consectetur integ tincidunt scelerie nodermen
                          malesuada sceleris massa
                        </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/*=== Fancy Icon Box ===*/}
                    <div className="fancy-icon-box-two mb-30">
                      <div className="icon">
                        <i className="flaticon-caravan" />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          Bush Safaris &amp; Game Drives
                        </h3>
                        {/* <p>
                          Sit amet consectetur integ tincidunt scelerie nodermen
                          malesuada sceleris massa
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start About Section ======*/}
      <section
        className="about-section bg_cover pt-165 pb-210"
        style={{ backgroundImage: "url(assets/images/bg/about-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-lg-6">
              {/*=== About Image Box ===*/}
              <div className="about-image-box mb-50">
                <img
                  src="assets/images/about/about-2.jpg"
                  className="rounded-2"
                  alt="About Image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== About Content Box ===*/}
              <div className="about-content-box text-white pl-lg-40 mb-50">
                {/*=== Section Title ===*/}
                <div className="section-title mb-30">
                  <span className="sub-title">About Us</span>
                  <h2>We’re the Number 1 Tours and Travel Company in Kenya</h2>
                </div>
                <p className="mb-30">
                  Book your long awaited Get-Away trip with us for an
                  unforgettable Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="cta-bg overlay bg_cover pt-150 pb-150"
        style={{ backgroundImage: "url(assets/images/bg/cta-bg2.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-8">
              {/*=== CTA Content Box ===*/}
              <div className="cta-content-box text-white">
                <h2 className="mb-35">
                  Ready to Travel With Real Adventure and Enjoy Natural
                </h2>
                <Link legacyBehavior href="/about">
                  <a className="main-btn secondary-btn">
                    Check Availability
                    <i className="far fa-paper-plane" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-5 col-lg-4">
              {/*=== Play Box with Background Video ===*/}
              <div className="play-box text-center">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=CP5k2gRabvc"
                  playing
                  loop
                  muted
                  width="100%"
                  height="100%"
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}
      {/*====== Start What We Section ======*/}
      <section className="we-section pt-100 pb-50">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-xl-6 order-2 order-xl-1">
              {/*=== We Image Box ===*/}
              <div className="we-two_image-box mb-20">
                <div className="row align-items-end">
                  <div className="col-md-6">
                    {/*=== We Image ===*/}
                    <div className="we-image mb-30">
                      <img
                        src="data:image/jpeg;base64,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"
                        alt="we Image"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/*=== We Image ===*/}
                    <div className="we-image mb-30">
                      <img
                        src="https://www.royalmara.com/wp-content/uploads/2019/06/elephant-with-siria-escarpment-behind.jpg"
                        alt="we Image"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    {/*=== We Image ===*/}
                    <div className="we-image mb-30 pr-lg-30 text-md-end">
                      <img
                        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/492748765.jpg?k=f7844a05c9831cec6707fbf4b2460ce65618393dc0a1b87136db67cf9f8db398&o=&hp=1"
                        alt="we Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 order-1 order-xl-2">
              {/*=== We Content Box ===*/}
              <div className="we-content-box pl-lg-50 mb-10">
                {/*=== Section Title ===*/}
                <div className="section-title mb-30">
                  <span className="sub-title">Explore with us</span>
                  <h2>An Awesome Opportunity For Tours &amp; Travels</h2>
                </div>
                {/*=== Features List ===*/}
                <div className="features-list_one">
                  {/*=== Single Features List ===*/}
                  <div className="single-features-list mb-40">
                    <div className="icon-inner d-flex align-items-center">
                      <div className="icon-check">
                        <i className="fas fa-badge-check" />
                      </div>
                      <div className="icon">
                        <i className="flaticon-helmet" />
                      </div>
                    </div>
                    <div className="content">
                      <h4>Safety is Always First </h4>
                      {/* <p>
                        Set perspiciatis unde omnis estenatus voluptatem
                        accusantium laudantium totarem aperiae
                      </p> */}
                    </div>
                  </div>
                  {/*=== Single Features List ===*/}
                  <div className="single-features-list mb-40">
                    <div className="icon-inner d-flex align-items-center">
                      <div className="icon-check">
                        <i className="fas fa-badge-check" />
                      </div>
                      <div className="icon">
                        <i className="flaticon-best-price" />
                      </div>
                    </div>
                    <div className="content">
                      <h4>Budget &amp; Friendly</h4>
                      {/* <p>
                        Quis autem vel eum iure reprehenderit voluptate velit
                        esse nihile molestiae consequatur.
                      </p> */}
                    </div>
                  </div>
                  {/*=== Single Features List ===*/}
                  <div className="single-features-list mb-40">
                    <div className="icon-inner d-flex align-items-center">
                      <div className="icon-check">
                        <i className="fas fa-badge-check" />
                      </div>
                      <div className="icon">
                        <i className="flaticon-travel" />
                      </div>
                    </div>
                    <div className="content">
                      <h4>We are Trusted Travel Guide</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End What We Section ======*/}
    </Layout>
  );
};
export default Index3;
