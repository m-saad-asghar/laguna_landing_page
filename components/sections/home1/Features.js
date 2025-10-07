'use client'

import Link from "next/link"
import CountUp from "react-countup";
import Image from "next/image";
import { FaPlane, FaGlobe, FaMedkit, FaSchool, FaBuilding, FaShoppingCart, FaBroadcastTower, FaLandmark } from "react-icons/fa";


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
<FaShoppingCart className="icon-plane" size={30}/> 
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
                     <div
  className="col-xl-4 col-lg-4 wow fadeInLeft feature-parent"
  data-wow-delay="0ms"
  data-wow-duration="1500ms"
  style={{ minHeight: 250 }}
>
  <div className="feauture-one__single" style={{minHeight: 250}}>
    <div className="feauture-one__single-text" style={{marginBottom: 40}}>
      <p style={{ fontSize: 30, textTransform: "none" }}>
        <CountUp
          start={0}
          end={20}
          duration={4}
          suffix=" mins"
          enableScrollSpy
          scrollSpyOnce={true}
        />
      </p>
      <h2 style={{ fontSize: 20 }}>
        <a href="javascript:void(0);">Downtown Dubai</a>
      </h2>
    </div>

    <div className="feauture-one__single-bottom">
      <div className="icon-box" style={{marginTop: 15}}>
        <div
          className="burj-icon-wrapper"
          style={{
            width: "30px",
            height: "30px",
            display: "inline-block",
          }}
        >
        <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 600"
      preserveAspectRatio="xMidYMid meet"
      width="45"
      height="45"
      className="burj-icon"
      style={{ fill: "#9f8151", transition: "fill 0.3s ease" }}
    >
      <g
        transform="translate(0.000000,600.000000) scale(0.100000,-0.100000)"
        stroke="none"
      >
        <path d="M2986 5363 c-3 -54 -10 -143 -16 -198 -5 -55 -9 -144 -10 -197 0 -91
-1 -98 -20 -98 -19 0 -20 -7 -20 -175 l0 -175 -50 0 -50 0 0 -370 0 -370 -55
0 -55 0 0 -400 0 -400 -40 0 c-31 0 -40 -4 -40 -17 0 -10 -9 -200 -19 -422
-14 -295 -23 -406 -32 -412 -7 -4 -32 -10 -55 -14 l-43 -6 -5 -52 c-3 -29 -17
-272 -31 -542 -14 -269 -27 -496 -28 -504 -1 -9 -22 -13 -72 -15 l-70 -1 -3
-43 -3 -42 -55 0 -54 0 0 -55 0 -55 -130 0 -130 0 0 -84 c0 -45 -3 -111 -6
-145 l-7 -61 -143 0 -144 0 0 -40 0 -40 1400 0 1400 0 0 40 0 40 -148 0 -149
0 -12 102 c-7 57 -17 136 -23 176 l-11 74 -114 -7 c-130 -8 -133 -7 -133 63
l0 42 -59 0 -58 0 -9 52 -9 53 -52 -3 c-38 -3 -54 0 -57 10 -5 13 -56 741 -56
785 0 19 -6 22 -42 25 l-43 3 -24 432 -25 432 -35 3 -36 3 -11 325 c-7 179
-12 360 -13 403 l-1 77 -50 0 -50 0 0 365 0 365 -30 0 -30 0 0 134 c0 125 -1
134 -20 139 -19 5 -20 14 -20 126 0 74 -4 121 -10 121 -6 0 -10 33 -10 80 0
47 -4 80 -10 80 -6 0 -10 33 -10 78 0 44 -5 83 -11 89 -7 7 -13 72 -17 167 -3
86 -8 156 -12 156 -4 0 -10 -44 -14 -97z" />
      </g>
    </svg>
        </div>
      </div>
    </div>
  </div>

  <style jsx>{`
    .feature-parent:hover .burj-icon path:last-child {
      fill: #ffffff; /* icon becomes white on hover */
      transition: fill 0.3s ease;
    }

    .burj-icon path:last-child {
      fill: #9f8151; /* initial color */
      transition: fill 0.3s ease;
    }
  `}</style>
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
                <div className="about-one__content-bottom feature_btn">
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
