import React from 'react';
import { Container } from '../components/Container';
import MissionList from '../components/MissionList';
import styled, { keyframes } from 'styled-components';
import FONT from '../constants/fonts';
import Header from '../components/Header';
import { useRecoilValue } from 'recoil';
import { nickNameState } from '../states/nicknameState';
import { ReactComponent as PlantProfile } from '../assets/svg/PlantProfile.svg';

const MyMission = () => {
  const nickName = useRecoilValue(nickNameState);

  return (
    <Container>
      <Header />
      <PlantCard>
        <PlantProfile />
      </PlantCard>
      <TextBox>
        <Text style={FONT.SUBTITLE2}>[ {nickName} ]</Text>
      </TextBox>
      <MissionCard style={FONT.SUBTITLE2}>
        <MissionList
          onClick={() => {
            console.log('clicked');
          }}
          text='지금 하늘 사진 찍기'
          image={require('../assets/sun.png')}
          checked={true}
        />
        <MissionList
          onClick={() => {
            console.log('clicked');
          }}
          text='무슨 미션이겡'
          image={require('../assets/seed.png')}
          checked={true}
        />
        <MissionList
          onClick={() => {
            console.log('clicked');
          }}
          text='예쁜 꽃 사진 찍기'
          image={require('../assets/soil.png')}
          checked={true}
        />
        <MissionList
          onClick={() => {
            console.log('clicked');
          }}
          text='가장 행복한 표정 짓기'
          image={require('../assets/water.png')}
          checked={true}
        />
      </MissionCard>
    </Container>
  );
};

const TextBox = styled.div`
  display: flex;
  justify-content: center;
`;

const MissionCard = styled.div`
  margin: 2rem 1.5rem;
`;

const moveUp = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-5px);
  }
`;

const PlantCard = styled.div`
  width: 100%;
  height: 12rem;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: ${moveUp} 1s infinite alternate;
`;

const Text = styled.div`
  margin: 3vh auto 0 auto;
`;

export default MyMission;
