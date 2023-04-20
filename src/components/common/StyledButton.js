import Link from "next/link";

export default function StyledButton(props) {
  return (
    <div className="group flex flex-col justify-center items-center">
      <button onClick={props.onClick} className="w-max" href={props.href}>
        <h1>{props.label}</h1>
      </button>
      <div className="group-hover:w-full w-0 h-1 bg-white transition-w duration-200 ease-in rounded-full" />
    </div>
  );
}
