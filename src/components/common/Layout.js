import Head from "next/head";
import MenuIcon from "./MenuIcon";
import Menu from "./Menu";
import { useState } from "react";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Barrio Buidlers</title>
        <meta
          name="description"
          content="Social & Environmental projects moving back and forth from #ETH blockchain to planet Earth, with #art!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative top-0 left-0 bg-black text-white flex w-full h-full overflow-y-auto">
        <div className="sticky h-screen min-h-screen z-10 top-0 left-0 flex">
          <button onClick={() => setOpen(!open)} className="z-20">
            <MenuIcon open={open} />
          </button>
          <Menu open={open} />
        </div>
        <main className="absolute top-0 mx-auto bg-black">{children}</main>
      </div>
    </>
  );
}
