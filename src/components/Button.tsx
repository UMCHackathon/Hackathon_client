import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    text?: string;
    onClick?: () => void;
}
const Button = ({
    text = 'button', 
    onClick = () => {console.log('clicked')}
}: ButtonProps) => {
    return (
        <div>
        <StyledButton onClick={onClick}>{text}</StyledButton>
        </div>
    );
};

export const StyledButton = styled.button`
    background-color: #36A400;
    width: 274px;
    height: 45px;
    color: #FFFFFF;
    border: none;
    border-radius: 12px;
`

export default Button;