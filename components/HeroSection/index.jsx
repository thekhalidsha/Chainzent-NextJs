import { NavLink } from "@/styles/globalStyles";
import TypingEffect from "../TypingEffect";

const HeroSection = () => {
    return ( 
        <div className={`basic-color`} style={{paddingTop: "50px"}}>
            {/* backgroundColor: "#3c3c3c" */}
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <p className={`font-semibold text-lg mb-3`} >Hello, We are</p>
                    {/* <p className={`position-absolute inline-flex stroked-text font-semibold text-lg text-center `} >Chainzent</p> */}
                    <h1 class="[text-shadow:_0_3px_15px_rgb(0_0_0_/_60%)] max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">Chainzent</h1>
                    <TypingEffect styler="max-w-2xl mb-6 font-light text-black-500 lg:mb-8 md:text-lg lg:text-xl " text="We believe chances are not coincidence, they are made!"  />
                    <NavLink href="#" className="prime-color inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center border border-gray-300 rounded-lg hover:border-gray-500 text-white bg-primary-700 hover:bg-primary-800 hover:text-black focus:ring-4 focus:ring-primary-300 ">
                        Contact Us <i class="w-5 h-5 ml-2 -mr-1 fa-regular fa-paper-plane"></i>
                        {/* <svg class="w-5 h-5 ml-2 -mr-1 stroke-cyan-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                    </NavLink>
                    <NavLink href="#about" className="ml-9"><img className="object-left inline-flex ml-0 pl-0 h-auto w-6 contrast-200 grayscale" src="/scroll_hero.gif" alt="" /></NavLink>
                </div>
                <div class="lg:mt-0 lg:col-span-5 lg:flex md:m-9 md:p-0"  style={{margin: "0"}}>
                    <img class="object-contain md:object-scale-down md:m-9 sm:m-9" src="/chainzent_logo_banner.png" alt="chainzent_logo" />
                </div>                
            </div>
        </div>
     );
}
 
export default HeroSection;