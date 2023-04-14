import { useEffect, useState } from "react";
import StyledLink from "./StyledLink";
import MenuIcon from "./MenuIcon";
import { gsap } from "gsap";

export default function Menu() {
  const [open, setOpen] = useState(false);
  const common = {
    duration: 0.25,
    ease: "linear",
  };
  function handleOpen() {
    gsap.to(document.querySelector(".menu"), {
      width: "auto",
      padding: "auto",
      ...common,
    });
    gsap.to(document.querySelector(".menu-content"), {
      opacity: 1,
      duration: 0.25,
      ease: "ease-out",
    });
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleClose() {
    gsap.to(document.querySelector(".menu"), {
      width: 0,
      padding: 0,
      ...common,
    });
    gsap.to(document.querySelector(".menu-content"), {
      opacity: 0,
      duration: 0.25,
      ease: "ease-in",
    });
  }
  function action() {
    if (!open) {
      handleOpen();
    } else {
      handleClose();
    }
    setOpen(!open);
  }
  useEffect(() => {
    handleClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="z-10 menu text-3xl sticky top-0 left-0 height-screen h-screen border-2 borderder-solid border-white w-max">
      <button onClick={action} className="z-10 absolute top-0 left-0">
        <MenuIcon open={open} />
      </button>
      <div className="menu-content flex flex-col gap-5 justify-center items-center h-screen px-4 w-max">
        <StyledLink href={"/"}>Home</StyledLink>
        <StyledLink href={"/currentProjects"}>Current Projects!</StyledLink>
        <StyledLink href={"/teamSection"}>Our Team!</StyledLink>
      </div>
    </div>
  );
}
