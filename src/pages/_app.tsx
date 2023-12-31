import "@/styles/reset.css";
import "@/styles/globals.scss";
import "telechart/telechart.min.css";
import type { AppProps } from "next/app";
import { GoogleTagManager } from "@next/third-parties/google";

import Layout from "@/components/Layout";

export default function App({ Component, pageProps, router }: AppProps) {
  if ([`/cv`].includes(router.pathname)) {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
      <GoogleTagManager gtmId="GTM-MBCBK554" />
    </Layout>
  );
}
