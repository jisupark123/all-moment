import Image from 'next/image';
import { Inter } from 'next/font/google';
import Layout from '@/components/layout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout>
      <div className='p-80 bg-main-page h-screen overflow-y-scroll'>
        <div className='b'>
          <h1>Jisu’s Log</h1>
        </div>
        <main></main>
      </div>
    </Layout>
  );
}
