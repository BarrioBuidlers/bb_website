import Link from "next/link";

export default function LinkToSocial(props) {
  return (
    <Link href={props.href} target="_blank">
      <div className="flex flex-wrap rounded-xl px-4 py-2">
        {props.small ? (
          <div className="relative w-fit h-fit flex gap-5">
            <div className="relative w-8 h-inherit flex items-center justify-center">
              {props.children}
            </div>
          </div>
        ) : (
          <div className="relative w-fit h-fit flex gap-5 border-2 border-solid border-white">
            <h1 className="flex items-center justift-center">{props.title}</h1>
            <div className="relative w-12 h-inherit flex items-center justify-center">
              {props.children}
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
