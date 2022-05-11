import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import Header from '@/components/layout/Header';

import { AppProvider } from '@/util/AppContext';

interface IValue {
  slug: null | string;
  setSlug: null | ((text: string) => void);
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [slug, setSlug] = useState<string>(router.asPath);
  // console.log(router)

  useEffect(() => {
    // console.log(router)

    if (Object.prototype.hasOwnProperty.call(router.query, 'redirect')) {
      const query = router.query.redirect as string;
      setSlug(query);
      // console.log(query)
    }
    // if (window) {
    // const {query}:string= router.query
    // query&&setSlug(query.redirect)

    // const params = new URLSearchParams(window.location.search);
    // const search = params.get('redirect');
    // console.log(search)
    // search&&setSlug(search);
    // query&&console.log(query.redirect)
    // query&&console.log(router.query.redirect)
    // }
    // !router.asPath.includes('login') && setSlug(router.asPath);
    // false && setSlug('');
  }, [router]);
  // console.log(slug)

  const value: IValue = {
    slug,
    setSlug,
  };
  return (
    <AppProvider value={value}>
      <Header />
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
