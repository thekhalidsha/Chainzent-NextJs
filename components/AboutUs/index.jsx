import { NavLink } from "@/styles/globalStyles";


const About = () => {
    return ( 
        <div className="banner-bg bg-mask mask_bg">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:h-full ">
          <div className="banner-container banner-right">
              <div className="flex justify-center align-middle">
                <div className="rounded-lg right-div p-2">
                  <div className="flex justify-center">
                  <div className=" lg:mt-0 lg:col-span-5 lg:flex md:m-9"  style={{margin: "0"}}>
                    <img data-aos="fade-up"  class="align-middle items-center justify-center object-contain md:object-scale-down md:m-9 sm:m-9 grayscale-0 hover:grayscale" src="/about_image.png" alt="chainzent_logo" width="375" height="300" />
                </div> 
                  </div>
                </div>
                <div className=""></div>
              </div>
            </div>
            <div className="banner-container banner-left">
              <div className="flex justify-center">
                <div className="rounded-lg left-div">
                  <h1 className="p-6 pb-0 mb-0 pt-0 pl-2 text-4xl font-bold hex-text" style={{fontSize: "110%"}} >About Us</h1>
                  <h1 className={`text-xl font-bold p-2`}>Looking for <span className="hex-text font-extrabold text-2xl">Software Solutions?</span><br/>Choose <span className="hex-text font-extrabold text-4xl">Chainzent</span></h1>
                  <h2 className="font-semibold ml-5 mb-2"> - Based on Kerala, India</h2>
                    <p data-aos="fade-up" className="break-words p-5 text-gray-500" >Welcome to our IT company in Trivandrum, Kerala! We provide innovative solutions including blockchain development, web 2.0 development, app development, SEO optimization, UI/UX designing, hosting, and digital marketing services. Our team of experts is dedicated to delivering high-quality solutions that exceed your expectations.<br/><br />
                    We understand the importance of effective digital marketing for business success. That's why we offer comprehensive digital marketing services, including SEO optimization, to help businesses increase their online visibility and reach their target audience.<br /><br />
                    Let us help you grow your business! Contact us today to learn more about our IT and digital marketing solutions for businesses in Trivandrum and across Kerala.</p>
                </div>
                <div className=""></div>
                {/* <div  className={`left-1/4 transform -translate-x-20    w-50 h-20 border-20 border rounded-lg hex-color`} style={{minWidth: "60px"}}></div> */}
              </div>
            </div>
          </div>
        </div>
     );
}
 
export default About;