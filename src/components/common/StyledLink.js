import Link from "next/link";

export default function StyledLink(props) {
  return (
    <div className="group flex flex-col justify-center items-center">
      <Link className="w-max" href={props.href}>
        {props.children}
      </Link>
      <div className="group-hover:w-full w-0 h-1 bg-white transition-w duration-200 ease-in rounded-full" />
    </div>
  );
}
