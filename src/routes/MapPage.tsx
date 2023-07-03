import styled from 'styled-components';
import Header from '../components/Header';
import KakaoMap from '../components/KakaoMap';
import { Container } from '../components/Container';
import COLOR from '../constants/colors';
import Flower from '../assets/images/flower.png';
import FONT from '../constants/fonts';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Loading from '../components/Loading';

const MapPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header />
      <KakaoMap />
      <ContentContainer>
        <Content style={FONT.SUBTITLE3}>
          <div>여행지에서 미션을 수행하고,</div>
          <div>식물도 키워보세요 !</div>
          <div>추억과 낭만을 동시에 찾아보기 🤍</div>
        </Content>
        <Img src={Flower} />
      </ContentContainer>
      <ButtonBox>
        <Button text='미션 추가하기' onClick={() => navigate('/missionadd')} />
      </ButtonBox>
    </Container>
  );
};

const ButtonBox = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

const ContentContainer = styled.div`
  width: 90%;
  border-radius: 12px;
  border: 1px solid ${COLOR.GREEN1};
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  background-color: ${COLOR.GREEN4};
  margin-top: 20px;
`;

const Content = styled.div`
  padding: 10px 5px;
`;

const Img = styled.img`
  width: 50px;
`;

export default MapPage;
