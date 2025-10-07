'use client'

import Link from "next/link"
import CountUp from "react-countup";
import { FaPlane, FaCartPlus, FaGlobe, FaMedkit, FaSchool, FaBuilding } from "react-icons/fa";


export default function Features() {
    return (
        <>
        
        {/*Start Feauture One*/}
        <section className="feauture-one" id="around-the-corner">
            <div className="container">
                <div className="sec-title">
                                    <h2>Just Around the Corner!</h2>
                                </div>
                <div className="row">
                    {/*Start Feauture One Single */}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" style={{minHeight: 250}}>
                            <div className="feauture-one__single-text">
                                                                  <p style={{fontSize: 30, textTransform: "none"}}>
                                                                         <CountUp
                                                                            start={0}
                                                                            end={20}
                                                                            duration={4}
                                                                            suffix=" mins"
                                                                            enableScrollSpy
                                                                            scrollSpyOnce={true}
                                                                            />
                                                                      </p>
                                <h2 style={{fontSize: 20}}><a href="javascript:void(0);">Dubai International Airport</a></h2>
                            </div>

                            <div className="feauture-one__single-bottom">
                                {/* <div className="btn-box">
                                    <a href="#"><span className="icon-plus"></span></a>
                                </div> */}

                                <div className="icon-box">
                                    <span className="icon-plane">
<FaPlane className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                   <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" style={{minHeight: 250}}>
                            <div className="feauture-one__single-text">
                                                                  <p style={{fontSize: 30, textTransform: "none"}}>
                                                                         <CountUp
                                                                            start={0}
                                                                            end={18}
                                                                            duration={4}
                                                                            suffix=" mins"
                                                                            enableScrollSpy
                                                                            scrollSpyOnce={true}
                                                                            />
                                                                      </p>
                                <h2 style={{fontSize: 20}}><a href="javascript:void(0);">Dubai Outlet Mall</a></h2>
                            </div>

                            <div className="feauture-one__single-bottom">
                                {/* <div className="btn-box">
                                    <a href="#"><span className="icon-plus"></span></a>
                                </div> */}

                                <div className="icon-box">
                                    <span className="icon-plane">
<FaCartPlus className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                      <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" style={{minHeight: 250}}>
                            <div className="feauture-one__single-text">
                                                                  <p style={{fontSize: 30, textTransform: "none"}}>
                                                                         <CountUp
                                                                            start={0}
                                                                            end={10}
                                                                            duration={4}
                                                                            suffix=" mins"
                                                                            enableScrollSpy
                                                                            scrollSpyOnce={true}
                                                                            />
                                                                      </p>
                                <h2 style={{fontSize: 20}}><a href="javascript:void(0);">Global Village</a></h2>
                            </div>

                            <div className="feauture-one__single-bottom">
                                {/* <div className="btn-box">
                                    <a href="#"><span className="icon-plus"></span></a>
                                </div> */}

                                <div className="icon-box">
                                    <span className="icon-plane">
<FaGlobe className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                      <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" style={{minHeight: 250}}>
                            <div className="feauture-one__single-text">
                                                                  <p style={{fontSize: 30, textTransform: "none"}}>
                                                                         <CountUp
                                                                            start={0}
                                                                            end={10}
                                                                            duration={4}
                                                                            suffix=" mins"
                                                                            enableScrollSpy
                                                                            scrollSpyOnce={true}
                                                                            />
                                                                      </p>
                                <h2 style={{fontSize: 20}}><a href="javascript:void(0);">Prime Medical Centre</a></h2>
                            </div>

                            <div className="feauture-one__single-bottom">
                                {/* <div className="btn-box">
                                    <a href="#"><span className="icon-plus"></span></a>
                                </div> */}

                                <div className="icon-box">
                                    <span className="icon-plane">
<FaMedkit className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                      <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" style={{minHeight: 250}}>
                            <div className="feauture-one__single-text">
                                                                  <p style={{fontSize: 30, textTransform: "none"}}>
                                                                         <CountUp
                                                                            start={0}
                                                                            end={6}
                                                                            duration={4}
                                                                            suffix=" mins"
                                                                            enableScrollSpy
                                                                            scrollSpyOnce={true}
                                                                            />
                                                                      </p>
                                <h2 style={{fontSize: 20}}><a href="javascript:void(0);">Gems International School</a></h2>
                            </div>

                            <div className="feauture-one__single-bottom">
                                {/* <div className="btn-box">
                                    <a href="#"><span className="icon-plus"></span></a>
                                </div> */}

                                <div className="icon-box">
                                    <span className="icon-plane">
<FaSchool className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                      <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" style={{minHeight: 250}}>
                            <div className="feauture-one__single-text">
                                                                  <p style={{fontSize: 30, textTransform: "none"}}>
                                                                         <CountUp
                                                                            start={0}
                                                                            end={20}
                                                                            duration={4}
                                                                            suffix=" mins"
                                                                            enableScrollSpy
                                                                            scrollSpyOnce={true}
                                                                            />
                                                                      </p>
                                <h2 style={{fontSize: 20}}><a href="javascript:void(0);">Downtown Dubai</a></h2>
                            </div>

                            <div className="feauture-one__single-bottom">
                                {/* <div className="btn-box">
                                    <a href="#"><span className="icon-plus"></span></a>
                                </div> */}

                                <div className="icon-box">
                                    <span className="icon-plane">
<FaBuilding className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="col-xl-4 col-lg-4 offset-xl-4 offset-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single" style={{minHeight: 250}}>
                            <div className="feauture-one__single-text">
                                                                  <p style={{fontSize: 30, textTransform: "none"}}>
                                                                         <CountUp
                                                                            start={0}
                                                                            end={20}
                                                                            duration={4}
                                                                            suffix=" mins"
                                                                            enableScrollSpy
                                                                            scrollSpyOnce={true}
                                                                            />
                                                                      </p>
                                <h2 style={{fontSize: 20}}><a href="#">Al Maktoum International Airport</a></h2>
                            </div>

                            <div className="feauture-one__single-bottom">

                                <div className="icon-box">
                                    <span className="icon-plane">
<FaPlane className="icon-plane" size={30}/> 
                                    </span>
                                    
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
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
        </section>
       
        </>
    )
}
