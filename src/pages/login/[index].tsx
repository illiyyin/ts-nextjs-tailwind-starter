import Link from 'next/link';
import React, { useContext } from 'react';

import AppContext from '@/util/AppContext';

interface IValue {
  slug: string;
  setSlug: (text: string) => void;
}
const Slug = () => {
  const { slug } = useContext(AppContext) as IValue;
  // console.log(slug)
  // useEffect(() => {
  //   // Further parsing:
  //   if (window) {

  //     // console.log(search)
  //   }
  // }, [setSlug]);
  // console.log(slug);

  return (
    <div className=' flex h-screen w-full items-center'>
      <div className='mx-auto'>
        <div>Login Page</div>
        <Link href={'/' + slug}>
          <a>Login</a>
        </Link>
      </div>
    </div>
  );
};

export default Slug;
