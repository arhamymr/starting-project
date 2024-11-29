import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ProgressBar from '@badrap/bar-of-progress';
import modifyComponent from 'styles/component';
import { NavbarContextProvider } from 'layouts/context';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#FDE4EB',
      200: '#FBC9D7',
      300: '#F8AEBF',
      400: '#F693A7',
      500: '#F06788', // base color
      600: '#D85E7A',
      700: '#B05466',
      800: '#884A52',
      900: '#60303E',
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
  color: '#4045D5',
  className: 'bar-of-progress',
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => progress.start());
    router.events.on('routeChangeComplete', () => progress.finish());
  }, [router.events]);

  return (
    <ChakraProvider theme={theme}>
      <NavbarContextProvider>
        <Head>
          <title>MyHealthDiet</title>
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
