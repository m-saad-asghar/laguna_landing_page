import Link from "next/link"
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok, FaSnapchatGhost, FaTwitter } from "react-icons/fa";

export default function Footer1() {
    return (
        <>
            {/*Start Footer One */}
            <footer className="footer-one">
                {/* <div className="shape1"><img className="float-bob-y" src="assets/img/shape/footer-v1-shape1.png" alt=""/></div> */}
                {/*Start Footer Main */}
                <div className="footer-main">
                    <div className="container">
                        <div className="row">
                            {/*Start Single Footer Widget */}
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".1s">
                                <div className="single-footer-widget footer-widget__about">
                                    <div className="logo-box">
                                        <Link href="/" passHref>
  <Image
    src="/assets/img/shiro_images/logo.png"
    alt="shiro_logo"
    height={50}
    width={300} // adjust based on your logo’s aspect ratio
    style={{ height: "50px", width: "auto" }}
  />
</Link>
                                    </div>

                                    <div className="footer-widget__about-inner footer_spacing">
                                        <div className="text-box">
                                            <p>Office No. 2101, 21st Floor, Boulevard Plaza Tower 1<br/>
                                                 Downtown, Dubai, UAE</p>
                                        </div>
                                        <div className="number-box">
                                            <Link href="tel:97145776496">+971 (0)4 577 6496</Link>
                                        </div>

                                       <div className="number-box">
 <a href="mailto:info@shiroestate.ae">info@shiroestate.ae</a>

</div>


                                        {/* <div className="footer-social-link">
                                            <Link href="#">tw</Link>
                                            <Link href="#">in</Link>
                                            <Link href="#">db</Link>
                                            <Link href="#">ig</Link>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            {/*End Single Footer Widget */}

                            {/*Start Single Footer Widget */}
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".2s">
                                <div className="single-footer-widget footer-widget__links">
                                    <div className="title">
                                        <h2>Quick Links</h2>
                                    </div>

                                    <div className="footer-widget__links-box">
                                        <ul>
                                            <li><Link href="#home">Home</Link></li>
                                            <li><Link href="#about-us">About Us</Link></li>
                                            <li><Link href="#around-the-corner">Around the Corner</Link></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>

                              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".2s">
                                <div className="single-footer-widget footer-widget__links footer_spacing">
                                    <div className="title">
                                        <h2>About Laguna</h2>
                                    </div>

                                    <div className="footer-widget__links-box">

                                        <div className="footer-widget__links-box">
                                        <ul>
                                             <li><Link href="#amenities">Amenities</Link></li>
                                            <li><Link href="#gallery">Gallery</Link></li>
                                            <li><Link href="#contact">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                        {/* <ul className="social-links" style={{ display: "flex", flexDirection: "column", listStyle: "none", padding: 0 }}>
      <div style={{display: "flex", gap: 20}}>
        <li>
        <Link href="https://www.facebook.com/shiroestate" target="_blank" rel="noopener noreferrer">
          <div  style={{
    width: "30px",
    height: "30px",
    backgroundColor: "#9f8151",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px", // use '50%' for circle
    color: "#fff",
  }}>
            <FaFacebookF size={20}/>
          </div>
        </Link>
      </li>
      <li>
        <Link href="https://www.linkedin.com/company/shiro-estate" target="_blank" rel="noopener noreferrer">
        <div  style={{
    width: "30px",
    height: "30px",
    backgroundColor: "#9f8151",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px", // use '50%' for circle
    color: "#fff",
  }}>
<FaLinkedinIn size={20}/>
        </div>
          
        </Link>
      </li>
      </div>
      <div style={{display: "flex", gap: 20}}>
<li>
        <Link href="https://x.com/shiroestate" target="_blank" rel="noopener noreferrer">
          <div  style={{
    width: "30px",
    height: "30px",
    backgroundColor: "#9f8151",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px", // use '50%' for circle
    color: "#fff",
  }}>
            <FaTwitter size={20}/>
          </div>
        </Link>
      </li>
      <li>
        <Link href="https://www.instagram.com/shiro.estate" target="_blank" rel="noopener noreferrer">
          <div  style={{
    width: "30px",
    height: "30px",
    backgroundColor: "#9f8151",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px", // use '50%' for circle
    color: "#fff",
  }}>
            <FaInstagram size={20}/>
          </div>
        </Link>
      </li>
      </div>
      
      <div style={{display: "flex", gap: 20}}>
        <li>
        <Link href="https://www.tiktok.com/@shiroestate" target="_blank" rel="noopener noreferrer">
          <div  style={{
    width: "30px",
    height: "30px",
    backgroundColor: "#9f8151",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px", // use '50%' for circle
    color: "#fff",
  }}>
            <FaTiktok size={20}/>
          </div>
        </Link>
      </li>
      <li>
        <Link href="https://www.snapchat.com/@shiro.estate" target="_blank" rel="noopener noreferrer">
          <div  style={{
    width: "30px",
    height: "30px",
    backgroundColor: "#9f8151",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px", // use '50%' for circle
    color: "#fff",
  }}>
            <FaSnapchatGhost size={20}/>
          </div>
        </Link>
      </li>
      </div>
    </ul> */}
                                    </div>

                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".2s">
                                <div className="single-footer-widget footer-widget__links">
                                    
                                    <Image
    src="/assets/qr_code/laguna_qr.png"
    alt="laguna_qr_code"
    height={180}
    width={300} // adjust based on your logo’s aspect ratio
    style={{ height: "180px", width: "auto" }}
  />

                                </div>
                            </div>
                            {/*End Single Footer Widget */}

                            {/*Start Single Footer Widget */}
                            {/* <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="single-footer-widget footer-widget__links quick-link">
                                    <div className="title">
                                        <h2>Quick Link</h2>
                                    </div>

                                    <div className="footer-widget__links-box">
                                        <ul>
                                            <li><Link href="/contact">Help</Link></li>
                                            <li><Link href="/contact">Support</Link></li>
                                            <li><Link href="/contact">Clients</Link></li>
                                            <li><Link href="/shop">Shop</Link></li>
                                            <li><Link href="/projects">Portfolio</Link></li>
                                        </ul>
                                    </div>

                                </div>
                            </div> */}
                            {/*End Single Footer Widget */}

                            {/*Start Single Footer Widget */}
                            {/* <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                <div className="single-footer-widget footer-widget__newsletter">
                                    <div className="title">
                                        <h2>Newsletter</h2>
                                    </div>

                                    <div className="footer-widget__newsletter-box">
                                        <div className="footer-widget__newsletter-text">
                                            <p>Subscribe our newsletter to get the <br/>
                                                latest news & updates</p>
                                        </div>

                                        <form className="footer-widget__newsletter-form">
                                            <div className="input-box">
                                                <input type="email" placeholder="email@example.com" name="email"/>
                                                <button type="submit" className="footer-widget__newsletter-form-btn"><i
                                                        className="icon-telegram"></i>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div> */}
                            {/*End Single Footer Widget */}
                        </div>
                    </div>
                </div>
                {/*End Footer Main */}

                {/*Start Footer Bottom */}
                
                {/*End Footer Bottom */}
            </footer>
            {/*End Footer One */}

        </>
    )
}
