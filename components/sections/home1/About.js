import Link from "next/link"
import CounterUp from "@/components/elements/CounterUp"
import Video from "@/components/sections/home1/Video"
import Image from "next/image";
export default function About() {
    return (
        <>
            {/*Start About One */}
            <section className="about-one" id="about-us" style={{padding: "120px 0px 0px"}}>
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
                                    <div className="sub-title">
                                        <h5>About Us</h5>
                                    </div>
                                    <h2>Our Story</h2>
                                </div>

                                <div className="text-box">
                                    <p>One Development is an international boutique real estate developer based in the UAE,
dedicated to redefining industry standards through innovation and bold ideas. Our focus
on Innovation, Technology, Community, and Sustainability creates elevated living
experiences, designed inspired by you.</p>
                                </div>

                                 <div className="sec-title" style={{marginTop: 15}}>
                                    <h2>Your Everyday Gateway</h2>
                                </div>

                                <div className="text-box">
                                    <p>Laguna Residence offers more than just a home! it’s a serene escape in the middle of
Dubai’s vibrant energy.</p>
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
                                            <Link className="thm-btn" href="#home" style={{width: 300, display: "flex", justifyContent: "center"}}>
                                                <span className="txt" style={{fontSize: 18}}>Contact Us</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End About One Content */}
                    </div>
                </div>
               <div style={{marginTop: 100}}>
                 <Video />
               </div>
            </section>
            {/*End About One */}
        </>
    )
}
