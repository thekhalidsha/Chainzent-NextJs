import { NavLink } from "@/styles/globalStyles";

const Footer = () => {
    return ( 
        <footer className="prime-color text-white py-4 text-center">
            <p>Designed by <NavLink href={`https://chainzent.com`}>Chainzent</NavLink> &copy; 2023</p>
        </footer>
     );
}
 
export default Footer;