import StyledLink from "./StyledLink";

export default function Menu(props) {
  return (
    <div
      className={`bg-black text-3xl border-2 borderder-solid border-white flex flex-col gap-5 justify-center items-center h-screen px-4 w-fit ${
        !props.open && "-translate-x-full"
      } transform-gpu transition-transform duration-500 ease-in`}
    >
      <StyledLink href={"/"}>
        Home
      </StyledLink>
      <StyledLink href={"/currentProjects"}>Current Projects!</StyledLink>
      <StyledLink href={"/teamSection"}>Our Team!</StyledLink>
    </div>
  );
}
