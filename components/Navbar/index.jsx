// import React from "react";
import { ClearFix, NavLink } from "@/styles/globalStyles";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  // const [activeLink, setActiveLink] = useState("/");
  const [navbar, setNavbar] = useState(false);
  const [navBackground, setNavBackground] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'contact', 'portfolio', 'services', 'team'];

      const scrollPosition = window.scrollY;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);

        if (section) {
          if (scrollPosition >= section.offsetTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', changeBackground);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', changeBackground);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    <div>
      <nav className={`z-100 fixed w-full shadow ${navBackground ? 'prime-color' : 'basic-color'}`}>
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="#">
                {/* <h2 className="text-2xl text-white font-bold">NEXT JS</h2> */}
                <img className="nav_logo" src={`${navBackground ? 'cz_logo.png' : 'cz_logo_dark.png'}`} alt="Chainzent_logo"/>
              </a>
              <div className="md:hidden">
                <button
                  className={`p-2 rounded-md outline-none focus:border-gray-400 focus:border ${navBackground ? 'text-white' : 'text-gray-700'}`}
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className={`items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 ${navBackground ? 'text-white' : 'text-black'}`}>
                <li className={activeSection === 'home' ? 'underline' : ''}>
                  <NavLink href="/#home" >Home</NavLink>
                </li>
                <li className={activeSection === 'about' ? 'underline' : ''} >
                  <NavLink href="/#about" >About</NavLink>
                </li>
                <li className={activeSection === 'portfolio' ? 'underline' : ''}>
                  <NavLink href="/#portfolio" >Portfolio</NavLink>
                </li>
                <li className={activeSection === 'services' ? 'underline' : ''}>
                  <NavLink href="/#services" >Service</NavLink>
                </li>
                <li className={activeSection === 'contact' ? 'underline' : ''}>
                  <NavLink href="/#contact" >Contact Us</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* <div className="flex justify-center items-center mt-8">
        <h1 className="text-2xl font-bold text-purple-500">
          This is Example Test for Below Section for Mohammed Khalid
        </h1>
      </div> */}
    </div>
    </>
  );
};

export default Navbar;
