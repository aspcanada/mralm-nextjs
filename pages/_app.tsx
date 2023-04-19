import "@/styles/globals.css";

import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { NotificationsProvider } from '@mantine/notifications';
import { SWRConfig } from "swr";
import axios from "axios";

// axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <SWRConfig
        value={{
          // refreshInterval: 3000,
          fetcher: (url) => axios.get(url).then((res) => res.data),
        }}
      >
        <Head>
          <title>Page title</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>

        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: "light",
          }}
        >
          <NotificationsProvider position="top-right" autoClose={2000}>
            <ModalsProvider>
              <Component {...pageProps} />
            </ModalsProvider>
          </NotificationsProvider>
        </MantineProvider>
      </SWRConfig>
    </>
  );
}
