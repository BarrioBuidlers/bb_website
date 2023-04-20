import { useCallback, useEffect, useState } from "react";

export default function VerticalText({ id, text, position, direction }) {
  const [offset, setOffset] = useState(0);
  const handleScroll = useCallback(() => {
    const parent = document.querySelector(".verticalTextHolder");
    const parentFromTop = parent.getBoundingClientRect().top;
    const parentHeight = parent.clientHeight;
    const winHeight = window.screen.height;
    // Percentage calculated by half of the screen
    /*
        __________
        |        |
        |        |
        | - - - -| => This is the percentage related to the div scroll
        |        |    (offset of winHeight / 2 from the normal scroll)
        |        |
        __________
    */
    if (parentFromTop - winHeight / 2 < 0) {
      if (parentFromTop - winHeight / 2 > parentHeight * -1) {
        const percentage =
          1 - (parentFromTop + parentHeight - winHeight / 2) / parentHeight;
        const coeff = direction === "follow" ? 1 : -1;
        const elWidth = document.querySelector(
          `.verticalText-${id}`
        ).clientHeight;
        const offset = percentage * parentHeight * coeff;
        setOffset(
          Math.abs(offset) + elWidth > parentHeight
            ? (parentHeight - elWidth) * coeff
            : offset
        );
      }
    } else {
      setOffset(0);
    }
  }, [direction, id]);
  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);
  return (
    <div
      className={`verticalText-${id} absolute ${
        position === "left" ? "left-0" : "right-0"
      } ${
        direction === "follow" ? "top-0" : "bottom-0"
      } opacity-80 transform-gpu transition duration-700 ease-linear`}
      style={{
        writingMode: "vertical-rl",
        transform: `translate3d(0,${offset}px,0)`,
      }}
    >
      <h1>{text}</h1>
    </div>
  );
}
