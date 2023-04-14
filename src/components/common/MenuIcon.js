import { gsap } from "gsap";
import { useEffect } from "react";

export default function MenuIcon({ open }) {
  useEffect(() => {
    const common = {
      ease: "ease-in",
      duration: 0.25,
    };
    if (open) {
      gsap.to(document.querySelector(".menu-f"), {
        transform: "rotate(45deg)",
        ...common,
      });
      gsap.to(document.querySelector(".menu-s"), {
        transform: "rotate(-45deg)",
        y: "-16px",
        ...common,
      });
    } else {
      gsap.to(document.querySelector(".menu-f"), {
        transform: "rotate(0deg)",
        ...common,
      });
      gsap.to(document.querySelector(".menu-s"), {
        transform: "rotate(0deg)",
        y: "0px",
        ...common,
      });
    }
  }, [open]);
  return (
    <div className="flex flex-col gap-2 justify-center items-center mt-8 ml-8">
      <div className={"menu-f w-16 bg-white h-2 rounded-full"}></div>
      <div className={"menu-s w-16 bg-white h-2 rounded-full"}></div>
      <div className={"menu-t w-16 bg-white h-2 rounded-full"}></div>
    </div>
  );
}
