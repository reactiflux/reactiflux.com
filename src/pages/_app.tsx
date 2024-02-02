import { GoogleAnalytics } from "@next/third-parties/google";
import "@styles/globals.css";
import type { AppProps } from "next/app";

import "minireset.css";
import "typeface-poppins";
import "typeface-work-sans";
import "typeface-space-mono";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics gaId="G-HYLJ4BYC6Z" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
