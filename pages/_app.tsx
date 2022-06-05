import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import Head from "next/head";
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ProgressBar from "@badrap/bar-of-progress";
import MouseDot from 'atoms/mousedot';

//firebase
import { initializeApp } from "firebase/app";
import { firebaseConfig } from 'configs/firebase';

import 'styles/global.css';

const theme = extendTheme({
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
})

const progress = new ProgressBar({
  size: 1.5,
  color: "#DE1B1B",
  className: "bar-of-progress",
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  initializeApp(firebaseConfig);

  useEffect(() => {
    router.events.on('routeChangeStart', () => progress.start());
    router.events.on("routeChangeComplete", () => progress.finish());
  }, [router.events]);

  return <ChakraProvider theme={theme}>
    <Head>
      <title>Arhamymr</title>
      <meta name="description" content="Javascript Developer, i build things for the web" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <MouseDot />
    <Component {...pageProps} />
  </ChakraProvider>
}

export default MyApp
