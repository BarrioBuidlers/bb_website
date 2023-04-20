import DiscordLogo from "../../../public/logos/DiscordLogo";
import InstagramLogo from "../../../public/logos/InstagramLogo";
import LinkedInLogo from "../../../public/logos/LinkedInLogo";
import OpenSeaLogo from "../../../public/logos/OpenSeaLogo";
import TwitterLogo from "../../../public/logos/TwitterLogo";
import LinkToSocial from "./LinkToSocial";
import StyledLink from "./StyledLink";

export default function Menu(props) {
  return (
    <div
      className={`bg-black text-3xl border-2 borderder-solid border-white flex flex-col gap-5 justify-center items-center h-screen px-10 w-fit ${
        !props.open && "-translate-x-full"
      } transform-gpu transition-transform duration-500 ease-in`}
    >
      <StyledLink href={"/"}>Home</StyledLink>
      <StyledLink href={"/projects"}>Projects!</StyledLink>
      <StyledLink href={"/teamSection"}>Our Team!</StyledLink>
      <div className="absolute bottom-0 flex flex-wrap justify-center m-2">
        <LinkToSocial
          small
          href="https://opensea.io/BarrioBuidlers"
          title="OPEN SEA"
        >
          <OpenSeaLogo color="white" />
        </LinkToSocial>
        <LinkToSocial
          small
          href="https://discord.com/invite/TKzcuVDGMm"
          title="DISCORD"
        >
          <DiscordLogo color="white" />
        </LinkToSocial>
        <LinkToSocial
          small
          href="https://twitter.com/BBuidlers"
          title="TWITTER"
        >
          <TwitterLogo color="white" />
        </LinkToSocial>
        <LinkToSocial
          small
          href="https://www.instagram.com/barrio.buidlers/"
          title="INSTAGRAM"
          hover="black"
        >
          <InstagramLogo color="white" hover="red" />
        </LinkToSocial>
      </div>
    </div>
  );
}
