import Layout from "@/components/layout";
import { CONSTANTS } from "@/constants";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>{CONSTANTS.APP_NAME}</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
