import data from "@/pages/api/portfolio";
import { ClearFix, NavLink } from "@/styles/globalStyles";
import React, { useState } from 'react';



const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const handleCategoryClick = (event, category) => {
      event.preventDefault();
      setSelectedCategory(category);
    };
    const filteredData = selectedCategory
      ? data.filter((item) => item.category === selectedCategory)
      : data;
    return ( 
        <div className="hex-color bg-mask mask_bg">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:h-full ">
            <div className="banner-container banner-left">
              <div className="flex justify-center">
                <div className="lg:p-20 max-md:p-0 max-md:pr-0 pt-3 rounded-lg left-div text-white">
                  <h1 className="p-6 pb-0 mb-0 pt-0 pl-2 lg:text-4xl font-medium" style={{fontSize: "110%"}} >Our Skills</h1>
                  <h1 className={`lg:text-4xl max-md:text-2xl font-semibold p-2`}>If you can dream it!<br/></h1>
                  <h1 data-aos="fade-right" data-aos-delay="600" className={`lg:text-4xl max-md:text-2xl font-semibold p-2`}>We can Build It! <br/></h1>
                  <p data-aos="fade-up" className="break-words p-5 font-light" >We pride ourselves on our expertise in software development, web 2.0 and 3.0 development, UI/UX design, app development, digital marketing, and hosting. Our skills drive innovation and deliver results.</p>
                </div>
                <div className=""></div>
                {/* <div  className={`left-1/4 transform -translate-x-20    w-50 h-20 border-20 border rounded-lg hex-color`} style={{minWidth: "60px"}}></div> */}
              </div>
            </div>
            <ClearFix></ClearFix>
          </div>
          <div className="banner-container banner-left">
              <div className="flex justify-center">
                <div className="lg:p-20 lg:pt-0 max-md:p-0 max-md:pr-0 pt-3 rounded-lg left-div text-white">
                  <h1 className="p-6 pb-0 mb-0 pt-0 pl-2 lg:text-4xl text-center font-medium" style={{fontSize: "110%"}} >Our Recent Works</h1>
                  <h1 className={`lg:text-4xl max-md:text-2xl text-center font-semibold p-2 mb-3`}>Our Portfolio<br/></h1>
                  <ul className="list-none items-center justify-center flex space-x-6 space-y-0 z-50 pb-3">
                    <li className={`z-10 text-white`} ><NavLink href="/" onClick={(event) => handleCategoryClick(event, null)} >All</NavLink></li>
                    <li className={`z-10 text-white`}><NavLink href="/" onClick={(event) => handleCategoryClick(event, 'mobile')} >Mobile</NavLink></li>
                    <li className={`z-10 text-white`}><NavLink href="/" onClick={(event) => handleCategoryClick(event, 'website')} >Website</NavLink></li>
                  </ul>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3 ">
                    {filteredData.map((item) => (
                      <div data-aos="fade-up" className="item-center align-center justify-center rounded-2xl pf_img" key={item.id} style={{ backgroundImage: `url(${item.image})` }}>
                        <div data-aos-duration="500" class="hover:bg-gray-500 pf_card relative flex flex-col min-w-0 p-4 break-words bg-white text-black shadow-soft-xl rounded-2xl bg-clip-border h-80">
                          {/* <img className="hover:bg-gray-500 hover:grayscale pf_image" src="/paychei_website.png" /> */}
                          <div className="pf_item w-full h-full py-20	 align-middle table-cell" >
                            <i className={`text-center align-middle ${item.faIcon}`}></i>
                            <h1 className={`text-center align-middle font-semibold`}>{item.title}</h1>
                            <p className="text-center align-middle break-words text-sm">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div>

                  </div>
                  {/* <h1 data-aos="fade-right" data-aos-delay="600" className={`lg:text-4xl max-md:text-2xl font-semibold p-2`}>We can Build It! <br/></h1> */}
                  {/* <p data-aos="fade-up" className="break-words p-5 font-light" >We pride ourselves on our expertise in software development, web 2.0 and 3.0 development, UI/UX design, app development, digital marketing, and hosting. Our skills drive innovation and deliver results.</p> */}
                </div>
                <div className=""></div>
                {/* <div  className={`left-1/4 transform -translate-x-20    w-50 h-20 border-20 border rounded-lg hex-color`} style={{minWidth: "60px"}}></div> */}
              </div>
            </div>
        </div>
     );
}
 
export default Portfolio;