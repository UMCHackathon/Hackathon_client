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
import { commentState } from '../states/commentState';
import { addCommentItem } from '../hooks/selector';
import { useRecoilValue, useRecoilState } from 'recoil';
const dummy: MissionProps = {
  id: 0,
  title: '지금 하늘 사진 찍기',
  content: `지금 고개를 들어 하늘을 보세요!
  당신의 하늘은 어떤지 공유해주세요 :)`,
  type: 'soil',
}
const getFormattedDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}.${month}.${day} ${hours}:${minutes}`;
};

const MissionPage = () => {
  const [text, setText] = useState<string>('');
  const [list, setList] = useRecoilState(commentState);
  const newList = useRecoilValue(addCommentItem)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newComment: CommentProps = {
      id: 0, // 임의의 id 설정
      nickName: '임의의 닉네임',
      content: text,
      createdAt: getFormattedDate(new Date()),
    };
    setList([...list, newComment]);
    console.log('?', list)
    setText('');
  };
  

  return (
      <Container>
        <Header />
        <MissionContainer>
          <div style={FONT.HEADING}>MISSION</div>
          <Mission data = {dummy}/>
        </MissionContainer>

        <InputContainer>
          <Input type="text" placeholder="추억을 남겨주세요." value={text} onChange={handleInputChange} />
          <Upload />
          <button onClick={handleSubmit}><Send /></button>
        </InputContainer>

        <MemoryContainer>
          <MemoryTitle style={FONT.HEADING}>모두의 추억</MemoryTitle>
          <CommentList data={list} />
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