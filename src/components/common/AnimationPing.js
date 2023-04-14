import { useEffect, useState } from "react";

export default function AnimationPing(props) {
  const [size, setSize] = useState();
  useEffect(() => {
    setSize(`w-${props.width} h-${props.height}`);
  }, [props]);
  return (
    <span className="mx-[10vw] relative flex h-12 w-12">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-12 w-12 bg-sky-500"></span>
    </span>
  );
}
