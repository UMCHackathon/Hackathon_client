import React from 'react';
import { Container } from '../styles/Container';
import MissionList from '../components/MissionList';
import styled from 'styled-components';
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
        <Text style={FONT.SUBTITLE2}>[ {nickName} ]</Text>
      </PlantCard>
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

const MissionCard = styled.div`
  margin: 2rem 1.5rem;
`;

const PlantCard = styled.div`
  width: 100%;
  height: 15rem;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  margin: 3vh auto 0 auto;
`;

export default MyMission;
