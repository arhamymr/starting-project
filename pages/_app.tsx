import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ProgressBar from "@badrap/bar-of-progress";
import modifyComponent from "styles/component";
import { NavbarContextProvider } from "layouts/context";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#F0F0FC",
      200: "#797bc8",
      300: "#5c5fb7",
      400: "#4245ae",
      500: "#4045D5",
      600: "#2428b6",
      700: "#2C4488",
      800: "#090fcf",
      900: "#0007d1",
    },
  },
  components: {
    ...modifyComponent,
  },
  fonts: {
    heading: "'Plus Jakarta Sans', sans-serif;",
    body: "'Plus Jakarta Sans', sans-serif;",
  },
});

const progress = new ProgressBar({
  size: 1.5,
  color: "#4045D5",
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
      <NavbarContextProvider>
        <Head>
          <title>Serpul.co.id</title>
          <meta
            name="description"
            content="Nikmati manfaat dan kemudahan dalam membuat aplikasi sesuka hati dengan beragam fitur, add-on dan template yang kami sediakan"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </NavbarContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
