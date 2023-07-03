import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import COLOR from '../constants/colors';
import { ReactComponent as Logo } from '../assets/svg/Logo.svg';
import { ReactComponent as ArrowLeft } from '../assets/svg/ArrowLeft.svg';
type MenuContainerProps = {
  onClose: () => void;
};

const MenuContainer = ({ onClose }: MenuContainerProps) => {
  return (
    <Container>
      <MenuLogo>
        <Logo width={100} />
        <CloseButton onClick={onClose}>
          <ArrowLeft />
        </CloseButton>
      </MenuLogo>

      <MenuItems>
        <Link to='/map'>
          <MenuItem>Map</MenuItem>
        </Link>
        <Link to='/missionadd'>
          <MenuItem>Mission +</MenuItem>
        </Link>
        <MenuBar />
        <Link to='/mymission'>
          <MenuItem>My Mission</MenuItem>
        </Link>
        <Link to='/missionlist'>
          <MenuItem>My Plant</MenuItem>
        </Link>
      </MenuItems>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  padding-left: 10px;
  top: 0;
  left: 0;
  width: 200px;
  height: 100vh;
  background-color: rgba(213, 225, 206, 0.95);
  z-index: 999;
`;

const CloseButton = styled.button`
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  margin-top: 10px;
`;

const MenuItems = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 10px;
`;

const MenuItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  color: ${COLOR.GREEN1};
  &:last-child {
    border-bottom: none;
  }
`;
const MenuBar = styled.div`
  width: 95%;
  height: 1px;
  background-color: ${COLOR.GREEN1};
  margin-bottom: 10px;
  margin-top: 10px;
`;
const MenuLogo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
  align-items: center;
`;

export default MenuContainer;
