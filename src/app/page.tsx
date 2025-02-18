import { RxArrowRight } from 'react-icons/rx';
import Link from 'next/link';
import styles from '@/ui/home.module.css';
import { GeistSans } from 'geist/font/sans';
import Image from 'next/image';
import { IoCashOutline } from 'react-icons/io5';
import { lexend } from '@/ui/fonts';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col p-6'>
      <div className='bg-white-500 flex h-20 shrink-0 items-end rounded-lg p-4 md:h-52'>
        <p
          className={`${lexend.className} text-xl text-gray-700 md:text-3xl md:leading-normal`}
        >
          Cashboard
        </p>
      </div>
      <div className='mt-4 flex grow flex-col gap-4 md:flex-row'>
        <div className='flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20'>
          <IoCashOutline size={36} />
          <p
            className={`${GeistSans.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong className={styles.red}>Welcome to Cashboard.</strong> This
            is a personal finance application for those who like to micromanage
            their budget.
          </p>
          <Link
            href='/login'
            className='bg-indigo-500 flex items-center gap-5 self-start rounded-lg px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-400 md:text-base'
          >
            <span>Log in</span> <RxArrowRight className='w-5 md:w-6' />
          </Link>
        </div>
        <div className='flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12'>
          {/* TODO: replace with actual screenshots when UI is built */}
          <Image
            src='/placeholder-hero-desktop.png'
            width={1000}
            height={760}
            className='hidden md:block'
            alt='Screenshots of the dashboard project showing desktop version'
          />
          <Image
            src='/placeholder-hero-mobile.png'
            width={560}
            height={620}
            className='block md:hidden'
            alt='Screenshots of the dashboard project showing mobile version'
          />
        </div>
      </div>
    </main>
  );
}
