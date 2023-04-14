import Menu from "@/components/common/Menu";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-black text-white flex">
      <Menu />
      <Component {...pageProps} />
    </div>
  );
}
