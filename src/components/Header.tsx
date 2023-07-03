import React, {useState} from 'react';
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
            <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu />
            </div>
            <Link to="/main">
                <Logo />
            </Link>
            <Link to="/">
                <Smile />
            </Link>
            {isMenuOpen && <MenuContainer onClose={handleCloseMenu} />}
        </TopBox>
    );
};

export default Header;

const TopBox = styled.div`
    padding: 20px;
    width: 30rem;
    align-items: center;
    height: 80px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 50%; 
    transform: translateX(-50%); 
    z-index: 999;
    background-color: white;
`;
