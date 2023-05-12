import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ProgressBar from "@badrap/bar-of-progress";
import modifyComponent from "styles/component";

const theme = extendTheme({
  components: {
    ...modifyComponent,
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
});

const progress = new ProgressBar({
  size: 1.5,
  color: "#DE1B1B",
  className: "bar-of-progress",
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => progress.start());
    router.events.on("routeChangeComplete", () => progress.finish());
  }, [router.events]);

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Project 1</title>
        <meta
          name="description"
          content="Javascript Developer, i build things for the web"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
