import Link from 'next/link';
import React, { useContext, useEffect } from 'react';

import AppContext from '@/util/AppContext';

const Slug = () => {
  const { slug, setSlug } = useContext(AppContext);
  useEffect(() => {
    // Further parsing:
    if (typeof window !== undefined) {
      const params = new URLSearchParams(window.location.search);
      const search = params.get('url');
      setSlug(search);
      // console.log(search)
    }
  }, [slug, setSlug]);
  // console.log(slug);
  return (
    <div className=' flex h-screen w-full items-center'>
      <div className='mx-auto'>
        <div>Login Page</div>
        <Link href={slug}>
          <a>Login</a>
        </Link>
      </div>
    </div>
  );
};

export default Slug;
