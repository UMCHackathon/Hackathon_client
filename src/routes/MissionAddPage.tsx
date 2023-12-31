import Header from '../components/Header';
import FONT from '../constants/fonts';
import { Container } from '../components/Container';
import styled from 'styled-components';
import { ReactComponent as Location } from '../assets/svg/Location.svg';
import COLOR from '../constants/colors';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
const MissionAddPage = () => {
  return (
    <Container>
      <Header />
      <AddContainer>
        <div style={FONT.HEADING}>ADD MISSION</div>
        <LocationBox>
          <Location />
          <div style={FONT.SUBTITLE3}>장소 추가</div>
        </LocationBox>
        <InputContainer>
          <TitleInput
            style={FONT.SUBTITLE3}
            type='text'
            placeholder='제목을 입력해주세요.'
          />
          <ContentInput
            style={FONT.SUBTITLE3}
            placeholder='내용을 입력해주세요.'
          />
        </InputContainer>
      </AddContainer>
      <ButtonBox>
        <Link to='/map'>
          <Button text='미션 추가하기' />
        </Link>
      </ButtonBox>
    </Container>
  );
};

export default MissionAddPage;

const ButtonBox = styled.div`
  text-align: center;
`;

const AddContainer = styled.div`
  margin: 20px 25px 0 25px;
`;

const LocationBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
`;
const InputContainer = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid ${COLOR.GREEN1};
  border-radius: 12px;
  margin-top: 20px;
  background-color: ${COLOR.GREEN4};
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;
const TitleInput = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: 1px solid ${COLOR.GREEN1};
  padding: 20px;
  background-color: transparent;
`;
const ContentInput = styled.textarea`
  width: 100%;
  height: 350px;
  border: none;
  padding: 20px;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;
