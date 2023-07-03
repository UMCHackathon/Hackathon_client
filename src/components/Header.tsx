import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Menu } from '../assets/svg/Menu.svg';
import { ReactComponent as Logo } from '../assets/svg/Logo.svg';
import { ReactComponent as Smile } from '../assets/svg/Smile.svg';
import { Link } from 'react-router-dom';
import MenuContainer from './Menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <TopBox>
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu />
      </div>
      <Link to='/main'>
        <Logo />
      </Link>
      <Link to='/mymission'>
        <Smile />
      </Link>
      {isMenuOpen && <MenuContainer onClose={handleCloseMenu} />}
    </TopBox>
  );
};

export default Header;

const TopBox = styled.div`
  padding: 20px;
  width: 100%;
  align-items: center;
  height: 100px;
  display: flex;
  justify-content: space-between;
`;
const MenuBox = styled.div``;
