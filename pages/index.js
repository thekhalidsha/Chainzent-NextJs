import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroSection from '@/components/HeroSection'
import Footer from '@/components/Footer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chainzent | Home</title>
      </Head>
      <HeroSection></HeroSection>
      <Footer></Footer>
    </div>
  )
}
