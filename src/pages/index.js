import FirstSection from "@/components/homepage/FirstSection";
import SecondSection from "@/components/homepage/SecondSection";
import Head from "next/head";

export default function Home() {
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
      <main className="relative left-0 w-screen">
        <FirstSection />
        <SecondSection />
        <div className="h-screen flex items-center justify-center text-8xl bg-[#343a40]">
          <h1>OPEN SEA</h1>
        </div>
        <div className="h-screen flex items-center justify-center text-8xl bg-[#495057]">
          <h1>DONATIONS & STUFF</h1>
        </div>
      </main>
    </>
  );
}
/*
<div className="h-screen flex items-center justify-center text-8xl bg-[#212529]">
  <h1>CONTENT</h1>
</div>
*/
