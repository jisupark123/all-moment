import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';

interface LayoutProps {
  title?: string;
  hasNav?: boolean;
  children: React.ReactNode;
}

export default function Layout({ title, hasNav, children }: LayoutProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title || "Jisu's Log"} </title>
      </Head>
      <div className='w-screen h-screen'>{children}</div>
    </>
  );
}
