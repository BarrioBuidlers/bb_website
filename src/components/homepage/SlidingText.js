import { sha1 } from "@/commonFunctions/frontendCommon";
import { useCallback, useEffect, useRef, useState } from "react";

export default function SlidingText(props) {
  const hash = useRef(sha1(props.children));
  const [visible, setVisible] = useState(false);
  const handleScroll = useCallback(() => {
    const distance = document
      .getElementById(hash.current)
      .getBoundingClientRect().top;
    const height = window.screen.height;
    if (distance + distance * 0.1 < height) {
      !visible && setVisible(true);
    } else {
      visible && setVisible(false);
    }
  }, [visible]);
  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);
  return (
    <div
      className={`relative ${
        !visible
          ? props.from === "left"
            ? "-translate-x-full opacity-0"
            : "translate-x-full opacity-0"
          : "opacity-1"
      } transform-gpu transition duration-1000 ease-in-out`}
      id={`${hash.current}`}
    >
      <h1>{props.children}</h1>
    </div>
  );
}
