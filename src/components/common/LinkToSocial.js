import Link from "next/link";

export default function LinkToDev(props) {
  return (
    <Link href={props.href} target="_blank">
      <div className="hover:opacity-100 flex flex-wrap border-2 border-solid border-white rounded-xl opacity-80 px-4 py-2">
        <div className="relative w-fit h-fit flex gap-5">
          <h1 className="flex items-center justift-center">{props.title}</h1>
          <div className="relative w-12 h-inherit flex items-center justify-center">
            {props.children}
          </div>
        </div>
      </div>
    </Link>
  );
}
