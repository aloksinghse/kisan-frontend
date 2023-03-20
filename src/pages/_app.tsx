import Layout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      {/* <GoogleTranslate /> */}
    </Layout>
  );
}

// var window: any;
// function GoogleTranslate() {
//   useEffect(() => {
//     const script = document.createElement("script");

//     if (window) {
//       function googleTranslateElementInit() {
//         new window.google.translate.TranslateElement(
//           { pageLanguage: "en" },
//           "google_translate_element"
//         );
//       }

//       script.src =
//         "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//       script.async = true;
//       document.body.appendChild(script);
//     }

//     return () => {
//       // check if the script is still there
//       if (script.parentNode)
//       document.body.removeChild(script);
//     };
//   }, []);

//   return <div id="google_translate_element" />;
// }
