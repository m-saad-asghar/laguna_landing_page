'use client'
import Link from "next/link"
import { useState } from "react"
import { FaBuilding, FaCity, FaHome, FaMapMarked, FaWater } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";


export default function Pricing() {
    
    return (
        <>
            {/*Start Service One */}
        <section className="service-one" id="amenities">
            <div className="service-one__shape2" style={{backgroundImage: 'url(assets/img/shape/service-v1-shape2.png)'}}>
            </div>
            <div className="container">
                <div className="sec-title text-center">
                    <div className="sub-title">
                        <h5>Amenities</h5>
                    </div>
                    <h2>Exceptional Residential Amenities</h2>
                </div>
                <div className="row">
                    {/*Start Service One Single */}

                       <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.1s">
                        <div className="service-one__single">
                            <div className="shape1"><img src="assets/img/shape/service-v1-shape1.png" alt=""/></div>
                            <div className="service-one__single-inner">
                                <div className="icon-box" style={{top: 0}}>
                                     <span>
                                        <GiBrain size={40} />
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2><Link href="javascript:void(0);">First AI-Integration Project</Link></h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.1s">
                        <div className="service-one__single">
                            <div className="shape1"><img src="assets/img/shape/service-v1-shape1.png" alt=""/></div>
                            <div className="service-one__single-inner">
                                <div className="icon-box" style={{top: 0}}>
                                    <span>
                                        <FaMapMarked size={40} />
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2><Link href="javascript:void(0);">Strategic Location</Link></h2>
                                </div>
                            </div>
                        </div>
                    </div>

                      <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.1s">
                        <div className="service-one__single">
                            <div className="shape1"><img src="assets/img/shape/service-v1-shape1.png" alt=""/></div>
                            <div className="service-one__single-inner">
                                <div className="icon-box" style={{top: 0}}>
                                    <span>
                                        <FaWater size={40} />
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2><Link href="javascript:void(0);">Largest Lagoon on a Podium</Link></h2>
                                </div>
                            </div>
                        </div>
                    </div>

                      <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.1s">
                        <div className="service-one__single">
                            <div className="shape1"><img src="assets/img/shape/service-v1-shape1.png" alt=""/></div>
                            <div className="service-one__single-inner">
                                <div className="icon-box" style={{top: 0}}>
                                   <span>
                                        <FaCity size={40} />
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2><Link href="javascript:void(0);">Dynamic Dubai Skyline</Link></h2>
                                </div>
                            </div>
                        </div>
                    </div>

                      <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.1s">
                        <div className="service-one__single">
                            <div className="shape1"><img src="assets/img/shape/service-v1-shape1.png" alt=""/></div>
                            <div className="service-one__single-inner">
                                <div className="icon-box" style={{top: 0}}>
                                   <span>
                                        <FaHome size={40} />
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2><Link href="javascript:void(0);">Studio, 1BR, 2BR, 3BR</Link></h2>
                                </div>
                            </div>
                        </div>
                    </div>

                      <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.1s">
                        <div className="service-one__single">
                            <div className="shape1"><img src="assets/img/shape/service-v1-shape1.png" alt=""/></div>
                            <div className="service-one__single-inner">
                                <div className="icon-box" style={{top: 0}}>
                                     <span>
                                        <FaBuilding size={40} />
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h2><Link href="javascript:void(0);">Loft, Sky Homes, Duplex</Link></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                   
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
        {/*End Service One */}
        </>
    )
}
