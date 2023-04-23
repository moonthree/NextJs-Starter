'use client';
import Link from 'next/link';
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
];

const Nav = () => {
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
