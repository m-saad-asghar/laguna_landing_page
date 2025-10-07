"use client";

import Layout from "@/components/layout/Layout";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

// Lightbox core + plugins
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

export default function TeamsListing() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = [
    "/assets/img/gallery/gallery_1.jpg",
    "/assets/img/gallery/gallery_2.jpg",
    "/assets/img/gallery/gallery_3.jpg",
    "/assets/img/gallery/gallery_4.jpg",
    "/assets/img/gallery/gallery_5.jpg",
    "/assets/img/gallery/gallery_6.jpg",
  ];

  return (
    <Layout>
      <section className="team-two" id="gallery">
        <div className="container">
          <div className="sec-title">
            <h2>Gallery</h2>
          </div>

          {/* Normal grid view (unchanged) */}
          <div className="row">
            {images.map((src, i) => (
              <div
                key={i}
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay=".3s"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              >
                <div className="team-two__single">
                  <div className="team-two__single-img">
                    <div
                      className="inner"
                      style={{ overflow: "hidden", borderRadius: "10px" }}
                    >
                      <Image
                        src={src}
                        alt={`Gallery Image ${i + 1}`}
                        width={500}
                        height={550}
                        style={{
                          objectFit: "cover",
                          transition: "0.3s ease",
                          borderRadius: "10px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popup Lightbox Gallery */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          plugins={[Thumbnails, Captions]}
          slides={images.map((src, i) => ({
            src,
            description: `Image ${i + 1}`,
          }))}
          render={{
            buttonClose: () => (
              <button
                onClick={() => setOpen(false)}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "rgba(0,0,0,0.6)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>
            ),
          }}
          styles={{
            container: { backgroundColor: "rgba(0,0,0,0.9)" },
            thumbnailsContainer: { backgroundColor: "transparent" },
            thumbnail: { borderRadius: "8px" },
          }}
        />

       {/* <div className="about-one__content-bottom">
                                    <div className="about-one__content-bottom-author-box" style={{display: "flex", justifyContent: "center"}}>
                                        <div className="btn-box" style={{width: "100%", display: "flex", justifyContent: "center"}}>
                                            <Link className="thm-btn" href="#home" style={{width: 300, display: "flex", justifyContent: "center"}}>
                                                <span className="txt" style={{fontSize: 18}}>Contact Us</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div> */}

      </section>
    </Layout>
  );
}
