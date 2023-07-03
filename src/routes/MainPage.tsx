import styled from 'styled-components';
import Recommend from '../components/main/Recommend';
import { Container } from '../styles/Container';

const MainPage = () => {
  return (
    <Container>
      <MainContainer>
        <Recommend
          src={require('../assets/여수.jpg')}
          title={'여수여행 좋아요'}
          subtitle={'여수 여행 추천합니다!! 완전 강추'}
          tag1={'# 여수'}
          tag2={'# 바다'}
        />
        <Recommend
          src={require('../assets/순천.jpg')}
          title={'순천여행 좋아요'}
          subtitle={'순천 여행 추천합니다!! 완전 강추'}
          tag1={'# 순천'}
          tag2={'# 바다'}
        />
        <Recommend
          src={require('../assets/여수.jpg')}
          title={'여수여행 좋아요'}
          subtitle={'여수 여행 추천합니다!! 완전 강추'}
          tag1={'# 여수'}
          tag2={'# 바다'}
        />
        <Recommend
          src={require('../assets/순천.jpg')}
          title={'순천여행 좋아요'}
          subtitle={'순천 여행 추천합니다!! 완전 강추'}
          tag1={'# 순천'}
          tag2={'# 바다'}
        />
      </MainContainer>
    </Container>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default MainPage;
