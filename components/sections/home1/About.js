import Link from "next/link"
import CounterUp from "@/components/elements/CounterUp"
import Video from "@/components/sections/home1/Video"
import Image from "next/image";
export default function About() {
    return (
        <>
            {/*Start About One */}
            <section className="about-one about_spacing" id="about-us">
                <div className="shape1 float-bob-y"><img src="assets/img/shape/about-v1-shape1.png" alt=""/></div>
                <div className="container">
                    <div className="row">
                        {/*Start About One Img */}
                        <div className="col-xl-5 wow animated fadeInRight" data-wow-delay="0.1s">
                            <div className="about-one__img">
                                <div className="inner">
                                    <Image
  src="/assets/img/about/about_us.jpg"
  alt="About Us"
  width={600} 
  height={600}
  style={{objectFit: "cover"}}
/>

                                </div>
                                {/* <div className="experience-box">
                                    <div className="counter-box">
                                        <h2 className="count">
                                            <CounterUp end={24} />
                                        </h2>
                                        
                                    </div>
                                    <div className="text-box">
                                        <p>YEARS <br/>
                                            WORKIGN <br/>
                                            EXPERIENCE</p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        {/*End About One Img */}

                        {/*Start About One Content */}
                        <div className="col-xl-7 wow animated fadeInLeft" data-wow-delay="0.1s">
                            <div className="about-one__content">
                                <div className="sec-title">
                                    <h2>Laguna By One Development</h2>
                                </div>

                                <div className="text-box">
                                    <p>One Development is an international boutique real estate developer based in the UAE,
dedicated to redefining industry standards through innovation and bold ideas. Our focus
on Innovation, Technology, Community, and Sustainability creates elevated living
experiences, designed inspired by you.</p>
                                </div>

                                 <div className="sec-title everyday_gateway">
                                    <h2>Your Everyday Gateway</h2>
                                </div>

                                <div className="text-box">
                                    <p>Laguna Residence offers more than just a home! it’s a serene escape in the middle of
Dubai’s vibrant energy.</p><br/>
<p>
    With two iconic towers and a stunning lagoon centerpiece, this project blends nature with
modern living, marking the first landmark on Sheikh Mohamed Bin Zayed Road. Featuring
world class amenities and cutting-edge AI integration for an effortless lifestyle.
</p>
                                </div>

                                {/* <div className="sec-title" style={{marginTop: 15}}>
                                    <h2>Just Around the Corner!</h2>
                                </div>

                                <div className="about-one__content-progress">
                                    <div className="about-one__content-progress-single">
                                        <div className="title" style={{width: "fit-content"}}>
                                            <h4>Dubai International Airport</h4>
                                        </div>
                                        <div className="bar">
                                            <div className="bar-inner1 count-bar" data-percent="30%">
                                                <div className="count-text">20 mins</div>
                                            </div>
                                        </div>
                                    </div>

                                      <div className="about-one__content-progress-single">
                                        <div className="title" style={{width: "fit-content"}}>
                                            <h4>Dubai Outlet Mall</h4>
                                        </div>
                                        <div className="bar">
                                            <div className="bar-inner1 count-bar" data-percent="30%">
                                                <div className="count-text">18 mins</div>
                                            </div>
                                        </div>
                                    </div>

                                     <div className="about-one__content-progress-single">
                                        <div className="title" style={{width: "fit-content"}}>
                                            <h4>Global Village</h4>
                                        </div>
                                        <div className="bar">
                                            <div className="bar-inner1 count-bar" data-percent="30%">
                                                <div className="count-text">10 mins</div>
                                            </div>
                                        </div>
                                    </div>

                                     <div className="about-one__content-progress-single">
                                        <div className="title" style={{width: "fit-content"}}>
                                            <h4>Prime Medical Centre</h4>
                                        </div>
                                        <div className="bar">
                                            <div className="bar-inner1 count-bar" data-percent="30%">
                                                <div className="count-text">10 mins</div>
                                            </div>
                                        </div>
                                    </div>

                                     <div className="about-one__content-progress-single">
                                        <div className="title" style={{width: "fit-content"}}>
                                            <h4>Gems International School</h4>
                                        </div>
                                        <div className="bar">
                                            <div className="bar-inner1 count-bar" data-percent="30%">
                                                <div className="count-text">06 mins</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="about-one__content-progress-single">
                                        <div className="title" style={{width: "fit-content"}}>
                                            <h4>Downtown Dubai</h4>
                                        </div>
                                        <div className="bar">
                                            <div className="bar-inner1 count-bar" data-percent="30%">
                                                <div className="count-text">20 mins</div>
                                            </div>
                                        </div>
                                    </div>

                                     <div className="about-one__content-progress-single">
                                        <div className="title" style={{width: "fit-content"}}>
                                            <h4>Al Maktoum International Airport</h4>
                                        </div>
                                        <div className="bar">
                                            <div className="bar-inner1 count-bar" data-percent="30%">
                                                <div className="count-text">30 mins</div>
                                            </div>
                                        </div>
                                    </div>

                                </div> */}

                               <div className="about-one__content-bottom">
                                    <div className="about-one__content-bottom-author-box" style={{display: "flex", justifyContent: "center"}}>
                                        <div className="btn-box" style={{width: "100%", display: "flex", justifyContent: "center"}}>
                                            <Link className="thm-btn about_contact" href="#home" style={{width: 300, display: "flex", justifyContent: "center"}}>
                                                <span className="txt" style={{fontSize: 18}}>Contact Us</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End About One Content */}

                      <div>
                       <div
  className="thm-btn gold_strip"
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#9f8151",
    padding: "25px 30px",
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    flexWrap: "wrap", // allows stacking on small screens
  }}
>
  <div
    className="gold_strip_col"
    style={{
      flex: "1 1 300px", // responsive behavior
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      marginBottom: "15px", // spacing when stacked
    }}
  >
    <h1
      style={{ color: "#fff", margin: 0, fontWeight: 700 }}
      className="txt gold_strip_title"
    >
      5% Down Payment
    </h1>
    <p
      style={{ color: "#fff", margin: 0, opacity: 0.9 }}
      className="txt gold_strip_sub_title"
    >
      Flexible and easy
    </p>
  </div>

  <div
    className="gold_strip_col"
    style={{
      flex: "1 1 300px",
      textAlign: "right",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <h1
      style={{ color: "#fff", margin: 0, fontWeight: 700 }}
      className="txt gold_strip_title"
    >
      6% Guaranteed Value
    </h1>
    <p
      style={{ color: "#fff", margin: 0, opacity: 0.9 }}
      className="txt gold_strip_sub_title"
    >
      Secure investment
    </p>
  </div>
</div>


                      </div>


                    </div>
                </div>
                
               <div className="video_styling">
                 <Video />
               </div>
            </section>
            {/*End About One */}
        </>
    )
}
