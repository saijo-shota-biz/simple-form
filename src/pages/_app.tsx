import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme/theme';
import { RecoilRoot } from 'recoil';
import '../config/firebase';
import { InitFirebaseAuth } from '../components/functional/InitFirebaseAuth';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <InitFirebaseAuth />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
