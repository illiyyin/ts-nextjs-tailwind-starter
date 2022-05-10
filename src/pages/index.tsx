import Link from 'next/link';
import * as React from 'react';

import Layout from '@/components/layout/Layout';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      <main>
        <section className='mx-auto flex h-screen w-full items-center bg-white'>
          <div className='mx-auto'>
            <p>Explore your self</p>
            <Link href='/components'>
              <a>Conponents</a>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
