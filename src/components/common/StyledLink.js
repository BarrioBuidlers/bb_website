import Link from "next/link";

export default function StyledLink(props) {
  return (
    <Link className="hover:underline text-center" href={props.href}>
      {props.children}
    </Link>
  );
}
