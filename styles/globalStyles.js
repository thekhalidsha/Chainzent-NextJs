import Link from 'next/link';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const NavLink = styled(Link)`
  color: ${(props) => props.theme.text};
  &:hover {
    color: ${(props) => props.theme.secondary};
  }
`;
export const ClearFix = ({ Hpx }) => {
  if(!Hpx || Hpx == null){
    Hpx = "20";
  }
  return(
    
    <div style={{width: "100%", height: Hpx + "px"}}></div>
  )
} 

export const LineBreak = () => {
  return ( 
    <div className='linebreak'></div>
   );
}
 
export default LineBreak;