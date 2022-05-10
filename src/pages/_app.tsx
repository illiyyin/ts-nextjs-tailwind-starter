import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import Header from '@/components/layout/Header';

import { AppProvider } from '@/util/AppContext';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [slug, setSlug] = useState<string>(router.asPath);
  // console.log(router)

  useEffect(() => {
    !router.asPath.includes('login') && setSlug(router.asPath);
    false && setSlug('');
  }, [router.asPath]);
  return (
    <AppProvider value={{ slug, setSlug }}>
      <Header />
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
