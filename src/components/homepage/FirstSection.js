import { useCallback, useEffect, useRef, useState } from "react";
import LinkToDev from "../common/LinkToSocial";
import Image from "next/image";
import DiscordLogo from "../../../public/logos/DiscordLogo";
import LinkedInLogo from "../../../public/logos/LinkedInLogo";
import InstagramLogo from "../../../public/logos/InstagramLogo";
import TwitterLogo from "../../../public/logos/TwitterLogo";
import OpenSeaLogo from "../../../public/logos/OpenSeaLogo";

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
    <div className="firstSection relative text-9xl bg-black overflow-hidden">
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
      <div
        className={`relative z-8 bg-[rgba(0,0,0,0.8)] h-screen flex flex-col gap-10 items-center justify-center inset-y-0 transform ${
          fullVideo && "translate-y-full"
        } transition-transform duration-${DELAY} ease-in-ou text-center`}
      >
        <h1>BARRIO BUIDLERS</h1>
        <div className="text-4xl gap-2 flex flex-wrap items-center justify-center">
          <LinkToDev href="" title="OPEN SEA">
            <OpenSeaLogo color="white" />
          </LinkToDev>
          <LinkToDev href="" title="DISCORD">
            <DiscordLogo color="white" />
          </LinkToDev>
          <LinkToDev href="" title="TWITTER">
            <TwitterLogo color="white" />
          </LinkToDev>
          <LinkToDev href="" title="LINKEDIN">
            <LinkedInLogo color="white" />
          </LinkToDev>
          <LinkToDev
            href="https://www.instagram.com/barrio.buidlers/"
            title="INSTAGRAM"
          >
            <InstagramLogo color="white" />
          </LinkToDev>
        </div>
      </div>
    </div>
  );
}
