import AnimationPing from "../common/AnimationPing";

export default function SecondSection() {
  return (
    <div className="grid gap-5 text-4xl min-h-screen my-[10vh]">
      <div className="flex items-center justify-center h-full">
        <div>
          <AnimationPing width={12} height={12} />
          <h1 className="mt-8 mx-[10vw] text-center">
            BARRIO BUIDLERS is a non-profit organization created to contribute
            to the{" "}
            <span className="underlined">
              development of disadvantaged areas
            </span>{" "}
            and simultaneously <span className="underline">help artists</span>{" "}
            to be fairly paid and recognized, associating their artwork with
            <span className="underline">NFTs</span> and{" "}
            <span className="underline">SFTs</span>.
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center h-full">
        <div>
          <AnimationPing width={12} height={12} />
          <h1 className="mt-8 mx-[10vw] text-center">
            The decay of poor areas all around the world is demoralizing for
            those who visit it and especially for those who live there. Spending
            your own life surrounded by HOMELY BUILDINGS and left to your own
            devices by the local authorities and fellow citizens, it does not
            inspire the sense of belonging to a community and it does not give
            the will to play your part to maintain clean the neighborhood.
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center h-full">
        <div>
          <AnimationPing width={12} height={12} />
          <h1 className="mt-8 mx-[10vw] text-center">
            To reverse this trend we decided to give life to BARRIO BUIDLERS. By
            the sale of the NFTs associated with the property of PHYSICAL or
            DIGITAL ART created by our community artists, it{"'"}s possible to
            support functional and aesthetic REDEVELOPMENTS of disadvantaged
            areas, ORGANICALLY and NATURALLY keeping front & center people’s
            needs and district{"'"}s history and traditions.
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center h-full">
        <div>
          <AnimationPing width={12} height={12} />
          <h1 className="mt-8 mx-[10vw] text-center">
            Thanks to blockchain technology, transparency, traceability and
            safety are guaranteed, features that distinguishes the project for
            innovation and integrity.
          </h1>
        </div>
      </div>
    </div>
  );
}
