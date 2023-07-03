import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type MenuContainerProps = {
    onClose: () => void;
  };


const MenuContainer = ({ onClose }:MenuContainerProps) => {
  return (
    <Container>
        <CloseButton onClick={onClose}>x</CloseButton>
        <MenuItems>
            <Link to="/main">
                <MenuItem>메인</MenuItem>
            </Link>
            <Link to="/main">
                <MenuItem>메인</MenuItem>
            </Link>
            <Link to="/main">
                <MenuItem>메인</MenuItem>
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
  background-color: rgba(213, 225, 206, 0.8);
  z-index: 999;
`;

const CloseButton = styled.button`
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: 20px;
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

  &:last-child {
    border-bottom: none;
  }
`;

export default MenuContainer;
