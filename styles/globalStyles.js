import Link from 'next/link';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const NavLink = styled(Link)`
  color: ${(props) => props.theme.text};
  &:hover {
    color: ${(props) => props.theme.secondary};
  }
`;