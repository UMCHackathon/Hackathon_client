import Header from '../components/Header';
import { Container } from '../styles/Container';
import styled from 'styled-components';
import FONT from '../constants/fonts';
import COLOR from '../constants/colors';
import { MissionProps } from '../types/mission';
import {ReactComponent as Send} from '../assets/svg/Send.svg';
import {ReactComponent as Upload} from '../assets/svg/Upload.svg';
import { useState } from 'react';
import Mission from '../components/mission/mission';
import CommentList from '../components/mission/comment';
import { CommentProps } from '../types/comment';
const dummy: MissionProps = {
  id: 0,
  title: '지금 하늘 사진 찍기',
  content: `지금 고개를 들어 하늘을 보세요!
  당신의 하늘은 어떤지 공유해주세요 :)`,
  type: 'soil',
}
const dummyComments: CommentProps[] = [
  {
    id: 0,
    nickName: '클로버',
    content: '지금 내 하늘엔 보름달이 떠있어. 여행이랑 너무 잘 어울리는 하늘이야',
    createdAt: '2021.04.18 20:19',
  },
  {
    id: 1,
    nickName: '규',
    content: '오늘은 하늘이 너무 맑아서 구름이 하나 없어요ㅠㅠ',
    createdAt: '2021.05.27 13:39',
  },
];
const MissionPage = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('입력된 값:', inputValue);
    setInputValue('');
  };

  return (
      <Container>
        <Header />
        <MissionContainer>
          <div style={FONT.HEADING}>MISSION</div>
          <Mission data = {dummy}/>
        </MissionContainer>

        <InputContainer>
          <Input type="text" placeholder="추억을 남겨주세요." value={inputValue} onChange={handleInputChange}/>
          <Upload />
          <button onClick={handleSubmit}><Send /></button>
        </InputContainer>

        <MemoryContainer>
          <MemoryTitle style={FONT.HEADING}>모두의 추억</MemoryTitle>
          <CommentList data={dummyComments} />
        </MemoryContainer>
      </Container>
  );
};

export default MissionPage;

const MissionContainer = styled.div`
    width: 100%;
    padding: 20px;
`
const InputContainer = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Input = styled.input`
    width: 80%;
    height: 31px;
    border: 1px solid ${COLOR.GREEN1};
    border-radius: 12px;
    padding: 20px;
  `
const MemoryContainer = styled.div`
    width: 100%;
    padding: 20px;
`
const MemoryTitle = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid ${COLOR.GREEN1};
`