import styled from 'styled-components';
import Header from '../components/Header';
import KakaoMap from '../components/KakaoMap';
import { Container } from '../styles/Container';
import COLOR from '../constants/colors';
import Flower from '../assets/images/flower.png';

const MapPage = () => {
  return (
    <Container>
      <Header />
      <KakaoMap />
      <ContentContainer>
        <Content>
          <div>여행지에서 미션을 수행하고,</div>
          <div>식물도 키워보세요 !</div>
          <div>추억과 낭만을 동시에 찾아보기 🤍</div>
        </Content>
        <Img src={Flower} />
      </ContentContainer>
      <AddMissionButton>
        <Text>미션 추가하기</Text>
      </AddMissionButton>
    </Container>
  );
};

const ContentContainer = styled.div`
  width: 90%;
  height: 10vh;
  border-radius: 12px;
  border: 1px solid ${COLOR.GREEN1};
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  background-color: ${COLOR.GREEN4};
  margin-top: 20px;
`;

const Content = styled.div``;

const Img = styled.img`
  width: 50px;
`;

const AddMissionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #36a400;
  width: 70%;
  height: 8%;
  margin: 0 auto;
  border-radius: 12px;
  border: 1px solid ${COLOR.GREEN1};
  margin-top: 20px;
`;

const Text = styled.div`
  color: #fff;
  font-size: 24px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 700;
  line-height: 37px;
`;
export default MapPage;
