import Head from 'next/head';
import {
  MantineProvider,
  createEmotionCache,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core';
import Layout from '../components/ui/Layout';
import '../styles/globals.css';
import rtlPlugin from 'stylis-plugin-rtl';
import { useState } from 'react';

const rtlCache = createEmotionCache({
  key: 'mantine-rtl',
  stylisPlugins: [rtlPlugin],
});

export default function App(props) {
  const { Component, pageProps } = props;

  const [colorScheme, setColorScheme] = useState('light');
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          emotionCache={rtlCache}
          theme={{
            colorScheme,
            dir: 'rtl',
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
