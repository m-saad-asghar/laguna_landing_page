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
    <div className="feauture-one__single-text">
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
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            className="burj-icon"
            width={30}
            height={30}
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="M16 0v16H0V0h16ZM8.3953 15.5053l-0.0073 0.0013-0.0473 0.0233-0.0133 0.0027-0.0093-0.0027-0.0473-0.0233c-0.0067-0.0027-0.0127-0.0007-0.016 0.0033l-0.0027 0.0067-0.0113 0.2853 0.0033 0.0133 0.0067 0.0087 0.0693 0.0493 0.01 0.0027 0.008-0.0027 0.0693-0.0493 0.008-0.0107 0.0027-0.0113-0.0113-0.2847c-0.0013-0.0067-0.006-0.0113-0.0113-0.012Zm0.1767-0.0753-0.0087 0.0013-0.1233 0.062-0.0067 0.0067-0.002 0.0073 0.012 0.2867 0.0033 0.008 0.0053 0.0047 0.134 0.062c0.008 0.0027 0.0153 0 0.0193-0.0053l0.0027-0.0093-0.0227-0.4093c-0.002-0.008-0.0067-0.0133-0.0133-0.0147Zm-0.4767 0.0013a0.0153 0.0153 0 0 0-0.018 0.004l-0.004 0.0093-0.0227 0.4093c0 0.008 0.0047 0.0133 0.0113 0.016l0.01-0.0013 0.134-0.062 0.0067-0.0053 0.0027-0.0073 0.0113-0.2867-0.002-0.008-0.0067-0.0067-0.1227-0.0613Z"
                strokeWidth="0.6667"
              ></path>
              <path
                fill="#9f8151"
                d="M8.6667 1.3333a0.6667 0.6667 0 1 0-1.3333 0v1.3333a0.6667 0.6667 0 0 0-0.6667 0.6667v1.4227a0.6667 0.6667 0 0 0 0.6667 0.6667v2.0893a0.6667 0.6667 0 0 0-0.3333 0.5773v2a0.6667 0.6667 0 0 0-0.6667 0.6667v3.3333a0.6667 0.6667 0 1 0 0 1.3333h5.3333a0.6667 0.6667 0 1 0 0-1.3333v-2.6667a0.6667 0.6667 0 0 0-0.6667-0.6667v-2a0.6667 0.6667 0 0 0-0.3333-0.5773v-1.1553a0.6667 0.6667 0 0 0-0.3333-0.5773v-2a0.6667 0.6667 0 0 0-0.6667-0.6667V1.3333Zm0.6667 10.6667v2h-2.6667v-2.6667a0.6667 0.6667 0 0 0 0.6667-0.6667v-2.0893a0.6667 0.6667 0 0 0 0.3333-0.5773V5.9107a0.6667 0.6667 0 0 0 0.3333-0.4227v0.6667a0.6667 0.6667 0 0 0 0.3333 0.5773v2.6667a0.6667 0.6667 0 0 0 0.3333 0.5773V11.3333a0.6667 0.6667 0 0 0 0.6667 0.6667Z"
                strokeWidth="0.6667"
              ></path>
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
