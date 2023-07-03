import React from 'react';
import { Container } from '../styles/Container';
import MissionList from '../components/MissionList';
import styled from 'styled-components';
import plantImg from '../assets/plant.png';
// import COLOR from '../constants/colors';
import FONT from '../constants/fonts';
import Header from '../components/Header';

const PlantImage = styled.img`
  width: 30%;
  margin: 0 auto;
  border-radius: 50%;
`

const MissionCard = styled.div`
  margin-top: 10vh;
`

const PlantCard = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Text = styled.div`
  margin: 3vh auto 0 auto;
`

const MyPage = () => {
    return (
        <Container>
            <Header />
            <PlantCard>
                <PlantImage src={plantImg} />
                <Text style={FONT.SUBTITLE2}>[ 초록이 ]</Text>
            </PlantCard>
            <MissionCard>
                <MissionList
                    onClick={() =>{
                        console.log('clicked');
                    }}
                    text="지금 하늘 사진 찍기"
                    image= {require('../assets/sun.png')}
                    checked={true}
                />
                <MissionList
                    onClick={() =>{
                        console.log('clicked');
                    }}
                    text="무슨 미션이겡"
                    image= {require('../assets/seed.png')}
                    checked={true}
                />
                <MissionList
                    onClick={() =>{
                        console.log('clicked');
                    }}
                    text="예쁜 꽃 사진 찍기"
                    image= {require('../assets/soil.png')}
                    checked={true}
                />
                <MissionList
                    onClick={() =>{
                        console.log('clicked');
                    }}
                    text="가장 행복한 표정 짓기"
                    image= {require('../assets/water.png')}
                    checked={true}
                />
            </MissionCard>
        </Container>
    );
};

export default MyPage;
