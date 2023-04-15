import AnimationPing from "../common/AnimationPing";
import SlidingText from "./SlidingText";

export default function SecondSection() {
  return (
    <div className="grid gap-5 text-4xl min-h-screen my-[10vh] overflow-hidden">
      <div className="flex flex-col gap-10 items-center justify-center h-full my-8 mx-[10vw] text-center">
        <SlidingText from="left">
          BARRIO BUIDLERS is a non-profit organization created to contribute to
          the{" "}
          <span className="underlined">development of disadvantaged areas</span>{" "}
          and simultaneously <span className="underline">help artists</span> to
          be fairly paid and recognized, associating their artwork with{" "}
          <span className="underline">NFTs</span> and{" "}
          <span className="underline">SFTs</span>.
        </SlidingText>
        <SlidingText>
          The decay of poor areas all around the world is demoralizing for those
          who visit it and especially for those who live there. Spending your
          own life surrounded by HOMELY BUILDINGS and left to your own devices
          by the local authorities and fellow citizens, it does not inspire the
          sense of belonging to a community and it does not give the will to
          play your part to maintain clean the neighborhood.
        </SlidingText>
        <SlidingText from="left">
          To reverse this trend we decided to give life to BARRIO BUIDLERS. By
          the sale of the NFTs associated with the property of PHYSICAL or
          DIGITAL ART created by our community artists, it{"'"}s possible to
          support functional and aesthetic REDEVELOPMENTS of disadvantaged
          areas, ORGANICALLY and NATURALLY keeping front & center people’s needs
          and district{"'"}s history and traditions.
        </SlidingText>
        <SlidingText>
          Thanks to blockchain technology, transparency, traceability and safety
          are guaranteed, features that distinguishes the project for innovation
          and integrity.
        </SlidingText>
      </div>
    </div>
  );
}
