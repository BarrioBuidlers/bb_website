import { useCallback, useEffect, useRef, useState } from "react";

export default function FirstSection() {
  const DELAY = 500;
  const lastTimer = useRef(null);
  let blockedWheel = useRef(true);
  const [fullVideo, setFullVideo] = useState(true);
  const [adaptHeight, setAdaptHeight] = useState(false);
  const handleWheel = useCallback(
    (e) => {
      const fromTop = document
        .querySelector(".firstSection")
        .getBoundingClientRect().top;
      const delta = e.deltaY;
      if (blockedWheel.current) {
        e.preventDefault();
      }
      if (fullVideo) {
        if (delta > 0) {
          setFullVideo(false);
          lastTimer.current = setTimeout(
            () => (blockedWheel.current = false),
            DELAY
          );
        }
      } else {
        if (fromTop === 0 && delta < 0) {
          setFullVideo(true);
          blockedWheel.current = true;
          if (lastTimer.current) {
            clearTimeout(lastTimer.current);
          }
        }
      }
    },
    [fullVideo]
  );
  function handleResize() {
    if (
      window.innerWidth >
      document.querySelector(".firstSectionVideo").clientWidth
    ) {
      setAdaptHeight(false);
    } else if (
      window.innerHeight >
      document.querySelector(".firstSectionVideo").clientHeight
    ) {
      setAdaptHeight(true);
    }
  }
  useEffect(() => {
    handleResize();
    blockedWheel.current = window.scrollY === 0;
    setFullVideo(window.scrollY === 0);
  }, []);
  useEffect(() => {
    document.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleWheel]);
  return (
    <div className="firstSection relative text-8xl bg-black overflow-hidden">
      <div className="absolute top-0 left-0 flex items-center justify-center h-screen w-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className={`firstSectionVideo relative ${
            adaptHeight ? "h-full" : "w-full"
          } max-w-none`}
        >
          <source src="/videos/bb_drone01.mp4" type="video/mp4" />
        </video>
      </div>
      <h1
        className={`relative z-8 bg-[rgba(0,0,0,0.8)] h-screen flex items-center justify-center inset-y-0 transform ${
          fullVideo && "translate-y-full"
        } transition-transform duration-${DELAY} ease-in-ou text-center`}
      >
        BARRIO BUIDLERS
      </h1>
    </div>
  );
}
