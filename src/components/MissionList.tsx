import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import COLOR from '../constants/colors';
import FONT from '../constants/fonts';

type ListProps = {
  onClick: () => void;
  text: string;
  image: string;
  checked: boolean;
};

const MissionList: React.FC<ListProps> = ({ onClick, text, image }) => {
  const [checked, setChecked] = useState(false);
  const handleCheck = () => {
    setChecked(!checked);
    onClick();
  };

  return (
    <Container>
      <Image src={image} alt='Mission Image' />
      <Text style={FONT.SUBTITLE3}>{text}</Text>
      <CheckButton checked={checked} onClick={handleCheck}>
        {checked ? <CheckIcon>✔️</CheckIcon> : null}
      </CheckButton>
    </Container>
  );
};

const moveUp = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-5px);
  }
`;

const Container = styled.div`
  width: 95%;
  margin: 1.4rem auto;
  display: flex;
  align-items: center;
  background-color: ${COLOR.GREEN4};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 11px 10px;
  border-radius: 12px;
  cursor: pointer;

  transition: transform 0.3s ease-in-out;

  &:hover {
    animation: ${moveUp} 0.5s forwards;
  }
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  border: 2px solid white; /* 흰색 테두리 추가 */
  background-color: white; /* 흰색 배경 추가 */
`;

const Text = styled.div`
  flex: 1;
`;

const CheckButton = styled.button<{ checked: boolean }>`
  color: white;
  width: 30px;
  height: 30px;
  border: 1px solid ${COLOR.GREEN1};
  border-radius: 50%;
  cursor: pointer;
`;

const CheckIcon = styled.span`
  font-size: 20px;
`;

export default MissionList;
