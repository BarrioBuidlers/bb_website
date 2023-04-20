import FirstSection from "@/components/homepage/FirstSection";
import SecondSection from "@/components/homepage/SecondSection";

export default function Home() {
  return (
    <>
      <FirstSection />
      <SecondSection />
      <div className="h-screen flex items-center justify-center text-8xl bg-[#343a40]">
        <h1>OPEN SEA</h1>
      </div>
      <div className="h-screen flex items-center justify-center text-8xl bg-[#495057]">
        <h1>DONATIONS & STUFF</h1>
      </div>
    </>
  );
}
/*
<div className="h-screen flex items-center justify-center text-8xl bg-[#212529]">
  <h1>CONTENT</h1>
</div>
*/
