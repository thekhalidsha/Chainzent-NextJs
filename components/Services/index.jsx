import service from "@/pages/api/services";
import { ClearFix, NavLink } from "@/styles/globalStyles";
import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';



const Services = () => {
    const filteredData = service
    return ( 
        <div className="body-bg bg-gray-700 banner-bg bg-mask mask_bg pb-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:h-full ">
            <div className="banner-container banner-left">
              <div className="flex justify-center">
                <div className="lg:p-20 lg:pb-0 max-md:p-0 max-md:pr-0 pt-3 rounded-lg left-div text-black">
                  <h1 className="p-6 pb-0 mb-0 pt-0 pl-2 lg:text-4xl font-medium hex-text" style={{fontSize: "110%"}} >What we Do?</h1>
                  <h1 className={`lg:text-4xl max-md:text-2xl font-semibold p-2`}>Our Services<br/></h1>
                  <p data-aos="fade-up" className="break-words p-5 font-light " >From blockchain to web and app development, SEO, UI/UX design, hosting, and digital marketing, our services in Trivandrum, Kerala are designed to transform your business. Ignite your growth today!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-container banner-left">
              <div className="flex justify-center">
                <div className="lg:p-20 lg:pt-0 max-md:p-0 max-md:pr-0 pt-3 rounded-lg left-div text-black lg:pb-0">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 ">
                        {filteredData.map((item) => (
                            <Tilt>
                              <div data-aos="fade-up" className="item-center align-center justify-center rounded-2xl max-w-fit" key={item.id}>
                                  <div data-aos-duration="500" class="service_card hover:bg-gray-300 relative flex flex-col min-w-0 break-words bg-white text-black shadow-soft-xl rounded-2xl bg-clip-border">
                                  {/* <img className="hover:bg-gray-500 hover:grayscale pf_image" src="/paychei_website.png" /> */}
                                  <div className="grid grid-cols-1 md:grid-cols-2 p-3 rounded-2xl" style={{width: "20px !important"}} >
                                      <div className=""><i className={`text-left pb-2 m-0 w-0 table-cell text-4xl  ${item.faIcon}`}></i></div>
                                      <div className="col-span-2 w-full">
                                      <h1 className={`text-left align-middle font-bold hex-text`}>{item.title}</h1>
                                      <p className="text-left w-full align-middle text-sm break-words p-5">{item.description}</p>
                                      </div>
                                  </div>
                                  </div>
                              </div>
                            </Tilt>
                        ))}
                    </div>
                </div>
              </div>
            </div>
            <div className="lg:p-20 pr-0 lg:py-4 max-md:p-0 max-md:pr-0 max-md:py-4 pt-3 rounded-lg lg:mx-20 mx-5 mt-2 text-black border-2 border-gray-500">
                  {/* <h1 className="p-6 pb-0 mb-0 pt-0 pl-2 lg:text-4xl text-center font-medium" style={{fontSize: "110%"}} >Our Recent Works</h1> */}
                  <h1 className={`lg:text-4xl max-md:text-2xl text-center font-semibold p-2 mb-3`}>Do you want Something Different?<br/></h1>
                  <div data-aos="" className="item-center align-center justify-center text-center rounded-2xl max-w-full">
                  <button class="text-center service_btn bg-transparent text-black font-bold py-2 px-4 rounded">
                    Contact Us &nbsp;&nbsp;<i class="fa-regular fa-envelope"></i>
                  </button>
                  </div>
            </div>
        </div>
     );
}
 
export default Services;