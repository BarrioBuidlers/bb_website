import Layout from "@/components/common/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  // className="relative top-0 left-0 bg-black text-white flex w-full h-full overflow-y-auto"
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
