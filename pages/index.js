import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroSection from '@/components/HeroSection'
import Head from 'next/head'
import About from '@/components/AboutUs'
import LineBreak, { ClearFix } from '@/styles/globalStyles'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import Test from '@/components/test'
import Team from '@/components/Team'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chainzent | Home</title>
      </Head>
      <div id="home" ><HeroSection></HeroSection></div>
      <ClearFix />
      <div id="about" ><About></About></div>
      <ClearFix />
      <div id="portfolio" ><Portfolio></Portfolio></div>
      <div id='services' ><Services></Services></div>
      <LineBreak></LineBreak>
      <div id='team' ><Team></Team></div>
      {/* <Test></Test> */}
      {/* <ClearFix /> */}
    </div>
  )
}
