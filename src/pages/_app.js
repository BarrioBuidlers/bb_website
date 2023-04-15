import Menu from "@/components/common/Menu";
import MenuIcon from "@/components/common/MenuIcon";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative top-0 left-0 bg-black text-white flex w-full h-full overflow-y-auto">
      <div className="sticky h-screen min-h-screen z-10 top-0 left-0 flex">
        <button onClick={() => setOpen(!open)} className="z-20">
          <MenuIcon open={open} />
        </button>
        <Menu open={open} />
      </div>
      <Component {...pageProps} />
    </div>
  );
}
