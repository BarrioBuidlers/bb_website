export default function MenuIcon({ open }) {
  return (
    <div
      className={`absolute top-0 left-0 flex flex-col gap-2 justify-center ${
        open ? "mt-12" : "mt-8"
      } ml-8 transition-m duration-500 ease-in`}
    >
      <div
        className={`relative w-16 bg-white h-3 rounded-full border-2 border-solid border-black ${
          open && "rotate-45"
        } transform-gpu transition-rotate duration-500 ease-in`}
      ></div>
      <div
        className={`relative w-16 bg-white h-3 rounded-full border-2 border-solid border-black ${
          open ? "-rotate-45 -top-4" : "top-0"
        } transform-gpu transition-rotate duration-500 ease-in`}
      ></div>
      <div
        className={
          "relative w-16 bg-white h-3 rounded-full border-2 border-solid border-black"
        }
      ></div>
    </div>
  );
}
