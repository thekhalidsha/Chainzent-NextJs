import service from "@/pages/api/services";
import team from "@/pages/api/team";
import { ClearFix, NavLink } from "@/styles/globalStyles";
import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';


const Team = () => {
    const filteredData = team
    return ( 
        <div className="body-bg py-10 bg-gray-700 banner-bg bg-mask mask_bg">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:h-full ">
            <div className="banner-container banner-left">
              <div className="flex justify-center">
                <div className="lg:p-20 lg:pb-0 lg:pt-3 max-md:p-0 max-md:pr-0 pt-3 rounded-lg left-div text-black text">
                  <h1 className="p-6 pb-0 mb-0 pt-0 pl-2 lg:text-4xl font-medium hex-text" style={{fontSize: "110%"}} >Know More</h1>
                  <h1 className={`lg:text-4xl max-md:text-2xl font-semibold p-2`}>Our Team<br/></h1>
                  <p data-aos="fade-up" className="break-words p-5 font-light " >Our team is a talented blend of creativity and expertise, dedicated to delivering innovative solutions to meet your business needs.</p>
                </div>
              </div>
            </div>
          </div>
          <section class="px-0">
                <div class="container px-6 py-2 mx-auto">
                    <div class="grid grid-cols-1 gap-4 mt-2 xl:mt-0 md:grid-cols-2 xl:grid-cols-3">
                    {filteredData.map((item) => (
                        <div data-aos="fade-up" class="px-12 py-8 transition-colors duration-300 transform border border-black cursor-pointer rounded-xl hover:border-transparent group team_card dark:border-gray-700 dark:hover:border-transparent">
                            <div class="flex flex-col sm:-mx-4 sm:flex-row">
                                <img class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src={`${item.image != null? item.image : '/team/avatar.png'}`} alt={item.name} />
                                <div class="mt-4 sm:mx-4 sm:mt-0">
                                    <h1 class="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">{item.name}</h1>
                                    <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{item.title}</p>
                                </div>
                            </div>
                            <p class="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{item.note}</p>
                            <div class="flex mt-4 -mx-2 text-xl space-x-3">
                                <NavLink href={'https://instagram.com/' + item.instagram} target="_blank"><i class="fa-brands fa-instagram"></i></NavLink>
                                <NavLink href={'https://github.com/' + item.github} target="_blank"><i class="fa-brands fa-github"></i></NavLink>

                            </div>
                        </div>
                    ))}
                    {/* <div class="px-12 py-8 col-span-2 transition-colors duration-300 transform border border-black cursor-pointer rounded-xl hover:border-transparent group team_card dark:border-gray-700 dark:hover:border-transparent">
                            <div class="flex flex-col sm:-mx-4 sm:flex-row">
                                <img class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                                <div class="mt-4 sm:mx-4 sm:mt-0">
                                    <h1 class="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Test</h1>
                                    <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Test</p>
                                </div>
                            </div>
                            <p class="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Test</p>
                            <div class="flex mt-4 -mx-2">
                                <i class="fa-solid fa-cube"></i>
                                <i class="fa-solid fa-cube"></i>

                            </div>
                    </div> */}

                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default Team;