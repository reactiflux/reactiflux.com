import "@styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export const GA_TRACKING_ID = "UA-68559005-1";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("config", "${GA_TRACKING_ID}");
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
