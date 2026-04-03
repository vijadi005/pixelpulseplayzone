"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const HERO_VIDEO_SRC = "/assets/video/Website Hero Banner.mp4";

const MotionImage = ({ pageData, waiverLink }) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  if (!pageData) return null;

  const item = Array.isArray(pageData) && pageData.length > 0 ? pageData[0] : pageData;
  if (!item) return null;

  const hasVideo = Boolean(item.video);

  const handleToggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);

    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
    }
  };

  return (
    <section className="aero_home-headerimg-wrapper">
      {hasVideo ? (
        <section className="aero_home_video-container">
          <video ref={videoRef} autoPlay muted={isMuted} loop playsInline width="100%">
            <source src={HERO_VIDEO_SRC} type="video/mp4" />
          </video>
          <button
            type="button"
            className="aero_home_video-toggle"
            onClick={handleToggleMute}
            aria-pressed={!isMuted}
            aria-label={isMuted ? "Unmute hero video" : "Mute hero video"}
          >
            {isMuted ? "Unmute" : "Mute"}
          </button>

          {/* <article className="image-content">

            <SectionHeading mainHeading="true" className="section-heading-orange">
              Pixel Pulse <br /> <span> Play n Party</span>
            </SectionHeading>

            <p
              dangerouslySetInnerHTML={{ __html: item.smalltext || "" }}
            />

            {waiverLink && (
              <div className="aero-btn-booknow">
                <Link href={waiverLink} target="_blank">
                  <motion.button
                    animate={{
                      scale: [1, 1.2, 1.5, 1.2, 1],
                      borderRadius: ["12px", "30px", "60px", "30px", "12px"],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    WAIVER
                  </motion.button>
                </Link>
              </div>
            )}
          </article> */}
        </section>
      ) : (
        <motion.div
          // className="image-container"
          // initial={{ scale: 1 }}
          // animate={{ scale: 1.1 }}
          // transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          // style={{height:"70dvh" }}
        >
          {/* <Image
            src={
              item.headerimage ||
              "https://storage.googleapis.com/aerosports/aerosports-trampoline-park-redefine-fun.svg"
            }
            alt={item.imagetitle || "pixelpulseplay fun for everyone"}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            priority
          /> */}

          {/* <motion.article
            className="image-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          >
            <SectionHeading mainHeading="true" className="section-heading-orange">
              Pixel Pulse <br /> <span> Play n Party</span>
            </SectionHeading>
            <p
                dangerouslySetInnerHTML={{ __html: item.smalltext || "" }}
              />

            {waiverLink && (
              <div className="aero-btn-booknow">
                <Link href={waiverLink} target="_blank">
                  <motion.button
                    animate={{
                      scale: [1, 1.2, 1.5, 1.2, 1],
                      borderRadius: ["12px", "30px", "60px", "30px", "12px"],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    WAIVER
                  </motion.button>
                </Link>
              </div>
            )}
          </motion.article> */}
        </motion.div>
      )}
    </section>
  );
};

export default MotionImage;
