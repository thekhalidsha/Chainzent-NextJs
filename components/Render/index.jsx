import Head from "next/head";
import { useState, useEffect } from 'react';
import Navbar from "../Navbar";
import { Inter } from 'next/font/google'
import HeroSection from "../HeroSection";

const inter = Inter({ subsets: ['latin'] })

const Render = ({ children }) => {
    return (
        <main className={`min-h-screen`}>
            <Navbar></Navbar>
            {/* <HeroSection></HeroSection> */}
            {children}
        </main>
     );
}
 
export default Render;