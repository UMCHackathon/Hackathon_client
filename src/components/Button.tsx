import React from 'react';
import styled, { keyframes } from 'styled-components';
import COLOR from '../constants/colors';
import FONT from '../constants/fonts';

interface ButtonProps {
  text?: string;
  onClick?: () => void;
}
const Button = ({
  text = 'button',
  onClick = () => {
    console.log('clicked');
  }
}: ButtonProps) => {
  return (
    <div>
      <StyledButton style={FONT.SUBTITLE2} onClick={onClick}>
        {text}
      </StyledButton>
    </div>
  );
};

const hoverAnimation = keyframes`
  from {
    background-color: ${COLOR.GREEN2};
  }
  to {
    background-color: ${COLOR.GREEN1};
  }
`;

export const StyledButton = styled.button`
  background-color: ${COLOR.GREEN2};
  width: 90%;
  height: 50px;
  color: #fff;
  border: none;
  border-radius: 12px;

  &:hover {
    animation: ${hoverAnimation} 0.5s forwards;
  }
`;

export default Button;
