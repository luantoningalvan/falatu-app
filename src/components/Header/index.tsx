import React from 'react';
import Logo from '../../../assets/static/falatu-logo.svg';
import { Container } from './styles';

const Header: React.FC = ({ children }) => (
  <Container>
    <Logo width={100} height={44} />
    {children}
  </Container>
);

export default Header;
