import styled from 'styled-components';
import { Container } from '../components/Container';
import FONT from '../constants/fonts';
import { ReactComponent as PlantProfile } from '../assets/svg/PlantProfile.svg';
import { ReactComponent as Travel1 } from '../assets/svg/Travel1.svg';
import { ReactComponent as XIcon } from '../assets/svg/XIcon.svg';
import { useNavigate } from 'react-router-dom';

const TravelPage = () => {
  const navigate = useNavigate();

  return (
    <Container noPadding>
      <TravelImage src={require('../assets/여수.jpg')} />
      <StyledXIcon onClick={() => navigate(-1)} />

      <TravelBox>
        <TravelTop>
          <TravelLeft>
            <Title style={FONT.SUBTITLE1}>여수여행 좋아요</Title>
            <SubTitle style={FONT.SUBTITLE2}>여수 여행 추천합니다!!</SubTitle>
            <SubTitle style={FONT.SUBTITLE2}>완전 강추</SubTitle>
            <TagBox>
              <Tag># 여수</Tag>
              <Tag># 바다</Tag>
              <Tag># 밤</Tag>
              <Tag># 진달래 꽃</Tag>
              <Tag># 야경</Tag>
            </TagBox>
          </TravelLeft>
          <TravelRight>
            <PlantProfile />
          </TravelRight>
        </TravelTop>
        <TravelBottom>
          <Travel1 />
          <Travel1 />
          <Travel1 />
        </TravelBottom>
      </TravelBox>
    </Container>
  );
};

const StyledXIcon = styled(XIcon)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 999;
`;

const TravelTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TravelBottom = styled.div``;

const Title = styled.div`
  margin: 1rem 0;
`;

const SubTitle = styled.div`
  color: #6a6a6a;
`;

const TravelImage = styled.img`
  width: 100%;
  height: 25rem;
`;

const TravelBox = styled.div`
  border-radius: 30px 30px 0px 0;
  background: white;
  position: absolute;
  bottom: 8rem;
  width: 100%;
  height: 20rem;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
`;

const TravelLeft = styled.div`
  width: 60%;
`;

const TravelRight = styled.div`
  width: 40%;
`;

const TagBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
`;

const Tag = styled.div`
  border-radius: 10px;
  background: #f5f5f5;
  padding: 0.5rem;
  margin: 0.3rem 0.3rem 0.3rem 0;
`;

export default TravelPage;
