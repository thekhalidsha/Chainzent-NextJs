import Head from "next/head";
import { useState, useEffect } from 'react';
import Navbar from "../Navbar";
import { Inter } from 'next/font/google'
import HeroSection from "../HeroSection";
import PageLoader from "../PageLoader";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import Footer from "../Footer";

const inter = Inter({ subsets: ['latin'] })

const Render = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    // Simulating page loading delay
    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        AOS.init(); // Initialize AOS
        AOS.refresh(); // Refresh AOS on content changes
      }, []);

    return (
        <main className={`min-h-screen`}>
            {isLoading ? (<PageLoader />) : (
            <div>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
            </div>
            )}
        </main>
     );
}
 
export default Render;