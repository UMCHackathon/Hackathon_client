import React from 'react';
import styled from 'styled-components';
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

export const StyledButton = styled.button`
  background-color: ${COLOR.GREEN2};
  width: 90%;
  height: 45px;
  color: #fff;
  border: none;
  border-radius: 12px;
`;

export default Button;
