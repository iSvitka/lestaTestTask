import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Image from 'next/image'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LTT',
  description: 'Warships list page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body
        className={inter.className +
          ' flex flex-col w-full min-h-screen item-center justify-between gap-4' +
          ' bg-gradient-to-r from-cyan-800 to-teal-700 min-h-screen'}>
        <header className='flex items-center justify-center min-h-[10vh] bg-sky-950 text-2xl font-semibold'>
          LESTA Test Task
        </header>
        {children}
        <footer className='flex items-center justify-center gap-5 flex-wrap min-h-[10vh] bg-sky-950 text-lg font-semibold'>
          <a
            className='transition-all flex items-center justify-center gap-1 hover:text-slate-400'
            href="https://github.com/iSvitka"
            target='_blank'
          >
            <Image src="/github-icon.svg" alt="github-icon" width={20} height={20}/>
            iSvitka
          </a>
          <a
            className='transition-all flex items-center justify-center gap-1 hover:text-slate-400'
            href="https://t.me/iSvitka"
            target='_blank'
          >
            <Image src="/telegram-icon.svg" alt="github-icon" width={20} height={20}/>
            @iSvitka
          </a>
          <a
            className='transition-all flex items-center justify-center gap-1 hover:text-slate-400'
            href="https://mailto:svitla.ilya@gmail.com"
            target='_blank'
          >
            <Image src="/gmail-icon.svg" alt="github-icon" width={20} height={20}/>
            svitka.ilya@gmail.com
          </a>
        </footer>
      </body>
    </html>
  )
}
