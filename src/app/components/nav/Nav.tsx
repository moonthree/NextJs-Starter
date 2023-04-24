'use client';
import Link from 'next/link';
import {
  usePathname,
  useRouter,
  useSearchParams,
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
  redirect,
  notFound,
  useParams,
} from 'next/navigation';
import React from 'react';

const Links = [
  { link: '/', text: 'home' },
  { link: '/intro', text: 'intro' },
  { link: '/about', text: 'about' },
  { link: '/contact', text: 'contact' },
  { link: '/products', text: 'products' },
  { link: '/products/pants', text: 'producnts/pants' },
  { link: '/mypage', text: 'mypage' },
  { link: '/myinfo', text: 'myinfo' },
  { link: '/mob', text: 'mobile' },
];

const None = ['intro', 'products'];

const Nav = () => {
  const router = useRouter();
  const sp = useSearchParams();
  const usls = useSelectedLayoutSegment();
  const uslss = useSelectedLayoutSegments();
  const pathname = usePathname();
  const params = useParams();
  console.log('pathname: ', pathname);
  console.log('searchParams : ', sp);
  console.log('useSelectedLayoutSegment : ', usls);
  console.log('useSelectedLayoutSegments : ', uslss);
  console.log('router : ', params);
  // if (pathname.includes('inner'))
  //   return (
  //     <div>
  //       <Link href="./">qwd</Link>
  //     </div>
  //   );
  // for (let i = 0; i < None.length; i++) {
  //   if (pathname.includes(None[i])) return <div>qwdwqd</div>;
  // }
  // if (router.includes('mypage')) return <div>wqd3333</div>;
  return (
    <header className="bg-white text-black text-xl font-bold p-3 border-b-2">
      <p>Hi I am in src/app/layout.tsx</p>
      <p>In layout.tsx you can add query, contextApi, navbar, footer... etc</p>
      <nav className="p-3 bg-red-100 rounded space-x-5">
        {Links.map((link) => (
          <Link
            key={link.link}
            href={link.link}
            className="p-3 bg-red-300 rounded-full"
          >
            {link.text}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Nav;
