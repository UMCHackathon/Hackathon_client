import styled, { keyframes } from 'styled-components';
import Recommend from '../components/main/Recommend';
import { Container } from '../styles/Container';
import Header from '../components/Header';
import { ReactComponent as MainPost } from '../assets/svg/MainPost.svg';
import { ReactComponent as MainMap } from '../assets/svg/MainMap.svg';
import COLOR from '../constants/colors';
import FONT from '../constants/fonts';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <MainPostBox onClick={() => navigate('/map')}>
        <MainPost />
        <AnimatedMainMap />
      </MainPostBox>
      <MainTextBox style={FONT.SUBTITLE3}>
        <MainText>쪽지에 적힌 미션을 수행하고</MainText>
        <MainText>여행을 추억할 수 있는 내 식물도 키우자</MainText>
      </MainTextBox>
      <MainContainer>
        <Recommend
          src={require('../assets/여수.jpg')}
          title={'여수여행 좋아요'}
          subtitle={'여수 여행 추천합니다!! 완전 강추'}
          tag1={'# 여수'}
          tag2={'# 여행'}
        />
        <Recommend
          src={require('../assets/순천.jpg')}
          title={'순천여행 갑시다!'}
          subtitle={'순천 여행 추천합니다!! 완전 강추'}
          tag1={'# 순천'}
          tag2={'# 바다'}
          tag3={'# 플레이그라운드'}
        />
        <Recommend
          src={require('../assets/경복궁.jpg')}
          title={'경복궁 여행!!!'}
          subtitle={'경복궁 여행 추천합니다!! 완전 강추'}
          tag1={'# 경복궁'}
          tag2={'# 호수'}
          tag3={'# 서울'}
        />
        <Recommend
          src={require('../assets/소수서원.jpg')}
          title={'영주 여행 같이 가요'}
          subtitle={'소수서원 여행 추천합니다!! 완전 강추'}
          tag1={'# 소수서원'}
          tag2={'# 영주 여행'}
        />
      </MainContainer>
    </Container>
  );
};

// Animation keyframes
const slideAnimation = keyframes`
    0% { transform: translateY(5px); }
    50% { transform: translateY(-5px); }
    100% { transform: translateY(5px); }
    easing: ease-in-out;
  `;

// Styled component for animated MainMap
const AnimatedMainMap = styled(MainMap)`
  animation: ${slideAnimation} 2s infinite;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${COLOR.GREEN4};
  padding: 2rem 0;
`;

const MainTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const MainText = styled.div``;

const MainPostBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  cursor: pointer;
`;

export default MainPage;
