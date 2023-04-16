import { sha1 } from "@/commonFunctions/frontendCommon";
import { useCallback, useEffect, useRef, useState } from "react";

export default function SlidingText(props) {
  const ANIM_DURATION = 1000;
  const hash = useRef(sha1(props.children));
  const timeout = useRef(null);
  const [visible, setVisible] = useState(false);
  const [delay, setDelay] = useState(0);
  const handleScroll = useCallback(() => {
    const distance = document
      .getElementById(hash.current)
      .getBoundingClientRect().top;
    const height = window.screen.height;
    if (distance + distance * 0.1 < height) {
      if (visible) {
        return;
      }
      !visible && setVisible(true);
      timeout.current = setTimeout(() => {
        props.updateCompleted({ pos: props.pos, val: 1 });
      }, ANIM_DURATION + delay);
    } else {
      if (!visible) {
        return;
      }
      visible && setVisible(false);
      timeout.current && window.clearTimeout(timeout.current);
      props.updateCompleted({ pos: props.pos, val: 0 });
    }
  }, [delay, props, visible]);
  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);
  useEffect(() => {
    if (visible) {
      return;
    }
    let delay = 0;
    for (let i = 0; i < props.pos && delay < 10; i++) {
      if (!props.completed[i]) {
        delay++;
      }
    }
    setDelay(delay * 100);
  }, [props.completed, props.pos, visible]);
  return (
    <div
      className={`relative ${
        !visible
          ? props.from === "left"
            ? "-translate-x-full opacity-0"
            : "translate-x-full opacity-0"
          : "translate-x-0 opacity-1"
      } transform-gpu transition ${"duration-" + ANIM_DURATION} ${
        "delay-" + delay
      } ease-in-out`}
      id={`${hash.current}`}
    >
      <h1>{props.children}</h1>
    </div>
  );
}
