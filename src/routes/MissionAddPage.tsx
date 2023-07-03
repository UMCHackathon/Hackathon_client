import Header from '../components/Header';
import FONT from '../constants/fonts';
import { Container } from '../styles/Container';
import styled from 'styled-components';
import {ReactComponent as Location} from '../assets/svg/Location.svg';
import COLOR from '../constants/colors';
import Button from '../components/Button';
const MissionAddPage = () => {
  return (
    <Container>
      <Header />
      <AddContainer>
        <div style={FONT.HEADING}>ADD MISSION</div>
        <LocationBox>
          <Location />
          <div style={FONT.SUBTITLE4}>장소 추가</div>
        </LocationBox>
        <InputContainer>
          <TitleInput type="text" placeholder="제목을 입력해주세요." />
          <ContentInput placeholder="내용을 입력해주세요." />
        </InputContainer>
        <Button text="미션 추가하기" />
      </AddContainer>
    </Container>
  );
};

export default MissionAddPage;

const AddContainer = styled.div`
  padding: 20px;
`
const LocationBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
`
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
`
const TitleInput = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: 1px solid ${COLOR.GREEN1};
  padding: 20px;
  background-color: transparent;
`
const ContentInput = styled.textarea`
  width: 100%;
  height: 350px;
  border: none;
  padding: 20px;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`